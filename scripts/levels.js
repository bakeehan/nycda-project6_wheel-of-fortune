easyGame.addEventListener("click", function() {
	hintDisplay.style.display = "block";
	bankDisplay.style.display = "block";
	wrongDisplay.style.display = "block";
});

normalGame.addEventListener("click", function() {
	hintDisplay.style.display = "none";
	bankDisplay.style.display = "block";
	wrongDisplay.style.display = "block";
});

hardGame.addEventListener("click", function() {
	hintDisplay.style.display = "none";
	bankDisplay.style.display = "none";
	wrongDisplay.style.display = "none";
});