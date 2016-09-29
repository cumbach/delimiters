var Dispatcher = require('../dispatcher/dispatcher.js');
var FridgeConstants = require('../constants/fridgeConstants.js');

var FridgeActions = {
  receiveAllFridgeItems: function (fridgeItems) {
    Dispatcher.dispatch({
      actionType: FridgeConstants.FRIDGE_ITEMS_RECEIVED,
      fridgeItems: fridgeItems
    });
  },
  addedFridgeItem: function (fridgeItem) {
    Dispatcher.dispatch({
      actionType: FridgeConstants.FRIDGE_ITEM_CREATED,
      fridgeItem: fridgeItem
    });
  },
  removedFridgeItem: function (fridgeItem) {
    Dispatcher.dispatch({
      actionType: FridgeConstants.FRIDGE_ITEM_REMOVED,
      fridgeItem: fridgeItem
    });
  }
};

module.exports = FridgeActions;
