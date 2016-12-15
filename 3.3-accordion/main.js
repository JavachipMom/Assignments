// This is in place of my Event Listener for DOMContent
$(function(){
  // Creating a variable to reference my shows
  var $showElements = $("[data-js='show']");
  // Now I need to create the Event Listener for the click
  $showElements.on("click", function(e){
//Create a variable to reference the clicked show
  var $clickedShow = $(this);
// Use event listener to
  $showElements.filter(".expand").removeClass("expand");

  $clickedShow.addClass("expand");
  });
})
