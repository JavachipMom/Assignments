// First I need to make my DOM ready with jQuery in my JavaScript
$(function(){
  // Create my variable to pull my HTML body over to my JavaScript
  var $body = $("body");
  // Created my variables to look for elements in my body of the JavaScript
  var $listForm = $body.find("[data-js='listForm']");
  var $userGiftInput = $body.find("[data-js='userGiftInput']");
  var $addButton = $body.find("[data-js='addButton']");
  var $itemsElement = $body.find("[data-js='items']");
  var $totalPriceElement = $body.find("[data-js='priceAmount']");
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
    }).text("$" + giftItemPrice)
    ;
    // Need to take all variables and add to list
  $inputItemArticle
    .append($inputCheckboxElement)
    .append($itemName)
    .append($itemValue)
    ;
// Added my list of items that need to get put to the top of the list
  $itemsElement.prepend($inputItemArticle)

    var totalPriceString = "";
    var totalPrice = "";
  $itemValue.each(function(itemValue){
      var itemValue = $(".itemValue");
      totalPriceString += itemValue.text();

      var priceInput = totalPriceString;
      var numbers = priceInput.split("$");
      var numberString = numbers.join("+");
      var totalOfEval = eval(numberString);
      totalPrice = totalOfEval;
    })
    $totalPriceElement.text(totalPrice);
  });
  // Now use the click to begin the strikethrough
  $body.on("click", "[data-js='circle']", function(){
    // create my variable to refenrence the function above
    var $this = $(this);
    // add on the class for strikethrough to all siblings elements
    $this.siblings().addClass("strikethrough");
  });
  $body.on("dblclick", "[data-js='giftItem']", function(){
    var $this = $(this);
    $this.get(0).contentEditable = "true";
  });
  $body.on("dblclick", "[data-js='itemValue']", function(){
    var $this = $(this);
    $this.get(0).contentEditable = "true";
  });
})
