/*
 * Pick from alphabet keypad. Returns the letter chosen.
 */
$("#alphabet-keypad").on("click", ".letter-button", pickLetter);

function pickLetter() {
  var letterPicked = $(this);
  
  letterPicked
    .removeClass("letter-button")
    .addClass("letter-disabled");

  letterPicked = letterPicked.html();
  handlePickedLetter(letterPicked);
}

function handlePickedLetter(letterPicked) {
  var resultMatches = [];
  var ind = currentWord.indexOf(letterPicked.toUpperCase());

  // if letterPicked matches one or more letters in the current word
  // push all instances of that letter to resultMatches
  while (ind !== -1) {
    resultMatches.push(ind);
    ind = currentWord.indexOf(letterPicked.toUpperCase(), ind + 1);
  }

  //if resultMatches is greater than 0 proceed to place them in the dom
  if (resultMatches.length > 0) {
    var letterBlocks = document.getElementsByClassName("is-letter");
    resultMatches.map(function(num) {

      var domElem = document.createElement("span");
      domElem.innerHTML = currentWordFull[num].toUpperCase();
      letterBlocks[num].appendChild(domElem);
    });
  } else {
    //if letterBlock is not greater than 0 put the letter in the graveyard
    var domElem = document.createElement("div");
    domElem.className = "grave-letter";
    domElem.innerHTML = letterPicked;
    document.getElementById("letter-graveyard").appendChild(domElem);
    hangmanGraphic.addBodyPart();
  }
}


/*
 * Hangman graphic with methods addBodyPart() and reset()
 */
var hangmanGraphic = function () {
  var bodyParts = 0,
      maxParts = 7;

  return {
    addBodyPart : function () {
      if (bodyParts < maxParts) {
        ++bodyParts;
        $("#hangman-frame" + bodyParts).css("opacity", 1);
      }
    },

    reset : function () {
      $(".hangman-frames").css("opacity", 0);
      $("#hangman-frame0").css("opacity", 1);
      bodyParts = 0;
    }
  };
}();

// Next 2 lines will be refactored into interface for
//   losing a life and reseting the game
$("#lose-life").on("click", hangmanGraphic.addBodyPart);
$("#reset").on("click", hangmanGraphic.reset);


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
  var num = Math.floor(Math.random() * (array.length - 1));
  var word = array[num];
  return word;
}

var currentWordFull = easyArray[47];//IMPORTANT: replace the number with wordSelect (the function) for production use

//set an all upper case version of the current word
var currentWord = currentWordFull.toUpperCase();

//creates blocks in the DOM indicating where there are letters and spaces
currentWord.split("").map(function(character) {
  var guessWordBlock = document.getElementById("word-to-guess");

  var domElem = document.createElement("div");

  if (character.match(/[a-z]/i)) {
    domElem.className = "character-block is-letter";

  } else {
    domElem.className = "character-block";

  }

  guessWordBlock.appendChild(domElem);
});