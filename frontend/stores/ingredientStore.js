var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/dispatcher.js');
var IngredientConstants = require('../constants/ingredientConstants.js');
var IngredientStore = new Store(Dispatcher);

var _ingredients = {};

var resetIngredients = function (ingredients) {
  _ingredients = {};
  ingredients.forEach(function (ingredient) {
    _ingredients[ingredient.id] = ingredient;
  });
};
var removeIngredient = function(ingredient) {
  delete _ingredients[ingredient.id];
};
IngredientStore.all = function () {
  var ingredients = [];
  for (var id in _ingredients) {
    ingredients.push(_ingredients[id]);
  }
  return ingredients;
};
IngredientStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case IngredientConstants.INGREDIENTS_RECEIVED:
      resetIngredients(payload.ingredients);
      IngredientStore.__emitChange();
      break;
    case IngredientConstants.INGREDIENT_REMOVED:
      removeIngredient(payload.ingredient);
      IngredientStore.__emitChange();
      break;
  }
};

module.exports = IngredientStore;
