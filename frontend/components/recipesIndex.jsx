var React = require('react');
var ReactDOM = require('react-dom');
var RecipeStore = require('../stores/recipeStore');
var RecipesIndexItem = require('./recipesIndexItem');
var FridgeStore = require('../stores/fridgeStore');
var PrimaryStore = require('../stores/primaryStore');

var RecipesIndex = React.createClass({
  getInitialState: function() {
    return {recipeItems: []};
  },

  _onChange: function() {
    this.setState({recipeItems: RecipeStore.all()});
  },

  componentDidMount: function() {
    var node = ReactDOM.findDOMNode(this.refs.recipeIndex);
    this.props.registerRecipesIndex(node);
    this.recipeListener = RecipeStore.addListener(this._onChange);
  },

  componentWillUnmount: function() {
    this.recipeListener.remove();
  },
  recipeSort: function() {
    var results = {};
    var fridgeItems = FridgeStore.all();
    fridgeItems = fridgeItems.map(function(item) {
      return item.name;
    });
    this.state.recipeItems.forEach(function(recipe) {
      var count = 0;
      for (var i = 0; i < recipe.ingredients.length; i++) {
        for (var j = 0; j < fridgeItems.length; j++) {
          if (fridgeItems.indexOf(recipe.ingredients[i]) === -1) {
            count += 1;
          }
        }
      }
      if (typeof results[count] === 'undefined') {
        results[count] = [];
      }
      results[count].push(recipe);
    });
    var reversedResults = Object.keys(results);
    var final = [];
    reversedResults.forEach(function(key) {
      final = final.concat(results[key]);
    });
    return final;
  },
  recipeMap: function() {
    var map = [];
    if (typeof this.state.recipeItems !== 'undefined') {
      map = this.recipeSort().map(function(recipeItem) {
        if (recipeItem.imageUrlsBySize) {
          return <RecipesIndexItem
                  key={recipeItem.id}
                  recipeitem={recipeItem}
                  method={this.loaderChange}/>;
        }
        return '';
      }.bind(this));
    }
    return map;
  },
  infoPane: function() {
    if (this.recipeMap().length === 0) {
      if (PrimaryStore.all().length !== 0 || FridgeStore.all().length !== 0) {
        return (<div>
                  <h1 className='no-recipes-found'>No Matching Recipes Found</h1>
                </div>);
      }
    }
    return '';
  },
  render: function() {
    return (
      <div>
        <div className="info-pane">{this.infoPane()}</div>
        <div ref="recipeIndex" className="recipeMap">{this.recipeMap()}</div>
      </div>
    );
  }
});

module.exports = RecipesIndex;
