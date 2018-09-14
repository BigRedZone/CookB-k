import React from 'react';
import EditDeleteRecipe from './EditDeleteRecipe.jsx';
import Steps from './Steps.jsx';
//testing testing 123

class Recipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: ''
    };
    this.changeView = this.changeView.bind(this);
    console.log(this.props.recipe.ingredients);
  }

  changeView(view) {
    this.setState({
      view: view
    });
    this.render();
  }

  render() {
    if (this.state.view === 'steps') {
      return (<Steps
        recipe={this.props.recipe}
        clickExit={this.clickStart}
        changeView={this.changeView}
        />);
    } else if (this.state.view === 'edit') {
      return (<EditDeleteRecipe
        recipe={this.props.recipe}
        selectRecipe={this.props.selectRecipe}
        username={this.props.username}
        setRecipes={this.props.setRecipes}
        changeAppView={this.props.changeAppView}changeView={this.changeView}/>
        )
    } else {
      return (
        <div id='recipe-container'>
          <h1 id='recipe-title'>{this.props.recipe.name}</h1>
          <div>
            <h4>Recipe Overview</h4>
            <h3>This Recipe Includes...</h3>
            <p>{this.props.recipe.ingredients}</p>
            <h3>Prep Time</h3>
            <p>{this.props.recipe.prepTime}</p>
            <h3>Cook Time</h3>
            <p>{this.props.recipe.cookTime}</p>
            <h3>Servings</h3>
            <p>{this.props.recipe.servings}</p>
          </div>
          <div>
            <button className='recipe-start-button' onClick={() => this.changeView('steps')}>Start</button><br/><br/>
            <button className='recipe-edit-button' onClick={() => this.changeView('edit')}>Edit</button>
          </div>
        </div>
      );
    }
  }
}

export default Recipe;