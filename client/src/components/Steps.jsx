import React from 'react';

class Steps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nextClicked: false,
      prevClicked: false,
      firstClicked: false,
      lastClicked: false,
      currentStep: 1
    }
    this.clickNext = this.clickNext.bind(this);
    this.clickPrev = this.clickPrev.bind(this);
    this.clickFirst = this.clickNext.bind(this);
    this.clickLast = this.clickNext.bind(this);
  }

  clickNext() {
    this.setState({
      currentStep: this.state.currentStep + 1
    });
  }

  clickPrev() {
    this.setState({
      currentStep: this.state.currentStep - 1
    });
  }

  clickFirst() {

  }

  clickLast() {

  }

  render() {

    return (
      <div>
        <h1>{this.props.recipe.name}</h1>
        <div>
        <h2>Step {this.state.currentStep}:</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <button>First</button>
        <button onClick={this.clickPrev}>Prev.</button>
        <button onClick={this.clickNext}>Next</button>
        <button>Last</button>
        <a href="/recipe">Exit</a>
        </div>
      </div>
    )
  }
}

export default Steps;