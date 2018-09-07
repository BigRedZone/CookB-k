import React from 'react';
import EditDeleteRecipe from './EditDeleteRecipe.jsx';
import Steps from './Steps.jsx';
//testing testing 123

class Recipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editClicked: false,
      startClicked: false
    };
    this.clickEdit = this.clickEdit.bind(this);
    this.clickStart = this.clickStart.bind(this);
  }

  clickEdit() {
    this.setState({
      editClicked: !this.state.editClicked
    });
    this.render();
  }

  clickStart() {
    this.setState({
      startClicked: !this.state.startClicked
    });
    this.render();
  }

  render() {
    if (this.state.startClicked) {
      return (<Steps 
        recipe={this.props.recipe} 
        clickExit={this.clickStart}
        />);
    } else if (this.state.editClicked) {
      return (<EditDeleteRecipe 
        recipe={this.props.recipe} 
        clickSubmit={this.clickEdit} 
        update={this.props.update}
        delete={this.props.delete}/>);
    } else {
      return (
        <div>
          <h3>CookBuk</h3>
          <h1>Recipe Name Field</h1>
          <div>
            <h4>Recipe Overview</h4>
            <h3>This Recipe Includes...</h3>
            <p>ingredient 1, ingredient 2, etc...</p>
            <h3>Prep Time</h3>
            <p>xxx mins</p>
            <h3>Cook Time</h3>
            <p>xxx mins</p>
            <h3>Servings</h3>
            <p>xxx mins</p>
          </div>
          <div>
            <button onClick={() => this.clickStart()}>Start</button><br/><br/>
            <button onClick={() => this.clickEdit()}>Edit</button>
          </div>
        </div>
      );
    }
  }
}

export default Recipe;