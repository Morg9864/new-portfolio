document.addEventListener("DOMContentLoaded", function () {
	const accordions = document.querySelectorAll('[data-accordion="collapse"]');

	accordions.forEach((accordion) => {
		const buttons = accordion.querySelectorAll(
			"button[data-accordion-target]"
		);

		buttons.forEach((button) => {
			button.addEventListener("click", function () {
				const target = document.querySelector(
					button.getAttribute("data-accordion-target")
				);
				const isExpanded =
					button.getAttribute("aria-expanded") === "true";

				// Toggle current accordion
				button.setAttribute("aria-expanded", !isExpanded);
				target.classList.toggle("hidden");

				// Optionally, close other open accordions
				if (!isExpanded) {
					buttons.forEach((otherButton) => {
						if (otherButton !== button) {
							const otherTarget = document.querySelector(
								otherButton.getAttribute(
									"data-accordion-target"
								)
							);
							otherButton.setAttribute("aria-expanded", "false");
							otherTarget.classList.add("hidden");
						}
					});
				}
			});
		});
	});
});
