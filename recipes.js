// Recipe database.
// need: ingredients required to make the dish. opt: nice-to-have extras.
// Each entry is [ingredient, amount]. "a|b" means either one works.
// Salt, pepper, cooking oil and water are assumed to be in every kitchen.

const RECIPES = [
  {
    name: "Fluffy Scrambled Eggs", cuisine: "American", emoji: "🍳", time: 10, serves: 1, meal: "breakfast",
    need: [["egg", "3"], ["butter", "1 tbsp"]],
    opt: [["milk|cream", "1 tbsp"], ["green onion", "1, sliced"], ["cheese", "a handful"]],
    steps: [
      "Whisk the eggs with a pinch of salt (and the milk or cream, if using).",
      "Melt the butter in a non-stick pan over low heat.",
      "Add the eggs and stir slowly with a spatula, pushing them from the edges to the middle.",
      "Take them off the heat while they still look slightly wet — they finish cooking on the plate.",
      "Top with cheese, green onion and black pepper."
    ]
  },
  {
    name: "Loaded Omelette", cuisine: "French", emoji: "🥚", time: 12, serves: 1, meal: "breakfast",
    need: [["egg", "3"]],
    opt: [["cheese", "¼ cup"], ["onion", "¼, diced"], ["bell pepper", "¼, diced"], ["tomato", "½, diced"], ["any leafy green", "a handful"], ["mushroom", "3, sliced"], ["zucchini|asparagus|broccoli", "a little, chopped"]],
    steps: [
      "Beat the eggs with salt and pepper.",
      "Sauté any vegetables you have in a little oil for 3–4 minutes, then set them aside.",
      "Pour the eggs into the hot, oiled pan and tilt to spread them out evenly.",
      "When the edges set, spoon the vegetables and cheese over one half.",
      "Fold the omelette in half, cook 30 seconds more and slide it onto a plate."
    ]
  },
  {
    name: "French Toast", cuisine: "American", emoji: "🍞", time: 15, serves: 2, meal: "breakfast",
    need: [["bread", "4 slices"], ["egg", "2"], ["milk", "½ cup"]],
    opt: [["cinnamon", "½ tsp"], ["sugar", "1 tbsp"], ["butter", "for the pan"], ["honey", "to drizzle"], ["berries|banana", "to serve"]],
    steps: [
      "Whisk the eggs, milk, cinnamon and sugar in a shallow dish.",
      "Heat butter or oil in a pan over medium heat.",
      "Dip each slice of bread in the egg mixture for a few seconds per side.",
      "Fry for 2–3 minutes per side until golden.",
      "Serve with honey and fruit."
    ]
  },
  {
    name: "Classic Pancakes", cuisine: "American", emoji: "🥞", time: 20, serves: 3, meal: "breakfast",
    need: [["flour", "1 cup"], ["egg", "1"], ["milk", "¾ cup"], ["baking powder", "2 tsp"]],
    opt: [["sugar", "1 tbsp"], ["butter", "2 tbsp, melted"], ["berries|banana", "to serve"], ["honey", "to drizzle"]],
    steps: [
      "Mix the flour, baking powder, sugar and a pinch of salt in a bowl.",
      "In another bowl whisk the egg, milk and melted butter.",
      "Pour the wet mixture into the dry and stir until just combined — lumps are fine.",
      "Pour ¼ cup of batter per pancake into a lightly oiled pan over medium heat.",
      "Flip when bubbles form on top (about 2 minutes), then cook 1 minute more."
    ]
  },
  {
    name: "Overnight-Style Oatmeal", cuisine: "American", emoji: "🥣", time: 8, serves: 1, meal: "breakfast",
    need: [["oats", "½ cup"], ["milk", "1 cup"]],
    opt: [["banana", "½, sliced"], ["honey", "1 tbsp"], ["cinnamon", "a pinch"], ["peanut butter", "1 tbsp"], ["berries", "a handful"]],
    steps: [
      "Put the oats, milk and a pinch of salt in a small pot.",
      "Simmer over medium heat for 5 minutes, stirring often, until creamy.",
      "Stir in cinnamon and honey.",
      "Top with banana, berries or a spoon of peanut butter."
    ]
  },
  {
    name: "Yogurt Parfait", cuisine: "American", emoji: "🍨", time: 5, serves: 1, meal: "breakfast",
    need: [["yogurt", "1 cup"]],
    opt: [["any fruit", "a handful"], ["oats", "¼ cup"], ["honey", "1 tbsp"]],
    steps: [
      "Spoon a layer of yogurt into a glass or bowl.",
      "Add a layer of fruit, then a sprinkle of oats.",
      "Repeat the layers and finish with a drizzle of honey."
    ]
  },
  {
    name: "Fruit Smoothie", cuisine: "American", emoji: "🥤", time: 5, serves: 1, meal: "snack",
    need: [["any smoothie fruit", "1½ cups, chopped"], ["milk|yogurt|coconut milk", "1 cup"]],
    opt: [["banana", "½, for creaminess"], ["honey", "1 tsp"], ["peanut butter", "1 tbsp"], ["oats", "2 tbsp"], ["any leafy green", "a handful"]],
    steps: [
      "Add everything to a blender.",
      "Blend for 30–60 seconds until smooth.",
      "Add a few ice cubes if you want it colder, blend again and serve."
    ]
  },
  {
    name: "Avocado Toast", cuisine: "American", emoji: "🥑", time: 7, serves: 1, meal: "breakfast",
    need: [["bread", "2 slices"], ["avocado", "1"]],
    opt: [["lemon|lime", "a squeeze"], ["egg", "1, fried or poached"], ["chili flakes", "a pinch"], ["tomato", "a few slices"]],
    steps: [
      "Toast the bread.",
      "Mash the avocado with salt, pepper and a squeeze of lemon or lime.",
      "Spread it thickly on the toast.",
      "Top with a fried egg, tomato slices or chili flakes."
    ]
  },
  {
    name: "Grilled Cheese", cuisine: "American", emoji: "🧀", time: 10, serves: 1, meal: "lunch",
    need: [["bread", "2 slices"], ["cheese", "2–3 slices"], ["butter", "1 tbsp"]],
    opt: [["tomato", "a few slices"], ["bacon", "2 cooked strips"]],
    steps: [
      "Butter one side of each slice of bread.",
      "Place one slice butter-side down in a pan over medium-low heat.",
      "Layer on the cheese (and tomato or bacon), then top with the other slice, butter-side up.",
      "Cook 3–4 minutes per side, pressing gently, until golden and the cheese has melted."
    ]
  },
  {
    name: "Tuna Melt", cuisine: "American", emoji: "🐟", time: 12, serves: 2, meal: "lunch",
    need: [["bread", "4 slices"], ["tuna", "1 can"], ["mayonnaise", "2 tbsp"], ["cheese", "4 slices"]],
    opt: [["onion", "2 tbsp, finely diced"], ["celery", "1 stalk, diced"], ["lemon", "a squeeze"]],
    steps: [
      "Drain the tuna and mix it with the mayo, onion, celery, lemon, salt and pepper.",
      "Spread the tuna mix on two slices of bread, add cheese and close the sandwiches.",
      "Cook in a buttered or oiled pan over medium heat for 3–4 minutes per side until melty."
    ]
  },
  {
    name: "BLT Sandwich", cuisine: "American", emoji: "🥪", time: 12, serves: 1, meal: "lunch",
    need: [["bread", "2 slices"], ["bacon", "4 strips"], ["lettuce", "2 leaves"], ["tomato", "3 slices"]],
    opt: [["mayonnaise", "1 tbsp"], ["avocado", "½, sliced"]],
    steps: [
      "Fry the bacon until crisp and drain on a paper towel.",
      "Toast the bread and spread with mayo.",
      "Layer lettuce, tomato and bacon (and avocado) and close the sandwich."
    ]
  },
  {
    name: "Garlic Bread", cuisine: "Italian", emoji: "🥖", time: 15, serves: 4, meal: "snack",
    need: [["bread", "1 loaf or 8 slices"], ["butter", "4 tbsp, softened"], ["garlic", "3 cloves"]],
    opt: [["parsley", "1 tbsp, chopped"], ["cheese", "½ cup, grated"]],
    steps: [
      "Heat the oven to 200°C / 400°F.",
      "Mash the butter with finely chopped garlic, parsley and a pinch of salt.",
      "Spread it over the bread and sprinkle with cheese if you like.",
      "Bake for 8–10 minutes until golden and crisp at the edges."
    ]
  },
  {
    name: "Garlic Mushrooms on Toast", cuisine: "British", emoji: "🍄", time: 12, serves: 1, meal: "lunch",
    need: [["mushroom", "200 g"], ["garlic", "2 cloves"], ["bread", "2 slices"]],
    opt: [["butter", "1 tbsp"], ["parsley", "chopped"], ["cream", "2 tbsp"], ["lemon", "a squeeze"]],
    steps: [
      "Slice the mushrooms and mince the garlic.",
      "Fry the mushrooms in butter or oil over high heat for 5 minutes until browned.",
      "Add the garlic for 1 minute, then season and stir in cream or lemon if using.",
      "Pile onto hot toast and finish with parsley."
    ]
  },
  {
    name: "Spaghetti Aglio e Olio", cuisine: "Italian", emoji: "🍝", time: 15, serves: 2, meal: "dinner",
    need: [["pasta", "200 g"], ["garlic", "4 cloves"]],
    opt: [["chili flakes", "½ tsp"], ["parsley", "a handful"], ["cheese", "parmesan, to serve"], ["lemon", "a squeeze"]],
    steps: [
      "Cook the pasta in well-salted boiling water. Save a mug of the pasta water before draining.",
      "Meanwhile, gently fry thinly sliced garlic in 4 tbsp oil over low heat until pale golden.",
      "Add chili flakes, then the drained pasta and a splash of pasta water.",
      "Toss hard until glossy, then add parsley, lemon and cheese."
    ]
  },
  {
    name: "Simple Tomato Pasta", cuisine: "Italian", emoji: "🍅", time: 25, serves: 2, meal: "dinner",
    need: [["pasta", "200 g"], ["tomato", "1 can or 4 fresh"], ["garlic", "2 cloves"]],
    opt: [["onion", "1, diced"], ["basil", "a few leaves"], ["cheese", "to serve"], ["chili flakes", "a pinch"]],
    steps: [
      "Soften the onion in oil for 5 minutes, then add garlic for 1 minute.",
      "Add the tomatoes, a pinch of salt (and sugar if they're sharp), and simmer 15 minutes.",
      "Cook the pasta, drain, and toss with the sauce and a splash of pasta water.",
      "Serve with torn basil and cheese."
    ]
  },
  {
    name: "Creamy Greens Pasta", cuisine: "Italian", emoji: "🥬", time: 20, serves: 2, meal: "dinner",
    need: [["pasta", "200 g"], ["any leafy green", "2 big handfuls"], ["cream|milk", "½ cup"], ["garlic", "2 cloves"]],
    opt: [["cheese", "½ cup, grated"], ["mushroom", "a handful, sliced"], ["lemon", "a squeeze"], ["chicken", "cooked, sliced"]],
    steps: [
      "Cook the pasta in salted water.",
      "Fry the garlic (and mushrooms) in oil or butter for 2 minutes.",
      "Add the cream or milk and simmer for 2 minutes, then stir in the chopped greens until wilted (kale and chard need a minute or two longer).",
      "Add the drained pasta and cheese, toss well and season."
    ]
  },
  {
    name: "Stovetop Mac & Cheese", cuisine: "American", emoji: "🧀", time: 20, serves: 2, meal: "dinner",
    need: [["pasta", "200 g"], ["cheese", "1½ cups, grated"], ["milk", "1½ cups"], ["butter", "2 tbsp"], ["flour", "2 tbsp"]],
    opt: [["paprika", "a pinch"], ["bacon", "cooked, chopped"]],
    steps: [
      "Cook the pasta and drain.",
      "Melt the butter in a pot, stir in the flour and cook for 1 minute.",
      "Slowly whisk in the milk and simmer until thickened, about 3 minutes.",
      "Take off the heat and stir in the cheese until smooth. Season.",
      "Fold in the pasta and top with paprika or bacon."
    ]
  },
  {
    name: "Spaghetti Bolognese", cuisine: "Italian", emoji: "🍝", time: 40, serves: 4, meal: "dinner",
    need: [["pasta", "400 g"], ["ground beef", "500 g"], ["tomato", "1 can"], ["onion", "1"], ["garlic", "2 cloves"]],
    opt: [["carrot", "1, finely diced"], ["celery", "1 stalk, diced"], ["basil", "a few leaves"], ["cheese", "to serve"]],
    steps: [
      "Soften the onion, carrot and celery in oil for 8 minutes.",
      "Add the garlic, then the beef, and cook until browned, breaking it up.",
      "Add the tomatoes and ½ cup water. Simmer for 20–25 minutes, stirring occasionally.",
      "Season, then serve over cooked pasta with cheese and basil."
    ]
  },
  {
    name: "Peanut Noodles", cuisine: "Thai", emoji: "🥜", time: 15, serves: 2, meal: "dinner",
    need: [["pasta|instant noodles", "200 g"], ["peanut butter", "3 tbsp"], ["soy sauce", "2 tbsp"]],
    opt: [["garlic", "1 clove, grated"], ["honey", "1 tsp"], ["lime", "a squeeze"], ["green onion", "sliced"], ["chili flakes", "a pinch"], ["cucumber", "sliced"]],
    steps: [
      "Cook the noodles, saving a little of the cooking water.",
      "Whisk the peanut butter, soy sauce, garlic, honey and lime with 3–4 tbsp hot water until smooth.",
      "Toss the noodles in the sauce.",
      "Top with green onion, cucumber and chili flakes. Good warm or cold."
    ]
  },
  {
    name: "Upgraded Instant Ramen", cuisine: "Japanese", emoji: "🍜", time: 8, serves: 1, meal: "lunch",
    need: [["instant noodles", "1 pack"]],
    opt: [["egg", "1"], ["green onion", "1, sliced"], ["soy sauce", "1 tsp"], ["spinach", "a handful"], ["mushroom", "a few, sliced"], ["chili flakes", "a pinch"]],
    steps: [
      "Bring the water to a boil and add the noodles and seasoning.",
      "Add mushrooms or spinach for the last minute.",
      "Crack an egg in and let it poach for 2 minutes without stirring.",
      "Finish with soy sauce, green onion and chili flakes."
    ]
  },
  {
    name: "Egg Fried Rice", cuisine: "Chinese", emoji: "🍚", time: 15, serves: 2, meal: "dinner",
    need: [["rice", "2 cups, cooked (day-old is best)"], ["egg", "2"], ["soy sauce", "2 tbsp"]],
    opt: [["garlic", "2 cloves"], ["onion|green onion", "a little, chopped"], ["peas", "½ cup"], ["carrot", "1, diced"], ["chicken", "cooked, diced"]],
    steps: [
      "Heat oil in a large pan or wok over high heat.",
      "Fry the garlic, onion, carrot and peas for 2–3 minutes.",
      "Push everything to the side, scramble the eggs in the empty space.",
      "Add the rice and soy sauce and stir-fry for 3–4 minutes until hot and slightly crispy."
    ]
  },
  {
    name: "Chicken (or Tofu) Stir-Fry", cuisine: "Chinese", emoji: "🥡", time: 20, serves: 2, meal: "dinner",
    need: [["chicken|tofu", "300 g, bite-sized"], ["soy sauce", "3 tbsp"], ["garlic", "2 cloves"]],
    opt: [["any stir-fry vegetable", "2–3 cups"], ["onion", "1, sliced"], ["ginger", "1 tsp, grated"], ["honey", "1 tbsp"], ["rice", "to serve"]],
    steps: [
      "Mix the soy sauce, honey and 2 tbsp water in a cup.",
      "Fry the chicken or tofu in hot oil until browned and cooked through. Set aside.",
      "Stir-fry the vegetables for 3–4 minutes so they stay crunchy.",
      "Add the garlic and ginger for 30 seconds, then return the chicken/tofu with the sauce.",
      "Toss until glossy and serve over rice."
    ]
  },
  {
    name: "Vegetable Stir-Fry", cuisine: "Chinese", emoji: "🥦", time: 15, serves: 2, meal: "dinner",
    need: [["soy sauce", "2 tbsp"], ["garlic", "2 cloves"], ["any stir-fry vegetable", "3 cups, mixed"]],
    opt: [["onion", "1, sliced"], ["mushroom", "a handful"], ["ginger", "1 tsp"], ["rice|pasta|instant noodles", "to serve"], ["honey", "1 tsp"]],
    steps: [
      "Cut the vegetables into similar-sized pieces.",
      "Stir-fry in a very hot pan with oil for 4–5 minutes.",
      "Add garlic and ginger for 30 seconds.",
      "Splash in the soy sauce (and honey), toss and serve over rice or noodles."
    ]
  },
  {
    name: "Garlic Butter Chicken", cuisine: "American", emoji: "🍗", time: 25, serves: 2, meal: "dinner",
    need: [["chicken", "2 breasts or 4 thighs"], ["butter", "3 tbsp"], ["garlic", "4 cloves"]],
    opt: [["lemon", "½"], ["parsley", "chopped"], ["paprika", "½ tsp"], ["spinach", "to serve"]],
    steps: [
      "Season the chicken with salt, pepper and paprika.",
      "Sear in oil over medium-high heat, 5–7 minutes per side, until cooked through. Rest on a plate.",
      "Lower the heat, add the butter and garlic, and cook for 1 minute.",
      "Squeeze in lemon, return the chicken and spoon the butter over it. Top with parsley."
    ]
  },
  {
    name: "Chicken or Bean Quesadilla", cuisine: "Mexican", emoji: "🌮", time: 15, serves: 2, meal: "lunch",
    need: [["tortilla", "2 large"], ["cheese", "1 cup, grated"], ["chicken|beans", "1 cup, cooked"]],
    opt: [["bell pepper", "½, sliced"], ["onion", "½, sliced"], ["chili powder|cumin", "½ tsp"], ["avocado", "to serve"], ["yogurt", "as sour cream"]],
    steps: [
      "Fry the pepper and onion with the spice for a few minutes, then mix with the chicken or beans.",
      "Sprinkle cheese over half of each tortilla, add the filling, then more cheese, and fold.",
      "Cook in a dry pan over medium heat for 2–3 minutes per side until crisp and melted.",
      "Cut into wedges and serve with avocado and yogurt."
    ]
  },
  {
    name: "Beef Tacos", cuisine: "Mexican", emoji: "🌮", time: 20, serves: 3, meal: "dinner",
    need: [["ground beef", "400 g"], ["tortilla", "6 small"], ["onion", "1, diced"]],
    opt: [["chili powder", "1 tbsp"], ["cumin", "1 tsp"], ["garlic", "2 cloves"], ["cheese", "grated"], ["lettuce", "shredded"], ["tomato", "diced"], ["lime", "wedges"], ["avocado", "sliced"]],
    steps: [
      "Fry the onion in oil for 4 minutes, then add the garlic.",
      "Add the beef and cook until browned. Stir in the spices, salt and a splash of water.",
      "Simmer 3–4 minutes until saucy.",
      "Warm the tortillas and fill with beef, cheese, lettuce, tomato and a squeeze of lime."
    ]
  },
  {
    name: "Shakshuka", cuisine: "Middle Eastern", emoji: "🍳", time: 25, serves: 2, meal: "breakfast",
    need: [["egg", "4"], ["tomato", "1 can or 4 fresh"], ["onion", "1"], ["garlic", "2 cloves"]],
    opt: [["bell pepper", "1, diced"], ["cumin", "1 tsp"], ["paprika", "1 tsp"], ["chili flakes", "a pinch"], ["parsley", "chopped"], ["bread", "to dip"], ["cheese", "feta, crumbled"]],
    steps: [
      "Soften the onion and pepper in oil for 6–8 minutes.",
      "Add the garlic and spices for 1 minute, then the tomatoes. Simmer for 10 minutes.",
      "Make 4 wells in the sauce and crack an egg into each.",
      "Cover and cook on low for 5–7 minutes until the whites are set.",
      "Top with parsley and cheese and serve with bread."
    ]
  },
  {
    name: "Spanish Potato Omelette", cuisine: "Spanish", emoji: "🥔", time: 35, serves: 3, meal: "lunch",
    need: [["potato", "3 medium"], ["egg", "5"], ["onion", "1"]],
    opt: [["bell pepper", "½, diced"], ["parsley", "chopped"]],
    steps: [
      "Thinly slice the potatoes and onion.",
      "Cook them gently in plenty of oil over low heat for 15–20 minutes until soft (not crispy).",
      "Drain off most of the oil and mix the potatoes into the beaten, salted eggs.",
      "Pour back into the pan and cook on low for 6–8 minutes.",
      "Flip using a plate and cook 3 minutes more. Serve warm or at room temperature."
    ]
  },
  {
    name: "Crispy Potato Wedges", cuisine: "American", emoji: "🍟", time: 40, serves: 2, meal: "snack",
    need: [["potato", "3 large"]],
    opt: [["paprika", "1 tsp"], ["garlic", "2 cloves, minced"], ["cheese", "grated"], ["parsley", "chopped"]],
    steps: [
      "Heat the oven to 220°C / 425°F.",
      "Cut the potatoes into wedges and toss with oil, salt, pepper, paprika and garlic.",
      "Spread out on a tray in a single layer.",
      "Roast for 30–35 minutes, flipping halfway, until golden and crisp."
    ]
  },
  {
    name: "Creamy Mashed Potatoes", cuisine: "American", emoji: "🥔", time: 30, serves: 4, meal: "dinner",
    need: [["potato", "1 kg"], ["butter", "4 tbsp"], ["milk|cream", "½ cup, warm"]],
    opt: [["garlic", "2 cloves"], ["green onion", "sliced"], ["cheese", "grated"]],
    steps: [
      "Peel and chop the potatoes, then boil in salted water (with garlic) for 15–20 minutes until very tender.",
      "Drain well and let them steam for a minute.",
      "Mash with the butter, then beat in the warm milk until smooth.",
      "Season well and top with green onion or cheese."
    ]
  },
  {
    name: "Tomato Soup", cuisine: "American", emoji: "🍲", time: 30, serves: 3, meal: "lunch",
    need: [["tomato", "2 cans or 8 fresh"], ["onion", "1"], ["garlic", "2 cloves"]],
    opt: [["butter", "2 tbsp"], ["cream", "¼ cup"], ["basil", "a few leaves"], ["carrot", "1, chopped"], ["sugar", "1 tsp"]],
    steps: [
      "Soften the onion and carrot in butter or oil for 8 minutes.",
      "Add the garlic, then the tomatoes and 2 cups of water. Simmer for 15 minutes.",
      "Blend until smooth and season with salt, pepper and a pinch of sugar.",
      "Stir in the cream and basil. Great with grilled cheese."
    ]
  },
  {
    name: "Homestyle Chicken Soup", cuisine: "American", emoji: "🍜", time: 45, serves: 4, meal: "dinner",
    need: [["chicken", "2 thighs or breasts"], ["carrot", "2"], ["onion", "1"]],
    opt: [["celery", "2 stalks"], ["garlic", "2 cloves"], ["pasta|rice", "½ cup"], ["parsley", "chopped"], ["lemon", "a squeeze"]],
    steps: [
      "Chop the onion, carrot and celery and soften in oil for 5 minutes. Add the garlic.",
      "Add the chicken and 6 cups of water with a good pinch of salt. Simmer for 25 minutes.",
      "Take out the chicken, shred it with two forks and return it to the pot.",
      "Add pasta or rice and cook until tender. Finish with parsley and lemon."
    ]
  },
  {
    name: "Red Lentil Soup", cuisine: "Middle Eastern", emoji: "🥣", time: 30, serves: 4, meal: "dinner",
    need: [["lentils", "1 cup"], ["onion", "1"], ["garlic", "2 cloves"]],
    opt: [["carrot", "1, diced"], ["cumin", "1 tsp"], ["tomato", "1 can"], ["lemon", "½"], ["ginger", "1 tsp"], ["coconut milk", "½ can"]],
    steps: [
      "Soften the onion and carrot in oil for 5 minutes.",
      "Add the garlic, ginger and cumin for 1 minute.",
      "Add the rinsed lentils, tomatoes and 4 cups of water. Simmer for 20 minutes until the lentils break down.",
      "Blend partly for a creamy texture, stir in coconut milk, and finish with lemon juice."
    ]
  },
  {
    name: "Chickpea Curry", cuisine: "Indian", emoji: "🍛", time: 30, serves: 3, meal: "dinner",
    need: [["chickpeas", "1 can, drained"], ["onion", "1"], ["garlic", "2 cloves"], ["curry powder", "1 tbsp"]],
    opt: [["tomato", "1 can"], ["coconut milk", "1 can"], ["ginger", "1 tsp"], ["any leafy green", "2 handfuls"], ["rice", "to serve"], ["lime|lemon", "a squeeze"]],
    steps: [
      "Fry the onion in oil for 6 minutes until golden.",
      "Add the garlic, ginger and curry powder and stir for 1 minute.",
      "Add the chickpeas, tomatoes and coconut milk (or 1 cup water). Simmer for 15 minutes.",
      "Stir in spinach until wilted, season and add citrus. Serve with rice."
    ]
  },
  {
    name: "Hummus", cuisine: "Middle Eastern", emoji: "🫘", time: 10, serves: 4, meal: "snack",
    need: [["chickpeas", "1 can"], ["lemon", "1"], ["garlic", "1 clove"]],
    opt: [["tahini", "3 tbsp"], ["cumin", "½ tsp"], ["paprika", "to sprinkle"], ["bread|cucumber|carrot", "to dip"]],
    steps: [
      "Drain the chickpeas, keeping a little of the liquid.",
      "Blend the chickpeas, lemon juice, garlic, tahini, cumin, salt and 3 tbsp oil.",
      "Add a splash of the liquid or ice water until it's very smooth.",
      "Drizzle with oil, sprinkle with paprika and serve with dippers."
    ]
  },
  {
    name: "Guacamole", cuisine: "Mexican", emoji: "🥑", time: 10, serves: 3, meal: "snack",
    need: [["avocado", "2 ripe"], ["lime|lemon", "1"]],
    opt: [["onion", "¼, finely diced"], ["tomato", "1, diced"], ["garlic", "1 small clove"], ["chili flakes", "a pinch"], ["tortilla", "for chips"]],
    steps: [
      "Mash the avocados in a bowl, leaving some chunks.",
      "Stir in the lime juice, onion, tomato, garlic and a good pinch of salt.",
      "Taste and add more lime or salt. Serve right away."
    ]
  },
  {
    name: "Greek-Style Salad", cuisine: "Greek", emoji: "🥗", time: 10, serves: 2, meal: "lunch",
    need: [["cucumber", "1"], ["tomato", "3"]],
    opt: [["onion", "½ red, sliced"], ["cheese", "feta, crumbled"], ["olives", "a handful"], ["bell pepper", "1, sliced"], ["lemon", "½"]],
    steps: [
      "Chop the cucumber, tomatoes and pepper into chunks.",
      "Add the onion, olives and cheese.",
      "Dress with oil, lemon juice, salt and pepper and toss gently."
    ]
  },
  {
    name: "Caprese Salad", cuisine: "Italian", emoji: "🍅", time: 5, serves: 2, meal: "lunch",
    need: [["tomato", "2 large"], ["cheese", "mozzarella, 125 g"]],
    opt: [["basil", "a handful"], ["bread", "to serve"]],
    steps: [
      "Slice the tomatoes and mozzarella.",
      "Arrange them overlapping on a plate with basil leaves.",
      "Drizzle with oil and season with salt and pepper."
    ]
  },
  {
    name: "Lemon Garlic Salmon", cuisine: "American", emoji: "🐟", time: 20, serves: 2, meal: "dinner",
    need: [["salmon", "2 fillets"], ["lemon", "1"], ["garlic", "2 cloves"]],
    opt: [["butter", "2 tbsp"], ["parsley", "chopped"], ["asparagus|broccoli|green beans|any leafy green", "to serve"], ["rice|potato", "to serve"]],
    steps: [
      "Heat the oven to 200°C / 400°F.",
      "Put the salmon on a lined tray, season, and top with minced garlic, lemon slices and butter or oil.",
      "Bake for 12–15 minutes until it flakes easily.",
      "Squeeze over more lemon, add parsley and serve with greens."
    ]
  },
  {
    name: "Roasted Vegetable Tray", cuisine: "American", emoji: "🥕", time: 35, serves: 3, meal: "dinner",
    need: [["any vegetable for roasting", "about 4 cups, chopped"]],
    opt: [["onion", "1, in wedges"], ["garlic", "4 cloves"], ["paprika|cumin", "1 tsp"], ["honey", "1 tbsp"], ["cheese", "to finish"]],
    steps: [
      "Heat the oven to 220°C / 425°F.",
      "Cut the vegetables into similar-sized chunks.",
      "Toss with oil, salt, pepper, spices and garlic and spread out on a tray.",
      "Roast for 25–30 minutes, tossing once, until browned. Drizzle with honey or add cheese."
    ]
  },
  {
    name: "Banana Bread", cuisine: "American", emoji: "🍌", time: 70, serves: 8, meal: "snack",
    need: [["banana", "3 very ripe"], ["flour", "1½ cups"], ["egg", "1"], ["sugar", "½ cup"], ["butter", "⅓ cup, melted"], ["baking soda", "1 tsp"]],
    opt: [["cinnamon", "1 tsp"], ["honey", "2 tbsp"]],
    steps: [
      "Heat the oven to 175°C / 350°F and grease a loaf pan.",
      "Mash the bananas, then mix in the melted butter, sugar and egg.",
      "Stir in the baking soda, a pinch of salt, cinnamon, then the flour until just combined.",
      "Pour into the pan and bake for 55–60 minutes, until a skewer comes out clean.",
      "Cool for 10 minutes before slicing."
    ]
  },
  {
    name: "Cinnamon Fried Apples", cuisine: "American", emoji: "🍎", time: 15, serves: 2, meal: "snack",
    need: [["apple|pear", "2"], ["butter", "1 tbsp"]],
    opt: [["cinnamon", "½ tsp"], ["sugar|honey", "1 tbsp"], ["yogurt|oats", "to serve"]],
    steps: [
      "Core and slice the apples.",
      "Cook them in butter over medium heat for 6–8 minutes until soft.",
      "Sprinkle with cinnamon and sugar and cook 1 minute more until syrupy.",
      "Serve warm on yogurt or oatmeal."
    ]
  },
  {
    name: "Fresh Fruit Salad", cuisine: "American", emoji: "🍓", time: 10, serves: 3, meal: "snack",
    need: [["any fruit", "4 cups, mixed"]],
    opt: [["lemon|lime", "a squeeze"], ["honey", "1 tbsp"], ["yogurt", "to serve"], ["basil", "a few leaves (or mint)"]],
    steps: [
      "Wash, peel and cut all the fruit into bite-sized pieces (berries and grapes can stay whole).",
      "Toss gently with a squeeze of citrus — it keeps apples, pears and bananas from browning.",
      "Drizzle with honey if your fruit isn't very sweet.",
      "Chill for 15 minutes and serve on its own or with yogurt."
    ]
  },
  {
    name: "Garden Salad", cuisine: "American", emoji: "🥗", time: 10, serves: 2, meal: "lunch",
    need: [["any salad vegetable", "4 cups, mixed"]],
    opt: [["lemon", "½"], ["honey", "1 tsp"], ["cheese", "crumbled or shaved"], ["olives", "a handful"], ["chickpeas|beans", "½ can"], ["egg", "1, hard-boiled"], ["any fruit", "a handful (apple, pear, berries, orange…)"]],
    steps: [
      "Wash and dry the greens, then chop or slice the other vegetables thinly.",
      "Whisk 3 tbsp oil, 1 tbsp lemon juice, honey, salt and pepper for a dressing.",
      "Toss everything together right before serving and top with cheese, egg or chickpeas."
    ]
  },
  {
    name: "Garlicky Sautéed Greens", cuisine: "Italian", emoji: "🥬", time: 10, serves: 2, meal: "dinner",
    need: [["any leafy green", "1 big bunch"], ["garlic", "3 cloves"]],
    opt: [["lemon", "a squeeze"], ["chili flakes", "a pinch"], ["soy sauce", "1 tsp"], ["butter", "1 tbsp"]],
    steps: [
      "Wash the greens and chop them, stripping out any tough stems (kale, chard, collards).",
      "Fry sliced garlic and chili in oil for 1 minute.",
      "Add the greens with a splash of water, cover and cook 2–6 minutes until tender (spinach is fastest, collards slowest).",
      "Season with salt and lemon or soy sauce."
    ]
  },
  {
    name: "Minestrone-Style Vegetable Soup", cuisine: "Italian", emoji: "🍲", time: 40, serves: 4, meal: "dinner",
    need: [["any soup vegetable", "5 cups, chopped"], ["onion", "1"]],
    opt: [["garlic", "2 cloves"], ["tomato", "1 can"], ["beans|lentils|chickpeas", "1 can"], ["pasta|rice", "½ cup"], ["parsley|basil", "chopped"], ["cheese", "to serve"]],
    steps: [
      "Soften the onion (and any celery or carrot) in oil for 6–8 minutes, then add the garlic.",
      "Add the harder vegetables (potato, squash, root veg) with tomatoes and 6 cups of water. Simmer 15 minutes.",
      "Add softer vegetables (zucchini, greens, peas, corn), beans and pasta. Simmer 10 minutes more.",
      "Season well and finish with herbs and cheese."
    ]
  },
  {
    name: "Vegetable Curry", cuisine: "Indian", emoji: "🍛", time: 35, serves: 4, meal: "dinner",
    need: [["any curry vegetable", "4 cups, chopped"], ["onion", "1"], ["curry powder", "1½ tbsp"]],
    opt: [["garlic", "3 cloves"], ["ginger", "1 tbsp"], ["tomato", "1 can"], ["coconut milk|yogurt", "1 can / 1 cup"], ["chickpeas|lentils", "1 can"], ["rice", "to serve"], ["lime|lemon", "a squeeze"]],
    steps: [
      "Fry the onion in oil for 6–8 minutes until golden, then add garlic, ginger and curry powder for 1 minute.",
      "Add the vegetables and stir to coat in the spices.",
      "Add the tomatoes and coconut milk (or 1½ cups water). Cover and simmer 15–20 minutes until the vegetables are tender.",
      "Season, add a squeeze of citrus and serve with rice."
    ]
  },
  {
    name: "Ratatouille", cuisine: "French", emoji: "🍆", time: 50, serves: 4, meal: "dinner",
    need: [["eggplant", "1"], ["zucchini|yellow squash", "2"], ["tomato", "1 can or 4 fresh"], ["onion", "1"]],
    opt: [["bell pepper", "1"], ["garlic", "3 cloves"], ["basil|parsley", "a handful"], ["bread", "to serve"]],
    steps: [
      "Cut everything into 2 cm chunks.",
      "Brown the eggplant in plenty of oil for 6–8 minutes and set aside, then do the same with the zucchini.",
      "Soften the onion and pepper for 8 minutes, add garlic, then the tomatoes.",
      "Return the eggplant and zucchini, cover and simmer gently for 20 minutes. Finish with herbs."
    ]
  },
  {
    name: "Aloo Gobi", cuisine: "Indian", emoji: "🥔", time: 35, serves: 3, meal: "dinner",
    need: [["potato", "2"], ["cauliflower", "1 small head"], ["onion", "1"], ["cumin|curry powder", "1–2 tsp"]],
    opt: [["tomato", "1"], ["garlic", "2 cloves"], ["ginger", "1 tsp"], ["chili pepper", "1, sliced"], ["peas", "½ cup"], ["parsley", "or cilantro, chopped"]],
    steps: [
      "Cut the potatoes into cubes and the cauliflower into small florets.",
      "Fry the cumin in oil for 30 seconds, then add the onion and cook until soft. Add garlic, ginger and chili.",
      "Add the potatoes, cauliflower, tomato, spices and salt. Stir well, add ¼ cup water and cover.",
      "Cook on low for 15–20 minutes, stirring now and then, until tender. Add peas for the last 3 minutes."
    ]
  },
  {
    name: "Butternut Squash Soup", cuisine: "American", emoji: "🎃", time: 40, serves: 4, meal: "lunch",
    need: [["butternut squash|pumpkin|kabocha squash|acorn squash|sweet potato", "1 kg"], ["onion", "1"]],
    opt: [["garlic", "2 cloves"], ["carrot", "1"], ["ginger", "1 tsp"], ["coconut milk|cream", "½ cup"], ["cumin|curry powder", "1 tsp"]],
    steps: [
      "Peel and chop the squash. Soften the onion and carrot in oil for 6 minutes, then add garlic and spices.",
      "Add the squash and 4 cups of water with a good pinch of salt. Simmer 20 minutes until very soft.",
      "Blend until smooth and stir in the coconut milk or cream. Season to taste."
    ]
  },
  {
    name: "Baked Sweet Potato", cuisine: "American", emoji: "🍠", time: 50, serves: 2, meal: "lunch",
    need: [["sweet potato|yam", "2"]],
    opt: [["butter", "1 tbsp"], ["beans", "½ can, warmed"], ["cheese", "grated"], ["yogurt", "a spoonful"], ["green onion", "sliced"], ["avocado", "diced"]],
    steps: [
      "Heat the oven to 200°C / 400°F.",
      "Prick the sweet potatoes all over with a fork, rub with oil and salt.",
      "Bake on a tray for 45–50 minutes until completely soft.",
      "Split open and fill with butter, beans, cheese, yogurt and green onion."
    ]
  },
  {
    name: "Zucchini Fritters", cuisine: "Greek", emoji: "🥒", time: 25, serves: 2, meal: "lunch",
    need: [["zucchini|yellow squash|carrot|sweet potato", "2 medium, grated"], ["egg", "1"], ["flour", "⅓ cup"]],
    opt: [["cheese", "¼ cup"], ["green onion", "2, sliced"], ["garlic", "1 clove"], ["yogurt", "to dip"], ["lemon", "wedges"]],
    steps: [
      "Grate the vegetables, toss with ½ tsp salt and leave 10 minutes. Squeeze out as much water as you can.",
      "Mix with the egg, flour, cheese, green onion and garlic.",
      "Fry spoonfuls in hot oil, flattening them, 3 minutes per side until golden.",
      "Serve with yogurt and lemon."
    ]
  },
  {
    name: "Crunchy Coleslaw", cuisine: "American", emoji: "🥗", time: 10, serves: 4, meal: "lunch",
    need: [["cabbage|red cabbage|napa cabbage|savoy cabbage", "½ head"], ["carrot", "2"], ["mayonnaise|yogurt", "⅓ cup"]],
    opt: [["lemon", "½"], ["honey|sugar", "1 tsp"], ["green onion|red onion", "a little, sliced"], ["apple", "1, cut into matchsticks"], ["jicama|radish|kohlrabi", "a handful, shredded"]],
    steps: [
      "Finely shred the cabbage and grate the carrots.",
      "Mix the mayo or yogurt with lemon juice, honey, salt and pepper.",
      "Toss everything together and let it sit 10 minutes before serving."
    ]
  },
  {
    name: "Cucumber Raita", cuisine: "Indian", emoji: "🥒", time: 5, serves: 3, meal: "snack",
    need: [["cucumber", "1"], ["yogurt", "1 cup"]],
    opt: [["cumin", "½ tsp, toasted"], ["garlic", "½ clove"], ["parsley", "or mint, chopped"], ["tomato|red onion", "a little, diced"]],
    steps: [
      "Grate the cucumber and squeeze out the excess water.",
      "Stir into the yogurt with salt, cumin and garlic.",
      "Top with herbs. Great with curry or as a dip."
    ]
  },
  {
    name: "Mango Lassi", cuisine: "Indian", emoji: "🥭", time: 5, serves: 2, meal: "snack",
    need: [["mango|peach|strawberry|banana", "1½ cups, chopped"], ["yogurt", "1 cup"]],
    opt: [["milk", "½ cup"], ["honey|sugar", "1–2 tbsp"], ["cinnamon", "a pinch (or cardamom)"]],
    steps: [
      "Blend the fruit, yogurt, milk and honey until very smooth.",
      "Add a few ice cubes and blend again.",
      "Pour into glasses and dust with spice."
    ]
  },
  {
    name: "Fruit Crumble", cuisine: "British", emoji: "🥧", time: 45, serves: 4, meal: "snack",
    need: [["any baking fruit", "4 cups, chopped"], ["flour", "¾ cup"], ["butter", "5 tbsp, cold"], ["sugar", "½ cup"]],
    opt: [["oats", "½ cup"], ["cinnamon", "1 tsp"], ["lemon", "a squeeze"], ["yogurt|cream", "to serve"]],
    steps: [
      "Heat the oven to 190°C / 375°F.",
      "Toss the fruit with 2 tbsp of the sugar and the lemon, and spread in a baking dish.",
      "Rub the butter into the flour, remaining sugar, oats and cinnamon until it looks like crumbs.",
      "Scatter over the fruit and bake 30–35 minutes until golden and bubbling."
    ]
  },

  // ===================== Indian =====================
  {
    name: "Dal Tadka", cuisine: "Indian", emoji: "🍛", time: 35, serves: 4, meal: "dinner",
    need: [["lentils", "1 cup"], ["onion", "1"], ["garlic", "4 cloves"], ["cumin", "1 tsp seeds or ground"]],
    opt: [["tomato", "1"], ["ginger", "1 tsp"], ["turmeric", "½ tsp"], ["chili pepper|chili flakes", "1 / a pinch"], ["butter", "1 tbsp (or ghee)"], ["cilantro", "chopped"], ["rice", "to serve"]],
    steps: [
      "Rinse the lentils and simmer in 3 cups of water with turmeric and salt for 20–25 minutes until soft. Whisk to make it creamy.",
      "In a small pan heat oil or butter, add cumin until it sizzles, then the onion until golden.",
      "Add garlic, ginger, chili and tomato and cook 3–4 minutes.",
      "Pour this 'tadka' into the dal, stir, and top with cilantro. Serve with rice."
    ]
  },
  {
    name: "Egg Curry", cuisine: "Indian", emoji: "🥚", time: 30, serves: 3, meal: "dinner",
    need: [["egg", "4–6"], ["onion", "2"], ["tomato", "2"], ["curry powder|garam masala", "1½ tbsp"]],
    opt: [["garlic", "3 cloves"], ["ginger", "1 tsp"], ["turmeric", "½ tsp"], ["coconut milk|yogurt", "½ cup"], ["cilantro", "chopped"], ["rice", "to serve"]],
    steps: [
      "Hard-boil the eggs for 10 minutes, peel, and make a few small slits in each.",
      "Fry the onion in oil until deep golden, then add garlic, ginger and the spices for 1 minute.",
      "Add the chopped tomatoes and cook until they break down, then add 1 cup water (or coconut milk) and simmer 5 minutes.",
      "Add the eggs and simmer 5 minutes more. Top with cilantro and serve with rice or bread."
    ]
  },
  {
    name: "Palak Paneer", cuisine: "Indian", emoji: "🥬", time: 30, serves: 3, meal: "dinner",
    need: [["spinach", "500 g"], ["paneer|tofu", "200 g, cubed"], ["onion", "1"], ["garlic", "3 cloves"]],
    opt: [["ginger", "1 tsp"], ["garam masala|curry powder", "1 tsp"], ["cumin", "½ tsp"], ["chili pepper", "1"], ["cream|yogurt", "3 tbsp"], ["tomato", "1"]],
    steps: [
      "Blanch the spinach in boiling water for 1 minute, cool in cold water, then blend to a smooth purée.",
      "Fry the cumin, then the onion until soft. Add garlic, ginger, chili and tomato and cook 3 minutes.",
      "Stir in the spinach purée and spices with a splash of water and simmer 5 minutes.",
      "Add the paneer (or tofu) and cream, warm through and season."
    ]
  },
  {
    name: "Home-Style Chicken Curry", cuisine: "Indian", emoji: "🍗", time: 45, serves: 4, meal: "dinner",
    need: [["chicken", "600 g, bite-sized"], ["onion", "2"], ["tomato", "2 or 1 can"], ["garlic", "4 cloves"], ["curry powder|garam masala", "2 tbsp"]],
    opt: [["ginger", "1 tbsp"], ["yogurt", "½ cup"], ["turmeric", "½ tsp"], ["chili pepper|chili powder", "to taste"], ["cilantro", "chopped"], ["rice", "to serve"]],
    steps: [
      "Fry the onions in oil for 10 minutes until deep golden.",
      "Add garlic, ginger and spices and cook 1 minute, then the tomatoes until they turn jammy.",
      "Add the chicken and stir to coat. Stir in the yogurt (if using) and ½ cup water.",
      "Cover and simmer 20 minutes until the chicken is cooked. Top with cilantro and serve with rice."
    ]
  },
  {
    name: "Masala Omelette", cuisine: "Indian", emoji: "🍳", time: 10, serves: 1, meal: "breakfast",
    need: [["egg", "2–3"], ["onion", "¼, finely chopped"]],
    opt: [["tomato", "¼, finely chopped"], ["chili pepper", "1, finely chopped"], ["cilantro", "chopped"], ["turmeric", "a pinch"], ["bread", "to serve"]],
    steps: [
      "Beat the eggs with salt, turmeric, onion, tomato, chili and cilantro.",
      "Pour into a hot oiled pan and spread out evenly.",
      "Cook until set underneath, flip, and cook 1 minute more. Serve with toast."
    ]
  },
  {
    name: "Bhindi Masala", cuisine: "Indian", emoji: "🌿", time: 25, serves: 2, meal: "dinner",
    need: [["okra", "300 g"], ["onion", "1"], ["cumin|curry powder", "1 tsp"]],
    opt: [["tomato", "1"], ["turmeric", "½ tsp"], ["chili powder", "½ tsp"], ["garlic", "2 cloves"], ["garam masala", "½ tsp"], ["lemon", "a squeeze"]],
    steps: [
      "Wash and fully dry the okra, then slice into rounds (dry okra = less sticky).",
      "Fry the okra in a hot pan with oil for 8–10 minutes until lightly browned. Set aside.",
      "Fry cumin, then the onion, garlic and tomato until soft. Add the spices.",
      "Return the okra, toss for 2–3 minutes, season and finish with lemon."
    ]
  },
  {
    name: "Jeera Rice", cuisine: "Indian", emoji: "🍚", time: 25, serves: 3, meal: "dinner",
    need: [["rice", "1 cup (basmati is best)"], ["cumin", "1 tsp seeds"]],
    opt: [["butter", "1 tbsp (or ghee)"], ["onion", "½, sliced"], ["cilantro", "chopped"], ["peas", "½ cup"]],
    steps: [
      "Rinse the rice until the water runs clear and soak 15 minutes if you have time.",
      "Heat butter or oil, add the cumin seeds until they sizzle (and the onion until golden).",
      "Add the drained rice, stir 1 minute, then add 1¾ cups water and salt.",
      "Cover and cook on low for 12 minutes, rest 5 minutes, then fluff and add cilantro."
    ]
  },

  // ===================== Thai =====================
  {
    name: "Thai Green Curry", cuisine: "Thai", emoji: "🍛", time: 25, serves: 3, meal: "dinner",
    need: [["thai curry paste", "2–3 tbsp"], ["coconut milk", "1 can"], ["any stir-fry vegetable", "3 cups"]],
    opt: [["chicken|tofu", "300 g"], ["fish sauce|soy sauce", "1 tbsp"], ["sugar|honey", "1 tsp"], ["lime", "½"], ["basil", "a handful"], ["rice", "to serve"]],
    steps: [
      "Fry the curry paste in a little oil for 1 minute until fragrant.",
      "Add half the coconut milk and stir until it bubbles, then add the chicken or tofu and cook 5 minutes.",
      "Add the vegetables and the rest of the coconut milk and simmer until just tender.",
      "Season with fish sauce (or soy), sugar and lime, stir in basil and serve with rice."
    ]
  },
  {
    name: "Pad Kra Pao (Thai Basil Stir-Fry)", cuisine: "Thai", emoji: "🌶️", time: 15, serves: 2, meal: "dinner",
    need: [["chicken|tofu|ground beef", "300 g, minced or chopped"], ["garlic", "4 cloves"], ["soy sauce", "1 tbsp"], ["basil", "a big handful"]],
    opt: [["chili pepper", "2–4"], ["fish sauce", "1 tsp"], ["sugar", "1 tsp"], ["green beans|bell pepper|onion", "a handful"], ["egg", "1 per person, fried"], ["rice", "to serve"]],
    steps: [
      "Pound or finely chop the garlic and chilies together.",
      "Fry them in hot oil for 20 seconds, then add the meat or tofu and stir-fry until cooked.",
      "Add any vegetables, then the soy sauce, fish sauce, sugar and a splash of water.",
      "Turn off the heat and stir in the basil. Serve over rice with a crispy fried egg."
    ]
  },
  {
    name: "Tom Kha (Coconut Soup)", cuisine: "Thai", emoji: "🥥", time: 25, serves: 3, meal: "lunch",
    need: [["coconut milk", "1 can"], ["mushroom", "150 g"], ["lime", "1–2"]],
    opt: [["chicken|tofu", "250 g, sliced"], ["ginger", "a thumb, sliced"], ["fish sauce|soy sauce", "1–2 tbsp"], ["chili pepper", "1–2"], ["sugar", "1 tsp"], ["cilantro", "chopped"], ["thai curry paste", "1 tsp"]],
    steps: [
      "Simmer the coconut milk with 1 cup water and the ginger for 5 minutes.",
      "Add the chicken or tofu and mushrooms and simmer gently 8–10 minutes.",
      "Season with fish sauce (or soy), sugar and lots of lime juice — it should taste sour, salty and creamy.",
      "Top with chili and cilantro."
    ]
  },
  {
    name: "Easy Pad Thai", cuisine: "Thai", emoji: "🍜", time: 25, serves: 2, meal: "dinner",
    need: [["rice noodles|pasta", "200 g"], ["egg", "2"], ["soy sauce|fish sauce", "2 tbsp"], ["lime", "1"]],
    opt: [["tofu|chicken", "200 g"], ["bean sprouts", "a handful"], ["green onion", "3"], ["peanuts", "a handful, crushed"], ["sugar|honey", "1 tbsp"], ["garlic", "2 cloves"], ["chili flakes", "a pinch"], ["tamarind", "1 tbsp paste"]],
    steps: [
      "Soak or cook the noodles until just tender and drain.",
      "Mix the sauce: soy or fish sauce, sugar, lime juice (and tamarind).",
      "Stir-fry the garlic and tofu or chicken, then push to the side and scramble the eggs.",
      "Add the noodles and sauce and toss for 2 minutes. Add bean sprouts and green onion.",
      "Serve with peanuts, chili flakes and lime wedges."
    ]
  },
  {
    name: "Mango Sticky Rice", cuisine: "Thai", emoji: "🥭", time: 35, serves: 2, meal: "snack",
    need: [["rice", "1 cup (sticky or short-grain is best)"], ["mango", "1–2 ripe"], ["coconut milk", "1 can"], ["sugar", "3 tbsp"]],
    opt: [["sesame seeds", "to sprinkle"]],
    steps: [
      "Cook the rice until soft and a little sticky.",
      "Warm ¾ of the coconut milk with the sugar and a pinch of salt, then stir it into the hot rice. Rest 15 minutes.",
      "Simmer the remaining coconut milk with a pinch of salt and sugar until slightly thick.",
      "Serve the rice with sliced mango, drizzle with the sauce and sprinkle with sesame seeds."
    ]
  },
  {
    name: "Thai Cucumber Salad", cuisine: "Thai", emoji: "🥒", time: 10, serves: 2, meal: "lunch",
    need: [["cucumber", "1 large"], ["lime", "1"], ["sugar|honey", "1 tsp"]],
    opt: [["fish sauce|soy sauce", "1 tbsp"], ["chili pepper", "1, sliced"], ["red onion", "¼, sliced"], ["peanuts", "a handful"], ["cilantro|mint", "chopped"], ["garlic", "1 clove"]],
    steps: [
      "Slice the cucumber thinly or smash it into chunks.",
      "Whisk lime juice, fish sauce (or soy), sugar, garlic and chili.",
      "Toss with the cucumber and onion and top with peanuts and herbs."
    ]
  },

  // ===================== Chinese =====================
  {
    name: "Tomato & Egg Stir-Fry", cuisine: "Chinese", emoji: "🍅", time: 15, serves: 2, meal: "dinner",
    need: [["tomato", "3"], ["egg", "4"]],
    opt: [["sugar", "1 tsp"], ["green onion", "2"], ["soy sauce", "1 tsp"], ["garlic", "1 clove"], ["rice", "to serve"]],
    steps: [
      "Beat the eggs with a pinch of salt. Cut the tomatoes into wedges.",
      "Scramble the eggs in hot oil until just set and remove.",
      "Fry the garlic and tomatoes until they soften and release juice. Add sugar, soy and 2 tbsp water.",
      "Return the eggs, toss, and top with green onion. Serve over rice."
    ]
  },
  {
    name: "Garlic Bok Choy", cuisine: "Chinese", emoji: "🥬", time: 10, serves: 2, meal: "dinner",
    need: [["bok choy|gai lan|napa cabbage|any leafy green", "400 g"], ["garlic", "4 cloves"]],
    opt: [["soy sauce", "1 tbsp"], ["sesame oil", "1 tsp"], ["ginger", "1 tsp"], ["chili flakes", "a pinch"], ["sugar", "a pinch"]],
    steps: [
      "Wash and halve or chop the greens.",
      "Fry the garlic and ginger in hot oil for 20 seconds.",
      "Add the greens with 2 tbsp water and toss until just wilted but still crunchy.",
      "Season with soy sauce, sugar and a few drops of sesame oil."
    ]
  },
  {
    name: "Mapo Tofu", cuisine: "Chinese", emoji: "🌶️", time: 20, serves: 2, meal: "dinner",
    need: [["tofu", "400 g, cubed"], ["garlic", "3 cloves"], ["soy sauce", "2 tbsp"]],
    opt: [["ground beef", "100 g"], ["ginger", "1 tsp"], ["chili flakes|chili pepper", "1–2 tsp"], ["green onion", "2"], ["sesame oil", "1 tsp"], ["sugar", "1 tsp"], ["rice", "to serve"]],
    steps: [
      "Fry the beef (if using) until browned, then add garlic, ginger and chili for 1 minute.",
      "Add the soy sauce, sugar and 1 cup water and bring to a simmer.",
      "Gently add the tofu and simmer 5 minutes. Thicken with 1 tsp cornflour mixed in water if you have it.",
      "Finish with sesame oil and green onion. Serve over rice."
    ]
  },
  {
    name: "Kung Pao Chicken or Tofu", cuisine: "Chinese", emoji: "🥜", time: 20, serves: 2, meal: "dinner",
    need: [["chicken|tofu", "400 g, cubed"], ["soy sauce", "2 tbsp"], ["garlic", "3 cloves"], ["chili flakes|chili pepper", "1 tsp / a few dried"]],
    opt: [["peanuts", "⅓ cup"], ["vinegar", "1 tbsp"], ["sugar|honey", "1 tbsp"], ["green onion", "3"], ["bell pepper", "1"], ["ginger", "1 tsp"], ["rice", "to serve"]],
    steps: [
      "Mix soy sauce, vinegar, sugar and 2 tbsp water for the sauce.",
      "Stir-fry the chicken or tofu in hot oil until browned and cooked. Remove.",
      "Fry the chilies, garlic, ginger and pepper for 1 minute.",
      "Return the chicken or tofu, add the sauce and peanuts and toss until glossy. Add green onion and serve with rice."
    ]
  },
  {
    name: "Vegetable Chow Mein", cuisine: "Chinese", emoji: "🍜", time: 20, serves: 2, meal: "dinner",
    need: [["instant noodles|pasta|rice noodles", "200 g"], ["soy sauce", "3 tbsp"], ["any stir-fry vegetable", "3 cups, sliced"]],
    opt: [["garlic", "2 cloves"], ["chicken|tofu", "200 g"], ["sesame oil", "1 tsp"], ["green onion", "3"], ["bean sprouts", "a handful"], ["sugar", "1 tsp"]],
    steps: [
      "Cook the noodles until just tender, drain and toss with a little oil.",
      "Stir-fry the chicken or tofu (if using) until cooked, then the garlic and vegetables for 3 minutes.",
      "Add the noodles, soy sauce and sugar and toss over high heat for 2 minutes.",
      "Finish with sesame oil, bean sprouts and green onion."
    ]
  },

  // ===================== Mexican =====================
  {
    name: "Huevos Rancheros", cuisine: "Mexican", emoji: "🍳", time: 20, serves: 2, meal: "breakfast",
    need: [["egg", "4"], ["tortilla", "4 small"], ["tomato", "3 or 1 can"]],
    opt: [["onion", "½"], ["chili pepper|jalapeño", "1"], ["garlic", "1 clove"], ["beans", "1 can, warmed"], ["cheese", "crumbled"], ["avocado", "sliced"], ["cilantro", "chopped"]],
    steps: [
      "Simmer chopped tomatoes, onion, garlic and chili with salt for 10 minutes to make a quick salsa.",
      "Warm the tortillas in a dry pan.",
      "Fry the eggs sunny-side up.",
      "Layer tortillas, beans, eggs and salsa, then top with cheese, avocado and cilantro."
    ]
  },
  {
    name: "Bean & Rice Burrito", cuisine: "Mexican", emoji: "🌯", time: 20, serves: 2, meal: "lunch",
    need: [["tortilla", "2 large"], ["beans", "1 can"], ["rice", "1 cup, cooked"]],
    opt: [["cheese", "grated"], ["onion", "½"], ["cumin|chili powder", "1 tsp"], ["tomato", "diced"], ["avocado", "sliced"], ["lettuce", "shredded"], ["yogurt|cream", "as sour cream"], ["lime", "a squeeze"]],
    steps: [
      "Fry the onion, then add the drained beans and spices with a splash of water. Mash lightly.",
      "Warm the tortillas.",
      "Fill each with rice, beans, cheese and toppings.",
      "Fold in the sides and roll up tightly. Toast seam-side down in a pan for a crisp finish."
    ]
  },
  {
    name: "Mexican Street Corn (Elote)", cuisine: "Mexican", emoji: "🌽", time: 15, serves: 2, meal: "snack",
    need: [["corn", "2–4 cobs or 2 cups kernels"], ["mayonnaise|yogurt", "2 tbsp"], ["cheese", "¼ cup, crumbled"]],
    opt: [["chili powder|paprika", "½ tsp"], ["lime", "1"], ["cilantro", "chopped"], ["garlic", "½ clove"]],
    steps: [
      "Grill, broil or pan-char the corn until blackened in spots.",
      "Brush with mayo (mixed with garlic).",
      "Roll in or sprinkle with cheese and dust with chili powder.",
      "Squeeze over lime and add cilantro."
    ]
  },
  {
    name: "Pico de Gallo", cuisine: "Mexican", emoji: "🍅", time: 10, serves: 4, meal: "snack",
    need: [["tomato", "4"], ["onion", "½"], ["lime", "1"]],
    opt: [["chili pepper|jalapeño", "1"], ["cilantro", "a handful"], ["garlic", "1 small clove"], ["tortilla", "for chips"]],
    steps: [
      "Finely dice the tomatoes, onion and chili.",
      "Mix with chopped cilantro, lime juice and a good pinch of salt.",
      "Let it sit 10 minutes for the flavors to come together. Serve with chips or tacos."
    ]
  },

  // ===================== Italian =====================
  {
    name: "Tomato Bruschetta", cuisine: "Italian", emoji: "🍞", time: 10, serves: 3, meal: "snack",
    need: [["bread", "6 slices"], ["tomato", "3"], ["garlic", "1 clove"]],
    opt: [["basil", "a handful"], ["vinegar", "1 tsp"], ["red onion", "a little, finely diced"], ["cheese", "mozzarella or parmesan"]],
    steps: [
      "Dice the tomatoes and mix with torn basil, oil, salt and a drop of vinegar.",
      "Toast or grill the bread and rub each slice with a cut garlic clove.",
      "Spoon the tomatoes on top and serve straight away."
    ]
  },
  {
    name: "Basil Pesto Pasta", cuisine: "Italian", emoji: "🌿", time: 15, serves: 2, meal: "dinner",
    need: [["pasta", "200 g"], ["basil", "2 big handfuls"], ["garlic", "1 clove"], ["cheese", "½ cup parmesan"]],
    opt: [["peanuts", "2 tbsp (or pine nuts)"], ["lemon", "a squeeze"], ["any leafy green", "a handful, to bulk it out"], ["cherry tomato", "halved"]],
    steps: [
      "Cook the pasta, saving a mug of the cooking water.",
      "Blend the basil, garlic, cheese, nuts, lemon and ⅓ cup oil into a paste. Season.",
      "Toss the pasta with the pesto, adding pasta water until it's silky.",
      "Top with cherry tomatoes and more cheese."
    ]
  },
  {
    name: "Vegetable Frittata", cuisine: "Italian", emoji: "🍳", time: 25, serves: 4, meal: "breakfast",
    need: [["egg", "6–8"], ["any vegetable for roasting|any leafy green", "2 cups, chopped"]],
    opt: [["cheese", "½ cup"], ["onion", "1"], ["milk|cream", "¼ cup"], ["basil|parsley", "chopped"], ["potato", "1, cooked"]],
    steps: [
      "Heat the oven grill (broiler).",
      "Fry the onion and vegetables in an ovenproof pan until soft.",
      "Beat the eggs with milk, cheese, salt and pepper, pour over, and cook on low for 6–8 minutes until the edges set.",
      "Finish under the grill for 2–3 minutes until puffed and golden. Slice into wedges."
    ]
  },
  {
    name: "Simple Risotto", cuisine: "Italian", emoji: "🍚", time: 35, serves: 3, meal: "dinner",
    need: [["rice", "1½ cups (arborio is best)"], ["onion", "1"], ["butter", "2 tbsp"], ["cheese", "½ cup parmesan"]],
    opt: [["mushroom", "200 g"], ["peas", "1 cup"], ["garlic", "2 cloves"], ["lemon", "a squeeze"], ["any leafy green", "a handful"], ["butternut squash|pumpkin", "2 cups, diced"]],
    steps: [
      "Keep 5 cups of salted water or stock hot in a pot.",
      "Soften the onion (and mushrooms or squash) in butter, add garlic, then the rice and stir 1 minute.",
      "Add the hot liquid a ladle at a time, stirring often, for 18–20 minutes until creamy and just tender.",
      "Stir in peas or greens, then the cheese and a knob of butter. Rest 2 minutes and serve."
    ]
  },

  // ===================== Japanese =====================
  {
    name: "Teriyaki Bowl", cuisine: "Japanese", emoji: "🍱", time: 20, serves: 2, meal: "dinner",
    need: [["chicken|tofu|salmon", "400 g"], ["soy sauce", "3 tbsp"], ["honey|sugar", "2 tbsp"]],
    opt: [["garlic", "1 clove"], ["ginger", "1 tsp"], ["vinegar", "1 tsp"], ["rice", "to serve"], ["green onion", "sliced"], ["sesame seeds", "to sprinkle"], ["broccoli|any stir-fry vegetable", "to serve"]],
    steps: [
      "Mix soy sauce, honey, garlic, ginger, vinegar and 2 tbsp water.",
      "Pan-fry the chicken, tofu or salmon until golden and cooked through.",
      "Pour in the sauce and let it bubble 2–3 minutes, turning, until sticky.",
      "Serve on rice with vegetables, green onion and sesame seeds."
    ]
  },
  {
    name: "Miso Soup", cuisine: "Japanese", emoji: "🥣", time: 10, serves: 2, meal: "lunch",
    need: [["miso", "2–3 tbsp"]],
    opt: [["tofu", "150 g, cubed"], ["seaweed|nori|kelp", "a little"], ["green onion", "2"], ["mushroom", "a handful"], ["any leafy green", "a handful"]],
    steps: [
      "Bring 3 cups of water (or dashi) to a gentle simmer with the seaweed and mushrooms.",
      "Add the tofu and greens and heat for 2 minutes.",
      "Turn off the heat. Mix the miso with a ladle of the hot water until smooth, then stir it in (don't boil miso).",
      "Top with green onion."
    ]
  },
  {
    name: "Tamagoyaki (Sweet Rolled Omelette)", cuisine: "Japanese", emoji: "🥚", time: 15, serves: 2, meal: "breakfast",
    need: [["egg", "4"], ["soy sauce", "1 tsp"], ["sugar", "1 tbsp"]],
    opt: [["green onion", "1, finely sliced"], ["nori", "1 sheet"]],
    steps: [
      "Beat the eggs with sugar, soy sauce and a pinch of salt.",
      "Pour a thin layer into an oiled pan over medium-low heat.",
      "When almost set, roll it up to one side. Oil the pan, pour another thin layer, lifting the roll so egg runs under it.",
      "Roll again and repeat until the egg is used up. Rest 2 minutes and slice."
    ]
  },
  {
    name: "Sunomono (Cucumber Salad)", cuisine: "Japanese", emoji: "🥒", time: 10, serves: 2, meal: "lunch",
    need: [["cucumber", "1"], ["vinegar", "3 tbsp (rice vinegar is best)"], ["sugar|honey", "1 tbsp"]],
    opt: [["soy sauce", "1 tsp"], ["sesame seeds", "1 tsp"], ["seaweed", "a little, soaked"], ["ginger", "a little, grated"]],
    steps: [
      "Slice the cucumber very thinly, sprinkle with salt and leave 5 minutes, then squeeze out the water.",
      "Stir the sugar into the vinegar and soy sauce until dissolved.",
      "Toss the cucumber with the dressing and top with sesame seeds."
    ]
  },
  {
    name: "Onigiri (Rice Balls)", cuisine: "Japanese", emoji: "🍙", time: 30, serves: 2, meal: "lunch",
    need: [["rice", "1½ cups (short-grain is best)"]],
    opt: [["nori", "2 sheets"], ["tuna", "1 can"], ["mayonnaise", "1 tbsp"], ["salmon", "cooked, flaked"], ["sesame seeds", "to sprinkle"], ["soy sauce", "a little"]],
    steps: [
      "Cook the rice and let it cool until you can handle it.",
      "Mix the tuna with mayo and a drop of soy sauce for the filling.",
      "Wet and salt your hands, take a handful of rice, press a hollow in the middle, add filling and close it up.",
      "Press into a triangle and wrap with a strip of nori."
    ]
  },

  // ===================== Korean =====================
  {
    name: "Kimchi Fried Rice", cuisine: "Korean", emoji: "🍚", time: 15, serves: 2, meal: "dinner",
    need: [["rice", "2 cups, cooked"], ["kimchi", "1 cup, chopped"]],
    opt: [["egg", "2, fried"], ["gochujang", "1 tbsp"], ["green onion", "2"], ["sesame oil", "1 tsp"], ["bacon", "3 strips"], ["cheese", "a handful"], ["soy sauce", "1 tsp"]],
    steps: [
      "Fry the bacon (if using), then add the kimchi and cook 3 minutes.",
      "Add the rice, gochujang, soy sauce and a splash of kimchi juice, and stir-fry until hot and a little crispy.",
      "Stir in sesame oil and green onion.",
      "Serve topped with a fried egg (and melted cheese if you like)."
    ]
  },
  {
    name: "Bibimbap", cuisine: "Korean", emoji: "🍲", time: 30, serves: 2, meal: "dinner",
    need: [["rice", "2 cups, cooked"], ["egg", "2"], ["any stir-fry vegetable|any leafy green", "2–3 kinds"]],
    opt: [["carrot", "1, matchsticks"], ["bean sprouts", "a handful"], ["zucchini", "½, sliced"], ["mushroom", "a handful"], ["cucumber", "½"], ["gochujang", "2 tbsp"], ["sesame oil", "1 tbsp"], ["ground beef|tofu", "150 g"], ["garlic", "2 cloves"], ["soy sauce", "1 tbsp"]],
    steps: [
      "Quickly sauté each vegetable separately with a little garlic, salt and sesame oil.",
      "Fry the beef or tofu with soy sauce and garlic.",
      "Fry the eggs sunny-side up.",
      "Put rice in bowls, arrange everything on top with the egg in the middle, and add gochujang. Mix it all up before eating."
    ]
  },
  {
    name: "Gyeran Jjim (Steamed Egg)", cuisine: "Korean", emoji: "🥚", time: 15, serves: 2, meal: "breakfast",
    need: [["egg", "3"]],
    opt: [["green onion", "1"], ["sesame oil", "a few drops"], ["sesame seeds", "a pinch"], ["soy sauce", "a splash"]],
    steps: [
      "Whisk the eggs with ¾ cup water and a pinch of salt.",
      "Pour into a small pot or heatproof bowl over low heat, stirring gently until it starts to set.",
      "Add green onion, cover and cook on the lowest heat for 5–7 minutes until puffed and soft.",
      "Drizzle with sesame oil and serve."
    ]
  },
  {
    name: "Bulgogi-Style Bowl", cuisine: "Korean", emoji: "🥩", time: 20, serves: 2, meal: "dinner",
    need: [["ground beef|tofu", "400 g"], ["soy sauce", "3 tbsp"], ["garlic", "3 cloves"], ["sugar|honey", "1 tbsp"]],
    opt: [["ginger", "1 tsp"], ["sesame oil", "1 tsp"], ["green onion", "3"], ["carrot", "1, matchsticks"], ["gochujang", "1 tbsp"], ["rice", "to serve"], ["sesame seeds", "to sprinkle"], ["apple|pear", "¼, grated"]],
    steps: [
      "Mix soy sauce, sugar, garlic, ginger, sesame oil and grated apple or pear.",
      "Brown the beef (or crumbled tofu) in a hot pan.",
      "Add the sauce and carrot and cook until it's sticky and caramelized.",
      "Serve over rice with green onion and sesame seeds."
    ]
  },

  // ===================== Middle Eastern =====================
  {
    name: "Baked Falafel", cuisine: "Middle Eastern", emoji: "🧆", time: 35, serves: 3, meal: "lunch",
    need: [["chickpeas", "1 can, drained"], ["onion", "½"], ["garlic", "2 cloves"], ["flour", "2 tbsp"]],
    opt: [["parsley|cilantro", "a big handful"], ["cumin", "1 tsp"], ["baking powder", "½ tsp"], ["bread", "pita, to serve"], ["tahini|yogurt", "for sauce"], ["tomato|cucumber|lettuce", "to serve"]],
    steps: [
      "Heat the oven to 200°C / 400°F.",
      "Pat the chickpeas dry and pulse with onion, garlic, herbs, cumin and salt until coarse (not a paste). Stir in the flour and baking powder.",
      "Shape into small patties, brush with oil and bake 20–25 minutes, flipping halfway.",
      "Serve in pita with salad and tahini or yogurt sauce."
    ]
  },
  {
    name: "Baba Ganoush", cuisine: "Middle Eastern", emoji: "🍆", time: 40, serves: 4, meal: "snack",
    need: [["eggplant", "2"], ["lemon", "1"], ["garlic", "1 clove"]],
    opt: [["tahini", "3 tbsp"], ["cumin", "½ tsp"], ["parsley", "chopped"], ["pomegranate", "seeds, to top"], ["bread", "to dip"]],
    steps: [
      "Char the eggplants over a gas flame or under a hot grill, turning, until collapsed and smoky (25–30 minutes).",
      "Let cool, then scoop out the flesh and drain off excess liquid.",
      "Mash with tahini, lemon juice, garlic, cumin and salt.",
      "Drizzle with oil and top with parsley and pomegranate."
    ]
  },

  // ===================== Greek =====================
  {
    name: "Tzatziki", cuisine: "Greek", emoji: "🥒", time: 10, serves: 4, meal: "snack",
    need: [["yogurt", "1 cup (Greek is best)"], ["cucumber", "½"], ["garlic", "1 clove"]],
    opt: [["lemon", "a squeeze"], ["dill|mint", "chopped"], ["bread|carrot", "to dip"]],
    steps: [
      "Grate the cucumber and squeeze out as much water as you can.",
      "Mix with the yogurt, grated garlic, lemon, herbs, salt and a drizzle of oil.",
      "Chill 10 minutes and serve as a dip or sauce."
    ]
  },
  {
    name: "Greek Lemon Potatoes", cuisine: "Greek", emoji: "🍋", time: 55, serves: 4, meal: "dinner",
    need: [["potato", "1 kg"], ["lemon", "2"], ["garlic", "4 cloves"]],
    opt: [["oregano", "2 tsp"], ["chicken", "4 thighs, to roast alongside"], ["parsley", "chopped"]],
    steps: [
      "Heat the oven to 200°C / 400°F.",
      "Cut the potatoes into wedges and put in a dish with lemon juice, garlic, oregano, ⅓ cup oil, 1 cup water and plenty of salt.",
      "Roast 45–50 minutes, turning once, until the liquid is absorbed and the edges are crisp.",
      "Squeeze over more lemon and add parsley."
    ]
  },

  // ===================== French =====================
  {
    name: "Crêpes", cuisine: "French", emoji: "🥞", time: 25, serves: 3, meal: "breakfast",
    need: [["flour", "1 cup"], ["egg", "2"], ["milk", "1¼ cups"]],
    opt: [["butter", "2 tbsp, melted"], ["sugar", "1 tbsp"], ["lemon", "to serve"], ["any fruit", "to fill"], ["honey", "to drizzle"], ["cheese", "for savory crêpes"]],
    steps: [
      "Whisk the flour, eggs, milk, melted butter, sugar and a pinch of salt until smooth. Rest 10 minutes.",
      "Heat a lightly buttered pan and pour in a small ladle of batter, swirling to coat thinly.",
      "Cook 1 minute until the edges lift, flip, and cook 30 seconds more.",
      "Fill with lemon and sugar, fruit, honey or cheese."
    ]
  },
  {
    name: "French Onion Soup", cuisine: "French", emoji: "🧅", time: 60, serves: 3, meal: "dinner",
    need: [["onion", "4 large"], ["butter", "3 tbsp"]],
    opt: [["bread", "3 slices"], ["cheese", "1 cup, grated"], ["flour", "1 tbsp"], ["sugar", "a pinch"], ["garlic", "1 clove"]],
    steps: [
      "Slice the onions thinly and cook slowly in butter with a pinch of salt and sugar for 35–40 minutes, until deep brown.",
      "Stir in the garlic and flour, then 4 cups of water or stock. Simmer 15 minutes and season well.",
      "Ladle into ovenproof bowls, top with toasted bread and lots of cheese.",
      "Grill until bubbling and golden."
    ]
  },

  // ===================== Spanish =====================
  {
    name: "Patatas Bravas", cuisine: "Spanish", emoji: "🥔", time: 40, serves: 3, meal: "snack",
    need: [["potato", "4"], ["tomato", "1 can or 3 fresh"], ["paprika", "2 tsp"]],
    opt: [["garlic", "2 cloves"], ["onion", "½"], ["chili flakes", "½ tsp"], ["mayonnaise", "with garlic, to serve"], ["vinegar", "1 tsp"]],
    steps: [
      "Heat the oven to 220°C / 425°F. Cube the potatoes, toss with oil and salt and roast 30–35 minutes until crisp.",
      "Meanwhile fry onion and garlic, add paprika and chili, then the tomatoes and vinegar. Simmer 10 minutes and blend smooth.",
      "Spoon the spicy sauce over the potatoes and add dollops of garlic mayo."
    ]
  },
  {
    name: "Gazpacho", cuisine: "Spanish", emoji: "🍅", time: 15, serves: 4, meal: "lunch",
    need: [["tomato", "1 kg, very ripe"], ["cucumber", "½"], ["garlic", "1 clove"]],
    opt: [["bell pepper", "1"], ["bread", "1 slice"], ["vinegar", "1–2 tbsp"], ["red onion|onion", "¼"]],
    steps: [
      "Roughly chop all the vegetables and soak the bread in a little water.",
      "Blend everything with ⅓ cup oil, vinegar and salt until very smooth.",
      "Chill for at least 1 hour and serve cold with a drizzle of oil."
    ]
  },

  // ===================== British =====================
  {
    name: "Beans on Toast", cuisine: "British", emoji: "🫘", time: 10, serves: 2, meal: "breakfast",
    need: [["beans", "1 can"], ["bread", "4 slices"], ["tomato", "1 small can or 2 fresh"]],
    opt: [["butter", "for toast"], ["cheese", "grated"], ["onion", "a little"], ["paprika", "a pinch"], ["sugar", "1 tsp"]],
    steps: [
      "Simmer the beans with the tomatoes, a pinch of sugar, paprika and salt for 8 minutes until saucy.",
      "Toast and butter the bread.",
      "Pile the beans on the toast and top with grated cheese."
    ]
  },
  {
    name: "Cottage Pie", cuisine: "British", emoji: "🥧", time: 60, serves: 4, meal: "dinner",
    need: [["ground beef", "500 g"], ["potato", "1 kg"], ["onion", "1"], ["carrot", "2"]],
    opt: [["peas", "1 cup"], ["butter", "3 tbsp"], ["milk", "½ cup"], ["tomato", "2 tbsp paste or 1 chopped"], ["cheese", "grated"], ["garlic", "2 cloves"]],
    steps: [
      "Boil the potatoes until tender and mash with butter, milk and salt.",
      "Brown the beef with the onion, carrot and garlic. Add tomato, peas and ½ cup water and simmer 15 minutes.",
      "Spread the beef in a baking dish, top with mash and rough it up with a fork. Add cheese if you like.",
      "Bake at 200°C / 400°F for 20–25 minutes until golden."
    ]
  },
  {
    name: "Bangers & Mash", cuisine: "British", emoji: "🌭", time: 35, serves: 2, meal: "dinner",
    need: [["sausage", "4–6"], ["potato", "600 g"], ["onion", "2"]],
    opt: [["butter", "3 tbsp"], ["milk", "¼ cup"], ["flour", "1 tbsp"], ["mustard", "1 tsp"], ["peas", "to serve"]],
    steps: [
      "Boil the potatoes and mash with butter, milk, mustard and salt.",
      "Fry the sausages slowly for 15 minutes, turning, until browned and cooked through.",
      "In the same pan cook the sliced onions until soft and golden. Stir in the flour, then 1 cup water and simmer into a gravy.",
      "Serve the sausages on the mash with the onion gravy and peas."
    ]
  },
  {
    name: "Bubble & Squeak", cuisine: "British", emoji: "🥔", time: 25, serves: 2, meal: "breakfast",
    need: [["potato", "3, cooked"], ["cabbage|brussels sprouts|kale|savoy cabbage", "2 cups, cooked"]],
    opt: [["onion", "½"], ["butter", "1 tbsp"], ["egg", "1 per person, fried"], ["bacon", "to serve"]],
    steps: [
      "Roughly mash the potatoes and mix with the chopped greens and fried onion. Season well.",
      "Press into a hot buttered pan and cook without moving for 5–6 minutes until a crust forms.",
      "Flip in sections and crisp the other side.",
      "Serve with a fried egg."
    ]
  },
  {
    name: "Cheese on Toast", cuisine: "British", emoji: "🧀", time: 8, serves: 1, meal: "snack",
    need: [["bread", "2 slices"], ["cheese", "a big handful, grated"]],
    opt: [["mustard", "½ tsp"], ["onion|green onion", "a little"], ["tomato", "slices"], ["milk", "1 tbsp"]],
    steps: [
      "Toast the bread lightly on both sides.",
      "Mix the cheese with mustard and a splash of milk (this is a quick Welsh rarebit).",
      "Spread over the toast, add tomato if you like, and grill until bubbling and spotty brown."
    ]
  },
  {
    name: "Scones", cuisine: "British", emoji: "🥐", time: 30, serves: 8, meal: "snack",
    need: [["flour", "2 cups"], ["butter", "5 tbsp, cold"], ["milk", "⅔ cup"], ["baking powder", "1 tbsp"]],
    opt: [["sugar", "2 tbsp"], ["egg", "1, for glazing"], ["raisins", "⅓ cup"], ["berries", "jam, to serve"], ["cream", "to serve"]],
    steps: [
      "Heat the oven to 220°C / 425°F.",
      "Rub the butter into the flour, baking powder, sugar and a pinch of salt until crumbly. Stir in raisins.",
      "Add milk and mix gently into a soft dough. Pat 3 cm thick and cut into rounds.",
      "Brush with egg and bake 12–14 minutes until risen and golden. Serve with jam and cream."
    ]
  },

  // ===================== More Spanish =====================
  {
    name: "Gambas al Ajillo (Garlic Shrimp)", cuisine: "Spanish", emoji: "🦐", time: 15, serves: 2, meal: "dinner",
    need: [["shrimp", "300 g, peeled"], ["garlic", "6 cloves"]],
    opt: [["chili flakes", "½ tsp"], ["paprika", "½ tsp"], ["parsley", "chopped"], ["lemon", "a squeeze"], ["bread", "to mop up"]],
    steps: [
      "Gently heat ⅓ cup oil with sliced garlic and chili until the garlic is just golden.",
      "Add the shrimp and paprika and cook 2–3 minutes until pink.",
      "Season, squeeze over lemon and add parsley. Serve sizzling with bread."
    ]
  },
  {
    name: "Pan con Tomate", cuisine: "Spanish", emoji: "🍅", time: 8, serves: 2, meal: "breakfast",
    need: [["bread", "4 slices"], ["tomato", "2 ripe"]],
    opt: [["garlic", "1 clove"]],
    steps: [
      "Toast or grill the bread until crisp.",
      "Rub with a cut garlic clove.",
      "Grate the tomatoes, discard the skins, and spoon the pulp onto the toast.",
      "Drizzle generously with olive oil and sprinkle with salt."
    ]
  },
  {
    name: "Vegetable Paella", cuisine: "Spanish", emoji: "🥘", time: 45, serves: 4, meal: "dinner",
    need: [["rice", "1½ cups"], ["onion", "1"], ["bell pepper", "1"], ["tomato", "2"], ["paprika", "2 tsp"]],
    opt: [["garlic", "3 cloves"], ["peas", "1 cup"], ["green beans", "a handful"], ["turmeric", "½ tsp (instead of saffron)"], ["shrimp|chicken|sausage", "300 g"], ["lemon", "wedges"]],
    steps: [
      "In a wide pan fry the chicken or sausage (if using) and set aside. Soften onion and pepper, then garlic.",
      "Add grated tomato, paprika and turmeric and cook 3 minutes.",
      "Stir in the rice, add 3½ cups hot water with salt, and spread evenly. Don't stir again.",
      "Simmer 15 minutes, add peas, beans, shrimp and meat on top, and cook 5–8 minutes more. Rest 5 minutes and serve with lemon."
    ]
  },
  {
    name: "Churros", cuisine: "Spanish", emoji: "🥖", time: 30, serves: 4, meal: "snack",
    need: [["flour", "1 cup"], ["sugar", "⅓ cup"], ["cinnamon", "1 tsp"]],
    opt: [["butter", "2 tbsp"], ["egg", "1"], ["chocolate", "for dipping"], ["milk", "for the chocolate"]],
    steps: [
      "Boil 1 cup water with the butter, 1 tbsp sugar and a pinch of salt. Take off the heat and beat in the flour until smooth; beat in the egg.",
      "Pipe or roll the dough into 10 cm strips.",
      "Fry in 2 cm of hot oil until golden, then drain.",
      "Roll in the cinnamon sugar. Dip in chocolate melted with a splash of milk."
    ]
  },

  // ===================== More French =====================
  {
    name: "Quiche Lorraine", cuisine: "French", emoji: "🥧", time: 60, serves: 6, meal: "lunch",
    need: [["egg", "3"], ["cream|milk", "1 cup"], ["flour", "1¼ cups"], ["butter", "½ cup, cold"]],
    opt: [["bacon", "150 g"], ["cheese", "1 cup, grated"], ["onion", "1"], ["any leafy green|mushroom", "a handful"]],
    steps: [
      "Rub the butter into the flour with a pinch of salt, add 3 tbsp cold water and press into a pie dish. Chill 15 minutes.",
      "Bake the empty crust at 190°C / 375°F for 15 minutes.",
      "Fry the bacon and onion. Whisk the eggs, cream, cheese, salt and pepper.",
      "Scatter the bacon in the crust, pour over the egg mix and bake 25–30 minutes until just set."
    ]
  },
  {
    name: "Croque Monsieur", cuisine: "French", emoji: "🥪", time: 20, serves: 2, meal: "lunch",
    need: [["bread", "4 slices"], ["cheese", "1 cup, grated"], ["butter", "2 tbsp"]],
    opt: [["ham", "4 slices"], ["milk", "½ cup"], ["flour", "1 tbsp"], ["mustard", "1 tsp"], ["egg", "1 (makes it a croque madame)"]],
    steps: [
      "Make a quick sauce: melt 1 tbsp butter, stir in flour, whisk in milk and simmer until thick. Add a little cheese.",
      "Spread mustard on bread, add ham and cheese and close the sandwiches.",
      "Fry in butter until golden on both sides.",
      "Spoon the sauce on top, add more cheese and grill until bubbling. Top with a fried egg for a croque madame."
    ]
  },
  {
    name: "Potato Gratin", cuisine: "French", emoji: "🥔", time: 75, serves: 4, meal: "dinner",
    need: [["potato", "1 kg"], ["cream|milk", "1½ cups"], ["garlic", "2 cloves"]],
    opt: [["cheese", "1 cup, grated"], ["butter", "for the dish"], ["onion", "1, thinly sliced"]],
    steps: [
      "Heat the oven to 180°C / 350°F and butter a baking dish.",
      "Slice the potatoes very thinly. Warm the cream with garlic, salt and pepper.",
      "Layer the potatoes in the dish, pouring the cream between layers (add cheese if you like).",
      "Bake 60–70 minutes until tender and golden on top."
    ]
  },
  {
    name: "Salade Niçoise", cuisine: "French", emoji: "🥗", time: 25, serves: 2, meal: "lunch",
    need: [["tuna", "1 can"], ["egg", "2"], ["potato", "4 small"], ["green beans", "a handful"]],
    opt: [["lettuce", "1 head"], ["tomato", "2"], ["olives", "a handful"], ["red onion", "a little"], ["lemon|vinegar", "for dressing"], ["mustard", "1 tsp"]],
    steps: [
      "Boil the potatoes until tender, adding the green beans for the last 3 minutes. Hard-boil the eggs for 8 minutes.",
      "Whisk a dressing of 3 tbsp oil, 1 tbsp lemon or vinegar, mustard, salt and pepper.",
      "Arrange lettuce, potatoes, beans, tomatoes, olives, halved eggs and tuna on plates.",
      "Drizzle with dressing."
    ]
  },
  {
    name: "Chocolate Mousse", cuisine: "French", emoji: "🍫", time: 20, serves: 4, meal: "snack",
    need: [["chocolate", "150 g dark"], ["egg", "3"]],
    opt: [["sugar", "2 tbsp"], ["butter", "1 tbsp"], ["cream", "to serve"], ["berries", "to serve"]],
    steps: [
      "Melt the chocolate (and butter) gently and let it cool slightly.",
      "Separate the eggs. Stir the yolks into the chocolate.",
      "Whisk the whites with a pinch of salt to soft peaks, then add the sugar and whisk until glossy.",
      "Fold the whites into the chocolate in three goes. Spoon into glasses and chill at least 2 hours."
    ]
  },

  // ===================== More Greek =====================
  {
    name: "Avgolemono (Lemon Chicken Soup)", cuisine: "Greek", emoji: "🍋", time: 40, serves: 4, meal: "dinner",
    need: [["chicken", "2 breasts or thighs"], ["rice", "½ cup"], ["egg", "2"], ["lemon", "2"]],
    opt: [["onion", "1"], ["carrot", "1"], ["dill|parsley", "chopped"]],
    steps: [
      "Simmer the chicken (and onion, carrot) in 6 cups salted water for 20 minutes. Remove and shred the chicken.",
      "Add the rice to the broth and cook 15 minutes.",
      "Whisk the eggs with the lemon juice, then slowly whisk in 2 ladles of hot broth.",
      "Take the pot off the heat and stir in the egg mixture until silky. Return the chicken and add herbs."
    ]
  },
  {
    name: "Gigantes (Baked Beans Greek-Style)", cuisine: "Greek", emoji: "🫘", time: 45, serves: 4, meal: "dinner",
    need: [["beans", "2 cans (butter or lima beans are best)"], ["tomato", "1 can"], ["onion", "1"], ["garlic", "3 cloves"]],
    opt: [["oregano", "1 tsp"], ["carrot", "1"], ["celery", "1 stalk"], ["dill|parsley", "chopped"], ["cheese", "feta, to top"], ["honey|sugar", "1 tsp"]],
    steps: [
      "Heat the oven to 190°C / 375°F.",
      "Soften the onion, carrot, celery and garlic in plenty of oil. Add tomatoes, oregano and honey and simmer 5 minutes.",
      "Stir in the drained beans and herbs, then tip into a baking dish.",
      "Bake 25–30 minutes until thick and jammy. Crumble feta on top."
    ]
  },
  {
    name: "Chicken Souvlaki Wraps", cuisine: "Greek", emoji: "🌯", time: 30, serves: 3, meal: "dinner",
    need: [["chicken", "500 g, cubed"], ["lemon", "1"], ["garlic", "2 cloves"], ["bread|tortilla", "pita or wraps"]],
    opt: [["oregano", "1 tsp"], ["yogurt", "for tzatziki"], ["cucumber", "for tzatziki"], ["tomato", "sliced"], ["red onion", "sliced"], ["lettuce", "shredded"]],
    steps: [
      "Marinate the chicken in lemon juice, garlic, oregano, oil and salt for at least 15 minutes.",
      "Thread on skewers or just pan-fry over high heat until charred and cooked through.",
      "Warm the pitas. Quickly mix yogurt with grated cucumber and garlic.",
      "Fill the pitas with chicken, tzatziki, tomato, onion and lettuce."
    ]
  },
  {
    name: "Briam (Greek Roast Vegetables)", cuisine: "Greek", emoji: "🍆", time: 70, serves: 4, meal: "dinner",
    need: [["potato", "3"], ["zucchini", "2"], ["tomato", "4"], ["onion", "1"]],
    opt: [["eggplant", "1"], ["bell pepper", "1"], ["garlic", "3 cloves"], ["oregano", "1 tsp"], ["parsley", "chopped"], ["cheese", "feta, to serve"]],
    steps: [
      "Heat the oven to 200°C / 400°F.",
      "Slice all the vegetables and toss in a big dish with garlic, oregano, ½ cup oil, salt and pepper.",
      "Add ½ cup water and roast 60 minutes, stirring once, until soft and caramelized.",
      "Finish with parsley and feta."
    ]
  },

  // ===================== More Korean =====================
  {
    name: "Kimchi Jjigae (Kimchi Stew)", cuisine: "Korean", emoji: "🍲", time: 30, serves: 3, meal: "dinner",
    need: [["kimchi", "2 cups"], ["tofu", "300 g"], ["onion", "1"]],
    opt: [["gochujang", "1 tbsp"], ["chili flakes", "1 tsp"], ["bacon", "150 g (or pork)"], ["green onion", "2"], ["garlic", "2 cloves"], ["mushroom", "a handful"], ["rice", "to serve"]],
    steps: [
      "Fry the bacon (if using) with the kimchi and onion for 5 minutes.",
      "Add garlic, gochujang and chili flakes, then 3 cups water and a splash of kimchi juice.",
      "Simmer 15 minutes, add the tofu and mushrooms and simmer 5 minutes more.",
      "Top with green onion and serve bubbling with rice."
    ]
  },
  {
    name: "Pajeon (Green Onion Pancake)", cuisine: "Korean", emoji: "🥞", time: 20, serves: 2, meal: "snack",
    need: [["flour", "1 cup"], ["green onion", "6–8"]],
    opt: [["egg", "1"], ["shrimp", "a handful"], ["chili pepper", "1"], ["soy sauce", "for dipping"], ["vinegar", "for dipping"]],
    steps: [
      "Whisk the flour with ¾ cup cold water, the egg and a pinch of salt into a thin batter.",
      "Cut the green onions into long pieces and lay them in a hot oiled pan.",
      "Pour the batter over, add shrimp or chili, and cook 4 minutes until crisp. Flip and cook 3 minutes more.",
      "Serve with soy sauce mixed with a little vinegar."
    ]
  },
  {
    name: "Japchae (Stir-Fried Noodles)", cuisine: "Korean", emoji: "🍜", time: 30, serves: 3, meal: "dinner",
    need: [["rice noodles", "200 g (sweet potato noodles are best)"], ["soy sauce", "3 tbsp"], ["sesame oil", "1 tbsp"], ["sugar|honey", "1 tbsp"]],
    opt: [["spinach", "a big handful"], ["carrot", "1"], ["onion", "1"], ["mushroom", "a handful"], ["bell pepper", "1"], ["garlic", "2 cloves"], ["ground beef|tofu", "150 g"], ["sesame seeds", "to sprinkle"]],
    steps: [
      "Cook the noodles, rinse in cold water and cut into shorter lengths.",
      "Stir-fry each vegetable briefly with a little oil and salt; wilt the spinach last.",
      "Fry the beef or tofu with garlic and a splash of soy.",
      "Toss everything with the noodles, soy sauce, sugar and sesame oil. Sprinkle with sesame seeds."
    ]
  },
  {
    name: "Korean Fried Chicken", cuisine: "Korean", emoji: "🍗", time: 40, serves: 3, meal: "dinner",
    need: [["chicken", "600 g wings or thighs"], ["flour", "½ cup"], ["gochujang", "2 tbsp"], ["honey|sugar", "2 tbsp"]],
    opt: [["garlic", "3 cloves"], ["soy sauce", "1 tbsp"], ["ginger", "1 tsp"], ["sesame seeds", "to sprinkle"], ["green onion", "sliced"]],
    steps: [
      "Toss the chicken with salt, then coat in the flour (add a little cornflour if you have it).",
      "Fry in hot oil for 8–10 minutes, rest 5 minutes, then fry again 2–3 minutes for extra crunch.",
      "Simmer gochujang, honey, soy, garlic and ginger in a pan until glossy.",
      "Toss the chicken in the sauce and top with sesame seeds and green onion."
    ]
  },
  {
    name: "Oi Muchim (Spicy Cucumber Salad)", cuisine: "Korean", emoji: "🥒", time: 10, serves: 2, meal: "lunch",
    need: [["cucumber", "2"], ["chili flakes", "1–2 tsp"], ["vinegar", "1 tbsp"]],
    opt: [["garlic", "1 clove"], ["sugar", "1 tsp"], ["soy sauce", "1 tsp"], ["sesame oil", "1 tsp"], ["sesame seeds", "1 tsp"], ["green onion|red onion", "a little"]],
    steps: [
      "Slice the cucumbers, salt them and leave 10 minutes. Drain.",
      "Mix chili flakes, vinegar, garlic, sugar, soy and sesame oil.",
      "Toss with the cucumber and onion, and sprinkle with sesame seeds."
    ]
  },

  // ===================== More Middle Eastern =====================
  {
    name: "Mujadara (Lentils & Rice)", cuisine: "Middle Eastern", emoji: "🍚", time: 45, serves: 4, meal: "dinner",
    need: [["lentils", "1 cup (green or brown)"], ["rice", "¾ cup"], ["onion", "3"]],
    opt: [["cumin", "1 tsp"], ["cinnamon", "a pinch"], ["yogurt", "to serve"], ["cucumber|tomato", "salad, to serve"]],
    steps: [
      "Simmer the lentils in water for 15 minutes until half-cooked.",
      "Meanwhile slowly fry the sliced onions in plenty of oil for 25 minutes until deep brown and crispy.",
      "Add the rice, cumin, half the onions and enough water to cover by 2 cm to the lentils. Cover and cook 18 minutes.",
      "Fluff and top with the rest of the crispy onions. Serve with yogurt."
    ]
  },
  {
    name: "Fattoush Salad", cuisine: "Middle Eastern", emoji: "🥗", time: 15, serves: 3, meal: "lunch",
    need: [["bread|tortilla", "2 pita or flatbreads"], ["any salad vegetable", "4 cups"], ["lemon", "1"]],
    opt: [["mint|parsley", "a handful"], ["radish", "4"], ["cucumber", "1"], ["tomato", "2"], ["pomegranate", "seeds"], ["garlic", "1 clove"]],
    steps: [
      "Tear the bread into pieces, toss with oil and toast in a pan or oven until crisp.",
      "Chop the vegetables into chunks.",
      "Whisk lemon juice, garlic, ⅓ cup oil and salt.",
      "Toss everything together just before serving."
    ]
  },
  {
    name: "Chicken Shawarma Wraps", cuisine: "Middle Eastern", emoji: "🌯", time: 35, serves: 3, meal: "dinner",
    need: [["chicken", "600 g thighs"], ["yogurt", "½ cup"], ["garlic", "3 cloves"], ["cumin|paprika|curry powder", "2 tsp total"]],
    opt: [["lemon", "1"], ["cinnamon", "a pinch"], ["turmeric", "½ tsp"], ["bread|tortilla", "pita or wraps"], ["tahini", "for sauce"], ["tomato|cucumber|lettuce|red onion", "to serve"]],
    steps: [
      "Mix yogurt, garlic, lemon, spices and salt and coat the chicken. Marinate 20+ minutes.",
      "Roast at 220°C / 425°F for 25 minutes, or pan-fry, until charred at the edges.",
      "Slice thinly.",
      "Wrap in warm pita with salad and a sauce of tahini (or yogurt), lemon and garlic."
    ]
  },
  {
    name: "Ful Medames", cuisine: "Middle Eastern", emoji: "🫘", time: 15, serves: 2, meal: "breakfast",
    need: [["beans|fava beans", "1 can"], ["garlic", "1 clove"], ["lemon", "1"]],
    opt: [["cumin", "½ tsp"], ["tomato", "1, diced"], ["parsley", "chopped"], ["egg", "boiled, to serve"], ["bread", "to serve"], ["chili flakes", "a pinch"]],
    steps: [
      "Warm the beans with a little of their liquid and roughly mash half of them.",
      "Stir in crushed garlic, lemon juice, cumin and salt.",
      "Top with tomato, parsley, chili and a pool of olive oil. Serve with bread and eggs."
    ]
  },

  // ===================== More Japanese =====================
  {
    name: "Oyakodon (Chicken & Egg Rice Bowl)", cuisine: "Japanese", emoji: "🍲", time: 20, serves: 2, meal: "dinner",
    need: [["chicken", "250 g"], ["egg", "3"], ["onion", "1"], ["soy sauce", "2 tbsp"], ["rice", "to serve"]],
    opt: [["sugar|honey", "1 tbsp"], ["green onion", "sliced"]],
    steps: [
      "Simmer ½ cup water, soy sauce and sugar with the sliced onion for 3 minutes.",
      "Add bite-sized chicken and simmer 5–6 minutes until cooked.",
      "Pour the lightly beaten eggs over, cover and cook 1 minute until just set.",
      "Slide onto bowls of hot rice and top with green onion."
    ]
  },
  {
    name: "Yaki Udon", cuisine: "Japanese", emoji: "🍜", time: 15, serves: 2, meal: "dinner",
    need: [["pasta|instant noodles|rice noodles", "250 g (udon is best)"], ["soy sauce", "2 tbsp"], ["cabbage|any stir-fry vegetable", "2 cups"]],
    opt: [["onion", "½"], ["carrot", "1"], ["mushroom", "a handful"], ["chicken|shrimp|tofu|bacon", "200 g"], ["sugar", "1 tsp"], ["sesame oil", "1 tsp"], ["green onion", "2"]],
    steps: [
      "Cook the noodles and drain.",
      "Stir-fry the protein, then the vegetables over high heat until just tender.",
      "Add the noodles, soy sauce and sugar and toss for 2 minutes.",
      "Finish with sesame oil and green onion."
    ]
  },
  {
    name: "Okonomiyaki (Cabbage Pancake)", cuisine: "Japanese", emoji: "🥞", time: 25, serves: 2, meal: "dinner",
    need: [["cabbage|napa cabbage|savoy cabbage", "¼ head, shredded"], ["flour", "¾ cup"], ["egg", "2"]],
    opt: [["green onion", "3"], ["bacon|shrimp", "a few strips / a handful"], ["mayonnaise", "to drizzle"], ["ketchup", "+ soy sauce for sauce"], ["soy sauce", "1 tbsp"], ["nori", "crumbled"]],
    steps: [
      "Mix the flour with ½ cup water and the eggs, then fold in the cabbage and green onion.",
      "Pour into a hot oiled pan as a thick pancake and lay bacon on top.",
      "Cook 5 minutes, flip and cook 5 minutes more until cooked through.",
      "Drizzle with mayo and a sauce of ketchup mixed with soy sauce. Sprinkle with nori."
    ]
  },
  {
    name: "Chicken Katsu", cuisine: "Japanese", emoji: "🍛", time: 30, serves: 2, meal: "dinner",
    need: [["chicken|tofu", "2 breasts / 1 block"], ["flour", "¼ cup"], ["egg", "1"], ["breadcrumbs", "1 cup (panko is best)"]],
    opt: [["cabbage", "shredded, to serve"], ["rice", "to serve"], ["curry powder", "for katsu curry sauce"], ["onion|carrot", "for curry sauce"], ["ketchup", "+ soy sauce for tonkatsu sauce"]],
    steps: [
      "Flatten the chicken to an even thickness and season.",
      "Dip in flour, then beaten egg, then breadcrumbs.",
      "Fry in 1 cm of oil for 4–5 minutes per side until golden and cooked through. Rest, then slice.",
      "Serve with rice and cabbage, and a sauce of ketchup and soy — or a quick curry sauce made from onion, carrot and curry powder."
    ]
  },

  // ===================== More Chinese =====================
  {
    name: "Hot & Sour Soup", cuisine: "Chinese", emoji: "🍲", time: 20, serves: 3, meal: "lunch",
    need: [["tofu", "200 g"], ["mushroom", "a handful"], ["soy sauce", "2 tbsp"], ["vinegar", "2–3 tbsp"]],
    opt: [["egg", "1"], ["chili flakes", "1 tsp"], ["green onion", "2"], ["carrot", "1"], ["bamboo shoots", "a handful"], ["sesame oil", "1 tsp"], ["ginger", "1 tsp"]],
    steps: [
      "Simmer 4 cups water with soy sauce, ginger and sliced mushrooms for 5 minutes.",
      "Add the tofu strips, carrot and bamboo shoots. Thicken with 2 tbsp cornflour in water if you have it.",
      "Stir in the vinegar and lots of black pepper and chili.",
      "Drizzle in the beaten egg while stirring, then add sesame oil and green onion."
    ]
  },
  {
    name: "Scallion Pancakes", cuisine: "Chinese", emoji: "🥞", time: 40, serves: 3, meal: "snack",
    need: [["flour", "2 cups"], ["green onion", "4"]],
    opt: [["sesame oil", "1 tbsp"], ["soy sauce", "for dipping"], ["vinegar", "for dipping"], ["chili flakes", "for dipping"]],
    steps: [
      "Mix the flour with ¾ cup hot water into a soft dough. Knead 3 minutes and rest 20 minutes.",
      "Roll a piece thin, brush with oil, sprinkle with salt and green onion, roll up like a rope, coil it, and roll flat again.",
      "Pan-fry in oil for 3 minutes per side until crisp and flaky.",
      "Cut into wedges and serve with soy-vinegar dip."
    ]
  },
  {
    name: "Sweet & Sour Chicken", cuisine: "Chinese", emoji: "🍍", time: 25, serves: 3, meal: "dinner",
    need: [["chicken|tofu", "500 g, cubed"], ["vinegar", "3 tbsp"], ["sugar|honey", "3 tbsp"], ["ketchup", "3 tbsp"]],
    opt: [["pineapple", "1 cup, chunks"], ["bell pepper", "1"], ["onion", "1"], ["soy sauce", "1 tbsp"], ["flour", "for coating"], ["garlic", "1 clove"], ["rice", "to serve"]],
    steps: [
      "Toss the chicken or tofu in flour and fry until golden and cooked. Set aside.",
      "Stir-fry the pepper, onion and garlic for 2 minutes.",
      "Add vinegar, sugar, ketchup, soy and ¼ cup water (plus pineapple) and bubble until glossy.",
      "Return the chicken and toss. Serve with rice."
    ]
  },
  {
    name: "Egg Drop Soup", cuisine: "Chinese", emoji: "🥣", time: 10, serves: 2, meal: "lunch",
    need: [["egg", "2"]],
    opt: [["green onion", "2"], ["soy sauce", "1 tsp"], ["ginger", "a few slices"], ["corn", "½ cup"], ["tofu", "a little"], ["sesame oil", "a few drops"], ["turmeric", "a pinch, for color"]],
    steps: [
      "Simmer 3 cups water or stock with ginger, soy and salt (and corn). Thicken with 1 tbsp cornflour in water if you have it.",
      "Stir the soup in a circle and slowly drizzle in the beaten eggs to make silky ribbons.",
      "Turn off the heat and add sesame oil, white pepper and green onion."
    ]
  },
  {
    name: "Smashed Cucumber Salad", cuisine: "Chinese", emoji: "🥒", time: 10, serves: 2, meal: "lunch",
    need: [["cucumber", "2"], ["garlic", "2 cloves"], ["vinegar", "1 tbsp"], ["soy sauce", "1 tbsp"]],
    opt: [["sesame oil", "1 tsp"], ["sugar", "½ tsp"], ["chili flakes", "a pinch"], ["cilantro", "chopped"], ["sesame seeds", "a pinch"]],
    steps: [
      "Smash the cucumbers with a rolling pin or the flat of a knife and break into chunks. Salt and drain 10 minutes.",
      "Mix garlic, vinegar, soy, sugar, sesame oil and chili.",
      "Toss with the cucumber and top with cilantro and sesame seeds."
    ]
  },

  // ===================== More Thai =====================
  {
    name: "Tom Yum Soup", cuisine: "Thai", emoji: "🍲", time: 20, serves: 3, meal: "lunch",
    need: [["lime", "2"], ["chili pepper|chili flakes|thai curry paste", "to taste"], ["mushroom|shrimp", "200 g"]],
    opt: [["fish sauce|soy sauce", "2 tbsp"], ["ginger", "a few slices"], ["tomato", "1"], ["onion", "½"], ["cilantro", "chopped"], ["sugar", "1 tsp"], ["coconut milk|milk", "a splash, for creamy tom yum"]],
    steps: [
      "Simmer 4 cups water with ginger, chili and onion for 5 minutes.",
      "Add mushrooms and tomato, then the shrimp for the last 2–3 minutes.",
      "Turn off the heat and season with fish sauce, sugar and lots of lime — it should be hot, sour and salty.",
      "Top with cilantro."
    ]
  },
  {
    name: "Pineapple Fried Rice", cuisine: "Thai", emoji: "🍍", time: 20, serves: 2, meal: "dinner",
    need: [["rice", "2 cups, cooked (day-old)"], ["pineapple", "1 cup, diced"], ["egg", "2"], ["soy sauce|fish sauce", "2 tbsp"]],
    opt: [["curry powder", "1 tsp"], ["shrimp|chicken|tofu", "200 g"], ["onion|green onion", "a little"], ["peas|carrot", "½ cup"], ["peanuts", "a handful"], ["garlic", "2 cloves"], ["raisins", "2 tbsp"]],
    steps: [
      "Stir-fry the garlic, onion and shrimp or chicken until cooked.",
      "Push aside and scramble the eggs.",
      "Add rice, curry powder and soy or fish sauce and stir-fry until hot.",
      "Toss in the pineapple, peas, raisins and peanuts. Serve in a hollowed pineapple if you're feeling fancy."
    ]
  },
  {
    name: "Larb (Thai Minced Meat Salad)", cuisine: "Thai", emoji: "🥬", time: 15, serves: 2, meal: "lunch",
    need: [["ground beef|chicken|tofu", "300 g, minced"], ["lime", "2"], ["fish sauce|soy sauce", "1½ tbsp"]],
    opt: [["red onion", "½"], ["mint|cilantro", "a big handful"], ["chili flakes", "1 tsp"], ["green onion", "2"], ["rice", "1 tbsp, toasted and ground"], ["lettuce", "cups, to serve"]],
    steps: [
      "Cook the mince in a dry pan with 2 tbsp water until just cooked through.",
      "Take off the heat and stir in lime juice, fish sauce and chili.",
      "Fold in sliced onion, herbs and toasted rice powder.",
      "Serve in lettuce cups with sticky rice."
    ]
  },
  {
    name: "Chicken Satay with Peanut Sauce", cuisine: "Thai", emoji: "🍢", time: 35, serves: 3, meal: "dinner",
    need: [["chicken|tofu", "500 g, strips"], ["peanut butter", "4 tbsp"], ["soy sauce", "2 tbsp"]],
    opt: [["coconut milk", "½ can"], ["curry powder|turmeric", "1 tsp"], ["garlic", "2 cloves"], ["sugar|honey", "1 tbsp"], ["lime", "1"], ["chili flakes", "a pinch"], ["cucumber", "to serve"], ["rice", "to serve"]],
    steps: [
      "Marinate the chicken in half the coconut milk, curry powder, garlic, soy and sugar for 15+ minutes.",
      "Thread onto skewers (or not) and grill or pan-fry until charred and cooked.",
      "Simmer peanut butter with the remaining coconut milk, soy, lime and chili until smooth.",
      "Serve the chicken with peanut sauce, cucumber and rice."
    ]
  },

  // ===================== More Indian =====================
  {
    name: "Butter Chicken", cuisine: "Indian", emoji: "🍛", time: 45, serves: 4, meal: "dinner",
    need: [["chicken", "600 g"], ["butter", "3 tbsp"], ["tomato", "1 can or 4 fresh"], ["cream|yogurt", "½ cup"], ["garam masala|curry powder", "2 tsp"]],
    opt: [["garlic", "4 cloves"], ["ginger", "1 tbsp"], ["onion", "1"], ["chili powder", "1 tsp"], ["honey|sugar", "1 tsp"], ["rice", "to serve"], ["cilantro", "to serve"]],
    steps: [
      "Coat the chicken in yogurt (or a little cream), half the spices and salt. Sear in a hot pan until charred and set aside.",
      "Melt the butter and cook onion, garlic and ginger until soft. Add the rest of the spices.",
      "Add the tomatoes and simmer 10 minutes, then blend smooth.",
      "Return the chicken, stir in the cream and honey and simmer 10 minutes. Serve with rice or naan."
    ]
  },
  {
    name: "Rajma (Kidney Bean Curry)", cuisine: "Indian", emoji: "🫘", time: 35, serves: 4, meal: "dinner",
    need: [["beans", "2 cans (kidney beans are best)"], ["onion", "1"], ["tomato", "2"], ["garlic", "3 cloves"]],
    opt: [["ginger", "1 tsp"], ["garam masala|curry powder", "1 tsp"], ["cumin", "1 tsp"], ["chili powder", "½ tsp"], ["turmeric", "½ tsp"], ["cilantro", "chopped"], ["rice", "to serve"]],
    steps: [
      "Fry the cumin, then the onion until golden. Add garlic, ginger and spices for 1 minute.",
      "Add the chopped tomatoes and cook until they break down.",
      "Add the beans with 1 cup water and simmer 15–20 minutes, mashing a few beans to thicken.",
      "Top with cilantro and serve with rice."
    ]
  },
  {
    name: "Matar Paneer", cuisine: "Indian", emoji: "🟢", time: 30, serves: 3, meal: "dinner",
    need: [["paneer|tofu", "200 g"], ["peas", "1½ cups"], ["onion", "1"], ["tomato", "2"]],
    opt: [["garlic", "2 cloves"], ["ginger", "1 tsp"], ["garam masala|curry powder", "1 tsp"], ["cumin", "½ tsp"], ["turmeric", "½ tsp"], ["cream|yogurt", "2 tbsp"], ["cilantro", "chopped"]],
    steps: [
      "Lightly fry the paneer cubes until golden and set aside.",
      "Fry the cumin, onion, garlic and ginger, then add the spices and tomatoes and cook into a thick sauce.",
      "Add the peas and ¾ cup water and simmer 8 minutes.",
      "Stir in the paneer and cream and simmer 2 minutes. Top with cilantro."
    ]
  },
  {
    name: "Aloo Paratha", cuisine: "Indian", emoji: "🫓", time: 45, serves: 4, meal: "breakfast",
    need: [["flour", "2 cups"], ["potato", "3"]],
    opt: [["cumin", "½ tsp"], ["chili pepper", "1"], ["cilantro", "chopped"], ["onion", "a little, minced"], ["garam masala", "½ tsp"], ["butter", "for frying"], ["yogurt", "to serve"]],
    steps: [
      "Knead the flour with water and a pinch of salt into a soft dough. Rest 15 minutes.",
      "Boil and mash the potatoes with salt, cumin, chili, onion and cilantro.",
      "Roll a ball of dough into a disc, add a ball of filling, pinch it closed and roll out gently.",
      "Cook on a hot pan with butter until golden spots appear on both sides. Serve with yogurt."
    ]
  },
  {
    name: "Vegetable Pulao", cuisine: "Indian", emoji: "🍚", time: 35, serves: 4, meal: "dinner",
    need: [["rice", "1½ cups (basmati is best)"], ["any curry vegetable", "2 cups, diced"], ["onion", "1"]],
    opt: [["cumin", "1 tsp"], ["garam masala", "1 tsp"], ["cinnamon", "a small piece"], ["butter", "1 tbsp (or ghee)"], ["garlic|ginger", "1 tsp"], ["cilantro|mint", "chopped"], ["yogurt", "raita, to serve"]],
    steps: [
      "Rinse the rice and soak 15 minutes.",
      "Fry cumin and cinnamon in butter or oil, then the onion until golden. Add ginger, garlic and vegetables.",
      "Add the drained rice, garam masala, salt and 2¾ cups water.",
      "Cover and cook on low 12–15 minutes. Rest 5 minutes, fluff and add herbs."
    ]
  },
  {
    name: "Kheer (Rice Pudding)", cuisine: "Indian", emoji: "🍮", time: 45, serves: 4, meal: "snack",
    need: [["rice", "¼ cup"], ["milk", "4 cups"], ["sugar", "⅓ cup"]],
    opt: [["cinnamon", "a pinch (or cardamom)"], ["raisins", "2 tbsp"], ["peanuts", "a few, chopped (or almonds)"], ["dates", "chopped"]],
    steps: [
      "Rinse the rice and add to the milk in a heavy pot.",
      "Simmer gently for 35–40 minutes, stirring often so it doesn't catch, until thick and creamy.",
      "Stir in the sugar, spice and raisins and cook 5 minutes more.",
      "Serve warm or chilled, topped with nuts."
    ]
  },

  // ===================== More Mexican =====================
  {
    name: "Enchiladas", cuisine: "Mexican", emoji: "🌯", time: 45, serves: 4, meal: "dinner",
    need: [["tortilla", "8"], ["chicken|beans", "2 cups, cooked / 2 cans"], ["tomato", "1 can"], ["cheese", "1½ cups"]],
    opt: [["onion", "1"], ["garlic", "2 cloves"], ["chili powder|cumin", "2 tsp"], ["chili pepper", "1"], ["yogurt|cream", "to serve"], ["cilantro", "to serve"], ["avocado", "to serve"]],
    steps: [
      "Simmer tomatoes with onion, garlic, chili and spices for 10 minutes, then blend into a sauce.",
      "Mix the chicken or beans with a little sauce and some cheese.",
      "Fill and roll the tortillas, lay them seam-side down in a dish and cover with the rest of the sauce and cheese.",
      "Bake at 190°C / 375°F for 20 minutes. Top with cream, cilantro and avocado."
    ]
  },
  {
    name: "Chilaquiles", cuisine: "Mexican", emoji: "🍳", time: 25, serves: 2, meal: "breakfast",
    need: [["tortilla", "6, cut into wedges"], ["tomato", "3 or 1 can"], ["egg", "2"]],
    opt: [["onion", "½"], ["garlic", "1 clove"], ["chili pepper", "1"], ["cheese", "crumbled"], ["cream|yogurt", "to serve"], ["cilantro", "to serve"], ["avocado", "to serve"]],
    steps: [
      "Fry the tortilla wedges in oil until crisp (or bake them).",
      "Blend the tomatoes, onion, garlic and chili and simmer 8 minutes into a salsa.",
      "Toss the chips in the hot salsa until just coated.",
      "Top with fried eggs, cheese, cream, avocado and cilantro. Eat straight away."
    ]
  },
  {
    name: "Mexican Rice", cuisine: "Mexican", emoji: "🍚", time: 30, serves: 4, meal: "dinner",
    need: [["rice", "1½ cups"], ["tomato", "2 or ½ can"], ["onion", "½"], ["garlic", "2 cloves"]],
    opt: [["cumin", "½ tsp"], ["peas|carrot|corn", "½ cup"], ["chili pepper", "1"], ["cilantro", "chopped"], ["lime", "wedges"]],
    steps: [
      "Blend the tomatoes, onion and garlic with ½ cup water.",
      "Fry the rice in oil until lightly golden.",
      "Add the tomato mix, cumin, vegetables, salt and 2 cups water. Bring to a boil.",
      "Cover and cook on low 18 minutes. Rest 5 minutes, fluff, and add cilantro and lime."
    ]
  },
  {
    name: "Black Bean Soup", cuisine: "Mexican", emoji: "🍲", time: 30, serves: 4, meal: "dinner",
    need: [["beans", "2 cans (black beans are best)"], ["onion", "1"], ["garlic", "3 cloves"], ["cumin", "1 tsp"]],
    opt: [["bell pepper", "1"], ["tomato", "1 can"], ["chili powder|chili pepper", "1 tsp / 1"], ["lime", "1"], ["yogurt|cream", "to serve"], ["cilantro", "to serve"], ["avocado", "to serve"], ["tortilla", "chips, to serve"]],
    steps: [
      "Soften the onion and pepper, then add garlic and spices.",
      "Add the beans with their liquid, tomatoes and 2 cups water. Simmer 15 minutes.",
      "Blend about half the soup and stir back in. Add lime and salt.",
      "Top with cream, cilantro, avocado and crushed chips."
    ]
  },
  {
    name: "Fajitas", cuisine: "Mexican", emoji: "🫑", time: 25, serves: 3, meal: "dinner",
    need: [["bell pepper", "2"], ["onion", "1"], ["tortilla", "6"], ["chili powder|cumin|paprika", "2 tsp total"]],
    opt: [["chicken|ground beef|shrimp|tofu", "400 g, strips"], ["lime", "1"], ["garlic", "2 cloves"], ["cheese", "grated"], ["avocado", "to serve"], ["yogurt|cream", "to serve"], ["tomato", "salsa, to serve"]],
    steps: [
      "Toss the meat or tofu with the spices, garlic, lime juice, oil and salt.",
      "Sear in a very hot pan until charred and cooked. Set aside.",
      "Cook the sliced peppers and onion over high heat until soft but still a little crunchy. Return the meat.",
      "Serve sizzling with warm tortillas and toppings."
    ]
  },

  // ===================== More Italian =====================
  {
    name: "Spaghetti Carbonara", cuisine: "Italian", emoji: "🍝", time: 20, serves: 2, meal: "dinner",
    need: [["pasta", "200 g"], ["egg", "2 + 1 yolk"], ["cheese", "¾ cup parmesan or pecorino"], ["bacon", "150 g"]],
    opt: [["garlic", "1 clove"]],
    steps: [
      "Cook the pasta in salted water. Save a mug of pasta water.",
      "Fry the chopped bacon until crisp (with a crushed garlic clove, removed after).",
      "Whisk the eggs and yolk with the cheese and lots of black pepper.",
      "Off the heat, toss the hot pasta with the bacon, then the egg mix, adding pasta water until creamy (don't scramble it!)."
    ]
  },
  {
    name: "Margherita Pizza", cuisine: "Italian", emoji: "🍕", time: 90, serves: 2, meal: "dinner",
    need: [["flour", "2 cups"], ["yeast", "1 tsp"], ["tomato", "½ can"], ["cheese", "mozzarella, 125 g"]],
    opt: [["basil", "a few leaves"], ["garlic", "1 clove"], ["oregano", "a pinch"], ["mushroom|bell pepper|olives|onion", "toppings"]],
    steps: [
      "Mix the flour, yeast, 1 tsp salt and ¾ cup warm water into a dough. Knead 5 minutes and leave to rise 1 hour.",
      "Heat the oven as hot as it goes (250°C / 480°F) with a tray inside.",
      "Blend the tomatoes with garlic, salt and oregano. Stretch the dough thin and spread with sauce.",
      "Top with torn mozzarella and bake 8–10 minutes until blistered. Add basil."
    ]
  },
  {
    name: "Pasta e Fagioli", cuisine: "Italian", emoji: "🥣", time: 35, serves: 4, meal: "dinner",
    need: [["pasta", "150 g small shapes"], ["beans", "1 can"], ["tomato", "1 can"], ["onion", "1"], ["garlic", "2 cloves"]],
    opt: [["carrot", "1"], ["celery", "1 stalk"], ["bacon", "100 g"], ["any leafy green", "a handful"], ["cheese", "parmesan, to serve"], ["oregano|basil", "a pinch"]],
    steps: [
      "Soften the onion, carrot, celery (and bacon) in oil. Add the garlic.",
      "Add tomatoes, beans and 4 cups water. Simmer 10 minutes and mash a few beans to thicken.",
      "Add the pasta and cook until tender, adding water if it gets too thick.",
      "Stir in greens and serve with parmesan and a drizzle of oil."
    ]
  },

  // ===================== More American =====================
  {
    name: "Chili con Carne", cuisine: "American", emoji: "🌶️", time: 50, serves: 4, meal: "dinner",
    need: [["ground beef", "500 g"], ["beans", "1–2 cans"], ["tomato", "1 can"], ["onion", "1"], ["chili powder", "1–2 tbsp"]],
    opt: [["garlic", "3 cloves"], ["cumin", "1 tsp"], ["bell pepper", "1"], ["cheese", "to serve"], ["yogurt|cream", "to serve"], ["rice", "to serve"], ["chocolate", "a small square (secret ingredient)"]],
    steps: [
      "Brown the beef, then add the onion, pepper and garlic and cook 5 minutes.",
      "Stir in the spices for 1 minute.",
      "Add the tomatoes, beans and 1 cup water and simmer 30 minutes, stirring now and then. Stir in the chocolate.",
      "Serve with rice, cheese and sour cream."
    ]
  },
  {
    name: "Classic Cheeseburger", cuisine: "American", emoji: "🍔", time: 20, serves: 4, meal: "dinner",
    need: [["ground beef", "500 g"], ["bread", "4 buns"], ["cheese", "4 slices"]],
    opt: [["lettuce", "leaves"], ["tomato", "sliced"], ["onion", "sliced"], ["ketchup", "to serve"], ["mustard", "to serve"], ["mayonnaise", "to serve"], ["bacon", "cooked strips"]],
    steps: [
      "Divide the beef into 4 balls and flatten into patties a little wider than the buns. Season well.",
      "Cook in a very hot pan 3 minutes, flip, add cheese, and cook 2–3 minutes more.",
      "Toast the buns.",
      "Build the burgers with lettuce, tomato, onion and sauces."
    ]
  },
  {
    name: "Chicken Caesar Salad", cuisine: "American", emoji: "🥗", time: 25, serves: 2, meal: "lunch",
    need: [["lettuce", "1 head (romaine is best)"], ["cheese", "parmesan, ½ cup"], ["bread", "2 slices, for croutons"]],
    opt: [["chicken", "1 breast"], ["mayonnaise", "3 tbsp"], ["lemon", "½"], ["garlic", "1 clove"], ["mustard", "½ tsp"], ["egg", "boiled"]],
    steps: [
      "Cube the bread, toss with oil and toast in a pan until crunchy.",
      "Season and pan-fry the chicken until cooked. Rest and slice.",
      "Whisk mayo, lemon, grated garlic, mustard, half the parmesan and black pepper (thin with water).",
      "Toss the lettuce with the dressing, then top with chicken, croutons and more cheese."
    ]
  },
  {
    name: "Chocolate Chip Cookies", cuisine: "American", emoji: "🍪", time: 30, serves: 12, meal: "snack",
    need: [["flour", "1¼ cups"], ["butter", "½ cup, soft"], ["sugar", "¾ cup"], ["egg", "1"], ["chocolate", "1 cup, chopped"], ["baking soda", "½ tsp"]],
    opt: [["peanuts", "chopped"], ["oats", "½ cup"]],
    steps: [
      "Heat the oven to 180°C / 350°F.",
      "Beat the butter and sugar until fluffy, then beat in the egg.",
      "Stir in the flour, baking soda and a pinch of salt, then the chocolate.",
      "Scoop onto a lined tray and bake 10–12 minutes until golden at the edges but soft in the middle."
    ]
  },

  // ===================== Vietnamese =====================
  {
    name: "Quick Chicken Pho", cuisine: "Vietnamese", emoji: "🍜", time: 40, serves: 3, meal: "dinner",
    need: [["rice noodles", "250 g"], ["chicken|tofu", "2 breasts / 1 block"], ["onion", "1"], ["ginger", "a thumb"]],
    opt: [["cinnamon", "1 stick"], ["fish sauce|soy sauce", "2 tbsp"], ["sugar", "1 tsp"], ["bean sprouts", "a handful"], ["basil|cilantro|mint", "a handful"], ["lime", "wedges"], ["chili pepper", "sliced"], ["green onion", "sliced"]],
    steps: [
      "Char the halved onion and ginger in a dry pan until blackened in spots.",
      "Simmer them in 6 cups water with cinnamon, salt and the chicken for 25 minutes. Shred the chicken.",
      "Season the broth with fish sauce and sugar. Cook the noodles separately.",
      "Put noodles and chicken in bowls, pour over the hot broth, and pile on sprouts, herbs, lime and chili."
    ]
  },
  {
    name: "Bánh Mì", cuisine: "Vietnamese", emoji: "🥖", time: 30, serves: 2, meal: "lunch",
    need: [["bread", "2 baguette rolls"], ["carrot", "1"], ["vinegar", "¼ cup"], ["sugar", "1 tbsp"]],
    opt: [["chicken|tofu|ground beef", "200 g"], ["daikon|radish", "a few"], ["cucumber", "sliced"], ["mayonnaise", "2 tbsp"], ["cilantro", "a handful"], ["chili pepper", "sliced"], ["soy sauce|fish sauce", "1 tbsp"], ["garlic", "1 clove"]],
    steps: [
      "Quick-pickle matchsticks of carrot and daikon in the vinegar, sugar and a pinch of salt for 15 minutes.",
      "Pan-fry the chicken or tofu with garlic and soy or fish sauce until caramelized.",
      "Split and toast the rolls, then spread with mayo.",
      "Fill with the meat, pickles, cucumber, cilantro and chili."
    ]
  },
  {
    name: "Fresh Spring Rolls", cuisine: "Vietnamese", emoji: "🥢", time: 30, serves: 3, meal: "lunch",
    need: [["rice paper", "8 sheets"], ["lettuce|any leafy green", "a few leaves"], ["carrot|cucumber", "matchsticks"]],
    opt: [["rice noodles", "100 g"], ["shrimp|tofu|chicken", "150 g, cooked"], ["mint|basil|cilantro", "a handful"], ["peanut butter", "for dipping sauce"], ["soy sauce", "for dipping sauce"], ["lime", "for dipping sauce"], ["mango|avocado", "sliced"]],
    steps: [
      "Cook and cool the noodles. Prep all the fillings in small piles.",
      "Dip a rice paper sheet in warm water for a few seconds until soft, and lay it on a damp board.",
      "Add lettuce, noodles, vegetables, herbs and shrimp or tofu. Fold in the sides and roll up tightly.",
      "Serve with a dip of peanut butter whisked with soy sauce, lime and hot water."
    ]
  },
  {
    name: "Bún (Vietnamese Noodle Salad)", cuisine: "Vietnamese", emoji: "🥗", time: 25, serves: 2, meal: "lunch",
    need: [["rice noodles", "200 g"], ["lime", "2"], ["sugar|honey", "2 tbsp"], ["any salad vegetable", "2 cups"]],
    opt: [["fish sauce|soy sauce", "2 tbsp"], ["chicken|shrimp|tofu|ground beef", "250 g"], ["mint|basil|cilantro", "a handful"], ["peanuts", "crushed"], ["garlic", "1 clove"], ["chili pepper", "1"], ["carrot", "pickled or grated"]],
    steps: [
      "Cook and rinse the noodles under cold water.",
      "Make nuoc cham: lime juice, sugar, fish sauce, garlic, chili and ¼ cup water.",
      "Cook the protein in a hot pan until caramelized.",
      "Pile noodles, lettuce, cucumber, carrot and herbs in bowls, add the protein and peanuts, and pour over the sauce."
    ]
  }
];

