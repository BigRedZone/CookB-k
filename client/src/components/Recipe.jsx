import React from 'react';
import ReactDOM from 'react-dom';

const Recipe = (props) => {
  return (
    <div>
      <h3>CookBuk</h3>
      <h1>Recipe Name Field</h1>
      <div>
        <h4>Recipe Overview</h4>
        <h3>This Recipe Includes...</h3>
        <p>ingredient 1, ingredient 2, etc...</p>
        <h3>Prep Time</h3>
        <p>xxx mins</p>
        <h3>Cook Time</h3>
        <p>xxx mins</p>
        <h3>Servings</h3>
        <p>xxx mins</p>
      </div>
      <div>
        <button>Start</button>
      </div>
    </div>
  )
}

export default Recipe;