// ---------- State ----------
const flatItems = v => Array.isArray(v) ? v : Object.values(v).flat();
const KNOWN = new Set(Object.values(CATEGORIES).flatMap(flatItems));
Object.entries(GROUPS).forEach(([k, list]) => { if (!k.startsWith("any ")) KNOWN.add(k); list.forEach(i => KNOWN.add(i)); });
RECIPES.forEach(r => [...r.need, ...r.opt].forEach(([item]) =>
  item.split("|").forEach(i => { if (!i.startsWith("any ")) KNOWN.add(i); })));
RECIPES.forEach(r => { r.id = r.name; r.source = "builtin"; });

const store = {
  get(key, fallback) {
    try { const v = localStorage.getItem(key); return v === null ? fallback : JSON.parse(v); }
    catch { return fallback; }
  },
  set(key, value) { try { localStorage.setItem(key, JSON.stringify(value)); } catch {} }
};

let pantry = new Set(store.get("fridgechef.pantry", []));
let mealFilter = store.get("fridgechef.meal", "all");
let maxMissing = store.get("fridgechef.maxMissing", 2);
let diet = store.get("fridgechef.diet", "all");        // "all" | "veg" | "nonveg"
let eggsOk = store.get("fridgechef.eggsOk", true);      // do eggs count as vegetarian?
let cuisines = new Set(store.get("fridgechef.cuisines", [])); // empty = any
let showAllCuisines = false;

// World recipes (filled in by worldrecipes.js once they've loaded).
let worldRecipes = [];
let worldEnabled = store.get("fridgechef.world", true);
let worldStatus = "idle";                 // "idle" | "loading" | "ready" | "error"
const WORLD_MEAT = new Set();             // ingredient names from world recipes that are meat/fish
const allRecipes = () => worldEnabled ? RECIPES.concat(worldRecipes) : RECIPES;
const findRecipe = id => RECIPES.find(r => r.id === id) || worldRecipes.find(r => r.id === id);

const PAGE = 48;
let shownLimit = PAGE;

const $ = id => document.getElementById(id);
const els = {
  form: $("add-form"), input: $("ingredient-input"), datalist: $("ingredient-list"),
  myItems: $("my-items"), count: $("count"), empty: $("empty-msg"), clear: $("clear-btn"),
  staples: $("staples"), categories: $("categories"), results: $("results"),
  meal: $("meal-filter"), maxMissing: $("max-missing"),
  cuisine: $("cuisine-filter"), diet: $("diet-filter"), eggsOk: $("eggs-ok"), eggsOkWrap: $("eggs-ok-wrap"),
  world: $("world-toggle"), worldStatus: $("world-status"), totalCount: $("total-count"),
  dialog: $("recipe-dialog"), dialogBody: $("dialog-body")
};
els.staples.checked = store.get("fridgechef.staples", true);
els.maxMissing.value = String(maxMissing);
els.world.checked = worldEnabled;

// ---------- Helpers ----------
const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const pretty = item => item.split("|").join(" or ");
// A recipe slot is [item, amount, label?]; the label is the original wording, used for display.
const slotLabel = ([item, , label]) => label || pretty(item);

// Turn whatever the user typed into one of our ingredient names (if we can).
function normalize(raw) {
  let s = raw.toLowerCase().trim().replace(/\s+/g, " ");
  if (!s) return "";
  if (SYNONYMS[s]) return SYNONYMS[s];
  if (KNOWN.has(s)) return s;
  const candidates = [];
  if (s.endsWith("ies")) candidates.push(s.slice(0, -3) + "y");
  if (s.endsWith("es")) candidates.push(s.slice(0, -2));
  if (s.endsWith("s")) candidates.push(s.slice(0, -1));
  for (const c of candidates) {
    if (SYNONYMS[c]) return SYNONYMS[c];
    if (KNOWN.has(c)) return c;
  }
  // "fresh spinach", "chicken breasts" → find a known ingredient inside the phrase
  const words = s.split(" ");
  for (let n = words.length - 1; n >= 1; n--) {
    for (let i = 0; i + n <= words.length; i++) {
      const part = words.slice(i, i + n).join(" ");
      const hit = SYNONYMS[part] || (KNOWN.has(part) && part) || (KNOWN.has(part.replace(/s$/, "")) && part.replace(/s$/, ""));
      if (hit) return hit;
    }
  }
  return s; // unknown ingredient: keep it anyway
}

