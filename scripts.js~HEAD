// adding dictionary and word filter //
var hangmanWords = [
  "the","of","and","a","to","in","is","you","that","it","he",
   "was","for","on","are","as","with","his","they","i","at","be",
   "this","have","from","or","one","had","by","word","but","not",
   "what","all","were","we","when","your","can","said","there",
   "use","an","each","which","she","do","how","their","if","will",
   "up","other","about","out","many","then","them","these","so",
   "some","her","would","make","like","him","into","time","has",
   "look","two","more","write","go","see","number","no","way",
   "could","people","my","than","first","water","been","call",
   "who","oil","its","now","find","long","down","day","did","get",
   "come","made","may","part"
];

//creates an array of easy words (difficulty based on word length)
var easyArray = hangmanWords.filter(function(word){
  return word.length <= 4;
});

//creates an array of hard words (difficulty based on word length)
var hardArray = hangmanWords.filter(function(word){
  return word.length > 4;
});
//sets the word to be guessed
var currentWordFull = easyArray[47],//IMPORTANT: replace the number with wordSelect (the function) for production use
//set an all lower case version of the current word
    currentWord = currentWordFull.toLowerCase();

//creates blocks in the DOM indicating where there are letters and spaces
currentWord.split("").map(function(elem) {
  var guessWordBlock = document.getElementById("word-to-guess");

  var domElem = document.createElement("div");

  if(elem.match(/[a-z]/i)) {
    domElem.className = "character-block is-letter";
  } else {
    domElem.className = "character-block";
  }

  guessWordBlock.appendChild(domElem);
});

/* For picking letters from alphabet keypad. Returns the
   letter chosen or "already picked"
*/
function pickLetter(letter) {
  "use strict";
  var result;
  //checks if the class name is still a button or not
  if (letter.className === "letter-button") {
    //if it's still a button it returns the letter
    //then disables the button
    result = letter.innerHTML;
    letter.className = "letter-disabled";

    //calls this function to deal with where the letter goes
    handlePickedLetter(result);
  } else {
    //if the buttons is disabled it logs this
    result = "already picked";
  }
  // for testing, remove later
  console.log(result);
}

//picks out a word in the "hangmanWords" array and returns it
function wordSelect (array) {
  var num = Math.floor(Math.random() * array.length - 1);
  var word = array[num];
  return word;
}

function handlePickedLetter(result) {
  var resultMatches = [];
  var ind = currentWord.indexOf(result.toLowerCase());

  //if result matches one or more letters in the current word
  //push all instances of that letter to resultMatches
  while (ind !== -1) {
    resultMatches.push(ind);
    ind = currentWord.indexOf(result.toLowerCase(), ind + 1);
  }

  //if resultMatches is greater than 0 proceed to place them in the dom
  if(resultMatches.length > 0) {
    var letterBlocks = document.getElementsByClassName("is-letter");
    resultMatches.map(function(num) {
      
      var domElem = document.createElement("span");
      domElem.innerHTML = currentWordFull[num];      
      letterBlocks[num].appendChild(domElem);
    });
  } else {
    //if letterBlock is not greater than 0 put the letter in the graveyard
    var domElem = document.createElement("div");
    domElem.className = "grave-letter";
    domElem.innerHTML = result;
    document.getElementById("graveyard").appendChild(domElem);
  }
}