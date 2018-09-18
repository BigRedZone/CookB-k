const mongoose = require('mongoose');

mongoose.connect('mongodb://nathanong12:nathanong12@ds149682.mlab.com:49682/cookbook' || 'mongodb://localhost:27017/cookbook', { useNewUrlParser: true });

const recipeSchema = mongoose.Schema({
  username: String,
  name: String,
  ingredients: [String],
  steps: [String],
  prepTime: String,
  cookTime: String,
  servings: String,
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