// What you have that satisfies one recipe slot ("a|b", or a group like "any fruit").
const matchesFor = item => {
  const out = new Set();
  item.split("|").forEach(i => {
    if (pantry.has(i)) out.add(i);
    (GROUPS[i] || []).forEach(g => { if (pantry.has(g)) out.add(g); });
    // Unusual ingredients (e.g. "worcestershire sauce"): match if you typed the key word(s).
    if (!out.size && !KNOWN.has(i) && !i.startsWith("any ")) {
      const padded = ` ${i} `;
      pantry.forEach(p => { if (!KNOWN.has(p) && padded.includes(` ${p} `)) out.add(p); });
    }
  });
  return [...out];
};
const has = item => matchesFor(item).length > 0;

// ---------- Vegetarian / non-veg ----------
const isMeat = i => MEAT.includes(i) || WORLD_MEAT.has(i) || (!eggsOk && i === "egg");
const slotHasMeat = item => item.split("|").some(isMeat);
const slotAllMeat = item => item.split("|").every(isMeat);
const hasMeat = r => r.forceNonVeg || [...r.need, ...r.opt].some(([i]) => slotHasMeat(i));
const requiresMeat = r => r.forceNonVeg || r.need.some(([i]) => slotAllMeat(i));

// "veg" = no meat at all, "either" = meat is optional or swappable, "nonveg" = meat required.
const dietType = r => requiresMeat(r) ? "nonveg" : hasMeat(r) ? "either" : "veg";

// The version of a recipe to show for the current diet, or null to hide it.
function adapt(r) {
  if (diet === "nonveg") return hasMeat(r) ? r : null;
  if (diet !== "veg") return r;
  if (requiresMeat(r)) return null;
  const strip = item => item.split("|").filter(i => !isMeat(i)).join("|");
  return {
    ...r,
    need: r.need.map(([i, q, l]) => [strip(i), q, l]),
    opt: r.opt.map(([i, q, l]) => [strip(i), q, l]).filter(([i]) => i)
  };
}

function dietTag(r) {
  const t = dietType(r);
  if (t === "veg") return `<span class="diet-tag veg"><span class="dot veg"></span>Veg</span>`;
  if (t === "nonveg") return `<span class="diet-tag nonveg"><span class="dot nonveg"></span>Non-veg</span>`;
  return `<span class="diet-tag either"><span class="dot veg"></span>Veg option</span>`;
}

function scoreRecipe(r) {
  const missingSlots = r.need.filter(([item]) => !has(item));
  const haveCount = r.need.length - missingSlots.length;
  const optHave = r.opt.filter(([item]) => has(item)).length;
  return { recipe: r, missing: missingSlots.map(slotLabel), haveCount, optHave, pct: r.need.length ? haveCount / r.need.length : 0 };
}

function save() {
  store.set("fridgechef.pantry", [...pantry]);
  store.set("fridgechef.meal", mealFilter);
  store.set("fridgechef.maxMissing", maxMissing);
  store.set("fridgechef.staples", els.staples.checked);
  store.set("fridgechef.diet", diet);
  store.set("fridgechef.eggsOk", eggsOk);
  store.set("fridgechef.cuisines", [...cuisines]);
  store.set("fridgechef.world", worldEnabled);
}

const mealOk = r => mealFilter === "all" || r.meal === mealFilter;

