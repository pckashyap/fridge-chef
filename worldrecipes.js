// World recipes from TheMealDB (https://www.themealdb.com) — ~800 recipes from 60+ countries.
// Loaded in the browser when the page opens, then cached for a week.

const MEALDB = "https://www.themealdb.com/api/json/v1/1/search.php?f=";
const WORLD_CACHE_KEY = "fridgechef.world.v1";
const WORLD_CACHE_DAYS = 7;

// TheMealDB uses a mix of country names and adjectives; show them all as cuisine names.
const COUNTRY_TO_CUISINE = {
  "United States": "American", "France": "French", "India": "Indian", "Netherlands": "Dutch", "Norway": "Norwegian",
  "Cambodia": "Cambodian", "Colombia": "Colombian", "Brazil": "Brazilian", "Albania": "Albanian",
  "Argentina": "Argentinian", "Venezuela": "Venezuelan", "Denmark": "Danish", "Bulgaria": "Bulgarian",
  "Cayman Islands": "Caymanian", "Chile": "Chilean", "Afghanistan": "Afghan", "Barbados": "Barbadian",
  "Costa Rica": "Costa Rican", "Belgium": "Belgian", "Estonia": "Estonian", "Aruba": "Aruban", "Cuba": "Cuban",
  "Botswana": "Botswanan", "Antigua and Barbuda": "Antiguan", "Laos": "Lao", "Slovakia": "Slovak",
  "Austria": "Austrian", "Armenia": "Armenian", "Bangladesh": "Bangladeshi", "Andorra": "Andorran",
  "Angola": "Angolan", "Azerbaijan": "Azerbaijani", "Bahamas": "Bahamian", "Dominica": "Dominica",
  "Germany": "German", "Mexico": "Mexican", "Japan": "Japanese", "China": "Chinese", "Italy": "Italian",
  "Spain": "Spanish", "Greece": "Greek", "Thailand": "Thai", "Vietnam": "Vietnamese", "Korea": "Korean",
  "South Korea": "Korean", "Turkey": "Turkish", "Poland": "Polish", "Jamaica": "Jamaican", "Canada": "Canadian",
  "Ireland": "Irish", "Portugal": "Portuguese", "Russia": "Russian", "Ukraine": "Ukrainian", "Morocco": "Moroccan",
  "Egypt": "Egyptian", "Kenya": "Kenyan", "Malaysia": "Malaysian", "Philippines": "Filipino", "Croatia": "Croatian",
  "Tunisia": "Tunisian", "Syria": "Syrian", "Saudi Arabia": "Saudi Arabian", "Algeria": "Algerian",
  "Uruguay": "Uruguayan", "Australia": "Australian", "United Kingdom": "British", "Peru": "Peruvian",
  "Unknown": "World"
};

const WORLD_FLAGS = {
  "Turkish": "🇹🇷", "Polish": "🇵🇱", "Jamaican": "🇯🇲", "Canadian": "🇨🇦", "Dutch": "🇳🇱", "Norwegian": "🇳🇴",
  "Dominica": "🇩🇲", "Cambodian": "🇰🇭", "Colombian": "🇨🇴", "Australian": "🇦🇺", "Algerian": "🇩🇿",
  "Saudi Arabian": "🇸🇦", "Brazilian": "🇧🇷", "Albanian": "🇦🇱", "Argentinian": "🇦🇷", "Venezuelan": "🇻🇪",
  "Danish": "🇩🇰", "Uruguayan": "🇺🇾", "Bulgarian": "🇧🇬", "Caymanian": "🇰🇾", "Chilean": "🇨🇱",
  "Malaysian": "🇲🇾", "Afghan": "🇦🇫", "Barbadian": "🇧🇧", "Filipino": "🇵🇭", "Costa Rican": "🇨🇷",
  "Irish": "🇮🇪", "Croatian": "🇭🇷", "Tunisian": "🇹🇳", "Egyptian": "🇪🇬", "Portuguese": "🇵🇹",
  "Russian": "🇷🇺", "Ukrainian": "🇺🇦", "Belgian": "🇧🇪", "Estonian": "🇪🇪", "Aruban": "🇦🇼",
  "Syrian": "🇸🇾", "Cuban": "🇨🇺", "Botswanan": "🇧🇼", "Moroccan": "🇲🇦", "Kenyan": "🇰🇪",
  "Antiguan": "🇦🇬", "Lao": "🇱🇦", "Slovak": "🇸🇰", "Austrian": "🇦🇹", "Armenian": "🇦🇲",
  "Bangladeshi": "🇧🇩", "Andorran": "🇦🇩", "Angolan": "🇦🇴", "Azerbaijani": "🇦🇿", "Bahamian": "🇧🇸",
  "German": "🇩🇪", "Peruvian": "🇵🇪", "World": "🌍"
};

