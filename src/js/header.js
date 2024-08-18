document.getElementById("toggleButton").addEventListener("click", function () {
	var moreText = document.getElementById("moreText");
	var icon = document.getElementById("toggleIcon");
	var button = document.getElementById("toggleButton");

	if (moreText.classList.contains("hidden")) {
		moreText.classList.remove("hidden");
		// Ajouter la classe qui fait pivoter la flèche vers le haut
		button.classList.add("rotate-180");
	} else {
		moreText.classList.add("hidden");
		// Retirer la classe pour remettre la flèche vers le bas
		button.classList.remove("rotate-180");
	}
});
