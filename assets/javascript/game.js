var wordList = ["elmo","grover","big bird","mr snuffleupagus","count von count","kermit the frog","bert","ernie","cookie monster","oscar the grouch"];
var userGuessList = [];
var userGuessPrint = ""
var remainingGuesses = 9;
var blankHint = "";
var guessesRemainingElement = document.getElementById("guessesRemaining");
var characterLinesElement = document.getElementById("characterLines");
var hintElement = document.getElementById("hint");
var guessedLettersElement = document.getElementById("guessedLetters");

window.onclick = function () {


	//select random word
	var listPosition = Math.floor((Math.random() * wordList.length));
	var selectedWord = wordList[listPosition];
	var alphabet = "abcdefghijklmnopqrstuvwxyz";

/*	//list out the blanks ---Probably not needed, delete later
	var spacesRemoved = selectedWord.split(" ");
	for (i = 0; i < spacesRemoved.length; i++) {
		console.log(spacesRemoved[i]);
	}
*/

	//accept guesses
	document.onkeyup = function(event) {
		var userGuess = event.key;
		userGuess = userGuess.toLowerCase();
		var guessCheck = selectedWord.includes(userGuess);
		var characterCheck = alphabet.includes(userGuess);
		var keystroke = 0;
		var hasLetterBeenGuessed;

		// If the character is in the guessed list and its valid set BeenGuessed to true
		if (userGuessList.indexOf(userGuess) > -1 && characterCheck === true){
			hasLetterBeenGuessed = true;
		} else if (characterCheck === true){ //if the letter is valid but hasn't been guessed, add it the guessed list
			hasLetterBeenGuessed = false;
			userGuessList.push(userGuess);
		}

		//If the guess is inthe word and the character exists in the alphabet the validity Check = True
		if ((guessCheck === true) && (characterCheck === true)){
			/*validityCheck = true; */
			console.log ("I GUESSED RIGHT");
		} else {
			/*validityCheck = false;*/
			//if letter hasn't been guessed - lower count and add to the list
			if (hasLetterBeenGuessed === false ) {
				remainingGuesses = remainingGuesses - 1;
			} 
			//if letter has been guessed don't do anything
			else { 
			}
		}

		for (i = 0; i < selectedWord.length; i++) {
			var letterToPrint = selectedWord.charAt(i);
			
			if ()
			if (letterToPrint !== " ") {
				blankHint = blankHint + "_ ";
			} else {
				blankHint = blankHint + "  ";
			}
		}


		
		console.log("Guess Check " + guessCheck);
		console.log("characterCheck " + characterCheck);
		/*console.log("validityCheck " + validityCheck);*/
		console.log("user guess " + userGuess);
		console.log("guessed characters " + userGuessList);
		console.log("remaining guess count " + remainingGuesses);
		console.log("selected word: " + selectedWord);
		console.log("user guess print " + userGuessPrint);
		/*console.log(spacesRemoved);*/
		console.log(blankHint);
		guessedLettersElement.textContent = "Letters Guessed: " + userGuessList;
		guessesRemainingElement.textContent = "Guesses Remaining: " + remainingGuesses;
		/*guessesRemainingElement.textContent = "Number of guesses remaining: " + remainingGuesses;*/


	}

	//compare guesses



	//test output


}