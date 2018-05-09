var gameScore = 0;
var progress = [];
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
	// shows PROGRESS in window
	scoreDisplay.innerHTML = gameScore;
	// shows initial SCORE in window
}


function playGame (index) {

	stageGame(words[index], index);

}

playGame(Math.floor(Math.random()*words.length));