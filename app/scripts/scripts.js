(function () {
  "use strict";
  
  // add pickLetter to all buttons on alphabet keypad
  $(".letter-button").on("click", function () {
    pickLetter(this);
  });
  
  // pick a letter from alphabet keypad
  function pickLetter(button) {
    var letterChosen;
    
    if (button.className === "letter-button") {
      letterChosen = button.innerHTML;
      button.className = "letter-disabled";
      
    } else {
      letterChosen = "already picked";
    }
	
    verify(letterChosen);
	}
  
  // currently a placeholder for verifying the letter
  function verify(letter) {
    console.log(letter);
  }
}());