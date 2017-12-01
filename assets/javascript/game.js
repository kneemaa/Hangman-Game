var wordList = ["elmo","grover","big bird","mr snuffleupagus","count von count","kermit the frog","bert","ernie","cookie monster","oscar the grouch"];
var userGuessList = [];
var userGuessPrint = ""
var remainingGuesses = 9;

var guessesRemainingElement = document.getElementById("guessesRemaining");
var characterLinesElement = document.getElementById("characterLines");
var hintElement = document.getElementById("hint");
var guessedLettersElement = document.getElementById("guessedLetters");

window.onclick = function () {


	//select random word
	var listPosition = Math.floor((Math.random() * wordList.length));
	var selectedWord = wordList[listPosition];
	var alphabet = "abcdefghijklmnopqrstuvwxyz";

	//list out the blanks
	

	//accept guesses
	document.onkeyup = function(event) {
		var userGuess = event.key;
		var guessCheck = selectedWord.includes(userGuess);
		var characterCheck = alphabet.includes(userGuess);
		var keystroke = 0;
		
		userGuessList.push(userGuess);
		
		if ((guessCheck = true) && (characterCheck = true)){
			validityCheck = true; 
		} else {
			validityCheck = false;
		}

		if (userGuessList.indexOf(userGuess) > -1 ){
			var usedLetterCheck = true;
		} else {
			var usedLetterCheck = false;
		}



		if (validityCheck === true) {

		} else {
			//if letter hasn't been guessed - lower count and add to the list
			if (usedLetterCheck === false ) {
				remainingGuesses = remainingGuesses - 1;
			} 
			//if letter has been guessed don't do anything
			else { 
			}
		}
		
		console.log(guessCheck);
		console.log(userGuess);
		console.log(userGuessList);
		console.log(remainingGuesses);
		console.log(selectedWord);
		console.log(userGuessPrint);

		guessedLettersElement.textContent = "Letters Guessed: " + userGuessList;
		/*guessesRemainingElement.textContent = "Number of guesses remaining: " + remainingGuesses;*/


	}

	//compare guesses



	//test output


}