// Recipes that fit your kitchen, meal and diet choices (before the cuisine filter).
function candidates() {
  return allRecipes()
    .filter(mealOk)
    .map(adapt).filter(Boolean)
    .map(scoreRecipe)
    .filter(s => s.haveCount > 0 && s.missing.length <= maxMissing);
}

const flagFor = c => CUISINES[c] || (typeof WORLD_FLAGS !== "undefined" && WORLD_FLAGS[c]) || "🍽️";
const cuisineLabel = c => `${flagFor(c)} ${esc(c)}`;
const FEATURED = 16; // cuisine buttons shown before "More cuisines"

function renderCuisines(cands) {
  // With an empty kitchen, show how many recipes each cuisine has in total.
  const pool = pantry.size ? cands.map(s => s.recipe) : allRecipes().filter(mealOk).map(adapt).filter(Boolean);
  const counts = {};
  pool.forEach(r => { counts[r.cuisine] = (counts[r.cuisine] || 0) + 1; });

  // Every cuisine we know about: the main ones first, then the rest by size.
  const all = new Set(Object.keys(CUISINES));
  allRecipes().forEach(r => all.add(r.cuisine));
  const extra = [...all].filter(c => !(c in CUISINES))
    .sort((a, b) => (counts[b] || 0) - (counts[a] || 0) || a.localeCompare(b));
  const ordered = [...Object.keys(CUISINES), ...extra];
  const visible = showAllCuisines ? ordered
    : ordered.filter((c, i) => i < FEATURED || cuisines.has(c));

  const btn = (key, label, n, on) =>
    `<button class="cuisine ${on ? "on" : ""} ${n ? "" : "zero"}" data-cuisine="${esc(key)}">
       ${label} <span class="n">${n}</span></button>`;
  const more = ordered.length > FEATURED
    ? `<button class="cuisine more" data-more>${showAllCuisines ? "Show fewer" : `+ ${ordered.length - visible.length} more cuisines`}</button>` : "";
  els.cuisine.innerHTML =
    btn("", `<span class="flag">🌍</span> Any cuisine`, pool.length, cuisines.size === 0) +
    visible.map(c => btn(c, `<span class="flag">${flagFor(c)}</span> ${esc(c)}`, counts[c] || 0, cuisines.has(c))).join("") +
    more;
}

function renderWorldStatus() {
  const total = allRecipes().length;
  els.totalCount.textContent = total;
  const msg = {
    idle: "", loading: "⏳ Loading world recipes…",
    ready: `✓ ${worldRecipes.length} world recipes loaded`,
    error: "⚠️ Couldn't reach TheMealDB (are you offline?). Showing built-in recipes only."
  }[worldStatus];
  els.worldStatus.textContent = worldEnabled ? msg : "";
}

// ---------- Rendering ----------
function renderPantry() {
  const items = [...pantry].sort();
  els.myItems.innerHTML = items.map(i =>
    `<button class="chip mine" data-remove="${esc(i)}" title="Remove">${esc(i)} <span class="x">×</span></button>`
  ).join("");
  els.count.textContent = items.length;
  els.empty.hidden = items.length > 0;
  els.clear.hidden = items.length === 0;

  els.categories.querySelectorAll("[data-toggle]").forEach(b =>
    b.classList.toggle("on", pantry.has(b.dataset.toggle)));
  els.categories.querySelectorAll("details[data-cat]").forEach(d => {
    const n = new Set(flatItems(CATEGORIES[d.dataset.cat]).filter(i => pantry.has(i))).size;
    d.querySelector(".sel-count").textContent = n ? `${n} selected` : "";
  });
}

