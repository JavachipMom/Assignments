// PART 0: Write a function called squareDance() that squares each number in an array.

function squareDance(numbersArrays){
  // var squaredNumber Math.pow(numbersArrays[1], 2);
  for(var i = 0; i < numbersArrays.length; i++){
    var currentNumber = numbersArrays[i];
    numbersArrays[i] = Math.pow(currentNumber, 2);
  }
  return numbersArrays;
}

console.assert(squareDance([1, 2])[1] === 4)
console.assert(squareDance([5,10,15])[2] === 225)
console.assert(squareDance([3,6,9,3])[0] === 9)

// PART 1: write a function called nicer(). It should clean up the language in its input sentence.
function nicer(sentence){
  var sentenceArray = sentence.split(" ");
    // currentWord = sentenceArray[i] This didn't work the way I thought it would
  // Haven't figured out what comes first so I tabbed for()
    for (var i = 0; i < sentenceArray.length; i++) {
      var currentWord = sentenceArray[i];
      if(currentWord == "heck" || currentWord == "darn" || currentWord == "crappy" || currentWord == "dang"){
        //i want to remove the word 'heck'
        sentenceArray.splice(i, 1);
      }
    }
    var sentence = sentenceArray.join(" ");
    // console.log(sentenceArray);
  return sentence;
}

console.assert(nicer("dad get the heck in here and bring me a darn sandwich.") === "dad get the in here and bring me a sandwich.")

console.assert(nicer("here son, your crappy sandwich is on the dang plate.") === "here son, your sandwich is on the plate.")

// PART 2: write a function called capitalizeAll(). It should take as input a sentence and capitalize the first letter of every word in the sentence.
//
function capitalizeAll(sentence){
  var sentenceArray = sentence.split(" ");
  // We want to capitalize the first letter of 'every'
  for (var i = 0; i < sentenceArray.length; i++) {
    var wordArray = sentenceArray[i].split("");

    var capitalizeLetter = wordArray[0].toUpperCase();
    wordArray[0] = capitalizeLetter;
    var joindedWord = wordArray.join("");

    sentenceArray[i] = joindedWord;
  }
  var joindedSentence = sentenceArray.join(" ")
  return joindedSentence;
}
console.assert(capitalizeAll('every day is like sunday.') === 'Every Day Is Like Sunday.')

// PART 3: write a function called properSentences(). It should take as input a string and capitalize the first letter of every sentence in that string. (For our purposes, all sentences will end with periods. Write one that works with ? and ! and receive a gratifying high five, right on the hand!)

var paragraph = 'it was a fine morning. the wine was good. light slanted in through the cafe window.'
// First write function properSentences
function properSentences(string){
  var sentenceArray = string.split(". ");
  for(i = 0; i < sentenceArray.length; i++){
    // This one if statement is a little confusing with the -1, I don't understand it very much. Is this saying your taking away 1 index from the array??

    if(i !== sentenceArray.length - 1){
      sentenceArray[i] = sentenceArray[i].charAt(0).toUpperCase() + sentenceArray[i].slice(1) + ". ";
    } else {
      sentenceArray[i] = sentenceArray[i].charAt(0).toUpperCase() + sentenceArray[i].slice(1);
    }

  }
  sentenceArray = sentenceArray.join("");

  return sentenceArray;
}
// Take our string and turn into array.

console.assert(properSentences(paragraph) === "It was a fine morning. The wine was good. Light slanted in through the cafe window.")

// PART 4: write a function called iPutTheFunIn(). It should take a string as input. The output should be a copy of the original string with the word 'fun' inserted into the center of the string.
// Created function iPutTheFunIn() and made my argument "string"
function iPutTheFunIn(string){
  // Create a variable for the first slice
  var firstSlice = "";
  // Create a variable for the second slice
  var secondSlice = "";
  // Create a variable for the new word
  var newWord = "";
  //
  firstSlice = string.slice(0,string.length/2);
  //
  secondSlice = string.slice(string.length/2);
  //
  newWord = firstSlice + "fun" + secondSlice;
  // return the "newWord" value
  return newWord;
}

console.assert(iPutTheFunIn("funerary") === "funefunrary")
console.assert(iPutTheFunIn("reds") === "refunds")

// PART 5: write a function called pipeline(). it should take three inputs: (1) a starting value, (2) a function, and (3) another function. it should use functions (2) and (3) on the starting value, one after the other, and return a new value that has been processed by both function (2) and function (3).

// Write the function pipeline()
function pipeline(value, function1, function2){

  return function2(function1(value));
}
// the following three tests all correspond to the pipeline() function.

// test 1
var paragraph = 'mom bring your crappy self in here. i want a dang sandwich.'

console.assert(pipeline(paragraph,nicer,properSentences) === "Mom bring your self in here. I want a sandwich.")

// test 2
var squareNum = function(n){
    return n * n
}

var addOne = function(n) {
    return n + 1
}

console.assert(pipeline(7,squareNum,addOne) === 50)

// test 3
var exclaimAll = function(arr) {
    var newArr = []
    for (var i = 0; i < arr.length; i ++) {
        newArr.push(arr[i] + '!')
    }
  return newArr;
}

var result = pipeline([10,20,30],squareDance,exclaimAll)
console.assert(result[1] === "400!")
console.assert(result[2] === "900!")
