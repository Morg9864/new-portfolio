document.querySelectorAll(".toggle-content").forEach((button) => {
	button.addEventListener("click", function () {
		const content = this.nextElementSibling;

		if (content.classList.contains("hidden")) {
			content.classList.remove("hidden");
			this.innerHTML = "Masquer les détails &uarr;";
		} else {
			content.classList.add("hidden");
			this.innerHTML = "Détails...&darr;";
		}
	});
});
