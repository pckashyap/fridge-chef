// Voice input + translation.
// Speak (or type) your ingredients in any of the languages below; non-English
// text is translated to English and the ingredients are picked out and added.

// [label, speech-recognition code, translation code, MyMemory code (if different)]
const VOICE_LANGS = [
  ["English", "en-US", "en"],
  ["हिन्दी · Hindi", "hi-IN", "hi"],
  ["Español · Spanish", "es-ES", "es"],
  ["Français · French", "fr-FR", "fr"],
  ["Deutsch · German", "de-DE", "de"],
  ["Italiano · Italian", "it-IT", "it"],
  ["Português · Portuguese", "pt-BR", "pt"],
  ["中文 · Chinese", "zh-CN", "zh", "zh-CN"],
  ["日本語 · Japanese", "ja-JP", "ja"],
  ["한국어 · Korean", "ko-KR", "ko"],
  ["العربية · Arabic", "ar-SA", "ar"],
  ["Русский · Russian", "ru-RU", "ru"],
  ["Türkçe · Turkish", "tr-TR", "tr"],
  ["Tiếng Việt · Vietnamese", "vi-VN", "vi"],
  ["ไทย · Thai", "th-TH", "th"],
  ["বাংলা · Bengali", "bn-IN", "bn"],
  ["தமிழ் · Tamil", "ta-IN", "ta"],
  ["తెలుగు · Telugu", "te-IN", "te"],
  ["मराठी · Marathi", "mr-IN", "mr"],
  ["ગુજરાતી · Gujarati", "gu-IN", "gu"],
  ["ಕನ್ನಡ · Kannada", "kn-IN", "kn"],
  ["മലയാളം · Malayalam", "ml-IN", "ml"],
  ["ਪੰਜਾਬੀ · Punjabi", "pa-IN", "pa"],
  ["اردو · Urdu", "ur-PK", "ur"],
  ["नेपाली · Nepali", "ne-NP", "ne"],
  ["Bahasa Indonesia", "id-ID", "id"],
  ["Bahasa Melayu", "ms-MY", "ms"],
  ["Filipino", "fil-PH", "fil", "tl"],
  ["Nederlands · Dutch", "nl-NL", "nl"],
  ["Polski · Polish", "pl-PL", "pl"],
  ["Українська · Ukrainian", "uk-UA", "uk"],
  ["Ελληνικά · Greek", "el-GR", "el"],
  ["Svenska · Swedish", "sv-SE", "sv"],
  ["עברית · Hebrew", "he-IL", "he"],
  ["فارسی · Persian", "fa-IR", "fa"],
  ["Kiswahili · Swahili", "sw-KE", "sw"]
].map(([label, speech, tr, mm]) => ({ label, speech, tr, mm: mm || tr }));

const voiceEls = {
  lang: $("voice-lang"), mic: $("mic-btn"), panel: $("voice-panel")
};
let voiceLang = VOICE_LANGS.find(l => l.speech === store.get("fridgechef.voiceLang", "en-US")) || VOICE_LANGS[0];
voiceEls.lang.innerHTML = VOICE_LANGS.map(l =>
  `<option value="${l.speech}" ${l === voiceLang ? "selected" : ""}>${esc(l.label)}</option>`).join("");

function updatePlaceholder() {
  els.input.placeholder = voiceLang.tr === "en"
    ? "Type an ingredient, e.g. eggs, rice, spinach… (press Enter)"
    : `Type in ${voiceLang.label.split(" · ").pop()} or English — it will be translated`;
}
updatePlaceholder();
voiceEls.lang.addEventListener("change", () => {
  voiceLang = VOICE_LANGS.find(l => l.speech === voiceEls.lang.value) || VOICE_LANGS[0];
  store.set("fridgechef.voiceLang", voiceLang.speech);
  updatePlaceholder();
});

