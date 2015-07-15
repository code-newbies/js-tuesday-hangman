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
  } else {
    //if the buttons is disabled it logs this
    result = "already picked";
  }

  console.log(result);// for testing, remove later
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

//creates an array of easy words (difficulty based on word length)
var easyArray = hangmanWords.filter(function(word){
  return word.length <= 4;
});

//creates an array of hard words (difficulty based on word length)
var hardArray = hangmanWords.filter(function(word){
  return word.length > 4;
});

//picks out a word in the "hangmanWords" array and returns it
function wordSelect (array) {
  var num = Math.floor(Math.random() * array.length);
  var word = array[num];
  return word;
}
