import React from 'react';
import $ from 'jquery';
import AddRecipe from './AddRecipe.jsx';
import Recipe from './Recipe.jsx';
import Selection from './Selection.jsx';
import SignIn from './SignIn.jsx';

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
  }

  changeView(view) {
    this.setState({
      view: view
    });
  }

  setRecipes(data) {
    let allRecipes = data.map((recipe) => {
      return { username: recipe.username,
        name: recipe.name,
        ingredients: recipe.ingredients.split(','),
        steps: recipe.steps.split(','),
        cookTime: recipe.cookTime,
        prepTime: recipe.prepTime,
        servings: recipe.servings}
    })
    this.setState({
      recipes: allRecipes
    });
    console.log(this.state.recipes);
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
      return <Recipe recipe={this.state.recipe}/>
    } else if (this.state.view === 'add') {
      return <AddRecipe user={this.state.username}/>
    } else {
      return <Selection selectRecipe={this.selectRecipe} recipes={this.state.recipes} setRecipes={this.setRecipes} user={this.state.username}/>
    }
  }
  
  render() {
    if (this.state.view === 'login') {
      return (
        <div>
          <h1>CookBuk</h1>
          <SignIn afterSignIn={this.handleSignIn}/>
        </div>
      )
    } else {
      return (
        <div>
          <h2>CookBuk</h2>
          <ul>
            <li><a onClick={() => this.changeView('')}>Home</a></li>
            <li><a onClick={() => this.changeView('add')}>Create</a></li>
            <li><a onClick={this.signOut.bind(this)}>Sign out</a></li>
          </ul>
          <div>
            {this.renderComponent()}
          </div>
        </div>
      );
    }
  }
}

export default App;