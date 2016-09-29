var React = require('react');
var IngredientStore = require('../stores/ingredientStore');
var ApiUtil = require('../util/apiUtil');
var IngredientsIndex = require('./ingredientsIndex');
var RecipeActions = require('../actions/recipeActions');

var FridgeIndexItem = React.createClass({
  deleteFromFridge: function() {
    ApiUtil.destroyFridgeItem(this.props.fridgeitem.id);
    ApiUtil.fetchAllIngredients();
    RecipeActions.removedRecipeItem(this.props.fridgeitem.name);
  },
  classname: function () {
    return 'btn fridge-index-item ' + this.props.fridgeitem.category;
  },
  dragStart: function(e) {
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData("Text", e.target.id);
  },
  // dragEnd: function(e) {
  //   debugger;
  // },

  render: function() {
    return (
      <div className={this.classname()}
           onClick={this.deleteFromFridge}
           draggable="true"
           onDragStart={this.dragStart}
           onDragEnd={this.dragEnd}
           id={JSON.stringify(this.props.fridgeitem)}>
        {this.props.fridgeitem.name}
      </div>
    );
  }
});

module.exports = FridgeIndexItem;
