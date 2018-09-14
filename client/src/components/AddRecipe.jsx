import React from 'react';
import $ from 'jquery';

class AddRecipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.user,
      name: '',
      ingredients: [],
      steps: [],
      cookTime: '',
      prepTime: '',
      servings: '',
      ingredient: '',
      step: '',
      servings: '',
    }
    this.setName = this.setName.bind(this);
    this.setIngredients = this.setIngredients.bind(this);
    this.setSteps = this.setSteps.bind(this);
    this.setCookTime = this.setCookTime.bind(this);
    this.setPrepTime = this.setPrepTime.bind(this);
    this.setServings = this.setServings.bind(this);
    this.setIngredient = this.setIngredient.bind(this);
    this.setStep = this.setStep.bind(this);
    this.undoIngredients = this.undoIngredients.bind(this);
    this.undoSteps = this.undoSteps.bind(this);
    this.submitRecipe = this.submitRecipe.bind(this);
    this.post = this.post.bind(this);
  }

  setName(e) {
    this.setState({
      name: e.target.value
    })
  }

  setCookTime(e) {
    this.setState({
      cookTime: e.target.value
    });
  }

  setPrepTime(e) {
    this.setState({
      prepTime: e.target.value
    });
  }

  setServings(e) {
    this.setState({
      servings: e.target.value
    })
  }

  setIngredient(e) {
    this.setState({
      ingredient: e.target.value
    });
  }

  setIngredients() {

    this.setState({
      ingredients: [...this.state.ingredients, this.state.ingredient]
    })
    $('#ingredientsField').val('');
  }

  setStep(e) {
    this.setState({
      step: e.target.value
    });
  }

  setSteps() {
    this.setState({
      steps: [...this.state.steps, this.state.step]
    })
    $('#stepsField').val('');
  }

  undoIngredients() {
    let newIngredients = this.state.ingredients.slice(0, -1);
    this.setState({
      ingredients: newIngredients
    })
  }

  undoSteps() {
    let newSteps = this.state.steps.slice(0, -1);
    this.setState({
      steps: newSteps
    })
  }

  submitRecipe() {
    let recipe = {
      username: this.state.username,
      name: this.state.name,
      ingredients: this.state.ingredients,
      steps: this.state.steps,
      cookTime: this.state.cookTime,
      prepTime: this.state.prepTime,
      servings: this.state.servings
    }
    this.post('/recipe', recipe);
    this.props.changeView('selection');
  }

  post(url, data) {
    $.ajax({
      type: 'POST',
      url: url,
      data: data
    })
    .done(() => {
      console.log('POST Request: Successful');
    })
    .fail(() => {
      console.log('POST Request: Failed');
    })
  }

  render() {
    return (
      <div>
        <h1>Add a Recipe!</h1>
        <div id='add-recipe-container'>
          <div id='add-recipe-section-1'>
            <form className='add-recipe-form'>
              <div className='add-recipe-input'>
                Recipe Name: <input className='add-recipe-text' type="text" onChange={(e)=> {this.setName(e)}}/><br/><br/>
                Cook Time: <input className='add-recipe-text' type="text" onChange={(e) => {this.setCookTime(e)}}/><br/><br/>
                Prep Time: <input className='add-recipe-text' type="text" onChange={(e) => {this.setPrepTime(e)}}/><br/><br/>
                Servings: <input className='add-recipe-text' type="text" onChange={(e) => {this.setServings(e)}}/><br/><br/>

                Add Ingredient: <input className='add-recipe-text' id="ingredientsField" type="text" onChange={this.setIngredient}/><br/><br/>
                <input  className="submit-button" type="button" value="Add Ingredient" onClick={this.setIngredients}/><br/><br/>

                Add Steps: <input className='add-recipe-text' id="stepsField" type="text" onChange={this.setStep}/><br/><br/>
                <input  className="submit-button" type="button" value="Add Step" onClick={this.setSteps}/><br/><br/>

                <input id='submit-recipe-button' type="button" value="Add Recipe!" onClick={this.submitRecipe}/>
              </div>
            </form>
          </div>
          <div id='add-recipe-section-2'>
            <div className="add-recipe-preview">
            Recipe Name: {this.state.name}<br></br>
            Cook Time: {this.state.cookTime}<br></br>
            Prep Time: {this.state.prepTime}<br></br>
            Servings: {this.state.servings}<br></br>
            <div className="add-recipe-ingredients">
            Ingredients:
            <ul>
              {this.state.ingredients.map((ingredient, i) => {
                return (
                  <li key={i}>{ingredient}</li>
                )
              })}
            </ul><br></br>
            <button onClick={this.undoIngredients}>Undo</button><br></br>
            </div>
            <div className="add-recipe-steps">
            Steps:
            <ol>
              {this.state.steps.map((step, i) => {
                return (
                  <li key={i}>{step}</li>
                )
              })}
            </ol><br></br>
            <button className='undo-steps-button' onClick={this.undoSteps}>Undo</button>
            </div>
          </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AddRecipe;