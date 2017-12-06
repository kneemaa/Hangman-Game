var wordList = ["elmo","grover","big bird","mr snuffleupagus","count von count","kermit the frog","bert","ernie","cookie monster","oscar the grouch"];
var userGuessPrint = "";
var letterToPrint = "";
var guessesRemainingElement = document.getElementById("guessesRemaining");
var characterLinesElement = document.getElementById("characterLines");
var hintElement = document.getElementById("hint");
var guessedLettersElement = document.getElementById("guessedLetters");
var imageLinks = {
	"elmo": "elmo.jpg",
	"grover": "grover.jpg",
	"big bird": "bigBird.jpg",
	"mr snuffleupagus": "mrSnuffleupagus.jpg",
	"count von count": "countVonCount.png",
	"kermit the frog": "kermitTheFrog.jpg",
	"bert": "bert.png",
	"ernie": "ernie.png",
	"cookie monster": "cookieMonster.jpg",
	"oscar the grouch": "oscarTheGrout.jpg"};


window.onclick = function () {
	var blankHint = "";
	var userGuessList = [];
	var remainingGuesses = 9;
	//select random word
	var listPosition = Math.floor((Math.random() * wordList.length));
	var selectedWord = wordList[listPosition];
	var alphabet = "abcdefghijklmnopqrstuvwxyz";

	for (i = 0; i < selectedWord.length; i++) {
		letterToPrint = selectedWord.charAt(i);
		if ($.inArray(letterToPrint, userGuessList) != -1){
			blankHint += letterToPrint;
		} else if (letterToPrint === " ") {
			blankHint += "\xa0";
		} else {
			blankHint += " _ ";
		}
	}
	var imageToGet = imageLinks[selectedWord];

	hintElement.innerHTML = "<img src='./assets/images/"+imageToGet+"' class='img-rounded' alt='"+selectedWord+"'></img>";
	
	characterLinesElement.textContent = blankHint;
	guessedLettersElement.textContent = "Letters Guessed: " + userGuessList;
	guessesRemainingElement.textContent = "Guesses Remaining: \xa0\xa0\xa0\xa0" + remainingGuesses;
	
	document.onkeyup = function(event) {
		var userGuess = event.key;
		userGuess = userGuess.toLowerCase();
		var guessCheck = selectedWord.includes(userGuess);
		var characterCheck = alphabet.includes(userGuess);
		var keystroke = 0;
		var hasLetterBeenGuessed;
		blankHint = "";

		if (userGuessList.indexOf(userGuess) > -1 && characterCheck === true){
			hasLetterBeenGuessed = true;
		} else if (characterCheck === true){ 
			hasLetterBeenGuessed = false;
			userGuessList.push(userGuess);
		}

		if ((guessCheck === true) && (characterCheck === true)){
			console.log ("I GUESSED RIGHT");
		} else {
			if (hasLetterBeenGuessed === false ) {
				remainingGuesses = remainingGuesses - 1;
			} 
			else { 
			}
		}

		for (i = 0; i < selectedWord.length; i++) {
			letterToPrint = selectedWord.charAt(i);
			if ($.inArray(letterToPrint, userGuessList) != -1){
				blankHint += letterToPrint;
			} else if (letterToPrint === " ") {
				blankHint += "\xa0";
			} else {
				blankHint += " _ ";
			}
		}
		characterLinesElement.textContent = blankHint
		guessedLettersElement.textContent = "Letters Guessed: " + userGuessList;
		guessesRemainingElement.textContent = "Guesses Remaining: \xa0\xa0\xa0\xa0" + remainingGuesses;


	}


}