// Cuisines in the order they're shown, with a flag/icon for each.
const CUISINES = {
  "American": "🇺🇸", "Indian": "🇮🇳", "Chinese": "🇨🇳", "Thai": "🇹🇭", "Italian": "🇮🇹", "Mexican": "🇲🇽",
  "Japanese": "🇯🇵", "Korean": "🇰🇷", "Vietnamese": "🇻🇳", "Middle Eastern": "🧆", "Greek": "🇬🇷", "French": "🇫🇷", "Spanish": "🇪🇸", "British": "🇬🇧"
};

// ---------- Produce ----------
const VEGETABLES = {
  "Leafy greens": ["spinach", "lettuce", "romaine", "iceberg lettuce", "butter lettuce", "kale", "arugula", "swiss chard", "collard greens", "bok choy", "watercress", "endive", "radicchio", "escarole", "frisée", "mustard greens", "beet greens", "turnip greens", "dandelion greens", "sorrel", "tatsoi", "microgreens", "pea shoots"],
  "Cabbage family": ["broccoli", "broccolini", "broccoli rabe", "cauliflower", "romanesco", "cabbage", "red cabbage", "savoy cabbage", "napa cabbage", "brussels sprouts", "kohlrabi", "gai lan"],
  "Roots & tubers": ["potato", "sweet potato", "yam", "carrot", "beetroot", "radish", "daikon", "turnip", "parsnip", "rutabaga", "celeriac", "taro", "cassava", "jicama", "ginger", "turmeric root", "horseradish", "jerusalem artichoke", "burdock root", "lotus root", "water chestnut", "salsify"],
  "Onions & garlic": ["onion", "red onion", "white onion", "shallot", "pearl onion", "garlic", "green onion", "leek", "chives", "ramps"],
  "Squash & gourds": ["zucchini", "yellow squash", "pattypan squash", "butternut squash", "acorn squash", "spaghetti squash", "delicata squash", "kabocha squash", "pumpkin", "cucumber", "chayote", "bitter melon", "bottle gourd", "ridge gourd", "ivy gourd"],
  "Tomatoes, peppers & eggplant": ["tomato", "cherry tomato", "tomatillo", "bell pepper", "chili pepper", "jalapeño", "serrano pepper", "habanero", "poblano pepper", "banana pepper", "shishito pepper", "eggplant"],
  "Peas, beans & corn": ["peas", "snow peas", "snap peas", "green beans", "long beans", "runner beans", "fava beans", "lima beans", "edamame", "okra", "corn", "baby corn", "drumstick (moringa)"],
  "Stalks & shoots": ["celery", "asparagus", "fennel", "artichoke", "bamboo shoots", "bean sprouts", "hearts of palm", "cardoon", "rhubarb"],
  "Mushrooms": ["mushroom", "cremini mushroom", "portobello mushroom", "shiitake mushroom", "oyster mushroom", "king oyster mushroom", "enoki mushroom", "maitake mushroom", "porcini mushroom", "chanterelle mushroom"],
  "Other": ["avocado", "olives", "seaweed", "nori", "kelp"]
};

