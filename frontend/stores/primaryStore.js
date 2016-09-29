var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/dispatcher.js');
var PrimaryConstants = require('../constants/primaryConstants.js');
var PrimaryStore = new Store(Dispatcher);

var _primaries = {};

var resetPrimaries = function (primaries) {
  _primaries = {};
  primaries.forEach(function (primary) {
    _primaries[primary.id] = primary;
  });
};
var addPrimary = function (primary) {
  _primaries[primary.id] = primary;
};
var removePrimary = function(primary) {
  delete _primaries[primary.id];
};
PrimaryStore.all = function () {
  var primaries = [];
  for (var id in _primaries) {
    primaries.push(_primaries[id]);
  }
  return primaries;
};
PrimaryStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case PrimaryConstants.PRIMARIES_RECEIVED:
      resetPrimaries(payload.primaries);
      PrimaryStore.__emitChange();
      break;
    case PrimaryConstants.PRIMARY_CREATED:
      addPrimary(payload.primary);
      PrimaryStore.__emitChange();
      break;
    case PrimaryConstants.PRIMARY_REMOVED:
      removePrimary(payload.primary);
      PrimaryStore.__emitChange();
      break;
  }
};

module.exports = PrimaryStore;