function renderCategories() {
  const chips = items => `<div class="chips">${items.map(i =>
    `<button class="chip" data-toggle="${esc(i)}">${esc(i)}</button>`).join("")}</div>`;
  els.categories.innerHTML = Object.entries(CATEGORIES).map(([cat, items], idx) => {
    const total = new Set(flatItems(items)).size;
    const body = Array.isArray(items) ? chips(items)
      : Object.entries(items).map(([sub, list]) => `<h4>${esc(sub)}</h4>${chips(list)}`).join("");
    return `
      <details class="category" data-cat="${esc(cat)}" ${idx === 0 ? "open" : ""}>
        <summary><span>${esc(cat)} <span class="total">(${total})</span></span><span class="sel-count"></span></summary>
        <div class="cat-body">${body}</div>
      </details>`;
  }).join("");
  els.datalist.innerHTML = [...KNOWN].sort().map(i => `<option value="${esc(i)}">`).join("");
}

// Photo info for a recipe: { card, full, page, credit } or null.
function imageFor(r) {
  if (r.image) return { card: r.image + "/small", full: r.image, page: r.link, credit: "Recipe & photo: TheMealDB" };
  const img = (typeof RECIPE_IMAGES !== "undefined") && RECIPE_IMAGES[r.name];
  return img ? { card: img.src, full: img.src, page: img.page, credit: "Photo: Wikimedia (similar dish)" } : null;
}

// Photo with an emoji fallback if there's no photo or it fails to load.
function photo(r, cls, big) {
  const img = imageFor(r);
  const src = img && (big ? img.full : img.card);
  return `<div class="photo ${cls} ${img ? "" : "noimg"}" data-emoji="${r.emoji}">
    ${img ? `<img src="${esc(src)}" alt="${esc(r.name)}" loading="lazy" decoding="async"
      referrerpolicy="no-referrer" onerror="this.parentElement.classList.add('noimg');this.remove()">` : ""}
  </div>`;
}

function metaLine(r) {
  const bits = [`<span class="cuisine-tag">${cuisineLabel(r.cuisine)}</span>`];
  if (r.time) bits.push(`⏱ ${r.time} min`);
  if (r.serves) bits.push(`serves ${r.serves}`);
  bits.push(r.category ? esc(r.category.toLowerCase()) : r.meal);
  return bits.join(" · ");
}

function recipeCard(s) {
  const r = s.recipe;
  let status, cls;
  if (s.missing.length === 0) { status = "✓ You can make this now"; cls = "ready"; }
  else if (s.missing.length <= 2) { status = `Missing ${s.missing.length}`; cls = "close"; }
  else { status = `Missing ${s.missing.length} items`; cls = "far"; }
  const extras = s.optHave ? ` · +${s.optHave} extra${s.optHave > 1 ? "s" : ""} you have` : "";
  const shown = s.missing.slice(0, 6);
  return `
    <button class="recipe" data-recipe="${esc(r.id)}">
      ${photo(r, "card-photo")}
      ${r.source === "mealdb" ? `<span class="src-badge">🌐 World recipe</span>` : ""}
      <div class="card-body">
        <div class="title">${esc(r.name)}</div>
        <div class="meta">${metaLine(r)}</div>
        ${dietTag(findRecipe(r.id) || r)}
        <div class="bar"><span style="width:${Math.round(s.pct * 100)}%"></span></div>
        <div class="status ${cls}">${status}${extras}</div>
        ${shown.length ? `<div class="need-list">Need: ${shown.map(m => `<b>${esc(m)}</b>`).join(", ")}${s.missing.length > shown.length ? ` +${s.missing.length - shown.length} more` : ""}</div>` : ""}
      </div>
    </button>`;
}

