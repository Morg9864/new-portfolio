document.getElementById("toggleButton").addEventListener("click", function () {
	const moreText = document.querySelectorAll(".moreText");
	const icon = document.getElementById("toggleIcon");
	const button = document.getElementById("toggleButton");
	const enSavoirPlus = document.getElementById("no-reverse");
	const tldr = document.getElementById("tldr");

	if (moreText.length > 0) {
		moreText.forEach(function (text) {
			if (text.classList.contains("hidden")) {
				text.classList.remove("hidden");
				button.classList.add("rotate-180");
				enSavoirPlus.classList.add("hidden");
				tldr.classList.add("hidden");
			} else {
				text.classList.add("hidden");
				button.classList.remove("rotate-180");
				enSavoirPlus.classList.remove("hidden");
				tldr.classList.remove("hidden");
				// Scroll to "section-about" - 100px
				scroll({
					top: document.getElementById("section-about").offsetTop - 100,
					behavior: "smooth",
				});
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

document.addEventListener("DOMContentLoaded", function () {
	const links = document.querySelectorAll("a");

	for (const link of links) {
		link.addEventListener("click", clickHandler);
	}

	function clickHandler(e) {
		const href = this.getAttribute("href");
		const offsetTop = document.querySelector(href).offsetTop;

		e.preventDefault();

		scroll({
			top: offsetTop - 80,
			behavior: "smooth",
		});
	}
});

document.addEventListener("DOMContentLoaded", function () {
	const links = document.querySelectorAll(".mobile-menu a");

	for (const link of links) {
		link.addEventListener("click", clickHandler);
	}

	function clickHandler(e) {
		const mobileMenu = document.querySelector(".mobile-menu");
		const menuIcon = document.querySelector(".menu-icon");
		const xIcon = document.querySelector(".x-icon");

		mobileMenu.classList.add("hidden");
		menuIcon.classList.remove("hidden");
		xIcon.classList.add("hidden");
	}
});
