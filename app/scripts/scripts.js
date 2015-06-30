//player object, holds all properties and methods available to the game player. 
var player = {
  score: 0,
  isAlive: true,

  scorePlayer: function(letter,word) {
    var wordCaps = word.toUpperCase();
    
    for (var i = 0; i < wordCaps.length; i++) {
      if (letter.toUpperCase() === wordCaps.charAt(i)) {
        this.score++;
      }
    }
  
  //condition to score down points
  if (wordCaps.indexOf(letter.toUpperCase()) === -1) {
        this.score--;
    }
    
    return this.score;
  },

  doubleScore: function(wordGuessed,word) {
    var wordGuessedCaps = wordGuessed.toUpperCase();
    var wordCaps = word.toUpperCase();

    if(wordGuessedCaps === wordCaps){
      this.score = wordGuessedCaps.length * 2;
    }
    return this.score;
  },

  suddenDeath: function(wordGuessed,word) {
      this.score = 0;
      this.isAlive = false;
      return this.score;
    },

  pickLetter: function pickLetter(letter) {
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
};


//words to be guessed array
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

//easy array returns 4 letter words or less to be guessed
var easyArray = hangmanWords.filter(function(word){
  return word.length <= 4;
});

//hard array returns more than 4 letter words to be guessed
var hardArray = hangmanWords.filter(function(word){
  return word.length > 4;
});

//selects word randomly from array for player to guess
function wordSelect (array) {
  var num = Math.floor(Math.random() * array.length);
  var word = array[num];
  return word;
}

//DOM Manipulation and event handlers for Instant Finish/Sudden Death Button
$("#wordinput").hide();
$("#submit").hide();

$('#instantFinish').click(function(){

  $("#wordinput").show();
  $("#submit").show();

  var word = wordSelect(hardArray);
  console.log(word);

  $("#submit").click(function(){
    console.log("success");
    var wordGuessed = $("#wordinput").val();
    

    if(wordGuessed === word){
      player.doubleScore(wordGuessed,word);
    }else{
      player.suddenDeath(wordGuessed,word);
    }

    alert(player.score);
  }); 

});
