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
var cryptozoology = new Word ("cryptozoology", "A strange field of study...", 5);
var selkie = new Word ("selkie", "Is she a seal?", 4);
var vim = new Word ("vim", "--and vigor!", 3);