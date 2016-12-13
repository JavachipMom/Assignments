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
    // for (var i = 0; i < inputTypeHTML.length; i++) {
    //   var selectData = inputTypeHTML[4];
    //
    // }
      // concatenate inputHTML to placeholder HTML
      formPlaceholder += inputTypeHTML;

    }
    // So put my formPlaceholder into my formElement
    formElement.innerHTML += formPlaceholder;
  })
  xhr.send();
})
