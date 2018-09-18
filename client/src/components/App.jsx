import React from 'react';
import AddRecipe from './AddRecipe.jsx';
import Recipe from './Recipe.jsx';
import Selection from './Selection.jsx';
import SignIn from './SignIn.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      view: 'login',
      recipe: {},
      recipes: [],
    };

    this.renderComponent = this.renderComponent.bind(this);
    this.changeView = this.changeView.bind(this);
    this.setRecipes = this.setRecipes.bind(this);
    this.selectRecipe = this.selectRecipe.bind(this);
    this.handleSignIn = this.handleSignIn.bind(this);
    this.handleSignOut = this.handleSignOut.bind(this);
  }


  setRecipes(data) {
    const allRecipes = data.map((recipe) => {
      const newRecipe = {
        name: recipe.name,
        cookTime: recipe.cookTime,
        prepTime: recipe.prepTime,
        servings: recipe.servings,
        ingredients: recipe.ingredients ? recipe.ingredients : '',
        steps: recipe.steps ? recipe.steps : '',
      };
      return newRecipe;
    });
    this.setState({
      recipes: allRecipes,
    });
  }

  changeView(view) {
    this.setState({
      view,
    });
    this.render();
  }

  selectRecipe(recipe) {
    this.setState({
      recipe,
    });
    this.changeView('overview');
  }

  handleSignIn(fullName) {
    this.setState({
      username: fullName,
    });
    this.changeView('selection');
  }

  handleSignOut() {
    this.setState({
      username: '',
    });
  }

  signOut() {
    const context = this;
    const auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(() => {
      context.handleSignOut();
      context.changeView('login');
    });
  }

  renderComponent() {
    if (this.state.view === 'overview') {
      return (
        <Recipe
          username={this.state.username}
          selectRecipe={this.selectRecipe}
          recipe={this.state.recipe}
          setRecipes={this.setRecipes}
          changeAppView={this.changeView}
        />
      );
    }
    if (this.state.view === 'add') {
      return <AddRecipe user={this.state.username} changeView={this.changeView} />;
    }
    return (
      <Selection
        selectRecipe={this.selectRecipe}
        recipes={this.state.recipes}
        setRecipes={this.setRecipes}
        user={this.state.username}
      />
    );
  }

  render() {
    if (this.state.view === 'login') {
      return (
        <div id="signin-container">
          <h1 className="signin" id="signin-title">
            CookBük
          </h1>
          <h2 className="signin"
            id="signin-tagline"
          >
          The only sous chef you'll ever need
          </h2>
          <SignIn afterSignIn={this.handleSignIn} changeView={this.changeView} />
        </div>
      );
    }
    return (
      <div>
        <h2 className="nav-logo" onClick={() => this.changeView('home')}>
          CookBük
        </h2>
        <ul id="nav-menu">
          <li className={this.state.view === 'home' ? 'nav-selected' : 'nav-unselected'}>
            <a onClick={() => this.changeView('home')}>
              Home
            </a>
          </li>
          <li className={this.state.view === 'add' ? 'nav-selected' : 'nav-unselected'}>
            <a onClick={() => this.changeView('add')}>
              Create
            </a>
          </li>
          <li className='nav-unselected'>
            <a onClick={this.signOut.bind(this)}>Sign out</a>
          </li>
        </ul>
        <div id="child-component-container">
          {this.renderComponent()}
        </div>
      </div>
    );
  }
}

export default App;
