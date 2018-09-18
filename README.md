# CookBük
  __A recipe storage and assistant application__

## Team Big Red

  - __Product Owner__: Jhia Turner
  - __Scrum Master__: Nate Ong
  - __Development Team Members__: Jhia Turner, Nate Ong, Taehwan Lim, Nathan Vang

## Table of Contents

1. [Requirements](#requirements)
2. [Getting Started](#getting-started)
3. [Usage](#usage)
  - [Client Side] (#client-side)
  - [Server Side] (#server-side)
  - [Database Side] (#database)    
3. [Development](#development)
  - [Tasks](#tasks)
4. [Team](#team)
5. [Contributing](#contributing)

## Requirements

### Dependencies:

* artyom.js: 1.0.6
* axios: 0.18.0
* body-parser: 1.18.3
* express: 4.16.3
* jquery: 3.3.1
* mongoose: 5.2.13
* react: 16.4.2
* react-dom: 16.4.2
* request: 2.88.0

### Dev Dependencies:

* babel/core: 7.0.0,
* babel/preset-env: 7.0.0,
* babel/preset-react: 7.0.0,
* babel-loader: 8.0.2,
* chai: 4.1.2,
* mocha: 5.2.0,
* webpack: 4.17.2,
* webpack-cli: 3.1.0,
* webpack-dev-server: 3.1.7

## Getting Started

1. Installation
Install all dependencies within package.json using the command:

```bash
npm install
```
2. Setup Local Host
Run the following scripts to setup environment:

```bash
mongod
npm run react-dev
npm run server-dev
```

3. Setup Database
../database/sampleData.js
- Ensure sample data is refactored to everyone's Google's OAuth Name
> ex. Taehwan Lim, Nathan Vang
- After refactoring sampleData to be usable by you and/or your group, run the following script to create sample data:

```bash
npm run sampleData
```

This will fill your database with sample data formatted in the way that is used across the client, server, and database
__CAREFUL__: running the sample data script more than once will result in duplicate recipes

## Usage


### Client Side

React Components State Management
- Index.jsx
  - App.jsx
    - AddRecipe.jsx
    - Selection.jsx
    - SignIn.jsx
    - Recipe.jsx
        - EditDeleteRecipe.jsx
        - Steps.jsx
            - KitchenAssistant.jsx
                - ArtyomCommands.js

React Components General Info
1. AddRecipe.jsx
Add new recipes to database
2. App.jsx
Main component
3. EditDeleteRecipe.jsx: 
Edit and Delete recipes in database
4. KitchenAssistant.jsx: 
Initialize for Artyom voice commands
5. Recipe.jsx: 
Overview of selected recipe
6. Selection.jsx:
List of all recipes for user
7. SignIn.jsx
OAuth for Google SignIn
8. Steps.jsx
Steps for selected recipe
9. ArtyomCommands.js 
Voice commands for Artyom

### Server Side

Everything related to the server can be found within the index.js file of the server directory. For this app we have chosen to proceed with the Express framework for Node.js.

Along with express, we implemented bodyParser as a middleware to help with receiving data from the client side.

Within the server file, you will notice that we utilize 4 requests to different endpoints:

```
app.post('/recipes', ...)

app.post('/recipe', ...)

app.put('/edit', ...)

app.delete('/delete', ...)
```
#### Post request to recipes

This request is executed in order to retrieve the recipes using the data being sent with the request as a means to query through the database - in our case it was the username being sent from the client side

It is only accessed through the App component

#### Post request to recipe

This request is executed when a new recipe has been submitted from the client side within the AddRecipe component

#### Put request to edit

This request is executed when a current recipe has been edited from the client side within the EditDeleteRecipe component

#### Delete request to delete

This request is executed when a current recipe has been deleted from the client side within the EditDeleteRecipe component

### Database

The database being used is MongoDB with Mongoose providing the ODM environment. Initially the database will connect to a valid cloud database, otherwise it will connect to the local database.

The schema for each recipe is really simple, as it takes the following as strings:
  * username
  * name
  * prepTime
  * cookTime
  * servings
And the following are arrays:
  * ingredients
  * steps    

What is exported out of this file is only the model. All querying is done server side!

## Development

1. Artyom dictates all steps for selected recipe, not just first step.
2. Friends feature 
    -Request and remove friends
    -Share Recipes amongst friends
    -Chat functionality 
3. Inventory management of ingredients remaining in pantry
    -Inform user if recipe is able to be made
    -Inform user when stock of ingredient is low
4. Make the app mobile-friendly 
    - Progressive Web App
    - React Native
5. Add gesture recognition
6. Add picture saving functionality to each recipe
7. Dietary Information
    - Recipes includes calories, protein, sodium, etc...


## Roadmap

View the project roadmap [here](https://waffle.io/BigRedZone/CookBuk) and [here] (https://drive.google.com/file/d/14bqOGESN1answPR3PCp6_TXR-Bo6dwyK/view?usp=sharing)


## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.