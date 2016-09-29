var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/dispatcher.js');
var LocaleConstants = require('../constants/localeConstants.js');
var LocaleStore = new Store(Dispatcher);

var _localeItems = {};

var setLocaleItems = function (localeItems) {
  // _localeItems = {};
  // _localeItems = {};
  for (var main in localeItems) {
    // console.log(localeItems[main])
    for (var lang in localeItems[main]) {
      _localeItems[lang] = localeItems[main][lang];
    }
  }
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
      setLocaleItems(payload.localeItems);
      LocaleStore.__emitChange();
      break;
  }
};

module.exports = LocaleStore;
