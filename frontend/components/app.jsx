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
var LocaleIndexItem = require('./localeIndexItem');


var App = React.createClass({
  getInitialState: function() {
    return {localeItems: [], selectedDelimiter: null};
  },

  _onChange: function() {
    this.setState({localeItems: LocaleStore.all()});
    //
    // // NO NEW REQUEST MADE WHEN FRIDGEITEMS ALL TAKEN OUT
    // if (FridgeStore.all().length === 0) {
    //   if (PrimaryStore.all().length !== 0) {
    //     RecipeActions.fetchAllRecipes([0]);
    //   }
    // }
  },

  componentDidMount: function() {
    ApiUtil.fetchAllLocaleItems();
    this.localeListener = LocaleStore.addListener(this._onChange);
  },
  componentWillUnmount: function(){
    this.localeListener.remove();
  },
  localeMap: function(){
    var map = [];
    var selectedDelimiter = this.state.selectedDelimiter;
    if (typeof this.state.localeItems !== 'undefined') {
      map = this.state.localeItems.map(function(locale){
        if (typeof locale !== 'undefined') {
          return <LocaleIndexItem
                  key={locale.identity.language}
                  showDelimiter={selectedDelimiter}
                  delimiters={locale.delimiters}
                  language={locale.identity.language}/>;
        }
      });
    }
    return map;
  },
  click: function() {
    var dropdown = document.getElementById('agent');
    var index = dropdown.selectedIndex;
    this.setState({selectedDelimiter: document.getElementById('agent')[index].value})
    // this.state.selectedDelimiter = document.getElementById('agent')[index].value;
    this.localeMap();
  },
  selectTag: function() {
    return (<select id='agent' onChange={this.click}>
              <option value="null">Select Property</option>
              <option value="quotationStart">quotationStart</option>
              <option value="quotationEnd">quotationEnd</option>
              <option value="alternateQuotationStart">alternateQuotationStart</option>
              <option value="alternateQuotationEnd">alternateQuotationEnd</option>
            </select>)
  },
  render: function() {
    return (
      <div id="wrapper" className="foodiefridge-app">
        <h1>Locale Properties:</h1>
        <div className='row-headers'>
          <h4>Locales</h4>
          {this.selectTag()}
        </div>
        <div className='list'>{this.localeMap()}</div>
      </div>
    );
  }
});

module.exports = App;
