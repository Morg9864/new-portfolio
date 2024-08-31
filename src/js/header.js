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