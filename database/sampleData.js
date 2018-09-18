const mongoose = require('mongoose');
const db = require('../database/index.js');

mongoose.connect('mongodb://nathanong12:nathanong12@ds149682.mlab.com:49682/cookbook' || 'mongodb://localhost:27017/cookbook', { useNewUrlParser: true });

const sampleData = [
  {
    username: 'Taehwan Lim',
    name: 'Spaghetti',
    ingredients: '1lb pasta,2 cups of tomato sauce,3 meatballs'.split(','),
    steps: 'boil water,throw in pasta,open can of tomato sauce, eat'.split(','),
    prepTime: '10 minutes',
    cookTime: '20 minutes',
    servings: '5',
  },
  {
    username: 'Taehwan Lim',
    name: 'Hot Dog',
    ingredients: '5lbs miscellaneous meats,1 pack hot dog buns'.split(','),
    steps: 'grind meats,encase links,toast bread,eat'.split(','),
    prepTime: '5 hrs',
    cookTime: '20 hrs',
    servings: '365',
  },
  {
    username: 'Taehwan Lim',
    name: 'Cheese Pizza',
    ingredients: '1lb mozzarella cheese,tomato sauce, flour'.split(','),
    steps: 'roll dough,sprinkle cheese,spread tomato sauce,eat'.split(','),
    prepTime: '24 hrs',
    cookTime: '30 hrs',
    servings: 'over 9000',
  },
  {
    username: 'nathan ong',
    name: 'Spaghetti',
    ingredients: '1lb pasta,2 cups of tomato sauce,3 meatballs'.split(','),
    steps: 'boil water,throw in pasta,open can of tomato sauce, eat'.split(','),
    prepTime: '10 minutes',
    cookTime: '20 minutes',
    servings: '5',
  },
  {
    username: 'nathan ong',
    name: 'Hot Dog',
    ingredients: '5lbs miscellaneous meats,1 pack hot dog buns'.split(','),
    steps: 'grind meats,encase links,toast bread,eat'.split(','),
    prepTime: '5 hrs',
    cookTime: '20 hrs',
    servings: '365',
  },
  {
    username: 'nathan ong',
    name: 'Cheese Pizza',
    ingredients: '1lb mozzarella cheese,tomato sauce, flour'.split(','),
    steps: 'roll dough,sprinkle cheese,spread tomato sauce,eat'.split(','),
    prepTime: '24 hrs',
    cookTime: '30 hrs',
    servings: 'over 9000',
  },
  {
    username: 'Nathan Vang',
    name: 'Spaghetti',
    ingredients: '1lb pasta,2 cups of tomato sauce,3 meatballs'.split(','),
    steps: 'boil water,throw in pasta,open can of tomato sauce, eat'.split(','),
    prepTime: '10 minutes',
    cookTime: '20 minutes',
    servings: '5',
  },
  {
    username: 'Nathan Vang',
    name: 'Hot Dog',
    ingredients: '5lbs miscellaneous meats,1 pack hot dog buns'.split(','),
    steps: 'grind meats,encase links,toast bread,eat'.split(','),
    prepTime: '5 hrs',
    cookTime: '20 hrs',
    servings: '365',
  },
  {
    username: 'Nathan Vang',
    name: 'Cheese Pizza',
    ingredients: '1lb mozzarella cheese,tomato sauce, flour'.split(','),
    steps: 'roll dough,sprinkle cheese,spread tomato sauce,eat'.split(','),
    prepTime: '24 hrs',
    cookTime: '30 hrs',
    servings: 'over 9000',
  },
  {
    username: 'Jhia Turner',
    name: 'Spaghetti',
    ingredients: '1lb pasta,2 cups of tomato sauce,3 meatballs'.split(','),
    steps: 'boil water,throw in pasta,open can of tomato sauce, eat'.split(','),
    prepTime: '10 minutes',
    cookTime: '20 minutes',
    servings: '5',
  },
  {
    username: 'Jhia Turner',
    name: 'Hot Dog',
    ingredients: '5lbs miscellaneous meats,1 pack hot dog buns'.split(','),
    steps: 'grind meats,encase links,toast bread,eat'.split(','),
    prepTime: '5 hrs',
    cookTime: '20 hrs',
    servings: '365',
  },
  {
    username: 'Jhia Turner',
    name: 'Cheese Pizza',
    ingredients: '1lb mozzarella cheese,tomato sauce, flour'.split(','),
    steps: 'roll dough,sprinkle cheese,spread tomato sauce,eat'.split(','),
    prepTime: '24 hrs',
    cookTime: '30 hrs',
    servings: 'over 9000'
  }
];

const insertSampleRecipes = () => {
  sampleData.forEach(recipe => ({
    db.create(recipe).then((newRecipe) => {
      if (newRecipe) {
        console.log(`${newRecipe.name} inserted!`)
      } else {
        console.log('insert failed')
      }
    });
  }));
};

insertSampleRecipes();
setTimeout(() => {
  process.exit();
}, 3500);
