document.addEventListener("DOMContentLoaded", function(){

  var formElement = document.querySelector("[data-js='form']");

  var xhr = new XMLHttpRequest();

  xhr.open("GET", "http://json-data.herokuapp.com/forms");
  //  console.log(xhr);
  xhr.addEventListener("load", function(e){
  // create variable to this.response to look up and take info
    var xhrData = this.response;
  // Made a parsed variable referenced to JSON
    var JSONData = JSON.parse(xhrData);
  // Established my palceholder
    var formPlaceholder = "";
  // Created my for loop statement
    for (var i = 0; i < JSONData.length; i++) {
      var inputData = JSONData[i];
      var inputTypeHTML = `<label>${inputData.label}</label><input type="${inputData.type}" id="${inputData.id}" icon="${inputData.icon}">
      `;
  console.log(inputData);
    // concatenate inputHTML to placeholder HTML
      formPlaceholder += inputTypeHTML;
    // Find a way to loop through the data again to pull selector from the data
    // create a placeholder for it
    // reassign?? or concat with inputTypehtml?? Not too sure about this step
    // Since we have the selector, we need options
    // Create another loop to go through options of 'Language'
    // Create a placeholder again?? Then inject into inputTypeHTML??



    }
    // So put my formPlaceholder into my formElement
    formElement.innerHTML += formPlaceholder;
  })
  xhr.send();
})
