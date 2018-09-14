import React from 'react';
import $ from 'jquery';
import AddRecipe from './AddRecipe.jsx';
import Recipe from './Recipe.jsx';
import Selection from './Selection.jsx';
import SignIn from './SignIn.jsx';
import KitchenAssistant from './KitchenAssistant.jsx'

import sample from '../../../util/sampleData.js'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      view: 'login',
      recipeOTD: {},
      recipe: {},
      recipes: []
    };

    this.renderComponent = this.renderComponent.bind(this);
    this.changeView = this.changeView.bind(this);
    this.setRecipes = this.setRecipes.bind(this);
    this.selectRecipe = this.selectRecipe.bind(this);
    this.handleSignIn = this.handleSignIn.bind(this);
    this.handleSignOut = this.handleSignOut.bind(this);
    this.manageIngredientsAndSteps = this.manageIngredientsAndSteps.bind(this);
    // this.getRecipes = this.getRecipes.bind(this);
  }

  changeView(view) {
    this.setState({
      view: view
    });
  }

  setRecipes(data) {
    let allRecipes = data.map((recipe) => {
      let newRecipe = {
        name: recipe.name,
        cookTime: recipe.cookTime,
        prepTime: recipe.prepTime,
        servings: recipe.servings
      }
      return this.manageIngredientsAndSteps(recipe.ingredients, recipe.steps, newRecipe)
    })
    this.setState({
      recipes: allRecipes
    });
    console.log(this.state.recipes);
  }

  manageIngredientsAndSteps(ingredients, steps, newRecipe) {
    if (steps.split(',') && ingredients.split(',')) {
      newRecipe.ingredients = ingredients.split(',');
      newRecipe.steps = steps.split(',');
    } else if (steps.split(',')) {
      newRecipe.ingredients = ingredients;
      newRecipe.steps = steps.split(',');
    } else if (ingredients.split(',')) {
      newRecipe.ingredients = ingredients.split(',');
      newRecipe.steps = steps;
    } else {
      newRecipe.ingredients = ingredients;
      newRecipe.steps = steps;
    }
    return newRecipe;
  }

  selectRecipe(recipe) {
    this.setState({
      recipe: recipe
    });
    this.changeView('overview');
  }

  handleSignIn(fullName) {
    this.setState({
      username: fullName
    })
    this.changeView('selection')
  }

  handleSignOut() {
    this.setState({
      username: ''
    })
  }

  signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
    this.handleSignOut();
    this.changeView('login');
  }

  renderComponent() {
    if (this.state.view === 'overview') {
      return <Recipe username={this.state.username} selectRecipe= {this.selectRecipe}recipe={this.state.recipe} setRecipes={this.setRecipes}changeAppView={this.changeView}/>
    } else if (this.state.view === 'add') {
      return <AddRecipe user={this.state.username} changeView={this.changeView}/>
    } else {
      return <Selection selectRecipe={this.selectRecipe} recipes={this.state.recipes} setRecipes={this.setRecipes} user={this.state.username}/>
    }
  }

  render() {
    if (this.state.view === 'login') {
      return (
        <div id='signin-container'>
          <h1 className='signin' id='signin-title'>CookBük</h1>
          <h2 className='signin' id='signin-tagline'>The only sous chef you'll ever need</h2>
          <SignIn afterSignIn={this.handleSignIn} changeView={this.changeView}/>
        </div>
      )
    } else {
      let myComponent;
      if (this.state.recipes.length > 0) {
        myComponent = <KitchenAssistant recipeList={this.state.recipes} user={this.state.username} handleCommand={this.changeView}/>;
      } else {
        myComponent = null;
      }
      return (
        <div>
          <h2 className="nav-logo" onClick={() => this.changeView('home')}>CookBük</h2>
          <ul id='nav-menu'>
            <li className={this.state.view === 'home' ? 'nav-selected' : 'nav-unselected'}><a onClick={() => this.changeView('home')}>Home</a></li>
            <li className={this.state.view === 'add' ? 'nav-selected' : 'nav-unselected'}><a onClick={() => this.changeView('add')}>Create</a></li>
            <li className='nav-unselected'><a onClick={this.signOut.bind(this)}>Sign out</a></li>
          </ul>
          <div id='child-component-container'>
            {myComponent}
            {this.renderComponent()}
          </div>
        </div>
      );
    }
  }
}

export default App;