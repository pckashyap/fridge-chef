// Recipe photos: free-licensed lead images from the matching Wikipedia article.
// Generated automatically; each links back to its article for credit.
const RECIPE_IMAGES = {
 "Fluffy Scrambled Eggs": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/20/Scrambed_eggs.jpg/500px-Scrambed_eggs.jpg",
  "page": "https://en.wikipedia.org/wiki/Scrambled_eggs"
 },
 "Loaded Omelette": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b1/FoodOmelete.jpg/500px-FoodOmelete.jpg",
  "page": "https://en.wikipedia.org/wiki/Omelette"
 },
 "French Toast": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/42/FrenchToast.JPG/500px-FrenchToast.JPG",
  "page": "https://en.wikipedia.org/wiki/French_toast"
 },
 "Classic Pancakes": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/40/Foodiesfeed.com_pouring-honey-on-pancakes-with-walnuts.jpg/500px-Foodiesfeed.com_pouring-honey-on-pancakes-with-walnuts.jpg",
  "page": "https://en.wikipedia.org/wiki/Pancake"
 },
 "Overnight-Style Oatmeal": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/67/Oatmeal_%281%29.jpg/500px-Oatmeal_%281%29.jpg",
  "page": "https://en.wikipedia.org/wiki/Porridge"
 },
 "Yogurt Parfait": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/73/Parfait_samples_by_pinguino_in_Osaka%2C_Japan.jpg/500px-Parfait_samples_by_pinguino_in_Osaka%2C_Japan.jpg",
  "page": "https://en.wikipedia.org/wiki/Parfait"
 },
 "Fruit Smoothie": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0c/Kiwi_Smoothie.jpg/500px-Kiwi_Smoothie.jpg",
  "page": "https://en.wikipedia.org/wiki/Smoothie"
 },
 "Avocado Toast": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5b/Avocado_toast_at_Voyager_Espresso_%2833134505776%29.jpg/500px-Avocado_toast_at_Voyager_Espresso_%2833134505776%29.jpg",
  "page": "https://en.wikipedia.org/wiki/Avocado_toast"
 },
 "Grilled Cheese": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7c/Cheddar_cheese_sandwich.jpg/500px-Cheddar_cheese_sandwich.jpg",
  "page": "https://en.wikipedia.org/wiki/Cheese_sandwich"
 },
 "Tuna Melt": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d1/Tuna_melt_sandwich_with_fries.jpg/500px-Tuna_melt_sandwich_with_fries.jpg",
  "page": "https://en.wikipedia.org/wiki/Melt_sandwich"
 },
 "BLT Sandwich": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b7/Mmm..._BLT_for_me%21_%285487341380%29.jpg/500px-Mmm..._BLT_for_me%21_%285487341380%29.jpg",
  "page": "https://en.wikipedia.org/wiki/BLT"
 },
 "Garlic Bread": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/59/Garlicbread.jpg/500px-Garlicbread.jpg",
  "page": "https://en.wikipedia.org/wiki/Garlic_bread"
 },
 "Garlic Mushrooms on Toast": {
  "src": "https://upload.wikimedia.org/wikipedia/commons/5/59/Baby_bella_mushrooms_being_saut%C3%A9ed.jpg",
  "page": "https://en.wikipedia.org/wiki/Saut%C3%A9ed_mushrooms"
 },
 "Spaghetti Aglio e Olio": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6f/Aglio_e_olio.jpg/500px-Aglio_e_olio.jpg",
  "page": "https://en.wikipedia.org/wiki/Spaghetti_aglio_e_olio"
 },
 "Simple Tomato Pasta": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/33/Spaghettata.JPG/500px-Spaghettata.JPG",
  "page": "https://en.wikipedia.org/wiki/Pasta_al_pomodoro"
 },
 "Creamy Greens Pasta": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3f/%28Pasta%29_by_David_Adam_Kess_%28pic.2%29.jpg/500px-%28Pasta%29_by_David_Adam_Kess_%28pic.2%29.jpg",
  "page": "https://en.wikipedia.org/wiki/Pasta"
 },
 "Stovetop Mac & Cheese": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/44/Original_Mac_n_Cheese_.jpg/500px-Original_Mac_n_Cheese_.jpg",
  "page": "https://en.wikipedia.org/wiki/Macaroni_and_cheese"
 },
 "Spaghetti Bolognese": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4d/Tagliatelle_al_rag%C3%B9_%28image_modified%29.jpg/500px-Tagliatelle_al_rag%C3%B9_%28image_modified%29.jpg",
  "page": "https://en.wikipedia.org/wiki/Bolognese_sauce"
 },
 "Peanut Noodles": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d2/Dan-dan_noodles%2C_Shanghai.jpg/500px-Dan-dan_noodles%2C_Shanghai.jpg",
  "page": "https://en.wikipedia.org/wiki/Dandan_noodles"
 },
 "Upgraded Instant Ramen": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c3/Shoyu_Ramen%EF%BC%88Tokyo_Ramen%EF%BC%89_-_01.jpg/500px-Shoyu_Ramen%EF%BC%88Tokyo_Ramen%EF%BC%89_-_01.jpg",
  "page": "https://en.wikipedia.org/wiki/Ramen"
 },
 "Egg Fried Rice": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c3/Koh_Mak%2C_Thailand%2C_Fried_rice_with_seafood%2C_Thai_fried_rice.jpg/500px-Koh_Mak%2C_Thailand%2C_Fried_rice_with_seafood%2C_Thai_fried_rice.jpg",
  "page": "https://en.wikipedia.org/wiki/Fried_rice"
 },
 "Chicken (or Tofu) Stir-Fry": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/62/Making_Stir-Fry_%283286445383%29.jpg/500px-Making_Stir-Fry_%283286445383%29.jpg",
  "page": "https://en.wikipedia.org/wiki/Stir_frying"
 },
 "Vegetable Stir-Fry": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4d/Chopsueywithrice.jpg/500px-Chopsueywithrice.jpg",
  "page": "https://en.wikipedia.org/wiki/Chop_suey"
 },
 "Garlic Butter Chicken": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a6/Chicken_piccata_dinner_cooking_food.jpg/500px-Chicken_piccata_dinner_cooking_food.jpg",
  "page": "https://en.wikipedia.org/wiki/Piccata"
 },
 "Chicken or Bean Quesadilla": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/96/Sincronizada_mexicana.jpg/500px-Sincronizada_mexicana.jpg",
  "page": "https://en.wikipedia.org/wiki/Sincronizada"
 },
 "Beef Tacos": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/73/001_Tacos_de_carnitas%2C_carne_asada_y_al_pastor.jpg/500px-001_Tacos_de_carnitas%2C_carne_asada_y_al_pastor.jpg",
  "page": "https://en.wikipedia.org/wiki/Taco"
 },
 "Shakshuka": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/18/Shakshuka_by_Calliopejen1.jpg/500px-Shakshuka_by_Calliopejen1.jpg",
  "page": "https://en.wikipedia.org/wiki/Shakshouka"
 },
 "Spanish Potato Omelette": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/49/Tortilla_de_patata_-_San_Sebasti%C3%A1n.jpg/500px-Tortilla_de_patata_-_San_Sebasti%C3%A1n.jpg",
  "page": "https://en.wikipedia.org/wiki/Spanish_omelette"
 },
 "Crispy Potato Wedges": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/04/Potato_wedges_at_Mensa_Paderborn_%2811956794164%29.jpg/500px-Potato_wedges_at_Mensa_Paderborn_%2811956794164%29.jpg",
  "page": "https://en.wikipedia.org/wiki/Potato_wedges"
 },
 "Creamy Mashed Potatoes": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/51/Sous_vide_mashed_potatoes.jpg/500px-Sous_vide_mashed_potatoes.jpg",
  "page": "https://en.wikipedia.org/wiki/Mashed_potato"
 },
 "Tomato Soup": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8c/Tomato_soup%2C_plant-based_%2844040252791%29.jpg/500px-Tomato_soup%2C_plant-based_%2844040252791%29.jpg",
  "page": "https://en.wikipedia.org/wiki/Tomato_soup"
 },
 "Homestyle Chicken Soup": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b3/Chicken_Noodle_Soup.jpg/500px-Chicken_Noodle_Soup.jpg",
  "page": "https://en.wikipedia.org/wiki/Chicken_soup"
 },
 "Red Lentil Soup": {
  "src": "https://upload.wikimedia.org/wikipedia/commons/6/61/EgFoodLentilSoup.jpg",
  "page": "https://en.wikipedia.org/wiki/Lentil_soup"
 },
 "Chickpea Curry": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8e/Chana_masala.jpg/500px-Chana_masala.jpg",
  "page": "https://en.wikipedia.org/wiki/Chana_masala"
 },
 "Hummus": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bf/Lebanese_style_hummus.jpg/500px-Lebanese_style_hummus.jpg",
  "page": "https://en.wikipedia.org/wiki/Hummus"
 },
 "Guacamole": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/64/Guacamole_IMGP1271.jpg/500px-Guacamole_IMGP1271.jpg",
  "page": "https://en.wikipedia.org/wiki/Guacamole"
 },
 "Greek-Style Salad": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f2/Greece_Food_Horiatiki.JPG/500px-Greece_Food_Horiatiki.JPG",
  "page": "https://en.wikipedia.org/wiki/Greek_salad"
 },
 "Caprese Salad": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b1/Caprese-1_%28tigher_crop%29.jpg/500px-Caprese-1_%28tigher_crop%29.jpg",
  "page": "https://en.wikipedia.org/wiki/Caprese_salad"
 },
 "Banana Bread": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/55/Banana_bread_slices.jpg/500px-Banana_bread_slices.jpg",
  "page": "https://en.wikipedia.org/wiki/Banana_bread"
 },
 "Cinnamon Fried Apples": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f9/Hot_and_Sweet_Baked_Apples_-_50495578482.jpg/500px-Hot_and_Sweet_Baked_Apples_-_50495578482.jpg",
  "page": "https://en.wikipedia.org/wiki/Baked_apple"
 },
 "Fresh Fruit Salad": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/74/Fruktsallad_%28Fruit_salad%29.jpg/500px-Fruktsallad_%28Fruit_salad%29.jpg",
  "page": "https://en.wikipedia.org/wiki/Fruit_salad"
 },
 "Garden Salad": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/94/Salad_platter.jpg/500px-Salad_platter.jpg",
  "page": "https://en.wikipedia.org/wiki/Salad"
 },
 "Minestrone-Style Vegetable Soup": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fe/Minestrone_soup_%285%29.jpg/500px-Minestrone_soup_%285%29.jpg",
  "page": "https://en.wikipedia.org/wiki/Minestrone"
 },
 "Ratatouille": {
  "src": "https://upload.wikimedia.org/wikipedia/commons/3/37/Ratatouille_home_cooked.jpg",
  "page": "https://en.wikipedia.org/wiki/Ratatouille"
 },
 "Aloo Gobi": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a9/Aloo_Ghobi.jpg/500px-Aloo_Ghobi.jpg",
  "page": "https://en.wikipedia.org/wiki/Aloo_gobhi"
 },
 "Butternut Squash Soup": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cd/K%C3%BCrbissuppe_mit_Kern%C3%B6l.JPG/500px-K%C3%BCrbissuppe_mit_Kern%C3%B6l.JPG",
  "page": "https://en.wikipedia.org/wiki/Pumpkin_soup"
 },
 "Baked Sweet Potato": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5d/Gungoguma_%28roasted_sweet_potatoes%29_2.jpg/500px-Gungoguma_%28roasted_sweet_potatoes%29_2.jpg",
  "page": "https://en.wikipedia.org/wiki/Roasted_sweet_potato"
 },
 "Zucchini Fritters": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cd/Zucchini_Fritters_-_Lunch_at_Yanyali_Fehmi_Lokantasi_%286421047753%29.jpg/500px-Zucchini_Fritters_-_Lunch_at_Yanyali_Fehmi_Lokantasi_%286421047753%29.jpg",
  "page": "https://en.wikipedia.org/wiki/M%C3%BCcver"
 },
 "Crunchy Coleslaw": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/29/2015-12-20_Spitzkohlsalat_mit_M%C3%B6hren_anagoria.JPG/500px-2015-12-20_Spitzkohlsalat_mit_M%C3%B6hren_anagoria.JPG",
  "page": "https://en.wikipedia.org/wiki/Coleslaw"
 },
 "Cucumber Raita": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/78/Cucumber-raita.jpg/500px-Cucumber-raita.jpg",
  "page": "https://en.wikipedia.org/wiki/Raita"
 },
 "Fruit Crumble": {
  "src": "https://upload.wikimedia.org/wikipedia/commons/2/2d/Vegan_apple_crumble_%288293111737%29.jpg",
  "page": "https://en.wikipedia.org/wiki/Crumble"
 },
 "Egg Curry": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/67/Egg_roast.jpg/500px-Egg_roast.jpg",
  "page": "https://en.wikipedia.org/wiki/Egg_roast"
 },
 "Palak Paneer": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b7/Palakpaneer_Rayagada_Odisha_0009.jpg/500px-Palakpaneer_Rayagada_Odisha_0009.jpg",
  "page": "https://en.wikipedia.org/wiki/Palak_paneer"
 },
 "Home-Style Chicken Curry": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/00/Chicken_tikka_masala_%28cropped%29.jpg/500px-Chicken_tikka_masala_%28cropped%29.jpg",
  "page": "https://en.wikipedia.org/wiki/Chicken_tikka_masala"
 },
 "Masala Omelette": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1d/Masala_omelette.JPG/500px-Masala_omelette.JPG",
  "page": "https://en.wikipedia.org/wiki/Masala_omelette"
 },
 "Bhindi Masala": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/22/Bhindi_Masala.jpg/500px-Bhindi_Masala.jpg",
  "page": "https://en.wikipedia.org/wiki/Bhindi_fry"
 },
 "Jeera Rice": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5e/Jeera-rice.JPG/500px-Jeera-rice.JPG",
  "page": "https://en.wikipedia.org/wiki/Jeera_bhaat"
 },
 "Thai Green Curry": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e5/Thai_green_chicken_curry_and_roti.jpg/500px-Thai_green_chicken_curry_and_roti.jpg",
  "page": "https://en.wikipedia.org/wiki/Green_curry"
 },
 "Pad Kra Pao (Thai Basil Stir-Fry)": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ae/Basil_fried_crispy_pork_with_rice_-_Chiang_Mai_-_2017-07-11_%28002%29.jpg/500px-Basil_fried_crispy_pork_with_rice_-_Chiang_Mai_-_2017-07-11_%28002%29.jpg",
  "page": "https://en.wikipedia.org/wiki/Phat_kaphrao"
 },
 "Tom Kha (Coconut Soup)": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e5/Flickr_preppybyday_4711943668--Tom_kha_gai.jpg/500px-Flickr_preppybyday_4711943668--Tom_kha_gai.jpg",
  "page": "https://en.wikipedia.org/wiki/Tom_kha_kai"
 },
 "Easy Pad Thai": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/39/Phat_Thai_kung_Chang_Khien_street_stall.jpg/500px-Phat_Thai_kung_Chang_Khien_street_stall.jpg",
  "page": "https://en.wikipedia.org/wiki/Pad_thai"
 },
 "Mango Sticky Rice": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5d/Mango_sticy_rice_%283859549574%29.jpg/500px-Mango_sticy_rice_%283859549574%29.jpg",
  "page": "https://en.wikipedia.org/wiki/Mango_sticky_rice"
 },
 "Thai Cucumber Salad": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7f/Cucumber_Salad_%2830974695127%29.jpg/500px-Cucumber_Salad_%2830974695127%29.jpg",
  "page": "https://en.wikipedia.org/wiki/Cucumber_salad"
 },
 "Tomato & Egg Stir-Fry": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/60/%E7%95%AA%E8%8C%84%E7%82%92%E8%9B%8B2.PNG/500px-%E7%95%AA%E8%8C%84%E7%82%92%E8%9B%8B2.PNG",
  "page": "https://en.wikipedia.org/wiki/Stir-fried_tomato_and_scrambled_eggs"
 },
 "Garlic Bok Choy": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/99/Bok_Choy_%2849553125456%29.jpg/500px-Bok_Choy_%2849553125456%29.jpg",
  "page": "https://en.wikipedia.org/wiki/Bok_choy"
 },
 "Mapo Tofu": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/88/Chen_Mapo_Tofu.jpg/500px-Chen_Mapo_Tofu.jpg",
  "page": "https://en.wikipedia.org/wiki/Mapo_tofu"
 },
 "Kung Pao Chicken or Tofu": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c2/Kung-pao-shanghai.jpg/500px-Kung-pao-shanghai.jpg",
  "page": "https://en.wikipedia.org/wiki/Kung_Pao_chicken"
 },
 "Vegetable Chow Mein": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a6/Homemade_Chow_mein_with_shrimps_and_meat_with_a_choy_and_Choung.jpg/500px-Homemade_Chow_mein_with_shrimps_and_meat_with_a_choy_and_Choung.jpg",
  "page": "https://en.wikipedia.org/wiki/Chow_mein"
 },
 "Huevos Rancheros": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/57/Mmm...huevos_rancheros.jpg/500px-Mmm...huevos_rancheros.jpg",
  "page": "https://en.wikipedia.org/wiki/Huevos_rancheros"
 },
 "Bean & Rice Burrito": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/60/Burrito.JPG/500px-Burrito.JPG",
  "page": "https://en.wikipedia.org/wiki/Burrito"
 },
 "Mexican Street Corn (Elote)": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f5/CookedCornOnTheCob.JPG/500px-CookedCornOnTheCob.JPG",
  "page": "https://en.wikipedia.org/wiki/Corn_on_the_cob"
 },
 "Pico de Gallo": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/33/Mmm..._Pico_de_Gallo_%285923456035%29.jpg/500px-Mmm..._Pico_de_Gallo_%285923456035%29.jpg",
  "page": "https://en.wikipedia.org/wiki/Pico_de_gallo"
 },
 "Tomato Bruschetta": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1f/2014_Bruschetta_The_Larder_Chiang_Mai.jpg/500px-2014_Bruschetta_The_Larder_Chiang_Mai.jpg",
  "page": "https://en.wikipedia.org/wiki/Bruschetta"
 },
 "Basil Pesto Pasta": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c9/BasilPesto.JPG/500px-BasilPesto.JPG",
  "page": "https://en.wikipedia.org/wiki/Pesto"
 },
 "Vegetable Frittata": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/77/Frittata02.jpg/500px-Frittata02.jpg",
  "page": "https://en.wikipedia.org/wiki/Frittata"
 },
 "Simple Risotto": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a5/Risotto_with_speck_and_goat_cheese_%286101067436%29.jpg/500px-Risotto_with_speck_and_goat_cheese_%286101067436%29.jpg",
  "page": "https://en.wikipedia.org/wiki/Risotto"
 },
 "Teriyaki Bowl": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/91/22nd_June_2012_Teriyaki_Duck.jpg/500px-22nd_June_2012_Teriyaki_Duck.jpg",
  "page": "https://en.wikipedia.org/wiki/Teriyaki"
 },
 "Miso Soup": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e8/Miso_Soup_001.jpg/500px-Miso_Soup_001.jpg",
  "page": "https://en.wikipedia.org/wiki/Miso_soup"
 },
 "Tamagoyaki (Sweet Rolled Omelette)": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/06/%E9%B3%A5%E7%84%BC%E3%81%8D%E5%B1%85%E9%85%92%E5%B1%8B_%2839394233682%29.jpg/500px-%E9%B3%A5%E7%84%BC%E3%81%8D%E5%B1%85%E9%85%92%E5%B1%8B_%2839394233682%29.jpg",
  "page": "https://en.wikipedia.org/wiki/Tamagoyaki"
 },
 "Sunomono (Cucumber Salad)": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/91/Kouhaku-namasu_001.jpg/500px-Kouhaku-namasu_001.jpg",
  "page": "https://en.wikipedia.org/wiki/Namasu"
 },
 "Onigiri (Rice Balls)": {
  "src": "https://upload.wikimedia.org/wikipedia/commons/4/43/%E5%B0%8F%E6%96%99%E7%90%86%E3%83%90%E3%83%AB%E3%81%95%E3%81%8F%E3%82%89_%E7%89%B9%E8%A3%BD%E3%81%8A%E3%81%AB%E3%81%8E%E3%82%8A.jpg",
  "page": "https://en.wikipedia.org/wiki/Onigiri"
 },
 "Kimchi Fried Rice": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6a/Kimchi_fried_rice.jpg/500px-Kimchi_fried_rice.jpg",
  "page": "https://en.wikipedia.org/wiki/Kimchi_fried_rice"
 },
 "Bibimbap": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/44/Dolsot-bibimbap.jpg/500px-Dolsot-bibimbap.jpg",
  "page": "https://en.wikipedia.org/wiki/Bibimbap"
 },
 "Gyeran Jjim (Steamed Egg)": {
  "src": "https://upload.wikimedia.org/wikipedia/commons/2/20/Gyeranjjim.jpg",
  "page": "https://en.wikipedia.org/wiki/Gyeran-jjim"
 },
 "Bulgogi-Style Bowl": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/ce/Bulgogi_2.jpg/500px-Bulgogi_2.jpg",
  "page": "https://en.wikipedia.org/wiki/Bulgogi"
 },
 "Baked Falafel": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/57/Falafels_2.jpg/500px-Falafels_2.jpg",
  "page": "https://en.wikipedia.org/wiki/Falafel"
 },
 "Baba Ganoush": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5f/Baba_Ganoush_05of05_%288735238183%29.jpg/500px-Baba_Ganoush_05of05_%288735238183%29.jpg",
  "page": "https://en.wikipedia.org/wiki/Baba_ghanoush"
 },
 "Tzatziki": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/23/Cacik-1.jpg/500px-Cacik-1.jpg",
  "page": "https://en.wikipedia.org/wiki/Tzatziki"
 },
 "Crêpes": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/09/Crepes_dsc07085.jpg/500px-Crepes_dsc07085.jpg",
  "page": "https://en.wikipedia.org/wiki/Cr%C3%AApe"
 },
 "French Onion Soup": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5a/Soupe_%C3%A0_l%27oignon.jpg/500px-Soupe_%C3%A0_l%27oignon.jpg",
  "page": "https://en.wikipedia.org/wiki/French_onion_soup"
 },
 "Patatas Bravas": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/16/Patatas_bravas_madrid.jpg/500px-Patatas_bravas_madrid.jpg",
  "page": "https://en.wikipedia.org/wiki/Patatas_bravas"
 },
 "Gazpacho": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/99/Gazpacho_Malague%C3%B1o_con_su_%E2%80%9Cpica%C3%ADto%E2%80%9D_-_Moreno%2C_Playa_Burriana_%28cropped%29.jpg/500px-Gazpacho_Malague%C3%B1o_con_su_%E2%80%9Cpica%C3%ADto%E2%80%9D_-_Moreno%2C_Playa_Burriana_%28cropped%29.jpg",
  "page": "https://en.wikipedia.org/wiki/Gazpacho"
 },
 "Beans on Toast": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f2/Beans_on_sourdough_toast.jpg/500px-Beans_on_sourdough_toast.jpg",
  "page": "https://en.wikipedia.org/wiki/Beans_on_toast"
 },
 "Cottage Pie": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/52/Homerton_College_-_Shepherd%27s_pie_%28cropped%29.jpg/500px-Homerton_College_-_Shepherd%27s_pie_%28cropped%29.jpg",
  "page": "https://en.wikipedia.org/wiki/Shepherd%27s_pie"
 },
 "Bangers & Mash": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9c/Sausage_and_mash_with_peas.jpg/500px-Sausage_and_mash_with_peas.jpg",
  "page": "https://en.wikipedia.org/wiki/Bangers_and_mash"
 },
 "Bubble & Squeak": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/31/-2021-12-03_Pan_fried_Bubble_and_squeak%2C_Trimingham%2C_Norfolk_%284%29.JPG/500px--2021-12-03_Pan_fried_Bubble_and_squeak%2C_Trimingham%2C_Norfolk_%284%29.JPG",
  "page": "https://en.wikipedia.org/wiki/Bubble_and_squeak"
 },
 "Cheese on Toast": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e7/Welsh_rarebit.JPG/500px-Welsh_rarebit.JPG",
  "page": "https://en.wikipedia.org/wiki/Welsh_rarebit"
 },
 "Scones": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2a/Scone_varieties.jpg/500px-Scone_varieties.jpg",
  "page": "https://en.wikipedia.org/wiki/Scone"
 },
 "Gambas al Ajillo (Garlic Shrimp)": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/65/Gambas_al_ajillo.jpg/500px-Gambas_al_ajillo.jpg",
  "page": "https://en.wikipedia.org/wiki/Gambas_al_ajillo"
 },
 "Pan con Tomate": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8a/Pa_amb_tomaquet.jpg/500px-Pa_amb_tomaquet.jpg",
  "page": "https://en.wikipedia.org/wiki/Pa_amb_tom%C3%A0quet"
 },
 "Vegetable Paella": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ed/01_Paella_Valenciana_original.jpg/500px-01_Paella_Valenciana_original.jpg",
  "page": "https://en.wikipedia.org/wiki/Paella"
 },
 "Churros": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c6/Chocolate_con_churros_%2827343655726%29.jpg/500px-Chocolate_con_churros_%2827343655726%29.jpg",
  "page": "https://en.wikipedia.org/wiki/Churro"
 },
 "Quiche Lorraine": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/29/Quiche.jpg/500px-Quiche.jpg",
  "page": "https://en.wikipedia.org/wiki/Quiche"
 },
 "Croque Monsieur": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3e/Croque_monsieur.jpg/500px-Croque_monsieur.jpg",
  "page": "https://en.wikipedia.org/wiki/Croque_monsieur"
 },
 "Potato Gratin": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2a/Gratin_dauphinois.jpg/500px-Gratin_dauphinois.jpg",
  "page": "https://en.wikipedia.org/wiki/Gratin_dauphinois"
 },
 "Salade Niçoise": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/88/Nizza-Salat_an_der_F_Mittelmeerk%C3%BCste.JPG/500px-Nizza-Salat_an_der_F_Mittelmeerk%C3%BCste.JPG",
  "page": "https://en.wikipedia.org/wiki/Salade_ni%C3%A7oise"
 },
 "Chocolate Mousse": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cb/Chocolate_coffee_mousse.jpg/500px-Chocolate_coffee_mousse.jpg",
  "page": "https://en.wikipedia.org/wiki/Mousse"
 },
 "Avgolemono (Lemon Chicken Soup)": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5a/Avgolemono_soup.jpg/500px-Avgolemono_soup.jpg",
  "page": "https://en.wikipedia.org/wiki/Avgolemono"
 },
 "Gigantes (Baked Beans Greek-Style)": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/be/Gigandes_plaki.jpg/500px-Gigandes_plaki.jpg",
  "page": "https://en.wikipedia.org/wiki/Gigantes_plaki"
 },
 "Chicken Souvlaki Wraps": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cd/%CE%95%CE%BB%CE%BB%CE%B7%CE%BD%CE%B9%CE%BA%CF%8C_%CE%A3%CE%BF%CF%85%CE%B2%CE%BB%CE%AC%CE%BA%CE%B9_-_panoramio.jpg/500px-%CE%95%CE%BB%CE%BB%CE%B7%CE%BD%CE%B9%CE%BA%CF%8C_%CE%A3%CE%BF%CF%85%CE%B2%CE%BB%CE%AC%CE%BA%CE%B9_-_panoramio.jpg",
  "page": "https://en.wikipedia.org/wiki/Souvlaki"
 },
 "Briam (Greek Roast Vegetables)": {
  "src": "https://upload.wikimedia.org/wikipedia/commons/3/37/Ratatouille_home_cooked.jpg",
  "page": "https://en.wikipedia.org/wiki/Ratatouille"
 },
 "Kimchi Jjigae (Kimchi Stew)": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/db/Korean_stew_dish_-_Kimchi-jjigae_Kimchi_Stew_2019_%2801%29.jpg/500px-Korean_stew_dish_-_Kimchi-jjigae_Kimchi_Stew_2019_%2801%29.jpg",
  "page": "https://en.wikipedia.org/wiki/Kimchi-jjigae"
 },
 "Pajeon (Green Onion Pancake)": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d3/Korean_pancake-Pajeon-05.jpg/500px-Korean_pancake-Pajeon-05.jpg",
  "page": "https://en.wikipedia.org/wiki/Pajeon"
 },
 "Japchae (Stir-Fried Noodles)": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c8/Polish_Korean_Cuisine_and_Culture_Exchanges_Gradmother%E2%80%99s_Recipes_05.jpg/500px-Polish_Korean_Cuisine_and_Culture_Exchanges_Gradmother%E2%80%99s_Recipes_05.jpg",
  "page": "https://en.wikipedia.org/wiki/Japchae"
 },
 "Korean Fried Chicken": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/46/Iksan_City_48_Korean_Style_Fried_chicken.jpg/500px-Iksan_City_48_Korean_Style_Fried_chicken.jpg",
  "page": "https://en.wikipedia.org/wiki/Korean_fried_chicken"
 },
 "Oi Muchim (Spicy Cucumber Salad)": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7f/Cucumber_Salad_%2830974695127%29.jpg/500px-Cucumber_Salad_%2830974695127%29.jpg",
  "page": "https://en.wikipedia.org/wiki/Cucumber_salad"
 },
 "Mujadara (Lentils & Rice)": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c9/Mujaddara.jpg/500px-Mujaddara.jpg",
  "page": "https://en.wikipedia.org/wiki/Mujaddara"
 },
 "Fattoush Salad": {
  "src": "https://upload.wikimedia.org/wikipedia/commons/9/93/Fattoush_mixed-salad.jpg",
  "page": "https://en.wikipedia.org/wiki/Fattoush"
 },
 "Chicken Shawarma Wraps": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/00/Shawarma_2.jpg/500px-Shawarma_2.jpg",
  "page": "https://en.wikipedia.org/wiki/Shawarma"
 },
 "Ful Medames": {
  "src": "https://upload.wikimedia.org/wikipedia/commons/b/bf/Ful_medames_%28arabic_meal%29.jpg",
  "page": "https://en.wikipedia.org/wiki/Ful_medames"
 },
 "Oyakodon (Chicken & Egg Rice Bowl)": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/29/Oyakodon_003.jpg/500px-Oyakodon_003.jpg",
  "page": "https://en.wikipedia.org/wiki/Oyakodon"
 },
 "Okonomiyaki (Cabbage Pancake)": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/59/Okonomiyaki_001.jpg/500px-Okonomiyaki_001.jpg",
  "page": "https://en.wikipedia.org/wiki/Okonomiyaki"
 },
 "Chicken Katsu": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e5/Matsunoya_W_Mega_Chicken_Katsu_Set_20200923-04.jpg/500px-Matsunoya_W_Mega_Chicken_Katsu_Set_20200923-04.jpg",
  "page": "https://en.wikipedia.org/wiki/Chicken_katsu"
 },
 "Hot & Sour Soup": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3a/Ping_SJ_hot_%26_sour_soup.JPG/500px-Ping_SJ_hot_%26_sour_soup.JPG",
  "page": "https://en.wikipedia.org/wiki/Hot_and_sour_soup"
 },
 "Scallion Pancakes": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3a/Spring_onion_pancake_2013.JPG/500px-Spring_onion_pancake_2013.JPG",
  "page": "https://en.wikipedia.org/wiki/Cong_you_bing"
 },
 "Sweet & Sour Chicken": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2e/Sweet_and_sour_pork.jpg/500px-Sweet_and_sour_pork.jpg",
  "page": "https://en.wikipedia.org/wiki/Sweet_and_sour_pork"
 },
 "Egg Drop Soup": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e7/5-Minute_Egg_Drop_Soup-5_%2832079790121%29.jpg/500px-5-Minute_Egg_Drop_Soup-5_%2832079790121%29.jpg",
  "page": "https://en.wikipedia.org/wiki/Egg_drop_soup"
 },
 "Smashed Cucumber Salad": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7f/Cucumber_Salad_%2830974695127%29.jpg/500px-Cucumber_Salad_%2830974695127%29.jpg",
  "page": "https://en.wikipedia.org/wiki/Cucumber_salad"
 },
 "Tom Yum Soup": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e8/Tom_yam_kung_maenam.jpg/500px-Tom_yam_kung_maenam.jpg",
  "page": "https://en.wikipedia.org/wiki/Tom_yum"
 },
 "Pineapple Fried Rice": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/50/Thaifriedrice.jpg/500px-Thaifriedrice.jpg",
  "page": "https://en.wikipedia.org/wiki/Thai_fried_rice"
 },
 "Larb (Thai Minced Meat Salad)": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4a/LaoFood_LarbNeua.JPG/500px-LaoFood_LarbNeua.JPG",
  "page": "https://en.wikipedia.org/wiki/Larb"
 },
 "Chicken Satay with Peanut Sauce": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/24/Sate_Udang.JPG/500px-Sate_Udang.JPG",
  "page": "https://en.wikipedia.org/wiki/Satay"
 },
 "Butter Chicken": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/41/Butter_Chicken_%26_Butter_Naan_-_Home_-_Chandigarh_-_India_-_0006.jpg/500px-Butter_Chicken_%26_Butter_Naan_-_Home_-_Chandigarh_-_India_-_0006.jpg",
  "page": "https://en.wikipedia.org/wiki/Butter_chicken"
 },
 "Rajma (Kidney Bean Curry)": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/37/Rajma_Masala_%2832081557778%29.jpg/500px-Rajma_Masala_%2832081557778%29.jpg",
  "page": "https://en.wikipedia.org/wiki/Rajma"
 },
 "Matar Paneer": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/92/Matar_paneer_dish.jpg/500px-Matar_paneer_dish.jpg",
  "page": "https://en.wikipedia.org/wiki/Matar_paneer"
 },
 "Aloo Paratha": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1e/Triangle_paratha_%28cropped%29.JPG/500px-Triangle_paratha_%28cropped%29.JPG",
  "page": "https://en.wikipedia.org/wiki/Paratha"
 },
 "Vegetable Pulao": {
  "src": "https://upload.wikimedia.org/wikipedia/commons/d/dd/Afghan_Palo.jpg",
  "page": "https://en.wikipedia.org/wiki/Pilaf"
 },
 "Kheer (Rice Pudding)": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/46/Kheer.jpg/500px-Kheer.jpg",
  "page": "https://en.wikipedia.org/wiki/Kheer"
 },
 "Enchiladas": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ec/Enchilada_Rice_Beans.jpg/500px-Enchilada_Rice_Beans.jpg",
  "page": "https://en.wikipedia.org/wiki/Enchilada"
 },
 "Chilaquiles": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f7/Chilaquiles_at_the_Grand_Cantina%2C_Windsor%2C_Ontario%2C_2025-09-01_04.jpg/500px-Chilaquiles_at_the_Grand_Cantina%2C_Windsor%2C_Ontario%2C_2025-09-01_04.jpg",
  "page": "https://en.wikipedia.org/wiki/Chilaquiles"
 },
 "Mexican Rice": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0e/Mexican_rice_144235.jpg/500px-Mexican_rice_144235.jpg",
  "page": "https://en.wikipedia.org/wiki/Mexican_rice"
 },
 "Black Bean Soup": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4c/Black_beans_%281126927794%29.jpg/500px-Black_beans_%281126927794%29.jpg",
  "page": "https://en.wikipedia.org/wiki/Black_turtle_bean"
 },
 "Fajitas": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e2/Chicken_fajita_platter%2C_Lone_Star_Texas_Grill%2C_Windsor%2C_Ontario%2C_2025-06-14_03.jpg/500px-Chicken_fajita_platter%2C_Lone_Star_Texas_Grill%2C_Windsor%2C_Ontario%2C_2025-06-14_03.jpg",
  "page": "https://en.wikipedia.org/wiki/Fajita"
 },
 "Spaghetti Carbonara": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/33/Espaguetis_carbonara.jpg/500px-Espaguetis_carbonara.jpg",
  "page": "https://en.wikipedia.org/wiki/Carbonara"
 },
 "Margherita Pizza": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/57/Neapolitan_pizza_at_Trappica_%2848701940197%29.jpg/500px-Neapolitan_pizza_at_Trappica_%2848701940197%29.jpg",
  "page": "https://en.wikipedia.org/wiki/Pizza_Margherita"
 },
 "Pasta e Fagioli": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/85/Pasta_e_fagioli_cannellini.jpg/500px-Pasta_e_fagioli_cannellini.jpg",
  "page": "https://en.wikipedia.org/wiki/Pasta_e_fagioli"
 },
 "Chili con Carne": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/50/Bowl_of_chili.jpg/500px-Bowl_of_chili.jpg",
  "page": "https://en.wikipedia.org/wiki/Chili_con_carne"
 },
 "Classic Cheeseburger": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4d/Cheeseburger.jpg/500px-Cheeseburger.jpg",
  "page": "https://en.wikipedia.org/wiki/Cheeseburger"
 },
 "Chicken Caesar Salad": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/23/Caesar_salad_%282%29.jpg/500px-Caesar_salad_%282%29.jpg",
  "page": "https://en.wikipedia.org/wiki/Caesar_salad"
 },
 "Chocolate Chip Cookies": {
  "src": "https://upload.wikimedia.org/wikipedia/commons/b/b4/Choco_chip_cookie.png",
  "page": "https://en.wikipedia.org/wiki/Chocolate_chip_cookie"
 },
 "Quick Chicken Pho": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/52/Bowl_of_Meatball_pho.jpg/500px-Bowl_of_Meatball_pho.jpg",
  "page": "https://en.wikipedia.org/wiki/Pho"
 },
 "Bánh Mì": {
  "src": "https://upload.wikimedia.org/wikipedia/commons/0/0c/B%C3%A1nh_m%C3%AC_th%E1%BB%8Bt_n%C6%B0%E1%BB%9Bng.png",
  "page": "https://en.wikipedia.org/wiki/B%C3%A1nh_m%C3%AC"
 },
 "Fresh Spring Rolls": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1a/Homemade_spring_rolls_%287010969349%29.jpg/500px-Homemade_spring_rolls_%287010969349%29.jpg",
  "page": "https://en.wikipedia.org/wiki/G%E1%BB%8Fi_cu%E1%BB%91n"
 },
 "Bún (Vietnamese Noodle Salad)": {
  "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/47/Bun_thit_nuong.jpg/500px-Bun_thit_nuong.jpg",
  "page": "https://en.wikipedia.org/wiki/B%C3%BAn_th%E1%BB%8Bt_n%C6%B0%E1%BB%9Bng"
 },
 "Lemon Garlic Salmon": {
  "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Baked_salmon_with_dill_and_lemon.jpg/500px-Baked_salmon_with_dill_and_lemon.jpg",
  "page": "https://commons.wikimedia.org/wiki/File:Baked_salmon_with_dill_and_lemon.jpg"
 },
 "Garlicky Sautéed Greens": {
  "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Saut%C3%A9ed_Kale_with_Garlic_and_Shredded_Carrots_%287162154997%29.jpg/500px-Saut%C3%A9ed_Kale_with_Garlic_and_Shredded_Carrots_%287162154997%29.jpg",
  "page": "https://commons.wikimedia.org/wiki/File:Saut%C3%A9ed_Kale_with_Garlic_and_Shredded_Carrots_%287162154997%29.jpg"
 },
 "Vegetable Curry": {
  "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Mixed_vegetable_curry_1.jpg/500px-Mixed_vegetable_curry_1.jpg",
  "page": "https://commons.wikimedia.org/wiki/File:Mixed_vegetable_curry_1.jpg"
 },
 "Mango Lassi": {
  "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Lassi_de_mango.JPG/500px-Lassi_de_mango.JPG",
  "page": "https://commons.wikimedia.org/wiki/File:Lassi_de_mango.JPG"
 },
 "Dal Tadka": {
  "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Dal_Tadka-Delhi.jpg/500px-Dal_Tadka-Delhi.jpg",
  "page": "https://commons.wikimedia.org/wiki/File:Dal_Tadka-Delhi.jpg"
 },
 "Yaki Udon": {
  "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Yaki-udon.jpg/500px-Yaki-udon.jpg",
  "page": "https://commons.wikimedia.org/wiki/File:Yaki-udon.jpg"
 }
};
