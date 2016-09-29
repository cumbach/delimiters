var ReactDOM = require('react-dom');
var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

var App = require('./components/app');
// var RecipesShow = require('./components/recipesShow');
// var Home = require('./components/home');

// var routes = (
//   <Route path="/" component={Home}>
//     <IndexRoute component={App}/>
//     <Route path="recipes/:id" component={RecipesShow}/>
//   </Route>
// );

document.addEventListener("DOMContentLoaded", function(){
  var root = document.querySelector('#root');
  ReactDOM.render(<App />, root);
});
