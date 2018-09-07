import React from 'react';
import $ from 'jquery';
import Recipe from '../components/Recipe.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      recipe: '',
      recipeInput: '',
      ingredients: [],
      steps: []
    }
  }

  componentDidMount() {

  }

  getRecipe() {

  }

  addRecipe() {

  }

  deleteRecipe() {
    
  }

  editRecipeHandler() {

  }

  render() {
    return (
      <div>
        <h1>CookBük</h1>
        <select>
          <option>placeholder 1</option>
          <option>placeholder 2</option>
          <option>placeholder 3</option>
        </select>
        <form>
          Recipe Name: <input type="text"/><br/><br/>
          Add Ingredient: <input type="text"/>
          <input type="button" value="Add Ingredient"/><br/><br/>
          Add Steps: <input type="text"/><br/><br/>
          <input type="button" value="Add Step"/><br/><br/>
          <input type="button" value="Submit Recipe"/>
        </form>
      </div>
    )
  }
}

export default App;
