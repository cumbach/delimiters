var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/dispatcher.js');
var FridgeConstants = require('../constants/fridgeConstants.js');
var FridgeStore = new Store(Dispatcher);

var _fridgeItems = {};

var resetFridgeItems = function (fridgeItems) {
  _fridgeItems = {};
  fridgeItems.forEach(function (fridgeItem) {
    _fridgeItems[fridgeItem.id] = fridgeItem;
  });
};
var addFridgeItem = function (fridgeItem) {
  _fridgeItems[fridgeItem.id] = fridgeItem;
};
var removeFridgeItem = function(fridgeItem) {
  delete _fridgeItems[fridgeItem.id];
};
FridgeStore.all = function () {
  var fridgeItems = [];
  for (var id in _fridgeItems) {
    fridgeItems.push(_fridgeItems[id]);
  }
  return fridgeItems;
};
FridgeStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case FridgeConstants.FRIDGE_ITEMS_RECEIVED:
      resetFridgeItems(payload.fridgeItems);
      FridgeStore.__emitChange();
      break;
    case FridgeConstants.FRIDGE_ITEM_CREATED:
      addFridgeItem(payload.fridgeItem);
      FridgeStore.__emitChange();
      break;
    case FridgeConstants.FRIDGE_ITEM_REMOVED:
      removeFridgeItem(payload.fridgeItem);
      FridgeStore.__emitChange();
      break;
  }
};

module.exports = FridgeStore;
