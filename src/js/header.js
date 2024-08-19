document.getElementById("toggleButton").addEventListener("click", function () {
	var moreText = document.querySelectorAll(".moreText");
	var icon = document.getElementById("toggleIcon");
	var button = document.getElementById("toggleButton");

	if (moreText.length > 0) {
		moreText.forEach(function (text) {
			if (text.classList.contains("hidden")) {
				text.classList.remove("hidden");
				button.classList.add("rotate-180");
			} else {
				text.classList.add("hidden");
				button.classList.remove("rotate-180");
			}
		});
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
