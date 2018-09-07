import React from 'react';
import $ from 'jquery';
import Recipe from '../components/Recipe.jsx';
import EditDeleteRecipe from '../components/EditDeleteRecipe.jsx';
import Steps from '../components/Steps.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: ['Spaggheti', 'Cereal', 'Korean BBQ', 'Sushi'],
      recipe: 'Spaggheti',
      ingredients: ['Linguini', 'Pasta Sauce', 'Ground Beef'],
      steps: ['Add water to a pot', 'Heat pot until boiling', 'Add Linguini', 'Stir for 20 minutes', 'Drain water', 'Add Pasta Sauce', 'Add Ground Beef', 'Stir'],
      recipeInput: '',
      cookTime: '21 minutes',
      prepTime: '10 minutes'
    }
    this.setRecipes = this.setRecipes.bind(this);
    this.setRecipe = this.setRecipe.bind(this);
  }
  
  //Initialize
  componentDidMount() {
    this.getRecipes();
  }
  
  //GET requests
  getRecipes() {
    this.fetch('/home', this.setRecipes);
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

  setRecipe(data) {
    this.setState({
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

  editRecipeHandler() {

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
        {/* <Recipe/>
        <EditDeleteRecipe/> <- I think Vang needs to pass down to Ong}
        <Steps/> */}
      </div>
    )
  }
}

export default App;