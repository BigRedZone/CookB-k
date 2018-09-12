import React from 'react';

const Selection = (props) => {
  console.log(props.user);
  return (
    <div>
      <h3>Welcome {props.user.split(' ')[0]}</h3>
      {
        props.recipes.map((recipe) => 
          <div>
          <h1 onClick={() => props.selectRecipe(recipe)}>{recipe.name}</h1>
          <span>{recipe.prepTime}</span>
          <span>{recipe.cookTime}</span>
          <span>{recipe.servings}</span>
          </div>
        )
      }
    </div>
    );
}

export default Selection;