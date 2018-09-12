import React from 'react';
import $ from 'jquery';

class Selection extends React.Component {
  constructor(props) {
    super(props);
    this.post = this.post.bind(this);
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
      <div>
        <h3>Welcome {this.props.user.split(' ')[0]}</h3>
        {
          this.props.recipes.map((recipe) => 
            <div>
            <h1 onClick={() => this.props.selectRecipe(recipe)}>{recipe.name}</h1>
            <span>{recipe.prepTime}</span>
            <span>{recipe.cookTime}</span>
            <span>{recipe.servings}</span>
            </div>
          )
        }
      </div>
    );
  }
}

export default Selection;