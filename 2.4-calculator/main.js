document.addEventListener("DOMContentLoaded", function(){
  var nameButtonElement = document.querySelector("[data-js='button__7']");
  var outputNumberElement = document.querySelector("[data-js='display__value']");
  nameButtonElement.addEventListener("click", function(){
    outputNumberElement.textContent += nameButtonElement.textContent;
    nameButtonElement = document.querySelector("[data-js='button__8']");
    nameButtonElement.addEventListener("click", function(){
    outputNumberElement.textContent += nameButtonElement.textContent;
    nameButtonElement = document.querySelector("[data-js='button__9']");
    nameButtonElement.addEventListener("click", function(){
    outputNumberElement.textContent += nameButtonElement.textContent;
    nameButtonElement = document.querySelector("[data-js='button__4']");
    nameButtonElement.addEventListener("click", function(){
    outputNumberElement.textContent += nameButtonElement.textContent;
    });
      });
    });
  });
})
