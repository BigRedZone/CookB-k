import React from 'react';
import $ from 'jquery';
import Recipe from './Recipe.jsx';

const EditDeleteRecipe = (props) => {

  //delete handler needs to originate in the App component in order to pass data about component from here to App
  const deleteHandler = () => {
    if (confirm('Are you sure you want to delete this recipe?')) {
      props.delete(props.recipe.name);
    }
  }
  const submitClickHandler = () => {
    props.update(props.recipe.name, editedRecipe);
    props.clickSubmit();
  }
  // submitHandler needs to originate in the App component in order to pass data back to App
  let editedRecipe = {
    name: $('#recipeName').val(),
    ingredients: $('#ingredientsInput').val(),
    steps: $('#prepTimeInput').val(),
    cookTime: $('#cookTimeInput').val(),
    prepTime: $('#prepTimeInput').val(),
    servings: $('#servingsInput').val()
  }

  return (
    <div>
      <h3>CookBuk</h3>
      <input type="text" id="recipeName" value={props.recipe.name}/>
      <div>
        <h4>Recipe Overview</h4>
        <h3>This Recipe Includes...</h3>
        <textarea type="text" id="ingredientsInput" rows="10" cols="20" value={props.recipe.ingredients.join(', ')}/>
        <h3>Prep Time</h3>
        <input type="text" id="prepTimeInput" value={props.recipe.prepTime}/>
        <h3>Cook Time</h3>
        <input type="text" id="cookTimeInput" value={props.recipe.cookTime}/>
        <h3>Servings</h3>
        <input type="text" id="servingsInput" value={props.recipe.servings}/>
        <h3>Steps</h3>
        <textarea type="text" rows="10" cols="20" id="stepsInput" value={props.recipe.steps.join(', ')}/>
      </div>
      <div>
        <button id="submitChanges" onClick={() => submitClickHandler()}>Submit Changes</button>
      </div>
      <a onClick={() => deleteHandler()}>Delete Recipe</a>
    </div>
  )
}


export default EditDeleteRecipe;

        //updateRecipe exists in the App component and it should take in two parameters: an identifer (name), and the object editedRecipe. props.clickSubmit
