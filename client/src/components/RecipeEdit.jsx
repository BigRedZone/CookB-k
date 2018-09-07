import React from 'react';

const RecipeEdit = (props) => {

  //delete handler needs to originate in the App component in order to pass data about component from here to App
  const deleteHandler = () => {
    if (confirm('Are you sure you want to delete this recipe?')) {
      //delete recipe
    }
  }
  // submitHandler needs to originate in the App component in order to pass data back to App
  const submitHandler = () => {
    $('#ingredientsInput').val()
    $('#prepTimeInput').val()
    $('#cookTimeInput').val()
    $('#servingsInput').val()
  }

  return (
    <div>
      <h3>CookBuk</h3>
      <h1>Recipe Name Field</h1> // grab this from passed down prop {props.name}
      <div>
        <h4>Recipe Overview</h4>
        <h3>This Recipe Includes...</h3>
        <input type="text" id="ingredientsInput" value=""></input> //value={props.ingredients}
        <h3>Prep Time</h3>
        <input type="text" id="prepTimeInput" value=""></input> // value={props.prepTime}
        <h3>Cook Time</h3>
        <input type="text" id="cookTimeInput" value=""></input> // value={props.cookTime}
        <h3>Servings</h3>
        <input type="text" id="servingsInput" value=""></input> // value={props.servings}
      </div>
      <div>
        <button id="submitChanges" onClick={() => submitHandler()}>Submit Changes</button>
      </div>
      <a onClick={() => deleteHandler()}>Delete Recipe</a>
    </div>
  )
}

export default RecipeEdit;