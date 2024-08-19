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

const menuButton = document.querySelector(".mobile-menu-button");
const mobileMenu = document.querySelector(".mobile-menu");
const menuIcon = document.querySelector(".menu-icon");
const xIcon = document.querySelector(".x-icon");

menuButton.addEventListener("click", () => {
	mobileMenu.classList.toggle("hidden");
	menuIcon.classList.toggle("hidden");
	xIcon.classList.toggle("hidden");
});

document.addEventListener("scroll", function () {
	const element = document.querySelector(".fade-in-up");
	const rect = element.getBoundingClientRect();

	if (rect.top < window.innerHeight && rect.bottom > 0) {
		element.classList.remove("opacity-0");
	}
});
