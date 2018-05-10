easyGame.addEventListener("click", function() {
	hintDisplay.style.display = "block";
	bankDisplay.style.display = "block";
	wrongDisplay.style.display = "block";
	displayBanks[0].style.display = "block";
	displayBanks[1].style.display = "block";
});

normalGame.addEventListener("click", function() {
	hintDisplay.style.display = "none";
	bankDisplay.style.display = "block";
	wrongDisplay.style.display = "block";
	displayBanks[0].style.display = "block";
	displayBanks[1].style.display = "block";
});

hardGame.addEventListener("click", function() {
	hintDisplay.style.display = "none";
	bankDisplay.style.display = "none";
	wrongDisplay.style.display = "none";
	displayBanks[0].style.display = "none";
	displayBanks[1].style.display = "none";
});