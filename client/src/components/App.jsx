import React from 'react';
import $ from 'jquery';
import Recipe from '../components/Recipe.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: ['Spaggheti', 'Cereal', 'Korean BBQ', 'Sushi'],
      recipe: { name: 'Spaghetti',
        ingredients: ['Linguini', 'Pasta Sauce', 'Ground Beef'],
        steps: ['Add water to a pot', 'Heat pot until boiling', 'Add Linguini', 'Stir for 20 minutes', 'Drain water', 'Add Pasta Sauce', 'Add Ground Beef', 'Stir'],
        cookTime: '21 minutes',
        prepTime: '10 minutes'
      },
      recipeInput: { name: 'Cereal',
        ingredients: ['Milk', 'Cereal'],
        steps: ['Add milk to bowl, add Cereal to bowl'],
        cookTime: '2 minutes',
        prepTime: '2 minutes'
      },
    }
    this.setRecipes = this.setRecipes.bind(this);
    this.setRecipe = this.setRecipe.bind(this);
    this.updateRecipe = this.updateRecipe.bind(this);
    this.deleteRecipe = this.deleteRecipe.bind(this);
  }
  
  //Initialize
  componentDidMount() {
    this.getRecipes();
  }
  
  //GET requests
  getRecipes() {
    this.fetch('/homepage', this.setRecipes);
  }

  getRecipe() {
    this.fetch('/recipe', this.setRecipe);
  }

  //Set States
  setRecipes(data) {
    this.setState({
      recipes: data
    });
  }

    this.setState({
  setRecipe(data) {
      recipe: data
    });
    //componentReceivedData
      //invoke getIngredients
      //invoke getSteps
  }
  
  //AJAX GET Request
  fetch(url, callback) {
    $.ajax({
      type: 'GET',
      url: url
    })
    .done((data) => {
      callback(data);
      console.log('GET SUCCESS');
    })
    .fail(() => {
      console.log('GET FAILED');
    });
  }

  // getIngredients(data) {

  // }

  // getSteps(data) {

  // }

  // post(url, data) {
  //   $.ajax({
  //     type: 'POST',
  //     url: url,
  //     data: data
  //   })
  //   .done(() => {
  //     console.log(`Succesful Post to Server for ${callback}`)
  //   });
  // }

  addRecipe() {
    console.log('Add Clicked');
  }

  updateRecipe() {
    console.log('Edit Clicked');
  }

  deleteRecipe() {
    console.log('Delete Cliked');
  }

  deleteRecipe() {
    
  }

  editRecipeHandler() {

  }

  deleteRecipe() {

  }

  render() {
    return (
      <div>
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
        <Recipe 
          update={this.updateRecipe}
          delete={this.deleteRecipe}
          recipe={this.state.recipe}
        />
      </div>
    )
  }
}

export default App;