// ---------- Translation ----------
const translatorCache = {};
async function translateToEnglish(text, lang) {
  if (lang.tr === "en" || !text.trim()) return text;
  // 1) Chrome's built-in, on-device translator (if the language pack is already installed).
  try {
    if ("Translator" in self) {
      const opts = { sourceLanguage: lang.tr, targetLanguage: "en" };
      if (!translatorCache[lang.tr] && (await Translator.availability(opts)) === "available") {
        translatorCache[lang.tr] = await Translator.create(opts);
      }
      if (translatorCache[lang.tr]) return await translatorCache[lang.tr].translate(text);
    }
  } catch {}
  // 2) Free online translation (MyMemory).
  const url = "https://api.mymemory.translated.net/get?" +
    new URLSearchParams({ q: text.slice(0, 450), langpair: `${lang.mm}|en` });
  const res = await fetch(url);
  if (!res.ok) throw new Error("HTTP " + res.status);
  const data = await res.json();
  const out = data?.responseData?.translatedText;
  if (!out || /MYMEMORY WARNING|QUERY LENGTH LIMIT/i.test(out)) throw new Error("translation limit");
  return out;
}

// ---------- Picking ingredients out of a sentence ----------
const FILLER = new Set(("i i'm im i've ive we we've have has had got get there is are was some a an the of in on at to for " +
  "my our your fridge kitchen pantry home and also plus with few little bit lot lots bunch too um uh er like maybe " +
  "think it its it's that this these those just only one two three four five six seven eight nine ten half dozen " +
  "kilo kilos kg gram grams g pack packs packet packets can cans tin tins bottle bottles jar jars box boxes bag bags " +
  "piece pieces cup cups left leftover leftovers fresh frozen any all me okay ok yes no not don't do does enough " +
  "please add put want need cook make something today now right so well then or but about around more less " +
  "salt pepper oil water").split(" "));

// Every name we can recognise (ingredients + other names), longest first.
let NAME_LIST = null;
function nameList() {
  if (!NAME_LIST) NAME_LIST = [...new Set([...KNOWN, ...Object.keys(SYNONYMS)])]
    .filter(n => n.length > 1).sort((a, b) => b.length - a.length);
  return NAME_LIST;
}
const variants = n => {
  const v = [n, n + "s", n + "es"];
  if (n.endsWith("y")) v.push(n.slice(0, -1) + "ies");
  if (n.endsWith("o")) v.push(n + "es");
  return v;
};