const CATEGORY_EMOJI = {
  Dessert: "🍰", Beef: "🥩", Chicken: "🍗", Lamb: "🍖", Pork: "🥓", Seafood: "🐟", Vegetarian: "🥗",
  Vegan: "🌱", Side: "🥔", Starter: "🥟", Pasta: "🍝", Breakfast: "🍳", Goat: "🍖", Miscellaneous: "🍽️"
};

// Basics everyone has: salt, pepper, water, cooking oils, ice.
const BASIC_RE = /^(sea |table |kosher |fine |coarse |flaky )?salt$|^(ground |cracked |freshly ground |white |black )?(black )?pepper(corns)?$|^water$|^(cold |hot |boiling |warm |iced )water$|^ice( cubes)?$|^((extra virgin |light |vegetable |sunflower |canola |rapeseed |olive |cooking |corn |groundnut |peanut |frying |coconut )+)?oil$|^salt and pepper$/;
// Nice-to-have: stocks, garnishes and seasonings.
const OPTIONAL_RE = /\b(stock|broth|bouillon|garnish|to serve|optional|for frying|food colou?ring|sprinkles|vanilla|bay lea\w*|thyme|rosemary|oregano|sage|nutmeg|allspice|cardamom|saffron|star anise|fennel seeds?|mustard seeds?|coriander seeds?|cumin( seeds?)?|caraway|marjoram|tarragon|dill|chives|mint|parsley|cilantro|basil|paprika|cayenne|turmeric|garam masala|curry powder|chil+i powder|chil+i flakes|red pepper flakes|mixed spice|spices?|seasoning|herbs|msg)\b|^(ground |whole )?cloves?$|^coriander$/;
// Meat and fish words (for the vegetarian filter).
const MEAT_RE = /\b(chicken|beef|steak|brisket|pork|lamb|mutton|goat|veal|venison|rabbit|bacon|ham|gammon|pancetta|prosciutto|salami|pepperoni|chorizo|sausages?|frankfurters?|hot dogs?|mince|minced meat|meatballs?|duck|turkey|goose|quail|fish|salmon|tuna|cod|haddock|hake|pollock|mackerel|sardines?|anchov\w*|prawns?|shrimps?|crab|lobster|squid|calamari|octopus|mussels?|clams?|oysters?|scallops?|monkfish|trout|tilapia|herring|kippers?|sea ?bass|sea ?bream|halibut|swordfish|snapper|catfish|eel|caviar|roe|gelatine?|lard|suet|dripping|worcestershire|liver|kidneys?|black pudding|oxtail|tripe|bone marrow|barramundi|conch|codfish|saltfish|jam[oó]n|serrano|doner|meat|seafood|sushi|tilapia|pilchards?|whitebait|langoustines?|crayfish)\b/;
const NOT_MEAT_RE = /kidney beans?|vegetable stock|veg stock|vegetarian|vegan|mushroom stock|fish-free|eggplant|butter beans/;

function worldMeal(category) {
  if (category === "Breakfast") return "breakfast";
  if (["Dessert", "Side", "Starter"].includes(category)) return "snack";
  return "dinner";
}

function splitSteps(text) {
  return (text || "")
    .split(/\r?\n+/)
    .map(s => s.replace(/^\s*(step\s*\d+[:.)-]?|\d+[.)])\s*/i, "").trim())
    .filter(s => s && !/^step\s*\d*$/i.test(s) && s.length > 2);
}

