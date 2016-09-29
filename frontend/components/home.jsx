var React = require('react');
var ApiUtil = require('../util/apiUtil');
var IngredientActions = require('../actions/ingredientActions');
var RecipeStore = require('../stores/recipeStore');

var Home = React.createClass({
  render: function() {
    return (
      <div className="home-container">
        {this.props.children}
      </div>
    );
  }
});

module.exports = Home;