const FRUITS = {
  "Citrus": ["lemon", "lime", "key lime", "orange", "blood orange", "mandarin", "clementine", "tangerine", "grapefruit", "pomelo", "kumquat", "yuzu"],
  "Berries": ["berries", "strawberry", "blueberry", "raspberry", "blackberry", "cranberry", "gooseberry", "mulberry", "boysenberry", "elderberry", "red currant", "black currant", "goji berry", "lingonberry", "huckleberry"],
  "Apples & pears": ["apple", "green apple", "pear", "asian pear", "quince", "loquat"],
  "Stone fruit": ["peach", "nectarine", "plum", "apricot", "cherry", "sour cherry", "damson"],
  "Tropical": ["banana", "plantain", "pineapple", "mango", "papaya", "coconut", "passion fruit", "guava", "kiwi", "dragon fruit", "lychee", "longan", "rambutan", "mangosteen", "jackfruit", "durian", "star fruit", "soursop", "custard apple", "tamarind", "sapodilla", "feijoa"],
  "Melons & grapes": ["watermelon", "cantaloupe", "honeydew", "galia melon", "grapes"],
  "Other fruit": ["pomegranate", "fig", "persimmon"],
  "Dried fruit": ["raisins", "dates", "prunes", "dried apricots", "dried cranberries", "dried figs"]
};

