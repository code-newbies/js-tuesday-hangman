/*
 * Pick from alphabet keypad. Returns the letter chosen.
 */
$("#alphabet-keypad").on("click", ".letter-button", pickLetter);

function pickLetter() {
  var letterChosen = $(this);
  
  letterChosen
    .removeClass("letter-button")
    .addClass("letter-disabled");

  // Next two lines to be refactored into interface for
  //   checking if the letter is in the word.
  
  letterChosen = letterChosen.html();
  
  verify(letterChosen);
}

// placeholder for verifying the letter
function verify(letter) {
  console.log(letter);
}


/*
 * Hangman Object with methods loseLife() and reset()
 */
var hangmanObject = function () {
  var livesLost = 0,
			maxLife = 7;
  
  return {
    loseLife : function () {
      if (livesLost < maxLife) {
        ++livesLost;
        $("#hangman-frame" + livesLost).css("opacity", 1);
      }
    },
    
    isDead : function () {
      return livesLost === maxLife;
    },
		
    reset : function () {
      for (var i = 1; i <= livesLost; ++i) {
        $("#hangman-frame" + i).css("opacity", 0);
      }
      livesLost = 0;
    }
  };
}();

// Next 2 lines will be refactored into interface for
//   losing a life and reseting the game
$("#lose-life").on("click", hangmanObject.loseLife);
$("#reset").on("click", hangmanObject.reset);


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

function wordSelect (array) {
  var num = Math.floor(Math.random() * array.length);
  var word = array[num];
  return word;
}
