// First I need to make my DOM ready with jQuery in my JavaScript
$(function(){
  // Create my variable to pull my HTML body over to my JavaScript
  var $body = $("body");
  // Created my variables to look for elements in my body of the JavaScript
  var $listForm = $body.find("[data-js='listForm']");
  var $userGiftInput = $body.find("[data-js='userGiftInput']");
  var $addButton = $body.find("[data-js='addButton']");
  var $itemsElement = $body.find("[data-js='items']");
// Add event listener for click and prevent the default of refreshing
$addButton.on("click", function(e){
  e.preventDefault();
// Create a variable for the new article when the button is clicked with the value inside of it
var itemsEntered = $userGiftInput.val();
// Create variables for elements of the event I want to happen when the button is clicked by posting my users items on the list.
// So now I need to split my $itemName and $itemValue apart.
var giftItemArray = itemsEntered.split(",");
// Now I want to make a variable for each index in the array
var giftItemName = giftItemArray[0];
// Now create a variable for the second index in my array
var giftItemPrice = giftItemArray[1];
// Now I need to actually separate my indexes
  var $inputCheckboxElement = $("<input>")
    .attr({
      class: "circle",
      "data-js": "circle",
      type: "checkbox",
      value: ""
    });
  var $inputItemArticle = $("<article>")
    .attr({
      class: "giftItem",
      "data-js": "giftItem",
    });
  var $itemName = $("<p>")
    .attr({
      class: "itemName",
      "data-js": "itemsWanted"
    }).text(giftItemName)
    ;
  var $itemValue = $("<p>")
    .attr({
      class: "value",
      "data-js": "price"
    }).text(giftItemPrice)
    ;
    // Need to take all variables and add to list
  $inputItemArticle
    .append($inputCheckboxElement)
    .append($itemName)
    .append($itemValue)
    ;

    $itemsElement.prepend($inputItemArticle)
  });
})