const ALL_FRUIT = Object.values(FRUITS).flat();
const MUSHROOMS = VEGETABLES["Mushrooms"];
const BERRIES = FRUITS["Berries"];
const LEAFY = ["spinach", "kale", "swiss chard", "collard greens", "bok choy", "mustard greens", "beet greens", "turnip greens", "dandelion greens", "escarole", "broccoli rabe", "gai lan", "tatsoi", "watercress", "cabbage", "savoy cabbage", "napa cabbage"];

// GROUPS: a recipe ingredient (key) is satisfied if you have the key itself
// or ANY of the listed items. Keys starting with "any …" are flexible slots.
const GROUPS = {
  "ground beef": ["beef"],
  "beef": ["ground beef"],
  "white fish": ["salmon"],
  "onion": ["red onion", "white onion", "shallot", "pearl onion"],
  "green onion": ["chives", "ramps"],
  "lettuce": ["romaine", "iceberg lettuce", "butter lettuce"],
  "tomato": ["cherry tomato"],
  "mushroom": MUSHROOMS,
  "berries": BERRIES,
  "lime": ["key lime"],
  "apple": ["green apple"],
  "chili flakes": ["chili pepper", "jalapeño", "serrano pepper", "habanero"],
  "any leafy green": LEAFY,
  "any vegetable for roasting": ["potato", "sweet potato", "yam", "carrot", "parsnip", "beetroot", "turnip", "rutabaga", "celeriac", "radish", "broccoli", "broccolini", "cauliflower", "romanesco", "brussels sprouts", "cabbage", "butternut squash", "acorn squash", "delicata squash", "kabocha squash", "pumpkin", "zucchini", "yellow squash", "eggplant", "bell pepper", "red onion", "fennel", "asparagus", "green beans", "okra", "jerusalem artichoke", ...MUSHROOMS],
  "any stir-fry vegetable": ["broccoli", "broccolini", "gai lan", "bell pepper", "carrot", "snow peas", "snap peas", "bok choy", "napa cabbage", "cabbage", "zucchini", "green beans", "long beans", "baby corn", "corn", "bean sprouts", "bamboo shoots", "water chestnut", "asparagus", "cauliflower", "edamame", "eggplant", "okra", "peas", "kale", "spinach", "lotus root", ...MUSHROOMS],
  "any soup vegetable": ["carrot", "celery", "potato", "leek", "zucchini", "green beans", "peas", "corn", "tomato", "cabbage", "kale", "spinach", "swiss chard", "sweet potato", "parsnip", "turnip", "butternut squash", "pumpkin", "cauliflower", "broccoli", "fennel", "celeriac", "lima beans", "fava beans", ...MUSHROOMS],
  "any salad vegetable": ["lettuce", "romaine", "iceberg lettuce", "butter lettuce", "arugula", "spinach", "kale", "watercress", "endive", "radicchio", "frisée", "microgreens", "cucumber", "tomato", "cherry tomato", "bell pepper", "carrot", "radish", "red onion", "avocado", "celery", "corn", "fennel", "beetroot", "snap peas", "edamame", "jicama", "red cabbage", "pea shoots", "bean sprouts", "hearts of palm"],
  "any curry vegetable": ["potato", "sweet potato", "cauliflower", "peas", "carrot", "green beans", "eggplant", "spinach", "okra", "bell pepper", "zucchini", "pumpkin", "butternut squash", "chayote", "bottle gourd", "ridge gourd", "ivy gourd", "drumstick (moringa)", "bitter melon", "taro", "cabbage", ...MUSHROOMS],
  "any fruit": ALL_FRUIT.filter(f => !["lemon", "lime", "key lime", "yuzu", "tamarind", "coconut"].includes(f)),
  "any smoothie fruit": ["banana", "mango", "pineapple", "peach", "nectarine", "papaya", "kiwi", "orange", "mandarin", "apple", "pear", "cherry", "watermelon", "plum", "apricot", "dragon fruit", "passion fruit", "guava", "persimmon", "dates", "avocado", "soursop", "jackfruit", ...BERRIES],
  "any baking fruit": ["apple", "green apple", "pear", "quince", "peach", "nectarine", "plum", "apricot", "cherry", "sour cherry", "rhubarb", "fig", "mango", "pineapple", ...BERRIES]
};

