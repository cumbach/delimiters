var Dispatcher = require('../dispatcher/dispatcher.js');
var IngredientConstants = require('../constants/ingredientConstants.js');

var IngredientActions = {
  receiveAllIngredients: function (ingredients) {
    Dispatcher.dispatch({
      actionType: IngredientConstants.INGREDIENTS_RECEIVED,
      ingredients: ingredients
    });
  },
  ingredientRemoved: function (ingredient) {
    Dispatcher.dispatch({
      actionType: IngredientConstants.INGREDIENT_REMOVED,
      ingredient: ingredient
    });
  }
};

module.exports = IngredientActions;
