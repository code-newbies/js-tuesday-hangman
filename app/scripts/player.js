//constructor to create player instance, which represents the current player
function player() {
  this.score = 0;
  this.isAlive = true;
  
  //score up function, checks if user selected write letter, score increments by number of present letters in word
  this.scorePlayer = function(letter,word) {
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
  };
  
   //double score if instant finish guess is right
   this.doubleScore = function(wordGuessed,word) {
    var wordCaps = word.toUpperCase();
    this.score = wordCaps.length;
    this.score = this.score * 2;
    return this.score;
  };
  
	//sudden death if instant finish guess is wrong
    this.suddenDeath = function(wordGuessed,word) {
      this.score = 0;
      this.isAlive = false;
      return this.score;
  };
  
};