function convertMeal(m) {
  const country = m.strArea || m.strCountry || "Unknown";
  const cuisine = COUNTRY_TO_CUISINE[country] || country;
  const need = [], opt = [], basics = [];
  const seen = new Set();
  for (let i = 1; i <= 20; i++) {
    const raw = (m[`strIngredient${i}`] || "").trim();
    if (!raw) continue;
    const qty = (m[`strMeasure${i}`] || "").trim();
    const lower = raw.toLowerCase().replace(/\s+/g, " ");
    const label = lower;
    if (BASIC_RE.test(lower)) { basics.push([label, qty]); continue; }

    const isOptional = OPTIONAL_RE.test(lower);
    // Stocks keep their own name so "chicken stock" doesn't turn into "chicken".
    const item = /stock|broth|bouillon/.test(lower) ? lower
      : lower === "pepper" ? "black pepper" : normalize(lower);
    if (seen.has(item)) continue;
    seen.add(item);
    if (MEAT_RE.test(lower) && !NOT_MEAT_RE.test(lower) && !(KNOWN.has(item) && !MEAT.includes(item))) {
      WORLD_MEAT.add(item);
    }
    (isOptional ? opt : need).push([item, qty, label]);
  }
  // Safety net: TheMealDB's meat/fish categories are always non-veg, even if we missed the ingredient.
  const forceNonVeg = /^(Beef|Chicken|Lamb|Pork|Seafood|Goat)$/.test(m.strCategory || "") &&
    ![...need, ...opt].some(([i]) => MEAT.includes(i) || WORLD_MEAT.has(i));
  // A recipe needs at least one required ingredient to be matched.
  if (!need.length && opt.length) need.push(opt.shift());
  return {
    id: "mealdb-" + m.idMeal,
    source: "mealdb",
    name: m.strMeal.trim(),
    cuisine,
    category: m.strCategory || "",
    emoji: CATEGORY_EMOJI[m.strCategory] || "🍽️",
    meal: worldMeal(m.strCategory),
    need, opt, basics, forceNonVeg,
    steps: splitSteps(m.strInstructions),
    image: m.strMealThumb || "",
    link: `https://www.themealdb.com/meal/${m.idMeal}`,
    sourceUrl: m.strSource || "",
    video: m.strYoutube || ""
  };
}

async function fetchAllMeals() {
  const letters = "abcdefghijklmnopqrstuvwxyz".split("");
  const out = [];
  // A few requests at a time, to be polite to the free API.
  for (let i = 0; i < letters.length; i += 4) {
    const batch = await Promise.all(letters.slice(i, i + 4).map(async l => {
      const res = await fetch(MEALDB + l);
      if (!res.ok) throw new Error("HTTP " + res.status);
      return (await res.json()).meals || [];
    }));
    batch.forEach(list => out.push(...list));
  }
  return out;
}

let worldLoading = null;
function loadWorldRecipes() {
  if (worldLoading || worldRecipes.length) return worldLoading;
  worldLoading = (async () => {
    let meals = null;
    try {
      const cached = JSON.parse(localStorage.getItem(WORLD_CACHE_KEY) || "null");
      if (cached && Date.now() - cached.t < WORLD_CACHE_DAYS * 864e5 && cached.meals?.length) meals = cached.meals;
    } catch {}

    if (!meals) {
      worldStatus = "loading";
      render(true);
      try {
        meals = await fetchAllMeals();
        // Cache only the fields we use, to stay within browser storage limits.
        const slim = meals.map(m => Object.fromEntries(Object.entries(m).filter(([k, v]) => v && (
          /^str(Meal|Area|Country|Category|Instructions|MealThumb|Source|Youtube|Ingredient\d+|Measure\d+)$/.test(k) || k === "idMeal"))));
        try { localStorage.setItem(WORLD_CACHE_KEY, JSON.stringify({ t: Date.now(), meals: slim })); } catch {}
        meals = slim;
      } catch (e) {
        worldStatus = "error";
        worldLoading = null;
        render(true);
        return;
      }
    }

    const seenIds = new Set();
    worldRecipes = meals
      .filter(m => m.idMeal && m.strMeal && !seenIds.has(m.idMeal) && seenIds.add(m.idMeal))
      .map(convertMeal)
      .filter(r => r.need.length && r.steps.length);
    worldStatus = "ready";
    render(true);
  })();
  return worldLoading;
}

if (worldEnabled) loadWorldRecipes();
