var React = require('react');
var IngredientStore = require('../stores/ingredientStore');
var ApiUtil = require('../util/apiUtil');
var IngredientsIndex = require('./ingredientsIndex');
var RecipeActions = require('../actions/recipeActions');

var Primary = React.createClass({
  deleteFromPrimary: function() {
    ApiUtil.destroyPrimary(this.props.primary.id);
    ApiUtil.fetchAllIngredients();
    RecipeActions.removedRecipeItem(this.props.primary.name);
  },
  classname: function () {
    return 'btn primary ' + this.props.primary.category;
  },
  dragStart: function(e) {
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData("Text", e.target.id);
  },
  render: function() {
    return (
      <div className={this.classname()}
           onClick={this.deleteFromPrimary}
           draggable="true"
           onDragStart={this.dragStart}
           onDragEnd={this.dragEnd}
           id={JSON.stringify(this.props.primary)}>
        {this.props.primary.name}
      </div>
    );
  }
});


module.exports = Primary;