// Ingredients shown as quick-pick buttons. A plain list shows as chips;
// an object shows sub-sections. "Popular" is expanded by default.
const CATEGORIES = {
  "Popular": ["egg", "chicken", "onion", "garlic", "tomato", "potato", "carrot", "bell pepper", "spinach", "broccoli", "lemon", "banana", "apple", "milk", "butter", "cheese", "rice", "pasta", "bread"],
  "Proteins": ["egg", "chicken", "ground beef", "beef", "lamb", "pork", "turkey", "duck", "bacon", "ham", "sausage", "salmon", "tuna", "white fish", "shrimp", "tofu", "paneer", "beans", "chickpeas", "lentils"],
  "Vegetables": VEGETABLES,
  "Fruit": FRUITS,
  "Dairy": ["milk", "butter", "cheese", "paneer", "yogurt", "cream"],
  "Grains & bread": ["rice", "pasta", "rice noodles", "instant noodles", "bread", "breadcrumbs", "tortilla", "rice paper", "flour", "oats", "yeast"],
  "Pantry": ["soy sauce", "fish sauce", "vinegar", "sesame oil", "honey", "sugar", "mayonnaise", "coconut milk", "peanut butter", "peanuts", "tahini", "sesame seeds", "thai curry paste", "miso", "kimchi", "gochujang", "ketchup", "mustard", "worcestershire sauce", "chocolate", "cornstarch", "almonds", "walnuts", "cashews", "baking powder", "baking soda"],
  "Herbs & spices": ["basil", "parsley", "cilantro", "mint", "dill", "oregano", "cinnamon", "cumin", "turmeric", "paprika", "chili flakes", "chili powder", "curry powder", "garam masala", "thyme", "rosemary", "bay leaf", "nutmeg", "cloves", "cardamom", "vanilla"]
};

