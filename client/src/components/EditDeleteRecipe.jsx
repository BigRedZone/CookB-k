import React from 'react';
import $ from 'jquery';
import Recipe from './Recipe.jsx';

class EditDeleteRecipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.username,
      name: this.props.recipe.name,
      ingredients: this.props.recipe.ingredients.join(','),
      steps: this.props.recipe.steps.join(','),
      cookTime: this.props.recipe.cookTime,
      prepTime: this.props.recipe.prepTime,
      servings: this.props.recipe.servings,
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

  updateRecipe(targetRecipe, editedRecipe) {
    const context = this;
    $.ajax({
      type: 'PUT',
      url: '/edit',
      data: { name: targetRecipe, change: editedRecipe },
    })
      .done((recipe) => {
        context.props.selectRecipe(JSON.parse(recipe)[0]);
        context.props.changeView('overview');
      })
      .fail(() => {
        console.log('PUT request failed');
      });
  }

  deleteRecipe(targetRecipe, username) {
    const context = this;
    $.ajax({
      type: 'Delete',
      url: '/delete',
      data: { name: targetRecipe, username },
    })
      .done(() => {
        context.props.changeAppView('');
      })
      .fail(() => {
        console.log('DELETE request failed');
      });
  }

  deleteHandler() {
    if (confirm('Are you sure you want to delete this recipe?')) {
      this.deleteRecipe(this.props.recipe.name, this.state.username);
      console.log(`Deleted ${this.props.recipe.name}!`);
    }
  }

  submitClickHandler() {
    this.setState({
      ingredients: this.state.ingredients.split(','),
      steps: this.state.steps.split(',')
    }, () => {
      console.log('Edited recipe: ', this.state);
      if (this.state.name) {
        this.updateRecipe(this.props.recipe.name, this.state);
      } else {
        alert('Must fill out name form!');
      }
    });
  }

  nameHandler(event) {
    this.setState({
      name: event.target.value,
    });
  }

  ingredientsHandler(event) {
    this.setState({
      ingredients: event.target.value,
    });
  }

  prepTimeHandler(event) {
    this.setState({
      prepTime: event.target.value,
    });
  }

  servingsHandler(event) {
    this.setState({
      servings: event.target.value,
    });
  }

  stepsHandler(event) {
    this.setState({
      steps: event.target.value,
    });
  }

  cookTimeHandler(event) {
    this.setState({
      cookTime: event.target.value,
    });
  }

  handleCancelClick() {
    if (confirm('You will lose all unsubmitted changes. Do you wish to continue?')) {
      this.setState(this.props.recipe);
      this.props.changeView('');
    }
  }

  render() {
    return (
      <div>
        <h1>Shake Things Up!</h1>
        <div className="edit-container">
          <input type="text" id="recipe-name" onChange={(e) => this.nameHandler(e)}value={this.state.name} />
          <div>
            <h4>Recipe Overview</h4>
            <h3>This Recipe Includes...</h3>
            <textarea type="text" id="ingredientsInput" rows="10" cols="35" onChange={(e) => this.ingredientsHandler(e)} value={this.state.ingredients} />
            <h3>Prep Time</h3>
            <input type="text" id="prep-time-input" onChange={(e) => this.prepTimeHandler(e)} value={this.state.prepTime} />
            <h3>Cook Time</h3>
            <input type="text" id="cook-time-input" onChange={(e) => this.cookTimeHandler(e)} value={this.state.cookTime} />
            <h3>Servings</h3>
            <input type="text" id="servings-input" onChange={(e) => this.servingsHandler(e)} value={this.state.servings} />
            <h3>Steps</h3>
            <textarea type="text" rows="10" cols="35" id="steps-input" onChange={(e) => this.stepsHandler(e)} value={this.state.steps} />
          </div>
          <div>
            <button type="button" id="submit-changes" onClick={() => this.submitClickHandler()}>Submit Changes</button>
          </div>
          <div>
            <button type="button" id="cancel-changes" onClick={() => this.handleCancelClick()}>Cancel Changes</button>
          </div>
          <div className="delete-recipe"><a id="delete-recipe-link" onClick={() => this.deleteHandler()}>Delete Recipe</a></div>
        </div>
      </div>
    );
  }
}


export default EditDeleteRecipe;
