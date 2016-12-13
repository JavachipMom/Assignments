document.addEventListener("DOMContentLoaded", function(){

  var formData = document.querySelector("[data-js='form']");

  var xhr = new XMLHttpRequest();

   xhr.open("GET", "http://json-data.herokuapp.com/forms");
  //  console.log(xhr);
   xhr.addEventListener("load", function(e){

     var xhrData = this.response;
     var JSONData = JSON.parse(xhrData);
     console.log(JSONData);
   })
  xhr.send();
})
