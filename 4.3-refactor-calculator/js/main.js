var $ = require("/calculator")
// document.addEventListener("DOMContentLoaded", function(){
  var nameButtonClearElement = document.querySelector("[data-js='button__clear']");
  // var outputNumberElement = document.querySelector("[data-js='display__value']");
    nameButtonClearElement.addEventListener("click", function(){
      outputNumberElement.textContent = "";
    })
  var nameButton7Element = document.querySelector("[data-js='button__7']");
  // var outputNumberElement = document.querySelector("[data-js='display__value']");
  nameButton7Element.addEventListener("click", function(){
    outputNumberElement.textContent += 7;
    });
  var nameButton8Element = document.querySelector("[data-js='button__8']");
  // var outputNumberElement = document.querySelector("[data-js='display__value']");
    nameButton8Element.addEventListener("click", function(){
      outputNumberElement.textContent += 8;
    });
  var nameButton9Element = document.querySelector("[data-js='button__9']");
  // var outputNumberElement = document.querySelector("[data-js='display__value']");
    nameButton9Element.addEventListener("click", function(){
      outputNumberElement.textContent += 9;
    });
  var nameButtonDivElement = document.querySelector("[data-js='button__/']");
  // var outputNumberElement = document.querySelector("[data-js='display__value']");
    nameButtonDivElement.addEventListener("click", function(){
      outputNumberElement.textContent += "/";
    });
  var nameButton4Element = document.querySelector("[data-js='button__4']");
  // var outputNumberElement = document.querySelector("[data-js='display__value']");
    nameButton4Element.addEventListener("click", function(){
      outputNumberElement.textContent += 4;
    });
  var nameButton5Element = document.querySelector("[data-js='button__5']");
  // var outputNumberElement = document.querySelector("[data-js='display__value']");
    nameButton5Element.addEventListener("click", function(){
      outputNumberElement.textContent += 5;
    });
  var nameButton6Element = document.querySelector("[data-js='button__6']");
  // var outputNumberElement = document.querySelector("[data-js='display__value']");
    nameButton6Element.addEventListener("click", function(){
      outputNumberElement.textContent += 6;
    });
  var nameButtonMultiElement = document.querySelector("[data-js='button__*']");
  // var outputNumberElement = document.querySelector("[data-js='display__value']");
    nameButtonMultiElement.addEventListener("click", function(){
      outputNumberElement.textContent += "*";
    });
  var nameButton1Element = document.querySelector("[data-js='button__1']");
  // var outputNumberElement = document.querySelector("[data-js='display__value']");
    nameButton1Element.addEventListener("click", function(){
      outputNumberElement.textContent += 1;
    });
  var nameButton2Element = document.querySelector("[data-js='button__2']");
  // var outputNumberElement = document.querySelector("[data-js='display__value']");
    nameButton2Element.addEventListener("click", function(){
      outputNumberElement.textContent += 2;
    });
  var nameButton3Element = document.querySelector("[data-js='button__3']");
  // var outputNumberElement = document.querySelector("[data-js='display__value']");
    nameButton3Element.addEventListener("click", function(){
      outputNumberElement.textContent += 3;
    });
  var nameButtonMinusElement = document.querySelector("[data-js='button__-']");
  // var outputNumberElement = document.querySelector("[data-js='display__value']");
    nameButtonMinusElement.addEventListener("click", function(){
    outputNumberElement.textContent += nameButtonMinusElement.textContent;
      })
  var nameButton0Element = document.querySelector("[data-js='button__0']");
  // var outputNumberElement = document.querySelector("[data-js='display__value']");
    nameButton0Element.addEventListener("click", function(){
      outputNumberElement.textContent += 0;
    });
  var nameButtonDecimalElement = document.querySelector("[data-js='button__.']");
  // var outputNumberElement = document.querySelector("[data-js='display__value']");
  nameButtonDecimalElement.addEventListener("click", function(){
      outputNumberElement.textContent += ".";
    });
  var nameButtonPlusElement = document.querySelector("[data-js='button__+']");
  // var outputNumberElement = document.querySelector("[data-js='display__value']");
    nameButtonPlusElement.addEventListener("click", function(){
      outputNumberElement.textContent += nameButtonPlusElement.textContent;
    });
  var nameButtonEqualElement = document.querySelector("[data-js='button__=']");
  // var outputNumberElement = document.querySelector("[data-js='display__value']");
    nameButtonEqualElement.addEventListener("click", function(){
      var Equals = eval(outputNumberElement.textContent);
        outputNumberElement.textContent = Equals
      // });
