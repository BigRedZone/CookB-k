import React from 'react';
import $ from 'jquery';

class Selection extends React.Component {
  constructor(props) {
    super(props);
    this.post = this.post.bind(this);
    console.log('this is this.props', this.props);
  }

  componentDidMount() {
    this.post('/recipes', this.props.setRecipes);
  }

  post(url, callback) {
    $.ajax({
      type: 'POST',
      url: url,
      data: {
        username: this.props.user
      }
    })
    .done((data) => {
      callback(data);
      console.log('POST: Successfully retrieved Recipes');
    })
    .fail(() => {
      console.log('POST: Failed to retrieve Recipes');
    });
  }
  
  render () {
    return (
      <div id='selection'>
        <h1>Welcome {this.props.user.split(' ')[0]}</h1>
        {
          this.props.recipes.map((recipe) => 
            <div class='recipe'>
              <h1 class='nameOfRecipe' onClick={() => this.props.selectRecipe(recipe)}>{recipe.name}</h1>
              <span>Time To Prep: {recipe.prepTime} </span><br/>
              <span>Time To Cook:{recipe.cookTime} </span><br/>
              <span>Servings: {recipe.servings}</span><br/>
            </div>
          )
        }
      </div>
    );
  }
}

export default Selection;