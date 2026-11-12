// ---------- State ----------
const flatItems = v => Array.isArray(v) ? v : Object.values(v).flat();
const KNOWN = new Set(Object.values(CATEGORIES).flatMap(flatItems));
Object.entries(GROUPS).forEach(([k, list]) => { if (!k.startsWith("any ")) KNOWN.add(k); list.forEach(i => KNOWN.add(i)); });
RECIPES.forEach(r => [...r.need, ...r.opt].forEach(([item]) =>
  item.split("|").forEach(i => { if (!i.startsWith("any ")) KNOWN.add(i); })));

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
let cuisines = new Set(store.get("fridgechef.cuisines", []).filter(c => c in CUISINES)); // empty = any

const $ = id => document.getElementById(id);
const els = {
  form: $("add-form"), input: $("ingredient-input"), datalist: $("ingredient-list"),
  myItems: $("my-items"), count: $("count"), empty: $("empty-msg"), clear: $("clear-btn"),
  staples: $("staples"), categories: $("categories"), results: $("results"),
  meal: $("meal-filter"), maxMissing: $("max-missing"),
  cuisine: $("cuisine-filter"), diet: $("diet-filter"), eggsOk: $("eggs-ok"), eggsOkWrap: $("eggs-ok-wrap"),
  dialog: $("recipe-dialog"), dialogBody: $("dialog-body")
};
els.staples.checked = store.get("fridgechef.staples", true);
els.maxMissing.value = String(maxMissing);

// ---------- Helpers ----------
const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const pretty = item => item.split("|").join(" or ");

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
  });
  return [...out];
};
const has = item => matchesFor(item).length > 0;

// ---------- Vegetarian / non-veg ----------
const isMeat = i => MEAT.includes(i) || (!eggsOk && i === "egg");
const slotHasMeat = item => item.split("|").some(isMeat);
const slotAllMeat = item => item.split("|").every(isMeat);
const hasMeat = r => [...r.need, ...r.opt].some(([i]) => slotHasMeat(i));
const requiresMeat = r => r.need.some(([i]) => slotAllMeat(i));

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
    need: r.need.map(([i, q]) => [strip(i), q]),
    opt: r.opt.map(([i, q]) => [strip(i), q]).filter(([i]) => i)
  };
}

function dietTag(r) {
  const t = dietType(r);
  if (t === "veg") return `<span class="diet-tag veg"><span class="dot veg"></span>Veg</span>`;
  if (t === "nonveg") return `<span class="diet-tag nonveg"><span class="dot nonveg"></span>Non-veg</span>`;
  return `<span class="diet-tag either"><span class="dot veg"></span>Veg option</span>`;
}

function scoreRecipe(r) {
  const missing = r.need.filter(([item]) => !has(item)).map(([item]) => item);
  const haveCount = r.need.length - missing.length;
  const optHave = r.opt.filter(([item]) => has(item)).length;
  return { recipe: r, missing, haveCount, optHave, pct: haveCount / r.need.length };
}

function save() {
  store.set("fridgechef.pantry", [...pantry]);
  store.set("fridgechef.meal", mealFilter);
  store.set("fridgechef.maxMissing", maxMissing);
  store.set("fridgechef.staples", els.staples.checked);
  store.set("fridgechef.diet", diet);
  store.set("fridgechef.eggsOk", eggsOk);
  store.set("fridgechef.cuisines", [...cuisines]);
}

// Recipes that fit your kitchen, meal and diet choices (before the cuisine filter).
function candidates() {
  return RECIPES
    .filter(r => mealFilter === "all" || r.meal === mealFilter)
    .map(adapt).filter(Boolean)
    .map(scoreRecipe)
    .filter(s => s.haveCount > 0 && s.missing.length <= maxMissing);
}

const cuisineLabel = c => `${CUISINES[c] || "🍽️"} ${esc(c)}`;

