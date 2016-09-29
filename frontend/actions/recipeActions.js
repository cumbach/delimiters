var Dispatcher = require('../dispatcher/dispatcher.js');
var RecipeConstants = require('../constants/recipeConstants.js');
var ApiUtil = require('../util/apiUtil');
var PrimaryStore = require('../stores/primaryStore');


var RecipeActions = {
  resetAllRecipes: function() {
    Dispatcher.dispatch({
      actionType: RecipeConstants.RESET_ALL_RECIPES
    });
  },
  addedSingleRecipe: function(singleRecipeItem) {
    Dispatcher.dispatch({
      actionType: RecipeConstants.SINGLE_RECIPE_ITEM_CREATED,
      singleRecipeItem: singleRecipeItem
    });
  },
  fetchAllRecipes: function (fridgeItems) {
    fridgeItems.forEach(function(fridgeItem){
      ApiUtil.createRecipeItem(PrimaryStore.all(), fridgeItem['name']);
    });
  },
  addedRecipeItem: function (ingredient, recipeItemArray) {
    Dispatcher.dispatch({
      actionType: RecipeConstants.RECIPE_ITEM_CREATED,
      ingredient: ingredient,
      recipeItemArray: recipeItemArray
    });
  },
  removedRecipeItem: function (ingredient) {
    Dispatcher.dispatch({
      actionType: RecipeConstants.RECIPE_ITEM_REMOVED,
      ingredient: ingredient
    });
  },
};

module.exports = RecipeActions;
