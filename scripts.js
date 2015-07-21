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
$(document).on('click', '#make-puzzle', function() {

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
      ],
    // function to filter word difficulty level by length of word
    word = hangmanWords[Math.floor(Math.random() * ((hangmanWords.length-1) - 0 + 1)) + 0],
    wordToGuess = word.toUpperCase(),
    // splits the word array into an array of letters //
    lettersToGuess = wordToGuess.split(""),
    blankLetters = '',
    wordBox = $('#puzzle-box');

  // empty old word out of puzzle-box div when button clicked to create a new puzzle
  wordBox.empty();

  for (i = 0; i < lettersToGuess.length; i++) {
      blankLetters += "<span class='letter-style'><span class='letter-hide'>" + lettersToGuess[i] + "</span> </span>";
    }

  // append new word to empty word bo
  wordBox.append(blankLetters);
  
});

//function for when they select the right letter
$('.right-answer').on('click', function() {
$('span.letter-hide').addClass('letter-show');
});
