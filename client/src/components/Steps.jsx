import React from 'react';
import KitchenAssistant from './KitchenAssistant.jsx';
import Commands from './Commands.jsx';

class Steps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 0,
      kitchenAssistant: false,
    };
    console.log('this is props', props);
    this.clickNext = this.clickNext.bind(this);
    this.clickPrev = this.clickPrev.bind(this);
    this.clickFirst = this.clickFirst.bind(this);
    this.clickLast = this.clickLast.bind(this);
    this.clickExit = this.clickExit.bind(this);
    this.enableCommands = this.enableCommands.bind(this);
    this.disableCommands = this.disableCommands.bind(this);
    this.renderCommands = this.renderCommands.bind(this);
  }

  clickNext() {
    if (this.state.currentStep === this.props.recipe.steps.length - 1) {
      this.setState({
        currentStep: this.props.recipe.steps.length - 1,
      });
    } else {
      this.setState({
        currentStep: this.state.currentStep + 1,
      });
    }
    console.log('CURRENT STEP:', this.state.currentStep + 2);
  }

  clickPrev() {
    if (this.state.currentStep === 0) {
      this.setState({
        currentStep: this.state.currentStep,
      });
    } else {
      this.setState({
        currentStep: this.state.currentStep - 1,
      });
    }
  }

  clickFirst() {
    this.setState({
      currentStep: 0,
    });
  }

  clickLast() {
    this.setState({
      currentStep: this.props.recipe.steps.length - 1,
    });
  }

  clickExit() {
    this.props.changeView('overview');
  }

  enableCommands() {
    if (!this.state.kitchenAssistant) {
      this.setState({
        kitchenAssistant: true,
      });
    }
  }

  disableCommands() {
    if (this.state.kitchenAssistant) {
      this.setState({
        kitchenAssistant: false,
      });
    }
  }

  renderCommands() {
    if (this.state.kitchenAssistant) {
      return <Commands />;
    }
  }

  render() {
    return (
      <div>
        <KitchenAssistant
          recipe={this.props.recipe}
          clickNext={this.clickNext}
          clickPrev={this.clickPrev}
          clickFirst={this.clickFirst}
          clickLast={this.clickLast}
          clickExit={this.clickExit}
          currentStep={this.state.currentStep}
          enableCommands={this.enableCommands}
          disableCommands={this.disableCommands}
        />
        {this.renderCommands()}
        <h1>{this.props.recipe.name}</h1>
        <div id='steps-container'>
          <h2>
            Step {this.state.currentStep + 1}
            :
          </h2>
          {this.props.recipe.steps.map((step, i) => {
            if (this.state.currentStep === i) {
              return (<p key={i}>{step}</p>);
            }
          })}
        </div>
        <div className="steps-button-container">
          <button className="steps-button" onClick={this.clickFirst}>First</button>
          <button className="steps-button" onClick={this.clickPrev}>Prev.</button>
          <button className="steps-button" onClick={this.clickNext}>Next</button>
          <button className="steps-button" onClick={this.clickLast}>Last</button>
        </div>
        <a className="steps-exit-link" onClick={this.clickExit}>Exit</a>
      </div>
    );
  }
}

export default Steps;
