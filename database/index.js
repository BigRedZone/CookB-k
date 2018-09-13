//database
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URI || 'mongodb://localhost:27017/cookbook', { useNewUrlParser: true });

const recipeSchema = mongoose.Schema({
  username: String,
  name: String,
  ingredients: String,
  steps: String,
  prepTime: String,
  cookTime: String,
  servings: String
});

const Recipe = mongoose.model('Recipe', recipeSchema);

// Recipe.save = (recipe) => {
//   let newRecipe = new Recipe({
//     name: recipe.name,
//     ingredients: recipe.ingredients,
//     steps: recipe.steps,
//     prepTime: recipe.prepTime,
//     cookTime: recipe.cookTime,
//     servings: recipe.servings
//   });
//   newRecipe.save((err, recipe) => {
//     if (err) {
//       console.log('Unable to save recipe to db');
//     } else {
//       console.log('Recipe saved to db!');
//     }
//   });
// }

module.exports = Recipe;