function extractIngredients(englishText) {
  let text = " " + englishText.toLowerCase()
    .replace(/[^a-zÀ-ɏ'\s-]/g, " ").replace(/-/g, " ").replace(/\s+/g, " ").trim() + " ";
  const found = [];
  for (const name of nameList()) {
    for (const v of variants(name)) {
      const needle = ` ${v} `;
      if (text.includes(needle)) {
        const item = normalize(name);
        if (item && !found.includes(item)) found.push(item);
        text = text.split(needle).join(" | ");
        break;
      }
    }
  }
  // Whatever's left that isn't filler: things we didn't recognise.
  const leftovers = text.split(/\||,|\band\b|\bor\b|\bwith\b/)
    .map(chunk => chunk.trim().split(" ").filter(w => w && !FILLER.has(w)).join(" "))
    .filter(chunk => chunk.length > 2 && /[a-z]/.test(chunk));
  return { found, unknown: [...new Set(leftovers)] };
}

// ---------- Showing what happened ----------
function showPanel(html) {
  voiceEls.panel.hidden = false;
  voiceEls.panel.innerHTML = html;
}

async function handleText(original, how) {
  const said = original.trim();
  if (!said) return;
  const isEnglish = voiceLang.tr === "en";
  const heading = how === "voice" ? "🎤 You said" : "⌨️ You typed";
  showPanel(`<div class="vp-row"><strong>${heading}:</strong> “${esc(said)}”</div>
    ${isEnglish ? "" : `<div class="vp-row muted">🌐 Translating from ${esc(voiceLang.label.split(" · ").pop())}…</div>`}`);

  let english = said;
  let translateFailed = false;
  if (!isEnglish) {
    try { english = await translateToEnglish(said, voiceLang); }
    catch { translateFailed = true; }
  }

  const { found, unknown } = extractIngredients(english);
  // Typed English with commas: keep the old behaviour of adding each item, even unknown ones.
  if (how === "typed" && isEnglish && !found.length) {
    english.split(/[,;\n]+/).map(normalize).filter(Boolean).forEach(i => found.push(i));
    unknown.length = 0;
  }
  found.forEach(i => pantry.add(i));
  render();

  showPanel(`
    <div class="vp-row"><strong>${heading}:</strong> “${esc(said)}”</div>
    ${!isEnglish && !translateFailed ? `<div class="vp-row">🌐 <strong>In English:</strong> “${esc(english)}”</div>` : ""}
    ${translateFailed ? `<div class="vp-row warn">⚠️ Couldn't translate right now (offline or daily limit reached). Try again, or switch to English.</div>` : ""}
    ${found.length ? `<div class="vp-row"><strong>✓ Added:</strong> <span class="chips inline">${found.map(i => `<span class="chip on">${esc(i)}</span>`).join("")}</span></div>`
      : translateFailed ? "" : `<div class="vp-row muted">No ingredients recognised — try saying them one by one, like “eggs, rice, onions”.</div>`}
    ${unknown.length ? `<div class="vp-row"><span class="muted">Didn't recognise:</span>
      <span class="chips inline">${unknown.map(u => `<button class="chip" data-add-anyway="${esc(u)}" title="Add anyway">+ ${esc(u)}</button>`).join("")}</span></div>` : ""}
    <button class="link-btn vp-close" data-vp-close>Dismiss</button>`);
}

voiceEls.panel.addEventListener("click", e => {
  const add = e.target.closest("[data-add-anyway]");
  if (add) {
    pantry.add(normalize(add.dataset.addAnyway));
    add.outerHTML = `<span class="chip on">${esc(add.dataset.addAnyway)}</span>`;
    render();
  }
  if (e.target.closest("[data-vp-close]")) voiceEls.panel.hidden = true;
});

// Typed input in another language goes through translation too (called from app.js).
function handleTypedText(value) {
  if (voiceLang.tr === "en") return false;
  handleText(value, "typed");
  return true;
}

// ---------- Microphone ----------
const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
let rec = null, listening = false, finalText = "";

function setMic(on) {
  listening = on;
  voiceEls.mic.classList.toggle("listening", on);
  voiceEls.mic.setAttribute("aria-pressed", on);
  voiceEls.mic.title = on ? "Stop listening" : "Speak your ingredients";
}

if (!SpeechRec) {
  voiceEls.mic.classList.add("unsupported");
  voiceEls.mic.title = "Voice input isn't supported in this browser — try Chrome, Edge or Safari";
}

voiceEls.mic.addEventListener("click", () => {
  if (!SpeechRec) {
    showPanel(`<div class="vp-row warn">🎤 Voice input isn't supported in this browser. Try Chrome, Edge or Safari — or type instead.</div>
      <button class="link-btn vp-close" data-vp-close>Dismiss</button>`);
    return;
  }
  if (listening) { rec && rec.stop(); return; }

  finalText = "";
  rec = new SpeechRec();
  rec.lang = voiceLang.speech;
  rec.interimResults = true;
  rec.continuous = true;
  rec.maxAlternatives = 1;

  rec.onstart = () => {
    setMic(true);
    showPanel(`<div class="vp-row"><span class="pulse"></span> <strong>Listening in ${esc(voiceLang.label.split(" · ")[0])}…</strong>
      say what's in your kitchen, then tap the mic again to finish.</div><div class="vp-row live" id="vp-live"></div>`);
  };
  rec.onresult = e => {
    let interim = "";
    for (let i = e.resultIndex; i < e.results.length; i++) {
      const t = e.results[i][0].transcript;
      if (e.results[i].isFinal) finalText += t + ", ";
      else interim += t;
    }
    const live = document.getElementById("vp-live");
    if (live) live.textContent = (finalText + interim).replace(/,\s*$/, "");
  };
  rec.onerror = e => {
    const msg = {
      "not-allowed": "Microphone access was blocked. Allow the microphone for this site in your browser settings.",
      "service-not-allowed": "Microphone access was blocked. Allow the microphone for this site in your browser settings.",
      "no-speech": "Didn't hear anything — tap the mic and try again.",
      "audio-capture": "No microphone was found.",
      "network": "The speech service couldn't be reached. Check your internet connection.",
      "language-not-supported": "This browser can't recognise speech in that language. Try another language or type instead."
    }[e.error];
    if (msg) showPanel(`<div class="vp-row warn">⚠️ ${esc(msg)}</div><button class="link-btn vp-close" data-vp-close>Dismiss</button>`);
  };
  rec.onend = () => {
    setMic(false);
    const text = finalText.replace(/,\s*$/, "").trim();
    if (text) handleText(text, "voice");
  };

  try { rec.start(); }
  catch { setMic(false); }
});
