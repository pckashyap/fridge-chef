# 🍳 Fridge Chef

Tell it what's in your kitchen and it shows you what you can cook.

**Live site:** https://pckashyap.github.io/fridge-chef/

## Features

- **Pick your ingredients.** Type them in, paste a comma-separated list, or tap from 300+ items, including 130+ vegetables and 75+ fruits. It understands other names too, like aubergine, courgette, coriander, prawns and bhindi.
- **Talk to it in 36 languages.** Tap 🎤 and say what you have, in English, Telugu, Hindi, Tamil, Spanish, Chinese, Arabic and more. Non-English speech or typing is translated, and the ingredients are added automatically. The mic works in Chrome, Edge and Safari.
- **950+ recipes from 65 cuisines.** 162 built-in recipes from 14 cuisines, plus about 790 world recipes from 60+ countries loaded live from [TheMealDB](https://www.themealdb.com). These include Turkish, Polish, Jamaican, Brazilian, Moroccan, Filipino and many more.
- **Smart matching.** "Ready to cook" lists what you can make now. "Just a few things short" lists recipes you're 1–2 items away from, with a copyable shopping list.
- **Flexible ingredients.** Many recipes take "any leafy green" or "any stir-fry vegetable", so they work with whatever produce you have.
- **Vegetarian / Non-veg filter.** Includes an "eggs count as vegetarian" option. Vegetarian mode swaps in meat-free options where a recipe allows it.
- **Filters** for meal type and how many missing ingredients you'll accept.
- **Photos** for almost every recipe, and links to the original recipe and video for world recipes.
- **Saved in your browser.** Your kitchen list and settings are remembered.

## Run it locally

No build step and no dependencies. Just open `index.html` in a browser. World recipes need an internet connection and are cached in your browser for a week. Offline, the 162 built-in recipes still work.

## Files

| File | What's in it |
|---|---|
| `index.html` | Page layout |
| `styles.css` | Styling (light and dark mode) |
| `app.js` | Matching, filtering and rendering logic |
| `recipes.js` | Recipes, ingredient lists, groups and synonyms |
| `images.js` | Photo URLs for built-in recipes |
| `worldrecipes.js` | Loads and converts world recipes from TheMealDB |
| `voice.js` | Voice input, translation and ingredient detection |

To add a recipe, copy an entry in `recipes.js` and edit it.

## Photo credits

World recipes, their photos and instructions come from [TheMealDB](https://www.themealdb.com).

Built-in recipe photos are free-licensed images from [Wikipedia](https://en.wikipedia.org/) and [Wikimedia Commons](https://commons.wikimedia.org/). Each recipe's photo links to its source page, where the author and license are listed. Photos show a typical version of the dish.
