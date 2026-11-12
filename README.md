# 🍳 Fridge Chef

Tell it what's in your kitchen and it shows you what you can cook.

**Live site:** https://pckashyap.github.io/fridge-chef/

## Features

- **Pick your ingredients.** Type them in, paste a comma-separated list, or tap from 300+ items, including 130+ vegetables and 75+ fruits. It understands other names too, like aubergine, courgette, coriander, prawns and bhindi.
- **162 recipes from 14 cuisines.** American, Indian, Chinese, Thai, Italian, Mexican, Japanese, Korean, Vietnamese, Middle Eastern, Greek, French, Spanish and British.
- **Smart matching.** "Ready to cook" lists what you can make now. "Just a few things short" lists recipes you're 1–2 items away from, with a copyable shopping list.
- **Flexible ingredients.** Many recipes take "any leafy green" or "any stir-fry vegetable", so they work with whatever produce you have.
- **Vegetarian / Non-veg filter.** Includes an "eggs count as vegetarian" option. Vegetarian mode swaps in meat-free options where a recipe allows it.
- **Filters** for meal type and how many missing ingredients you'll accept.
- **Photos** for 160 of the 162 recipes.
- **Saved in your browser.** Your kitchen list and settings are remembered.

## Run it locally

No build step and no dependencies. Just open `index.html` in a browser.

## Files

| File | What's in it |
|---|---|
| `index.html` | Page layout |
| `styles.css` | Styling (light and dark mode) |
| `app.js` | Matching, filtering and rendering logic |
| `recipes.js` | Recipes, ingredient lists, groups and synonyms |
| `images.js` | Recipe photo URLs |

To add a recipe, copy an entry in `recipes.js` and edit it.

## Photo credits

Recipe photos are free-licensed images from [Wikipedia](https://en.wikipedia.org/) and [Wikimedia Commons](https://commons.wikimedia.org/). Each recipe's photo links to its source page, where the author and license are listed. Photos show a typical version of the dish.
