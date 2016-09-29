var React = require('react');
var ApiUtil = require('../util/apiUtil');
var LocaleActions = require('../actions/localeActions');
var LocaleStore = require('../stores/localeStore');

var LocaleIndexItem = React.createClass({
  delimiter: function() {
    // console.log(this.props.delimiters[this.props.showDelimiter]);
    // if (this.props.showDelimiter) {
      // console.log(this.props.delimiters.showDelimiter);
      return(<div className="delimiter">{this.props.delimiters[this.props.showDelimiter]}</div>);
    // }
  },
  render: function() {
    // var category = this.props.ingredient.category;
    return (
      <div className='row'>
        <div className="ingredient-name">{this.props.language}</div>
        {this.delimiter()}
      </div>
    );
  }
});

module.exports = LocaleIndexItem;