function renderCuisines() {
  // With an empty kitchen, show how many recipes each cuisine has in total.
  const pool = pantry.size ? candidates().map(s => s.recipe)
    : RECIPES.filter(r => mealFilter === "all" || r.meal === mealFilter).map(adapt).filter(Boolean);
  const counts = {};
  pool.forEach(r => { counts[r.cuisine] = (counts[r.cuisine] || 0) + 1; });

  const btn = (key, label, n, on) =>
    `<button class="cuisine ${on ? "on" : ""} ${n ? "" : "zero"}" data-cuisine="${esc(key)}">
       ${label} <span class="n">${n}</span></button>`;
  els.cuisine.innerHTML =
    btn("", `<span class="flag">🌍</span> Any cuisine`, pool.length, cuisines.size === 0) +
    Object.keys(CUISINES).map(c =>
      btn(c, `<span class="flag">${CUISINES[c]}</span> ${esc(c)}`, counts[c] || 0, cuisines.has(c))).join("");
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

// Photo with an emoji fallback if there's no photo or it fails to load.
function photo(r, cls) {
  const img = (typeof RECIPE_IMAGES !== "undefined") && RECIPE_IMAGES[r.name];
  return `<div class="photo ${cls} ${img ? "" : "noimg"}" data-emoji="${r.emoji}">
    ${img ? `<img src="${esc(img.src)}" alt="${esc(r.name)}" loading="lazy" decoding="async"
      referrerpolicy="no-referrer" onerror="this.parentElement.classList.add('noimg');this.remove()">` : ""}
  </div>`;
}

function recipeCard(s) {
  const r = s.recipe;
  let status, cls;
  if (s.missing.length === 0) { status = "✓ You can make this now"; cls = "ready"; }
  else if (s.missing.length <= 2) { status = `Missing ${s.missing.length}`; cls = "close"; }
  else { status = `Missing ${s.missing.length} items`; cls = "far"; }
  const extras = s.optHave ? ` · +${s.optHave} extra${s.optHave > 1 ? "s" : ""} you have` : "";
  return `
    <button class="recipe" data-recipe="${esc(r.name)}">
      ${photo(r, "card-photo")}
      <div class="card-body">
        <div class="title">${esc(r.name)}</div>
        <div class="meta"><span class="cuisine-tag">${cuisineLabel(r.cuisine)}</span> · ⏱ ${r.time} min · serves ${r.serves} · ${r.meal}</div>
        ${dietTag(RECIPES.find(x => x.name === r.name))}
        <div class="bar"><span style="width:${Math.round(s.pct * 100)}%"></span></div>
        <div class="status ${cls}">${status}${extras}</div>
        ${s.missing.length ? `<div class="need-list">Need: ${s.missing.map(m => `<b>${esc(pretty(m))}</b>`).join(", ")}</div>` : ""}
      </div>
    </button>`;
}

function renderResults() {
  if (pantry.size === 0) {
    els.results.innerHTML = `<div class="empty-results"><div class="big">🧺</div>
      Add a few things from your kitchen above and recipes will appear here.</div>`;
    return;
  }
  const scored = candidates()
    .filter(s => cuisines.size === 0 || cuisines.has(s.recipe.cuisine))
    .sort((a, b) => a.missing.length - b.missing.length || b.pct - a.pct || b.optHave - a.optHave || a.recipe.time - b.recipe.time);

  if (!scored.length) {
    els.results.innerHTML = `<div class="empty-results"><div class="big">🤔</div>
      No matches yet. Try adding more ingredients, choosing other cuisines, picking "All" meals, or allowing more missing items.</div>`;
    return;
  }

  const ready = scored.filter(s => s.missing.length === 0);
  const almost = scored.filter(s => s.missing.length > 0);
  let html = "";
  if (ready.length) html += `<h3 class="group-title">🎉 Ready to cook (${ready.length})</h3>` + ready.map(recipeCard).join("");
  if (almost.length) html += `<h3 class="group-title">🛒 Just a few things short (${almost.length})</h3>` + almost.map(recipeCard).join("");
  els.results.innerHTML = html;
}

function openRecipe(name) {
  const original = RECIPES.find(x => x.name === name);
  if (!original) return;
  const r = adapt(original) || original;
  const s = scoreRecipe(r);
  const line = ([item, qty], optional) => {
    const got = matchesFor(item);
    const ok = got.length > 0;
    const flexible = item.includes("|") || item.split("|").some(i => GROUPS[i]);
    const using = ok && flexible && !(got.length === 1 && got[0] === item)
      ? ` <span class="optional-tag">— you have ${esc(got.join(", "))}</span>` : "";
    return `<li class="${ok ? "have" : "miss"}">
      <span class="mark">${ok ? "✓" : optional ? "○" : "✗"}</span>
      <span class="name">${esc(pretty(item))}${optional ? ' <span class="optional-tag">(optional)</span>' : ""}${using}</span>
      <span class="qty">${esc(qty)}</span></li>`;
  };
  const staplesNote = els.staples.checked ? "" :
    `<p class="muted">Also uses some of: ${STAPLES.join(", ")}.</p>`;

  const img = (typeof RECIPE_IMAGES !== "undefined") && RECIPE_IMAGES[r.name];
  els.dialogBody.innerHTML = `
    <div class="dlg-photo-wrap">
      ${photo(r, "dlg-photo")}
      <button class="close-btn on-photo" data-close aria-label="Close">×</button>
      ${img ? `<a class="credit" href="${esc(img.page)}" target="_blank" rel="noopener">Photo: Wikimedia (similar dish)</a>` : ""}
    </div>
    <div class="dlg-head">
      <span class="emoji">${r.emoji}</span>
      <div>
        <h2>${esc(r.name)}</h2>
        <div class="muted">${cuisineLabel(r.cuisine)} · ⏱ ${r.time} min · serves ${r.serves} · ${r.meal}</div>
        ${dietTag(original)}
        ${diet === "veg" && dietType(original) === "either" ? `<div class="muted">Showing the vegetarian version.</div>` : ""}
      </div>
    </div>
    <h3>Ingredients</h3>
    <ul class="ing">
      ${r.need.map(i => line(i, false)).join("")}
      ${r.opt.map(i => line(i, true)).join("")}
    </ul>
    ${staplesNote}
    ${s.missing.length ? `
      <div class="shopping">
        <strong>Shopping list:</strong> ${s.missing.map(m => esc(pretty(m))).join(", ")}<br>
        <button class="btn" data-copy="${esc(s.missing.map(pretty).join("\n"))}">Copy list</button>
      </div>` : ""}
    <h3>Steps</h3>
    <ol class="steps">${r.steps.map(st => `<li>${esc(st)}</li>`).join("")}</ol>`;
  els.dialog.showModal();
  els.dialog.scrollTop = 0;
}

function render() { renderPantry(); renderCuisines(); renderResults(); save(); }

els.cuisine.addEventListener("click", e => {
  const b = e.target.closest("[data-cuisine]");
  if (!b) return;
  const c = b.dataset.cuisine;
  if (!c) cuisines.clear();
  else cuisines.has(c) ? cuisines.delete(c) : cuisines.add(c);
  render();
});

// ---------- Events ----------
els.form.addEventListener("submit", e => {
  e.preventDefault();
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

els.results.addEventListener("click", e => {
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
