// ArtyomCommands.js
export default class ArtyomCommandsManager {
  constructor(ArtyomInstance) {
    this.artyom = ArtyomInstance;
  }

  loadCommands(recipeInfo) {
    const Artyom = this.artyom;
    return Artyom.addCommands([
      {
        indexes: ['what ingredients do I need?'],
        action: () => {
          Artyom.say(`You need ${recipeInfo.recipe.ingredients}`);
        },
      },
      {
        indexes: ['what is the prep time?'],
        action: () => {
          Artyom.say(`Prep time is ${recipeInfo.recipe.prepTime}`);
        },
      },
      {
        indexes: ['what is the cook time?'],
        action: () => {
          Artyom.say(`Cook time is ${recipeInfo.recipe.cookTime}`);
        },
      },
      {
        indexes: ['thank you'],
        action: () => {
          Artyom.say('You\'re welcome');
        },
      },
      {
        indexes: ['lets begin'],
        action: () => {
          Artyom.say(`Step ${recipeInfo.currentStep + 1 + ', ' + recipeInfo.recipe.steps[0]}`);
        },
      },
      {
        indexes: ['what\'s next'],
        action: () => {
          recipeInfo.clickNext();
        },
      },
      {
        indexes: ['what\'s the previous step'],
        action: () => {
          recipeInfo.clickPrev();
        },
      },
      {
        indexes: ['what\'s the first step'],
        action: () => {
          recipeInfo.clickFirst();
        },
      },
      {
        indexes: ['take me to the last step'],
        action: () => {
          recipeInfo.clickLast();
        },
      },
      {
        indexes: ['return to recipe overview'],
        action: () => {
          recipeInfo.clickExit();
        },
      },
    ]);
  }
}