// Other names people might type, mapped to the names used above.
const SYNONYMS = {
  "eggs": "egg", "chicken breast": "chicken", "chicken thigh": "chicken", "chicken thighs": "chicken",
  "mince": "ground beef", "minced beef": "ground beef", "beef mince": "ground beef", "hamburger": "ground beef", "minced lamb": "lamb", "lamb mince": "lamb", "mutton": "lamb",
  "steak": "beef", "stewing beef": "beef", "beef brisket": "beef", "pork chops": "pork", "pork belly": "pork", "pork loin": "pork",
  "cod": "white fish", "haddock": "white fish", "hake": "white fish", "pollock": "white fish", "tilapia": "white fish", "fish": "white fish",
  "garlic clove": "garlic", "garlic cloves": "garlic", "clove of garlic": "garlic", "cloves of garlic": "garlic",
  "dragonfruit": "dragon fruit", "passionfruit": "passion fruit", "starfruit": "star fruit", "jackfruits": "jackfruit",
  "cornflour": "cornstarch", "corn starch": "cornstarch", "corn flour": "cornstarch", "bay leaves": "bay leaf",
  "vanilla extract": "vanilla", "vanilla essence": "vanilla", "worcestershire": "worcestershire sauce",
  "plain flour": "flour", "all purpose flour": "flour", "self-raising flour": "flour", "self raising flour": "flour",
  "caster sugar": "sugar", "icing sugar": "sugar", "brown sugar": "sugar", "granulated sugar": "sugar",
  "double cream": "cream", "single cream": "cream", "whipping cream": "cream", "creme fraiche": "cream",
  "tomato puree": "tomato", "tomato paste": "tomato", "chopped tomatoes": "tomato", "plum tomatoes": "tomato",
  "spaghetti": "pasta", "penne": "pasta", "macaroni": "pasta", "noodles": "pasta", "fusilli": "pasta", "linguine": "pasta",
  "ramen": "instant noodles", "maggi": "instant noodles", "cup noodles": "instant noodles",
  "canned tomatoes": "tomato", "tinned tomatoes": "tomato", "tomato sauce": "tomato", "passata": "tomato", "tomatoes": "tomato",
  "potatoes": "potato", "chickpea": "chickpeas", "garbanzo beans": "chickpeas", "garbanzo": "chickpeas",
  "black beans": "beans", "kidney beans": "beans", "pinto beans": "beans", "refried beans": "beans",
  "lentil": "lentils", "red lentils": "lentils",
  "scallion": "green onion", "scallions": "green onion", "spring onion": "green onion", "spring onions": "green onion",
  "capsicum": "bell pepper", "pepper": "bell pepper", "peppers": "bell pepper", "sweet pepper": "bell pepper",
  "aubergine": "eggplant", "brinjal": "eggplant", "courgette": "zucchini", "rocket": "arugula", "beet": "beetroot", "beets": "beetroot",
  "swede": "rutabaga", "sweetcorn": "corn", "corn on the cob": "corn", "maize": "corn", "mangetout": "snow peas",
  "sugar snap peas": "snap peas", "string beans": "green beans", "french beans": "green beans", "lady finger": "okra", "bhindi": "okra",
  "chili": "chili pepper", "chilli": "chili pepper", "chillies": "chili pepper", "chilies": "chili pepper", "green chili": "chili pepper",
  "hot pepper": "chili pepper", "jalapeno": "jalapeño", "pak choi": "bok choy", "bok choi": "bok choy", "chinese cabbage": "napa cabbage",
  "baby spinach": "spinach", "chard": "swiss chard", "collards": "collard greens", "brussel sprouts": "brussels sprouts",
  "brussels sprout": "brussels sprouts", "beansprouts": "bean sprouts", "bean sprout": "bean sprouts", "sweet potatoes": "sweet potato",
  "squash": "butternut squash", "marrow": "zucchini", "karela": "bitter melon", "lauki": "bottle gourd", "moringa": "drumstick (moringa)",
  "drumstick": "drumstick (moringa)", "drumsticks": "drumstick (moringa)", "tindora": "ivy gourd", "sunchoke": "jerusalem artichoke",
  "frisee": "frisée", "celery root": "celeriac", "button mushroom": "mushroom", "baby bella": "cremini mushroom", "shiitake": "shiitake mushroom",
  "portobello": "portobello mushroom", "enoki": "enoki mushroom", "oyster mushrooms": "oyster mushroom",
  "grape": "grapes", "date": "dates", "raisin": "raisins", "prune": "prunes", "sultanas": "raisins", "kiwifruit": "kiwi",
  "rockmelon": "cantaloupe", "muskmelon": "cantaloupe", "melon": "cantaloupe", "satsuma": "mandarin", "pitaya": "dragon fruit",
  "carambola": "star fruit", "sharon fruit": "persimmon", "cherimoya": "custard apple", "sitaphal": "custard apple", "chikoo": "sapodilla",
  "mushrooms": "mushroom",
  "cheddar": "cheese", "mozzarella": "cheese", "parmesan": "cheese", "feta": "cheese", "cheese slices": "cheese",
  "heavy cream": "cream", "sour cream": "cream", "greek yogurt": "yogurt", "yoghurt": "yogurt", "curd": "yogurt",
  "mayo": "mayonnaise", "tortillas": "tortilla", "wraps": "tortilla", "wrap": "tortilla",
  "oatmeal": "oats", "rolled oats": "oats", "bread slices": "bread", "toast": "bread", "loaf": "bread",
  "soy": "soy sauce", "soya sauce": "soy sauce", "red pepper flakes": "chili flakes", "chilli flakes": "chili flakes",
  "chilli powder": "chili powder", "salmon fillet": "salmon", "canned tuna": "tuna", "tuna can": "tuna",
  "coriander": "cilantro", "coriander leaves": "cilantro", "dhania": "cilantro", "ghee": "butter", "cottage cheese": "paneer",
  "rice vinegar": "vinegar", "white vinegar": "vinegar", "apple cider vinegar": "vinegar", "balsamic vinegar": "vinegar",
  "curry paste": "thai curry paste", "green curry paste": "thai curry paste", "red curry paste": "thai curry paste",
  "miso paste": "miso", "rice stick": "rice noodles", "glass noodles": "rice noodles", "vermicelli": "rice noodles",
  "groundnuts": "peanuts", "turmeric powder": "turmeric", "haldi": "turmeric", "jeera": "cumin", "cumin seeds": "cumin",
  "toasted sesame oil": "sesame oil", "prawn": "shrimp", "prawns": "shrimp", "sausages": "sausage", "chorizo": "sausage",
  "hot dogs": "sausage", "dark chocolate": "chocolate", "chocolate chips": "chocolate", "cocoa": "chocolate", "panko": "breadcrumbs",
  "bread crumbs": "breadcrumbs", "tomato ketchup": "ketchup", "dried yeast": "yeast", "instant yeast": "yeast",
  "spring roll wrappers": "rice paper", "dijon": "mustard", "dijon mustard": "mustard", "buns": "bread", "pita": "bread", "naan": "bread", "baguette": "bread", "korean chili paste": "gochujang", "thai basil": "basil", "pudina": "mint"
};

// Meat and fish, used for the vegetarian / non-veg filter.
// (Eggs are handled separately by the "Eggs count as vegetarian" setting.)
const MEAT = ["chicken", "ground beef", "beef", "lamb", "pork", "turkey", "duck", "bacon", "ham", "sausage", "salmon", "tuna", "white fish", "shrimp", "fish sauce", "worcestershire sauce"];

// Assumed in every kitchen and never counted as missing.
const STAPLES = ["salt", "pepper", "oil", "water"];