function renderResults(cands) {
  if (pantry.size === 0) {
    els.results.innerHTML = `<div class="empty-results"><div class="big">🧺</div>
      Add a few things from your kitchen above and recipes will appear here.</div>`;
    return;
  }
  const scored = cands
    .filter(s => cuisines.size === 0 || cuisines.has(s.recipe.cuisine))
    .sort((a, b) => a.missing.length - b.missing.length || b.pct - a.pct || b.optHave - a.optHave
      || (a.recipe.time || 999) - (b.recipe.time || 999));

  if (!scored.length) {
    els.results.innerHTML = `<div class="empty-results"><div class="big">🤔</div>
      No matches yet. Try adding more ingredients, choosing other cuisines, picking "All" meals, or allowing more missing items.</div>`;
    return;
  }

  const page = scored.slice(0, shownLimit);
  const ready = page.filter(s => s.missing.length === 0);
  const almost = page.filter(s => s.missing.length > 0);
  const readyTotal = scored.filter(s => s.missing.length === 0).length;
  let html = "";
  if (ready.length) html += `<h3 class="group-title">🎉 Ready to cook (${readyTotal})</h3>` + ready.map(recipeCard).join("");
  if (almost.length) html += `<h3 class="group-title">🛒 A few things short (${scored.length - readyTotal})</h3>` + almost.map(recipeCard).join("");
  if (scored.length > shownLimit) {
    html += `<div class="more-wrap"><button class="btn" data-show-more>Show more recipes (${scored.length - shownLimit} left)</button></div>`;
  }
  els.results.innerHTML = html;
}

function openRecipe(id) {
  const original = findRecipe(id);
  if (!original) return;
  const r = adapt(original) || original;
  const s = scoreRecipe(r);
  const line = (slot, optional) => {
    const [item, qty] = slot;
    const got = matchesFor(item);
    const ok = got.length > 0;
    const flexible = item.includes("|") || item.split("|").some(i => GROUPS[i]);
    const using = ok && flexible && !(got.length === 1 && got[0] === item)
      ? ` <span class="optional-tag">— you have ${esc(got.join(", "))}</span>` : "";
    return `<li class="${ok ? "have" : "miss"}">
      <span class="mark">${ok ? "✓" : optional ? "○" : "✗"}</span>
      <span class="name">${esc(slotLabel(slot))}${optional ? ' <span class="optional-tag">(optional)</span>' : ""}${using}</span>
      <span class="qty">${esc(qty || "")}</span></li>`;
  };
  const basics = r.basics && r.basics.length ? r.basics.map(([n, q]) => q ? `${n} (${q})` : n).join(", ") : "";
  const staplesNote = basics ? `<p class="muted">Kitchen basics: ${esc(basics)}.</p>`
    : els.staples.checked ? "" : `<p class="muted">Also uses some of: ${STAPLES.join(", ")}.</p>`;

  const img = imageFor(r);
  const links = [];
  if (r.sourceUrl) links.push(`<a href="${esc(r.sourceUrl)}" target="_blank" rel="noopener">Original recipe ↗</a>`);
  if (r.video) links.push(`<a href="${esc(r.video)}" target="_blank" rel="noopener">▶ Watch video</a>`);
  if (r.link) links.push(`<a href="${esc(r.link)}" target="_blank" rel="noopener">View on TheMealDB ↗</a>`);

  els.dialogBody.innerHTML = `
    <div class="dlg-photo-wrap">
      ${photo(r, "dlg-photo", true)}
      <button class="close-btn on-photo" data-close aria-label="Close">×</button>
      ${img ? `<a class="credit" href="${esc(img.page)}" target="_blank" rel="noopener">${esc(img.credit)}</a>` : ""}
    </div>
    <div class="dlg-head">
      <span class="emoji">${r.emoji}</span>
      <div>
        <h2>${esc(r.name)}</h2>
        <div class="muted">${metaLine(r)}</div>
        ${dietTag(original)}
        ${diet === "veg" && dietType(original) === "either" ? `<div class="muted">Showing the vegetarian version.</div>` : ""}
      </div>
    </div>
    ${links.length ? `<div class="links">${links.join("")}</div>` : ""}
    <h3>Ingredients</h3>
    <ul class="ing">
      ${r.need.map(i => line(i, false)).join("")}
      ${r.opt.map(i => line(i, true)).join("")}
    </ul>
    ${staplesNote}
    ${s.missing.length ? `
      <div class="shopping">
        <strong>Shopping list:</strong> ${s.missing.map(esc).join(", ")}<br>
        <button class="btn" data-copy="${esc(s.missing.join("\n"))}">Copy list</button>
      </div>` : ""}
    <h3>Steps</h3>
    <ol class="steps">${r.steps.map(st => `<li>${esc(st)}</li>`).join("")}</ol>`;
  els.dialog.showModal();
  els.dialog.scrollTop = 0;
}

