// Whole-website translation using Google's website translator.
// Our own button + menu drive Google's hidden widget, so the page (including
// recipes added later) is translated in place.

// [Google code, native name, English name]
const SITE_LANGS = [
  ["en", "English", "English"],
  ["te", "తెలుగు", "Telugu"], ["hi", "हिन्दी", "Hindi"], ["ta", "தமிழ்", "Tamil"], ["kn", "ಕನ್ನಡ", "Kannada"],
  ["ml", "മലയാളം", "Malayalam"], ["mr", "मराठी", "Marathi"], ["gu", "ગુજરાતી", "Gujarati"], ["bn", "বাংলা", "Bengali"],
  ["pa", "ਪੰਜਾਬੀ", "Punjabi"], ["or", "ଓଡ଼ିଆ", "Odia"], ["ur", "اردو", "Urdu"], ["ne", "नेपाली", "Nepali"],
  ["si", "සිංහල", "Sinhala"], ["es", "Español", "Spanish"], ["fr", "Français", "French"], ["de", "Deutsch", "German"],
  ["it", "Italiano", "Italian"], ["pt", "Português", "Portuguese"], ["zh-CN", "简体中文", "Chinese (Simplified)"],
  ["zh-TW", "繁體中文", "Chinese (Traditional)"], ["ja", "日本語", "Japanese"], ["ko", "한국어", "Korean"],
  ["ar", "العربية", "Arabic"], ["fa", "فارسی", "Persian"], ["iw", "עברית", "Hebrew"], ["ru", "Русский", "Russian"],
  ["uk", "Українська", "Ukrainian"], ["pl", "Polski", "Polish"], ["tr", "Türkçe", "Turkish"], ["vi", "Tiếng Việt", "Vietnamese"],
  ["th", "ไทย", "Thai"], ["id", "Bahasa Indonesia", "Indonesian"], ["ms", "Bahasa Melayu", "Malay"],
  ["tl", "Filipino", "Filipino"], ["nl", "Nederlands", "Dutch"], ["sv", "Svenska", "Swedish"], ["el", "Ελληνικά", "Greek"],
  ["sw", "Kiswahili", "Swahili"], ["am", "አማርኛ", "Amharic"]
];
const RTL_LANGS = new Set(["ar", "fa", "iw", "ur"]);

const trEls = { btn: $("translate-btn"), menu: $("translate-menu"), label: $("translate-label"), toast: $("translate-toast") };
let siteLang = store.get("fridgechef.siteLang", "en");
if (!SITE_LANGS.some(l => l[0] === siteLang)) siteLang = "en";

function langInfo(code) { return SITE_LANGS.find(l => l[0] === code) || SITE_LANGS[0]; }

function renderTranslateMenu() {
  trEls.label.textContent = siteLang === "en" ? "Translate" : langInfo(siteLang)[1];
  trEls.menu.innerHTML = `
    <div class="tm-title">Translate this website</div>
    <div class="tm-grid">
      ${SITE_LANGS.map(([code, native, english]) => `
        <button class="tm-lang ${code === siteLang ? "on" : ""}" data-site-lang="${code}" lang="${code}">
          <span class="tm-native">${esc(native)}</span>${native !== english ? `<span class="tm-en">${esc(english)}</span>` : `<span class="tm-en">original</span>`}
        </button>`).join("")}
    </div>
    <p class="tm-note">Translated automatically by Google Translate.</p>`;
}

function toggleMenu(open) {
  const show = open ?? trEls.menu.hidden;
  trEls.menu.hidden = !show;
  trEls.btn.setAttribute("aria-expanded", show);
}

function toast(msg, ms) {
  trEls.toast.textContent = msg;
  trEls.toast.hidden = !msg;
  clearTimeout(toast.t);
  if (ms) toast.t = setTimeout(() => { trEls.toast.hidden = true; }, ms);
}

// ---------- Google widget ----------
let googleReady = null;
function loadGoogle() {
  if (googleReady) return googleReady;
  googleReady = new Promise((resolve, reject) => {
    window.googleTranslateElementInit = () => {
      try {
        new google.translate.TranslateElement({
          pageLanguage: "en",
          includedLanguages: SITE_LANGS.map(l => l[0]).filter(c => c !== "en").join(","),
          autoDisplay: false
        }, "google_translate_element");
        resolve();
      } catch (e) { reject(e); }
    };
    const s = document.createElement("script");
    s.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    s.onerror = () => { googleReady = null; reject(new Error("load failed")); };
    document.head.appendChild(s);
  });
  return googleReady;
}

const waitFor = (fn, ms = 10000) => new Promise((resolve, reject) => {
  const start = Date.now();
  (function tick() {
    const v = fn();
    if (v) return resolve(v);
    if (Date.now() - start > ms) return reject(new Error("timeout"));
    setTimeout(tick, 150);
  })();
});

function setCookie(value) {
  const exp = value ? "" : "; expires=Thu, 01 Jan 1970 00:00:00 GMT";
  const v = value || "";
  document.cookie = `googtrans=${v}; path=/${exp}`;
  if (location.hostname) document.cookie = `googtrans=${v}; path=/; domain=${location.hostname}${exp}`;
}

// Also switch the mic/typing language to match, when we support it.
function syncVoiceLanguage(code) {
  if (typeof VOICE_LANGS === "undefined") return;
  const short = code.split("-")[0].replace("iw", "he").replace("tl", "fil");
  const match = VOICE_LANGS.find(l => l.tr === short || l.mm === code);
  if (!match) return;
  voiceLang = match;
  voiceEls.lang.value = match.speech;
  store.set("fridgechef.voiceLang", match.speech);
  updatePlaceholder();
}

async function setSiteLanguage(code, { initial = false } = {}) {
  toggleMenu(false);
  const prev = siteLang;
  siteLang = code;
  store.set("fridgechef.siteLang", code);
  renderTranslateMenu();
  if (!initial) syncVoiceLanguage(code);

  if (code === "en") {
    document.documentElement.dir = "ltr";
    setCookie("");
    // Google's widget can't fully undo itself, so reload to show the original text.
    if (prev !== "en" || document.documentElement.className.includes("translated")) location.reload();
    return;
  }

  const info = langInfo(code);
  toast(`🌐 Translating to ${info[2]}…`);
  setCookie(`/en/${code}`);
  try {
    await loadGoogle();
    const combo = await waitFor(() => document.querySelector(".goog-te-combo"));
    const apply = () => { combo.value = code; combo.dispatchEvent(new Event("change")); };
    apply();
    // The widget sometimes ignores the first change while it's still starting up.
    setTimeout(() => { if (!document.documentElement.classList.contains("translated-ltr") &&
      !document.documentElement.classList.contains("translated-rtl")) apply(); }, 800);
    document.documentElement.dir = RTL_LANGS.has(code) ? "rtl" : "ltr";
    document.documentElement.lang = code;
    toast(`🌐 Showing in ${info[1]}`, 2500);
  } catch {
    toast("⚠️ Couldn't load the translator. Check your internet connection and try again.", 6000);
  }
}

// ---------- Events ----------
trEls.btn.addEventListener("click", e => { e.stopPropagation(); toggleMenu(); });
trEls.menu.addEventListener("click", e => {
  e.stopPropagation();
  const b = e.target.closest("[data-site-lang]");
  if (b) setSiteLanguage(b.dataset.siteLang);
});
document.addEventListener("click", () => toggleMenu(false));
document.addEventListener("keydown", e => { if (e.key === "Escape") toggleMenu(false); });

renderTranslateMenu();
if (siteLang !== "en") setSiteLanguage(siteLang, { initial: true });
