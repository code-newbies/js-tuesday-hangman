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