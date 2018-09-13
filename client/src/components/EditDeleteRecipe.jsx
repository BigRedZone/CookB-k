import React from 'react';
import $ from 'jquery';
import Recipe from './Recipe.jsx';

class EditDeleteRecipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.username,
      name: this.props.recipe.name,
      ingredients: this.props.recipe.ingredients,
      steps: this.props.recipe.steps,
      cookTime: this.props.recipe.cookTime,
      prepTime: this.props.recipe.prepTime,
      servings: this.props.recipe.servings
    };
    this.nameHandler = this.nameHandler.bind(this);
    this.stepsHandler = this.stepsHandler.bind(this);
    this.ingredientsHandler = this.ingredientsHandler.bind(this);
    this.servingsHandler = this.servingsHandler.bind(this);
    this.prepTimeHandler = this.prepTimeHandler.bind(this);
    this.cookTimeHandler = this.cookTimeHandler.bind(this);
    this.submitClickHandler = this.submitClickHandler.bind(this);
    this.deleteHandler = this.deleteHandler.bind(this);
    this.updateRecipe = this.updateRecipe.bind(this);
  }

  updateRecipe (targetRecipe, editedRecipe) {
    var context = this;
    $.ajax({
      type: 'PUT',
      url: 'http://localhost:3000/edit',
      data: {name: targetRecipe, change: editedRecipe}
    })
    .done((recipe) => {
      context.props.selectRecipe(JSON.parse(recipe)[0])
      context.props.changeView('overview')
    })
    .fail(() => {
      console.log('PUT request failed')
    })
  }

  deleteRecipe (targetRecipe, username) {
    var context = this;
    $.ajax({
      type: 'Delete',
      url: 'http://localhost:3000/delete',
      data: {name: targetRecipe, username: username}
    })
    .done((data) => {
      // console.log('DELETE request success')
      // context.props.setRecipes(JSON.parse(data))
      context.props.changeAppView('')
    })
    .fail(() => {
      console.log('DELETE request failed')
    })
  }

  deleteHandler () {
    var context = this;
    if (confirm('Are you sure you want to delete this recipe?')) {
      this.deleteRecipe(this.props.recipe.name, this.state.username);
      console.log(`Deleted ${this.props.recipe.name}!`);
      // context.props.changeView('login');
    }
  }
  submitClickHandler() {

    this.updateRecipe(this.props.recipe.name, this.state);
    // this.props.selectRecipe(this.props.recipe);
    // this.props.changeView('')
  }

  nameHandler(event) {
    this.setState({
      name: event
    })
  }

  ingredientsHandler(event) {
    this.setState({
      ingredients: event
    })
  }

  prepTimeHandler(event) {
    this.setState({
      prepTime: event
    })
  }

  servingsHandler(event) {
    this.setState({
      servings: event
    })
  }

  stepsHandler(event) {
    this.setState({
      steps: event
    })
  }

  cookTimeHandler(event) {
    this.setState({
     cookTime: event
    })
  }

  handleCancelClick() {
    if (confirm('You will lose all unsubmitted changes. Do you wish to continue?')) {
      this.setState(this.props.recipe)
      this.props.changeView('')
    }
  }

  render() {
    return (
      <div>
        <h3>CookBuk</h3>
        <input type="text" id="recipeName" onChange={(e) => this.nameHandler(e.target.value)}value={this.state.name}/>
        <div>
          <h4>Recipe Overview</h4>
          <h3>This Recipe Includes...</h3>
          <textarea type="text" id="ingredientsInput" rows="10" cols="35" onChange={(e) => this.ingredientsHandler(e.target.value)} value={this.state.ingredients}/>
          <h3>Prep Time</h3>
          <input type="text" id="prepTimeInput" onChange={(e) => this.prepTimeHandler(e.target.value)} value={this.state.prepTime}/>
          <h3>Cook Time</h3>
          <input type="text" id="cookTimeInput" onChange={(e) => this.cookTimeHandler(e.target.value)} value={this.state.cookTime}/>
          <h3>Servings</h3>
          <input type="text" id="servingsInput" onChange={(e) => this.servingsHandler(e.target.value)} value={this.state.servings}/>
          <h3>Steps</h3>
          <textarea type="text" rows="10" cols="35" id="stepsInput" onChange={(e) => this.stepsHandler(e.target.value)} value={this.state.steps}/>
        </div>
        <div>
          <button id="submitChanges" onClick={() => this.submitClickHandler()}>Submit Changes</button>
        </div>
        <div>
          <button id="cancelChanges" onClick={() => this.handleCancelClick()}>Cancel Changes</button>
        </div>
        <button id="deleteRecipe" onClick={() => this.deleteHandler()}>Delete Recipe</button>
      </div>
    )
  }
}


export default EditDeleteRecipe;

