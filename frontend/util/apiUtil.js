// var IngredientActions = require('../actions/ingredientActions');
// var FridgeActions = require('../actions/fridgeActions');
// var PrimaryActions = require('../actions/primaryActions');
var LocaleActions = require('../actions/localeActions');
var langArray = require('../constants/langArray');
// var RecipeActions;
// var glob = require('glob-fs')({ gitignore: true });
// var files = glob.readdirSync('**/*.js');
// var fs = require('fs');
// console.log(fs);
// var APP_ID = 'f4ac9032';
// var APP_KEY = 'ec28d82137e2708128a2f7f69400989f';
// import * as fs from 'fs';
// var process = require( "process" );
// var path = require( 'path' );

module.exports = {
  fetchAllLocaleItems: function() {
    // langArray.forEach(function(){
    for (var i = 0; i < langArray.length; i++) {
      $.ajax({
        url: 'https://rawgit.com/unicode-cldr/cldr-misc-full/master/main/' + langArray[i] + '/delimiters.json',
        success: function (locales) {
          LocaleActions.receiveAllLocaleItems(locales)
        }
      });
    }
    // });
  }
  // fetchAllIngredients: function() {
  //   $.ajax({
  //     url: "api/ingredients",
  //     success: function (ingredients) {
  //       IngredientActions.receiveAllIngredients(ingredients);
  //     }
  //   });
  // },
  // fetchAllFridgeItems: function() {
  //   $.ajax({
  //     url: "api/ingredients",
  //     data: {query: "fridge"},
  //     success: function (fridgeItems) {
  //       FridgeActions.receiveAllFridgeItems(fridgeItems);
  //
  //       RecipeActions.fetchAllRecipes(fridgeItems);
  //     }
  //   });
  // },
  // fetchAllPrimaries: function() {
  //   $.ajax({
  //     url: "api/ingredients",
  //     data: {query: "primary"},
  //     success: function (primaries) {
  //       PrimaryActions.receiveAllPrimaries(primaries);
  //     }
  //   });
  // },
  // createPrimary: function(ingredient_id) {
  //   $.ajax({
  //     url: "api/primaries",
  //     data: {ingredient_id: ingredient_id},
  //     method: "POST",
  //     success: function (primary) {
  //       PrimaryActions.addedPrimary(primary);
  //     }
  //   });
  // },
  // destroyPrimary: function(ingredient_id) {
  //   $.ajax({
  //     url: "api/primaries/:id",
  //     data: {ingredient_id: ingredient_id},
  //     method: "DELETE",
  //     success: function (primary) {
  //       PrimaryActions.removedPrimary(primary);
  //     }
  //   });
  // },
  // createFridgeItem: function(ingredient_id) {
  //   $.ajax({
  //     url: "api/fridge_items",
  //     data: {ingredient_id: ingredient_id},
  //     method: "POST",
  //     success: function (fridgeItem) {
  //       FridgeActions.addedFridgeItem(fridgeItem);
  //     }
  //   });
  // },
  // destroyFridgeItem: function(ingredient_id) {
  //   $.ajax({
  //     url: "api/fridge_items/:id",
  //     data: {ingredient_id: ingredient_id},
  //     method: "DELETE",
  //     success: function (fridgeItem) {
  //       FridgeActions.removedFridgeItem(fridgeItem);
  //     }
  //   });
  // },
  // createRecipeItem: function(primaries, ingredient, cb) {
  //   if (primaries.length !== 0) {
  //     var result = [];
  //     primaries.forEach(function(primary){
  //       result.push(primary.name);
  //     })
  //     primaries = result;
  //   }
  //   var search = primaries.concat(ingredient);
  //   var data = {allowedIngredient: search};
  //   console.log("api request: " + search.join('+'));
  //   $.ajax({
  //     url: 'http://api.yummly.com/v1/api/recipes?_app_id=f4ac9032&_app_key=ec28d82137e2708128a2f7f69400989f&requirePictures=true',
  //     data: data,
  //     success: function(recipeItemArray) {
  //       RecipeActions.addedRecipeItem(ingredient, recipeItemArray['matches']);
  //       $('.loader').removeClass("loader");
  //     }
  //   });
  // },
  // createSingleRecipe: function(recipeId) {
  //   var data = {_app_id: 'f4ac9032', _app_key: 'ec28d82137e2708128a2f7f69400989f'}
  //   $.ajax({
  //     url: 'http://api.yummly.com/v1/api/recipe/' + recipeId,
  //     data: data,
  //     success: function(singleRecipeItem) {
  //       RecipeActions.addedSingleRecipe(singleRecipeItem);
  //     }
  //   });
  // },
  // createRecipeSearch: function(searchString){
  //   var data = {q: searchString};
  //   console.log("api request: " + searchString);
  //   $.ajax({
  //     url: 'http://api.yummly.com/v1/api/recipes?_app_id=f4ac9032&_app_key=ec28d82137e2708128a2f7f69400989f&requirePictures=true',
  //     data: data,
  //     success: function(recipeItemArray) {
  //       RecipeActions.addedRecipeItem(searchString, recipeItemArray['matches']);
  //       $('.loader').removeClass("loader");
  //     }
  //   });
  // }
};

// RecipeActions = require('../actions/recipeActions');
