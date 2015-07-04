// add pickLetter to all buttons on alphabet keypad
$(".letter-button").on("click", pickLetter);
  
// pick a letter from alphabet keypad
function pickLetter() {
    var currentLetter = $(this);

    currentLetter.removeClass("letter-button").addClass("letter-disabled");

    // Next two lines to be refactored to the interface for checking if letters are in the word.

    currentLetter = currentLetter.html();

    verify(currentLetter);
}

// currently a placeholder for verifying the letter
function verify(letter) {
    console.log(letter);
}
