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
      fullName: '',
      view: 'login',
      recipeOTD: {},
      recipe: {},
      recipes: sample
    };

    this.renderComponent = this.renderComponent.bind(this);
    this.changeView = this.changeView.bind(this);
    this.selectRecipe = this.selectRecipe.bind(this);
    this.handleSignIn = this.handleSignIn.bind(this);
    this.handleSignOut = this.handleSignOut.bind(this);
  }

  changeView(view) {
    this.setState({
      view: view
    });
  }

  selectRecipe(recipe) {
    this.setState({
      recipe: recipe
    });
    this.changeView('overview');
  }

  handleSignIn(fullName) {
    this.setState({
      fullName: fullName
    })
    this.changeView('selection')
    console.log(this.state.fullName);
  }

  renderComponent() {
    if (this.state.view === 'login') {
      return <SignIn afterSignIn={this.handleSignIn}/>
    } else if (this.state.view === 'overview') {
      return <Recipe recipe={this.state.recipe}/>
    } else if (this.state.view === 'add') {
      return <AddRecipe user={this.state.fullName}/>
    } else {
      return <Selection selectRecipe={this.selectRecipe} recipes={this.state.recipes} user={this.state.fullName}/>
    }
  }

  handleSignOut() {
    this.setState({
      fullName: ''
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
  
  render() {
    return (
      <div>
        <h2>CookBuk</h2>
        <ul>
          <li><a onClick={() => this.changeView('')}>Home</a></li>
          <li><a onClick={() => this.changeView('add')}>Create</a></li>
          <li><a href="#" onClick={this.signOut.bind(this)}>Sign out</a></li>
        </ul>
        <div>
          {this.renderComponent()}
        </div>
      </div>
      );
  }
}

export default App;