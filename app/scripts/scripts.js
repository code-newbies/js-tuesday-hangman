(function () {
  "use strict";
  
  // add pickLetter to all buttons on alphabet keypad
  $(".letter-button").on("click", pickLetter);
  
  // pick a letter from alphabet keypad
  function pickLetter() {
    var button = $(this),
        letterChosen;
        
    if (button.attr("class") === "letter-button") {
      letterChosen = button.html();
      disableButton(button);
      
    } else {
      letterChosen = "already picked";
    }
	
    verify(letterChosen);
	}
  
  function disableButton(button) {
    button.removeClass("letter-button").addClass("letter-disabled");
  }
}());

// currently a placeholder for verifying the letter
function verify(letter) {
  console.log(letter);
}