// So I need to link my javascript with my html
document.addEventListener("DOMContentLoaded", function(){
  // Create a varibale to pull the data-js form over to javascript
  var formElement = document.querySelector("[data-js='form']");
  // Create a variable
  var xhr = new XMLHttpRequest();

  xhr.open("GET", "http://json-data.herokuapp.com/forms");
  //  console.log(xhr);
  xhr.addEventListener("load", function(e){
    // create variable to this.response to look up and take info
    var xhrData = this.response;
    // Made a parsed variable referenced to JSON
    var JSONData = JSON.parse(xhrData);
    //Create other placeholder for all data
    var allFormData = "";
    // Established my form palceholder
    var formPlaceholder = "";
    // Created my for loop statement
    for (var i = 0; i < JSONData.length; i++) {
      var inputData = JSONData[i];
      var inputTypeHTML = `<label>${inputData.label}</label><input type="${inputData.type}" id="${inputData.id}" icon="${inputData.icon}">
      `;
      // concatenate inputHTML to placeholder HTML
      formPlaceholder += inputTypeHTML;
      // Create if statment to pull the selected data options
      if (inputData.type === "select"){
      // Find a way to loop through the data again to pull selector from the data
        inputData.options.forEach(function(optionData){
          // create a placeholder for it
          formPlaceholder += `<option label="${optionData.label}" value="${optionData.value}"</options>;`
          console.log(optionData.value);
        })
      }else if(inputData.type === "text area"){
        formPlaceholder += `<textarea class="textArea" placeholder="  ${inputData.label}" type="${inputData.type}"
        id="${inputData.id}" icon="${inputData.icon}"></textarea>`;
      }
    // reassign?? or concat with inputTypehtml?? Not too sure about this step
    // Since we have the selector, we need options
    // Create another loop to go through options of 'Language'
    // Create a placeholder again?? Then inject into

    allFormData += formPlaceholder;

    }
    // So put my formPlaceholder into my formElement
    formElement.innerHTML += formPlaceholder;
  });
  xhr.send();
});
