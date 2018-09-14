import React from 'react';
import Artyom from 'artyom.js';
import ArtyomCommandsManager from '../ArtyomCommands.js';

// Create a "globally" accesible instance of Artyom
const Assistant = new Artyom();

export default class KitchenAssistant extends React.Component {
  constructor(props, context) {
    super(props, context);
    console.log(props);
    // Add `this` context to the handler functions
    this.startAssistant = this.startAssistant.bind(this);
    this.stopAssistant = this.stopAssistant.bind(this);
    this.speakText = this.speakText.bind(this);
    this.handleTextareaChange = this.handleTextareaChange.bind(this);

    // Prepare simple state
    this.state = {
      artyomActive: false,
      textareaValue: "",
      artyomIsReading: false
    };

    // Load some commands to Artyom using the commands manager
    const CommandsManager = new ArtyomCommandsManager(Assistant);
    CommandsManager.loadCommands(props);
  }

  startAssistant() {
    let _this = this;

    console.log("Artyom succesfully started !", _this);

    Assistant.initialize({
      lang: "en-GB",
      debug: true,
      continuous: true,
      soundex: true,
      listen: true
    }).then(() => {
      // Display loaded commands in the console
      console.log(Assistant.getAvailableCommands());

      Assistant.say("Hello, and welcome to your cookbook!");

      _this.setState({
        artyomActive: true
      });
    }).catch((err) => {
      console.error("Oopsy daisy, this shouldn't happen !", err);
    });
  }

  stopAssistant() {
    let _this = this;

    Assistant.fatality().then(() => {
      console.log("Assistant has been succesfully stopped");

      _this.setState({
        artyomActive: false,
      });

    }).catch((err) => {
      console.error("Oopsy daisy, this shouldn't happen neither!", err);

      _this.setState({
        artyomActive: false,
      });
    });
  }

  speakText() {
    let _this = this;

    _this.setState({
      artyomIsReading: true,
    });

    // Speak text with Artyom
    Assistant.say(_this.state.textareaValue, {
      onEnd() {
        _this.setState({
          artyomIsReading: false,
        });
      },
    });
  }

  handleTextareaChange(event) {
    this.setState({
      textareaValue: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <h2 className="assistant-welcome">
        Hello, {this.props.user.split(' ')[0]}. I'm Your Kitchen Assistant.
        </h2>

        <p className="assistant-tagline">
        Ask me to read the directions for your recipe aloud while you cook.
        </p>

        {/* Voice commands action buttons */}
        <input type="button" value="Start Kitchen Assistant" className={this.state.artyomActive ? 'assistant-unselected' : 'assistant-selected'} onClick={this.startAssistant} />
        <input type="button" value="Stop Kitchen Assistant" className={!this.state.artyomActive ? 'assistant-unselected' : 'assistant-selected'} onClick={this.stopAssistant} />
      </div>
    );
  }
}
