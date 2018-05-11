var words = [];

function Word (word, hint, value) {
	this.word = word;
	this.array = word.split("");
	this.hint = hint;
	this.value = value;
	this.add = function (obj) {
		words.push(obj);
	}
	this.add (this);
}

var cerulean = new Word ("cerulean", "Like blue, but fancier.", 3);
var popsicle = new Word ("popsicle", "A summer treat!", 1);
var cryptozoology = new Word ("cryptozoology", "A strange field of study...", 4);
var selkie = new Word ("selkie", "Is she a seal?", 3);
var vim = new Word ("vim", "--and vigor!", 5);
var eldritch = new Word ("eldritch", "arcane and otherworldly", 4);
var distinctive = new Word("distinctive", "characteristic", 2);
var armadillo = new Word("armadillo", "What a cute little round suit of armor!", 3);
var lollipop = new Word ("lollipop", "Candy on a stick", 1);
var vaudeville = new Word ("vaudeville", "Old time variety shows",2);
var again = new Word ("again", "Curses! Foiled _____!", 1);
var beau = new Word ("beau", "A Hot Date", 4);
var jazz = new Word ("jazz", "It's swingin'.", 5);