var React = require('react');
var IngredientActions = require('../actions/ingredientActions');
var ApiUtil = require('../util/apiUtil');
var IngredientStore = require('../stores/ingredientStore');
var IngredientIndexItem = require('./ingredientIndexItem');
var FridgeStore = require('../stores/fridgeStore');
var Fuse = require('fuse.js');
var PrimaryStore = require('../stores/primaryStore');

var IngredientsIndex = React.createClass({
  getInitialState: function() {
    return {shuffled: false, inputVal: "", ingredients: []};
  },
  _onChange: function() {
    this.setState({ingredients: IngredientStore.all()});
    this.setState({shuffled: true});

  },
  componentDidMount: function() {
    this.ingredientListener = IngredientStore.addListener(this._onChange);
    ApiUtil.fetchAllIngredients();
  },
  componentWillUnmount: function(){
    this.ingredientListener.remove();
  },
  shuffle: function(o){
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
  },
  handleChange: function(e) {
    this.setState({ inputVal: e.target.value });
  },

  matches: function () {
    var ingredients = this.state.ingredients;
    var ingredientsArray = [];
    for (key in ingredients) {
      if (ingredients.hasOwnProperty(key)) {
        ingredientsArray.push(ingredients[key]);
      }
    }
    var options = {
      caseSensitive: false,
      includeScore: false,
      shouldSort: true,
      threshold: 0.1,
      keys: ['name', 'category']
    }

    var fuse = new Fuse(ingredientsArray, options)
    if (fuse.search(this.state.inputVal)[0]) {
      return fuse.search(this.state.inputVal);
    } else {
      return false;
    }
  },
  clearSearch: function() {
    this.setState({inputVal: ""});
  },
  addOnEnter: function(e, matchingIngredients) {
    if (e) {
      if (e.key === "Enter" && this.matchingIngredients().length === 1) {
        var ingredient = this.matchingIngredients()[0].props.ingredient;
        ApiUtil.createFridgeItem(ingredient.id);
        ApiUtil.createRecipeItem(PrimaryStore.all(), ingredient.name);
        IngredientActions.ingredientRemoved(ingredient);
        this.clearSearch();
      }
    }
  },
  matchingIngredients: function() {
    var matchingIngredients = <ul>no matches found</ul>;
    var result = [];

    if (!this.matches() && this.state.inputVal.length === 0) {
      if (!this.state.shuffled) {
        this.finalShuffle = this.shuffle(this.state.ingredients);
        this.shuffledIng = <ul>{this.mapper(this.finalShuffle)}</ul>;
      } else {
        var nameMap = this.finalShuffle.map(function(object){
          return object.name;
        });
        for (var i = 0; i < this.finalShuffle.length; i++) {
          for (var j = 0; j < this.state.ingredients.length; j++) {
            if (this.finalShuffle[i].name === this.state.ingredients[j].name) {
              result.push(this.finalShuffle[i]);
            }
            if (nameMap.indexOf(this.state.ingredients[j].name) === -1) {
              result.push(this.state.ingredients[j]);
              nameMap.push(this.state.ingredients[j].name);
            }
          }
        }
        this.finalShuffle = result;
        this.shuffledIng = this.mapper(this.finalShuffle);
      }

    }
    if (this.matches()) {
      this.shuffledIng = this.mapper(this.matches());
    }
    return this.shuffledIng;
  },
  mapper: function (array) {
    var result = array.map(function(ingredient){
      return <IngredientIndexItem
        dragStart={this.props.dragStart}
        dragEnd={this.props.dragEnd}
        drag={this.props.drag}
        toggleRecipesIndex={this.props.toggleRecipesIndex}
        key={ingredient.id}
        ingredient={ingredient}/>;
    }.bind(this))
    return result;
  },
  render: function() {
    return(
      <div>
        <input type="text"
          className="form-control search-bar"
          onChange={this.handleChange}
          onKeyPress={this.addOnEnter}
          placeholder="🔍Search Ingredients"
          value={this.state.inputVal}/>
          <ul className="matching-ingredients" onClick={this.clearSearch}>
            {this.matchingIngredients()}
          </ul>
      </div>
    );
  }
});


module.exports = IngredientsIndex;
