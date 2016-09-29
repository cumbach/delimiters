var Dispatcher = require('../dispatcher/dispatcher.js');
var PrimaryConstants = require('../constants/primaryConstants.js');

var PrimaryActions = {
  receiveAllPrimaries: function(primaries) {
    Dispatcher.dispatch({
      actionType: PrimaryConstants.PRIMARIES_RECEIVED,
      primaries: primaries
    });
  },
  addedPrimary: function (primary) {
    Dispatcher.dispatch({
      actionType: PrimaryConstants.PRIMARY_CREATED,
      primary: primary
    });
  },
  removedPrimary: function (primary) {
    Dispatcher.dispatch({
      actionType: PrimaryConstants.PRIMARY_REMOVED,
      primary: primary
    });
  }
};

module.exports = PrimaryActions;
