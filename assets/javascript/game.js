var wordList = ["elmo","grover","big bird","mr snuffleupagus","count von count","kermit the frog","bert","ernie","cookie monster","oscar the grouch"];
var userGuess = "";
var userGuessList = [];
var remainingGuesses = 9;

window.onclick = function () {
	//select random word
	var listPosition = Math.floor((Math.random() * wordList.length));
	var selectedWord = wordList[listPosition];
	var alphabet = "abcdefghijklmnopqrstuvwxyz";

	//list out the blanks
	

	//accept guesses
	document.onkeyup = function(guess) {
		
		var guessCheck = selectedWord.includes(guess);
		var usedLetterCheck = userGuess.includes(guess);
		if (guessCheck === true) {

		}
		else {
			//if letter hasn't been guessed - lower count and add to the list
			if (usedLetterCheck === false ) {
				userGuessList.push(guess);
				remainingGuesses = remainingGuesses - 1;
			} 
			//if letter has been guessed don't do anything
			else { 

			};
		};
	}

	//compare guesses



	//test output
	console.log(userGuess);
	console.log(userGuessList);
	console.log(remainingGuesses);
	console.log(selectedWord);

}