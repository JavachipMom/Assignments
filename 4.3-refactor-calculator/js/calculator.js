// Pull jQuery in to my JavaScript with NPM
var $ = require("jquery");
// Get my DOM ready with jQuery
console.log("something works!!");
$(function(){
  // Create my variable to pull my html body over to my js with jQuery
  var $body = $("main__body");
  // Create variable to find form for calculator
  var $form = $body.find("[data-js='calculator']");
  // Create a variable for my clear button
  var $clear = $body.find("[data-js='button__clear']");
  // Create a variable for the output 'display__value'
  var  $outputNumberElement = $body.find("[data-js='display__value']");
  // Create a variable for my number elements 1-9
  var $numberElement = $body.find("[data-js='number']");
  //
})
