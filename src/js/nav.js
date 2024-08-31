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


console.log("header.js chargé");