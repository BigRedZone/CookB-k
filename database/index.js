//database
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/cookbook', { useNewUrlParser: true });

const recipeSchema = mongoose.Schema({
  id: Number,
  name: String,
  ingredients: String,
  steps: String
});

const Recipe = mongoose.model('Recipe', recipeSchema);

const save = (recipe) => {
  let newRecipe = new Recipe({
    id: 00,
    name: 'test name',
    ingredients: 'test ingredients',
    steps: 'test steps'
  });

  newRecipe.save((err, recipe) => {
    if (err) {
      console.log(err);
    } else {
      console.log('database connected');
    }
  });
}

module.exports.Recipe = Recipe;
module.exports.save = save;