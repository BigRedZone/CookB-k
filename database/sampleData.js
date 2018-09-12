const db = require('../database/index.js');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/cookbook', { useNewUrlParser: true });

const sampleData = [
  {
    username: 'Taehwan Lim',
    name: 'Spaghetti',
    ingredients: '1lb pasta,2 cups of tomato sauce,3 meatballs',
    steps: 'boil water,throw in pasta,open can of tomato sauce, eat',
    prepTime: '10 minutes',
    cookTime: '20 minutes',
    servings: '5'
  },
  {
    username: 'Taehwan Lim',
    name: 'Hot Dog',
    ingredients: '5lbs miscellaneous meats,1 pack hot dog buns',
    steps: 'grind meats,encase links,toast bread,eat',
    prepTime: '5 hrs',
    cookTime: '20 hrs',
    servings: '365'
  },
  {
    username: 'Taehwan Lim',
    name: 'Cheese Pizza',
    ingredients: '1lb mozzarella cheese,tomato sauce, flour',
    steps: 'roll dough,sprinkle cheese,spread tomato sauce,eat',
    prepTime: '24 hrs',
    cookTime: '30 hrs',
    servings: 'over 9000'
  },
  {
    username: 'Nate Ong',
    name: 'Spaghetti',
    ingredients: '1lb pasta,2 cups of tomato sauce,3 meatballs',
    steps: 'boil water,throw in pasta,open can of tomato sauce, eat',
    prepTime: '10 minutes',
    cookTime: '20 minutes',
    servings: '5'
  },
  {
    username: 'Nate Ong',
    name: 'Hot Dog',
    ingredients: '5lbs miscellaneous meats,1 pack hot dog buns',
    steps: 'grind meats,encase links,toast bread,eat',
    prepTime: '5 hrs',
    cookTime: '20 hrs',
    servings: '365'
  },
  {
    username: 'Nate Ong',
    name: 'Cheese Pizza',
    ingredients: '1lb mozzarella cheese,tomato sauce, flour',
    steps: 'roll dough,sprinkle cheese,spread tomato sauce,eat',
    prepTime: '24 hrs',
    cookTime: '30 hrs',
    servings: 'over 9000'
  },
  {
    username: 'Nathan Vang',
    name: 'Spaghetti',
    ingredients: '1lb pasta,2 cups of tomato sauce,3 meatballs',
    steps: 'boil water,throw in pasta,open can of tomato sauce, eat',
    prepTime: '10 minutes',
    cookTime: '20 minutes',
    servings: '5'
  },
  {
    username: 'Nathan Vang',
    name: 'Hot Dog',
    ingredients: '5lbs miscellaneous meats,1 pack hot dog buns',
    steps: 'grind meats,encase links,toast bread,eat',
    prepTime: '5 hrs',
    cookTime: '20 hrs',
    servings: '365'
  },
  {
    username: 'Nathan Vang',
    name: 'Cheese Pizza',
    ingredients: '1lb mozzarella cheese,tomato sauce, flour',
    steps: 'roll dough,sprinkle cheese,spread tomato sauce,eat',
    prepTime: '24 hrs',
    cookTime: '30 hrs',
    servings: 'over 9000'
  },
  {
    username: 'Jhia Turner',
    name: 'Spaghetti',
    ingredients: '1lb pasta,2 cups of tomato sauce,3 meatballs',
    steps: 'boil water,throw in pasta,open can of tomato sauce, eat',
    prepTime: '10 minutes',
    cookTime: '20 minutes',
    servings: '5'
  },
  {
    username: 'Jhia Turner',
    name: 'Hot Dog',
    ingredients: '5lbs miscellaneous meats,1 pack hot dog buns',
    steps: 'grind meats,encase links,toast bread,eat',
    prepTime: '5 hrs',
    cookTime: '20 hrs',
    servings: '365'
  },
  {
    username: 'Jhia Turner',
    name: 'Cheese Pizza',
    ingredients: '1lb mozzarella cheese,tomato sauce, flour',
    steps: 'roll dough,sprinkle cheese,spread tomato sauce,eat',
    prepTime: '24 hrs',
    cookTime: '30 hrs',
    servings: 'over 9000'
  }
];

const insertSampleRecipes = function() {
  sampleData.forEach(recipe => {
    db.create(recipe);
  });
};

insertSampleRecipes();
setTimeout(() => {
  process.exit();
}, 500);
