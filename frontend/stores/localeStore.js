var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/dispatcher.js');
var LocaleConstants = require('../constants/localeConstants.js');
var LocaleStore = new Store(Dispatcher);

var _localeItems = [];

var resetLocaleItems = function (localeItems) {
  // _localeItems = {};
  var _localeItems = [];
  for (var key in localeItems) {
    _localeItems.push(localeItems[key]);
  }
  console.log(_localeItems);
  // return localeItems;
};
// var removeIngredient = function(ingredient) {
//   delete _ingredients[ingredient.id];
// };
LocaleStore.all = function () {
  var localeItems = [];
  for (var id in _localeItems) {
    localeItems.push(_localeItems[id]);
  }
  return localeItems;
};
LocaleStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case LocaleConstants.LOCALES_RECEIVED:
      resetLocaleItems(payload.localeItems);
      LocaleStore.__emitChange();
      break;
  }
};

module.exports = LocaleStore;
