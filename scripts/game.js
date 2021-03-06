var gameScore = 0;
var progress = [];
var current = [];
var bank = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wrong = [];
var total = words.length;
var possible = 0;
var rounds = 0;
var pointer = "point";

for (i=0;i<words.length;i++) {
	possible += words[i].value;
}

function fillBanks () {
	bankDisplay.innerHTML = "";
	for (i=0;i<bank.length;i++) {
		bankDisplay.innerHTML += bank[i] + " ";
	}
	wrongDisplay.innerHTML = "";
	for (i=0;i<wrong.length;i++) {
		wrongDisplay.innerHTML += wrong[i] + " ";
	}
}


function stageGame (word, index) {
	rounds += 1;
	for (i=0;i<word.array.length;i++) {
		progress.push("_");
	} // stages PROGRESS array
	words.splice(index, 1);
	// removes current word from WORDS array
	for (i=0;i<progress.length;i++) {
		progressDisplay.innerHTML += progress[i];
	}
	// updates+shows PROGRESS in window
	hintDisplay.innerHTML = "<b>hint:</b> " + word.hint;
	roundDisplay.innerHTML = "word " + rounds + " of " + total;
	if (word.value > 1) {pointer += "s";}
	// checks whether "points" should be plural
	valueDisplay.innerHTML =  "worth <b>" + word.value + "</b> " + pointer;
	// ^^^ show HINT, ROUND, and POINT VALUE in window
	scoreDisplay.innerHTML = gameScore;
	// shows initial SCORE in window
	fillBanks();
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

function endCondition(score) {
	gameDisplay.innerHTML = "";
	gameContainer.style.display = "block";
	var end = document.createElement("div");
	end.id="end";
	var over = document.createElement("button");
	over.innerHTML = "Play again?";
	gameDisplay.appendChild(end);
	if (score < 10) {
		end.innerHTML = "<h1>You lose!</h1>";
	} else {
		end.innerHTML = "<h1>You win!</h1>";
	}
	end.innerHTML += "<h3><b>" + score + "</b> out of <b>" + possible + "</b> points.</h3>";
	end.appendChild(over);
	over.addEventListener("click", function(){location.reload();});
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
		if (bank.indexOf(letter) != -1) {
			bank.splice(bank.indexOf(letter), 1)
			fillBanks();
		}
		// updates and shows BANK array
		checkWin();
	} else {
		gameScore -= 1;
		scoreDisplay.innerHTML = gameScore;
		// updates GAMESCORE
		wrong.push(letter);
		bank.splice(bank.indexOf(letter), 1)
		fillBanks();
		// updates and shows BANK array
	}
}


function playGame (index) {
	if (words.length > 0) {
		progress = [];
		progressDisplay.innerHTML = "";
		bank = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
		wrong = [];
		// clears stored TEMP INFO
		stageGame(words[index], index);
	} else {
		endCondition(gameScore);
	}
}

playGame(Math.floor(Math.random()*words.length));

window.addEventListener("keydown", function(event) {
	testKey(event.key);
});