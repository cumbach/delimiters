var React = require('react');
var IngredientStore = require('../stores/ingredientStore');
var ApiUtil = require('../util/apiUtil');
var IngredientsIndex = require('./ingredientsIndex');
var RecipeActions = require('../actions/recipeActions');

var RecipeSearch = React.createClass({
  getInitialState: function() {
    return {inputVal: '', recipeSearchList: [], searchRecipesClasses: "search-recipes hidden-group" };
  },
  componentDidMount: function() {

  },
  handleChange: function(e) {
    this.setState({ inputVal: e.target.value });
  },
  clearSearch: function() {
    this.setState({inputVal: ""});
  },
  searchOnEnter: function(e) {
    if (e) {
      if (e.key === "Enter") {
        ApiUtil.createRecipeSearch(this.state.inputVal);
        this.state.recipeSearchList.push(this.state.inputVal);
        this.clearSearch();
      }
    }
  },
  recipesPress: function() {
    this.setState({searchRecipesClasses: "search-recipes"})
    $('.btn').css("display", "none");
    RecipeActions.resetAllRecipes();
    $('.recipesButton').css("background-color", "rgba(68,157,68,0.7)");
    $('.ingredientsButton').css("background-color", "buttonface");

    $('.recipe-search-pane').css("height", "15%");
    $('.recipes_items-index-pane').css("height", "85%");

  },
  ingredientsPress: function() {
    RecipeActions.resetAllRecipes();
    ApiUtil.fetchAllFridgeItems();
    this.setState({searchRecipesClasses: "search-recipes hidden-group"})

    $('.btn').css("display", "inline-block");

    $('.ingredientsButton').css("background-color", "rgba(68,157,68,0.7)");
    $('.recipesButton').css("background-color", "buttonface");

    $('.recipe-search-pane').css("height", "7%");
    $('.recipes_items-index-pane').css("height", "93%");
  },
  render: function() {
    return (
      <div>
        <div className="search-button-group">
          <button className="ingredientsButton" onClick={this.ingredientsPress}>Search by Ingredients</button>
          <button className="recipesButton" onClick={this.recipesPress}>Search by Recipes</button>
        </div>

        <div className={this.state.searchRecipesClasses}>
          <input type="text"
            className="form-control recipe-search-bar"
            onChange={this.handleChange}
            onKeyPress={this.searchOnEnter}
            placeholder="Search for Specific Recipes"
            value={this.state.inputVal}/>

        </div>
      </div>
    );
  }
});


module.exports = RecipeSearch;
