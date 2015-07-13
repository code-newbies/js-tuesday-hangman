/* For picking letters from alphabet keypad. Returns the
   letter chosen or "already picked"
*/
function pickLetter(letter) {
  "use strict";
  var result;

  if (letter.className === "letter-button") {
    result = letter.innerHTML;
    letter.className = "letter-disabled";
  } else {
    result = "already picked";
  }

  console.log(result);    // for testing, remove later
  return result;
}


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

var easyArray = hangmanWords.filter(function(word){
  return word.length <= 4;
});

var hardArray = hangmanWords.filter(function(word){
  return word.length > 4;
});

var lettersToGuess = [];

function wordSelect (array) {
    var num = Math.floor(Math.random() * array.length);
    var word = array[num];
    var wordToGuess = word.toUpperCase();
// splits the word array into an array of letters //
    lettersToGuess.push(wordToGuess.split(""));
    return lettersToGuess;
}
// make the selected words appear in the puzzle-box section; can probably be condensed/combined //
/* right now they feed to one span item; should rework to make each individual letter an item?
or somehow show letter spaces? */

var easyPuzzle = document.getElementById("easy-puzzle");
easyPuzzle.addEventListener("click", function() {
    wordSelect(easyArray);
    for (i = 0; i < lettersToGuess.length; i++) {
        $('.letter-space').empty();
        $('.letter-space').append(lettersToGuess[i]);
      };
});
var hardPuzzle = document.getElementById("hard-puzzle");
hardPuzzle.addEventListener("click", function() {
    wordSelect(hardArray);
    for (i = 0; i < lettersToGuess.length; i++) {
// clears section of old word before adding in new word when button pressed a 2nd time //
        $('.letter-space').empty();
        $('.letter-space').append(lettersToGuess[i]);
      };
});
// still need to make letters invisible, then visible when function pickLetter matches //