function render(keepPage) {
  if (!keepPage) shownLimit = PAGE;
  const cands = pantry.size ? candidates() : [];
  renderPantry();
  renderCuisines(cands);
  renderWorldStatus();
  renderResults(cands);
  save();
}

// ---------- Events ----------
els.cuisine.addEventListener("click", e => {
  if (e.target.closest("[data-more]")) { showAllCuisines = !showAllCuisines; render(true); return; }
  const b = e.target.closest("[data-cuisine]");
  if (!b) return;
  const c = b.dataset.cuisine;
  if (!c) cuisines.clear();
  else cuisines.has(c) ? cuisines.delete(c) : cuisines.add(c);
  render();
});

els.form.addEventListener("submit", e => {
  e.preventDefault();
  // Non-English text is translated first (see voice.js).
  if (typeof handleTypedText === "function" && handleTypedText(els.input.value)) { els.input.value = ""; return; }
  els.input.value.split(/[,;\n]+/).map(normalize).filter(Boolean).forEach(i => pantry.add(i));
  els.input.value = "";
  render();
});

els.myItems.addEventListener("click", e => {
  const b = e.target.closest("[data-remove]");
  if (b) { pantry.delete(b.dataset.remove); render(); }
});

els.categories.addEventListener("click", e => {
  const b = e.target.closest("[data-toggle]");
  if (!b) return;
  const i = b.dataset.toggle;
  pantry.has(i) ? pantry.delete(i) : pantry.add(i);
  render();
});

els.clear.addEventListener("click", () => {
  if (confirm("Remove everything from your kitchen list?")) { pantry.clear(); render(); }
});

els.staples.addEventListener("change", save);

els.meal.addEventListener("click", e => {
  const b = e.target.closest("[data-meal]");
  if (!b) return;
  mealFilter = b.dataset.meal;
  els.meal.querySelectorAll("button").forEach(x => x.classList.toggle("active", x === b));
  render();
});
els.meal.querySelectorAll("button").forEach(x => x.classList.toggle("active", x.dataset.meal === mealFilter));

els.maxMissing.addEventListener("change", () => { maxMissing = Number(els.maxMissing.value); render(); });

function syncDietUI() {
  els.diet.querySelectorAll("button").forEach(x => x.classList.toggle("active", x.dataset.diet === diet));
  els.eggsOkWrap.hidden = diet === "all";
  els.eggsOk.checked = eggsOk;
}
els.diet.addEventListener("click", e => {
  const b = e.target.closest("[data-diet]");
  if (!b) return;
  diet = b.dataset.diet;
  syncDietUI();
  render();
});
els.eggsOk.addEventListener("change", () => { eggsOk = els.eggsOk.checked; render(); });
syncDietUI();

els.world.addEventListener("change", () => {
  worldEnabled = els.world.checked;
  if (worldEnabled && typeof loadWorldRecipes === "function") loadWorldRecipes();
  render();
});

els.results.addEventListener("click", e => {
  if (e.target.closest("[data-show-more]")) { shownLimit += PAGE; render(true); return; }
  const b = e.target.closest("[data-recipe]");
  if (b) openRecipe(b.dataset.recipe);
});

els.dialog.addEventListener("click", e => {
  if (e.target === els.dialog || e.target.closest("[data-close]")) els.dialog.close();
  const copy = e.target.closest("[data-copy]");
  if (copy) {
    navigator.clipboard?.writeText(copy.dataset.copy).then(() => {
      copy.textContent = "Copied ✓";
      setTimeout(() => (copy.textContent = "Copy list"), 1500);
    }).catch(() => {});
  }
});

// ---------- Start ----------
renderCategories();
render();
