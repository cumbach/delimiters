var React = require('react');
// var IngredientsIndex = require('./ingredientsIndex');
// var FridgeIndex = require('./fridgeIndex');
// var RecipesIndex = require('./recipesIndex');
// var PrimaryIndex = require('./primaryIndex');
// var PrimaryStore = require('../stores/primaryStore');
// var FridgeStore = require('../stores/fridgeStore');
// var RecipeSearch = require('./recipeSearch');
var LocaleStore = require('../stores/localeStore');
//
var ApiUtil = require('../util/apiUtil');
var LocaleActions = require('../actions/localeActions');


var App = React.createClass({
  getInitialState: function() {
    return {localeItems: []};
  },
  //
  // _onChange: function() {
  //   // this.setState({fridgeItems: FridgeStore.all()});
  //   //
  //   // // NO NEW REQUEST MADE WHEN FRIDGEITEMS ALL TAKEN OUT
  //   // if (FridgeStore.all().length === 0) {
  //   //   if (PrimaryStore.all().length !== 0) {
  //   //     RecipeActions.fetchAllRecipes([0]);
  //   //   }
  //   // }
  // },
  //
  componentDidMount: function() {
    ApiUtil.fetchAllLocaleItems();
    // this.localeListener = LocaleStore.addListener(this._onChange);
  },

  // componentWillUnmount: function(){
  //   this.localeListener.remove();
  // },
  localeMap: function(){
    var map = [];
    if (typeof this.state.localeItems !== 'undefined') {
      map = this.state.localeItems.map(function(locale){
        if (typeof locale !== 'undefined') {
          // map.push(<div>locale<div/>);
          console.log(locale);
        }
      });
    }
    return map;
  },
  render: function() {
    return (
      <div id="wrapper" className="foodiefridge-app">
        Hello
        <div className='list'>{this.localeMap()}</div>
      </div>
    );
  }
});

module.exports = App;
