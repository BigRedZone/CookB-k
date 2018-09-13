import React from 'react';

class Steps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nextClicked: false,
      prevClicked: false,
      firstClicked: false,
      lastClicked: false,
      currentStep: 0
    }
    this.clickNext = this.clickNext.bind(this);
    this.clickPrev = this.clickPrev.bind(this);
    this.clickFirst = this.clickFirst.bind(this);
    this.clickLast = this.clickLast.bind(this);
    this.clickExit = this.clickExit.bind(this);
  }

  clickNext() {
    if (this.state.currentStep === this.props.recipe.steps.length - 1) {
      this.setState({
        currentStep: this.props.recipe.steps.length - 1
      });
    } else {
      this.setState({
        currentStep: this.state.currentStep + 1
      });
    }
  }

  clickPrev() {
    if (this.state.currentStep === 0) {
      this.setState({
        currentStep: this.state.currentStep
      });
    } else {
      this.setState({
        currentStep: this.state.currentStep - 1
      });
    }
  }

  clickFirst() {
    this.setState({
      currentStep: 0
    });
  }

  clickLast() {
    this.setState({
      currentStep: this.props.recipe.steps.length - 1
    });
  }

  clickExit() {
    this.props.changeView('overview');
  }

  render() {

    return (
      <div>
        <h1>{this.props.recipe.name}</h1>
        <div>
          <h2>Step {this.state.currentStep + 1}:</h2>
          {this.props.recipe.steps.map((step, i) => {
            if (this.state.currentStep === i) {
              return (<p key={i}>{step}</p>);
            }
          })}
        </div>
        <button onClick={this.clickFirst}>First</button>
        <button onClick={this.clickPrev}>Prev.</button>
        <button onClick={this.clickNext}>Next</button>
        <button onClick={this.clickLast}>Last</button>
        <button onClick={this.clickExit}>Exit</button>
      </div>
    )
  }
}

export default Steps;