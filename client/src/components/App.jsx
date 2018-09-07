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
      name: '',
      ingredients: [],
      steps: [],
      cookTime: '',
      prepTime: '',
      ingredient: '',
      step: '',
    }
    this.setRecipes = this.setRecipes.bind(this);
    this.setRecipe = this.setRecipe.bind(this);
    // this.updateRecipe = this.updateRecipe.bind(this);
    // this.deleteRecipe = this.deleteRecipe.bind(this);
    this.setPrepTime = this.setPrepTime.bind(this);
    this.setCookTime = this.setCookTime.bind(this);
    this.setIngredient = this.setIngredient.bind(this);
    this.setStep = this.setStep.bind(this);
    this.setIngredients = this.setIngredients.bind(this);
    this.setSteps = this.setSteps.bind(this);
    this.setName = this.setName.bind(this);
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

  setRecipe(data) {
    this.setState({
      recipe: data
    });
  }

  setName(e) {
    this.setState({
      name: e.target.value
    })
    console.log('name', this.state.name);
  }

  setCookTime(e) {
    this.setState({
      cookTime: e.target.value
    });
    console.log('cooktime: ' , this.state.cookTime);
  }

  setPrepTime(e) {
    this.setState({
      prepTime: e.target.value
    });
    console.log('prepTime: ' , this.state.prepTime);
  }

  setIngredient(e) {
    this.setState({
      ingredient: e.target.value
    });
    console.log('currentIngredient: ' , this.state.ingredient);
  }

  setIngredients() {
    this.setState({
      ingredients: [...this.state.ingredients, this.state.ingredient]
    })
  }

  setStep(e) {
    this.setState({
      step: e.target.value
    });
    console.log('currentStep: ' , this.state.step);
  }

  setSteps() {
    this.setState({
      steps: [...this.state.steps, this.state.step]
    })
    console.log(this.state.steps);
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

  //AJAX POST Request
  post(url, data) {
    $.ajax({
      type: 'POST',
      url: url,
      data: data
    })
    .done(() => {
      console.log(`Succesful Post to Server for ${callback}`)
    });
  }

  setRecipeInput() {
    
  }

  addRecipeName() {

  }

  // recipeInput: { name: 'Cereal',
  //       ingredients: ['Milk', 'Cereal'],
  //       steps: ['Add milk to bowl, add Cereal to bowl'],
  //       cookTime: '2 minutes',
  //       prepTime: '2 minutes'
  //     },

  // submitRecipe() {
  //   let recipe = {
  //     name: this.name,
  //     ingredients: this.ingredients,
  //     steps: this.steps,
  //     cookTime: this.cookTime,

  //   }
  // }

  render() {
    return (
      <div>
        <div>
          <h1>CookBük</h1>
          <select>
            {this.state.recipes.map((recipe) => {
              <option>recipe</option>
            })}
            {/* <option>placeholder 1</option>
            <option>placeholder 2</option>
            <option>placeholder 3</option> */}
          </select>
          <form>
            Recipe Name: <input type="text" onChange={(e)=> {this.setName(e)}}/><br/><br/>
            Cook Time: <input type="text" onChange={(e) => {this.setCookTime(e)}}/><br/><br/>
            Prep Time: <input type="text" onChange={(e) => {this.setPrepTime(e)}}/><br/><br/>

            Add Ingredient: <input type="text" onChange={this.setIngredient}/><br/><br/>
            <input type="button" value="Add Ingredient" onClick={this.setIngredients}/><br/><br/>

            Add Steps: <input type="text" onChange={this.setStep}/><br/><br/>
            <input type="button" value="Add Step" onClick={this.setSteps}/><br/><br/>
            
            <input type="button" value="Submit Recipe" onClick={this.submitRecipe}/>
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