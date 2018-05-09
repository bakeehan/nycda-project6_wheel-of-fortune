var gameScore = 0;
var progress = [];
var current = [];
var bank = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wrong = [];


function stageGame (word, index) {
	for (i=0;i<word.array.length;i++) {
		progress.push("_");
	} // stages PROGRESS array
	words.splice(index, 1);
	// removes current word from WORDS array
	for (i=0;i<progress.length;i++) {
		progressDisplay.innerHTML += progress[i];
	}
	// updates+shows PROGRESS in window
	hintDisplay.innerHTML = word.hint;
	scoreDisplay.innerHTML = gameScore;
	// shows initial SCORE in window
	bankDisplay.innerHTML = bank;
	wrongDisplay.innerHTML = wrong;
	// shows alphabet BANKS in window
	current = word;
	// updates CURRENT array for testing
	console.log(word.word);
	// for testing and/or cheating
}


function checkWin () {
	if (progress.includes("_") == false) {
		gameScore += current.value;
		playGame(Math.floor(Math.random()*words.length));
		// starts new GAME
		// NOTE TO SELF THIS WILL BE BE TIED TO A CLICK NOT AUTOMATIC
	}
}

function testKey (letter) {
	if (current.array.includes(letter)) {
		for (i=0; i<current.array.length;i++) {
			if (current.array[i] == letter) {
				progress[i] = letter;
			}
		}
		// updates PROGRESS to include correct guesses
		progressDisplay.innerHTML = "";
		for (i=0;i<progress.length;i++) {
			progressDisplay.innerHTML += progress[i];
		}
		// updates PROGRESS in window
		bank.splice(bank.indexOf(letter), 1)
		bankDisplay.innerHTML = bank;
		// updates and shows BANK array
		checkWin();
	} else {
		gameScore -= 1;
		scoreDisplay.innerHTML = gameScore;
		// updates GAMESCORE
		wrong.push(letter);
		wrongDisplay.innerHTML = wrong;
		// updates and shows WRONG array
		bank.splice(bank.indexOf(letter), 1)
		bankDisplay.innerHTML = bank;
		// updates and shows BANK array
	}
}


function playGame (index) {
	if (words.length > 0) {
		progress = [];
		progressDisplay.innerHTML = "";
		bank = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
		wrong = [];
		stageGame(words[index], index);
	} else if (gameScore > 5) {
		gameDisplay.innerHTML = gameScore + " points! You win!";
	} else {
		gameDisplay.innerHTML = "Only " + gameScore + " points? :(";
	}
}

playGame(Math.floor(Math.random()*words.length));