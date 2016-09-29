var React = require('react');
var ApiUtil = require('../util/apiUtil');
var IngredientActions = require('../actions/ingredientActions');
var RecipeStore = require('../stores/recipeStore');
var PrimaryStore = require('../stores/primaryStore');

var IngredientIndexItem = React.createClass({

  classname: function(){
    return "ingredients-index-item btn " + this.props.ingredient.category;
  },
  moveToFridge: function(e) {
    this.props.toggleRecipesIndex();
    ApiUtil.createFridgeItem(this.props.ingredient.id);
    ApiUtil.createRecipeItem(PrimaryStore.all(), this.props.ingredient.name, function(){
      // this.props.toggleRecipesIndex();
    }.bind(this));
    IngredientActions.ingredientRemoved(this.props.ingredient);
  },
  render: function() {
    var category = this.props.ingredient.category;
    return (
      <button className={this.classname()}
           onClick={this.moveToFridge}
           draggable="true"
           onDragStart={this.props.dragStart}
           onDragEnd={this.props.dragEnd}
           onDrag={this.props.drag}
           id={JSON.stringify(this.props.ingredient)}>

        <ul className="ingredient-name">{this.props.ingredient.name}</ul>
        <ul className="ingredient-category">{this.props.ingredient.category}</ul>
      </button>
    );
  }
});

module.exports = IngredientIndexItem;
