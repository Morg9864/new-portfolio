function sendMail() {
	let gender = document.querySelector('input[name="gender"]:checked');
	let firstname = document.getElementById("firstname").value;
	let lastname = document.getElementById("lastname").value;
	let email = document.getElementById("email").value;
	let reason = document.getElementById("reason").value;
	let message = document.getElementById("message").value;

	clearErrors();

	let hasError = false;

	if (!firstname) {
		displayError("firstname-error", "Le prénom est requis.");
		hasError = true;
	}

	if (!lastname) {
		displayError("lastname-error", "Le nom est requis.");
		hasError = true;
	}

	if (!email) {
		displayError("email-error", "L'adresse e-mail est requise.");
		hasError = true;
	} else if (!validateEmail(email)) {
		displayError(
			"email-error",
			"Veuillez entrer une adresse e-mail valide."
		);
		hasError = true;
	}

	if (!gender) {
		displayError("gender-error", "La civilité est requise.");
		hasError = true;
	}

	if (!reason) {
		displayError("reason-error", "Veuillez sélectionner une raison.");
		hasError = true;
	}

	if (!message) {
		displayError("message-error", "Un message est requis.");
		hasError = true;
	} else if (message.length < 10) {
		displayError(
			"message-error",
			"Le message doit contenir au moins 10 caractères."
		);
		hasError = true;
	}

	if (hasError) {
		return;
	}

	let params = {
		firstname: firstname,
		lastname: lastname,
		email: email,
		gender: gender.value,
		reason: reason,
		message: message,
	};

	let { loadingSpinner, sendButton } = showLoadingSpinner();

	emailjs.send("service_80o021q", "template_mxnf9kn", params).then(
		function (response) {
			let successAlert = document.getElementById("success-alert");
			showNotification(successAlert);

			hideLoadingSpinner(loadingSpinner, sendButton);

			setTimeout(() => {
				successAlert.classList.add("hidden");
				successAlert.classList.remove("flex");
			}, 5000);
			document.getElementById("contact-form").reset();
		},
		function (error) {
			let errorAlert = document.getElementById("error-alert");
			showNotification(errorAlert);

			hideLoadingSpinner(loadingSpinner, sendButton);

			setTimeout(() => {
				errorAlert.classList.add("hidden");
				errorAlert.classList.remove("flex");
			}, 5000);
			document.getElementById("contact-form").reset();
		}
	);
}

function displayError(elementId, message) {
	const errorElement = document.getElementById(elementId);
	errorElement.textContent = message;
	errorElement.classList.remove("hidden");
}

function clearErrors() {
	const errorElements = document.querySelectorAll(".text-red-500");
	errorElements.forEach(element => {
		element.textContent = "";
		element.classList.add("hidden");
	});
}

function validateEmail(email) {
	const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return re.test(String(email).toLowerCase());
}

function showNotification(statusAlert) {
	statusAlert.classList.remove("hidden");
	statusAlert.classList.add("flex");
}

function hideLoadingSpinner(loadingSpinner, sendButton) {
	loadingSpinner.classList.add("hidden");
	loadingSpinner.classList.remove("flex");

	sendButton.classList.remove("hidden");
	sendButton.classList.add("block");
}

function showLoadingSpinner() {
	let loadingSpinner = document.getElementById("loading");
	loadingSpinner.classList.remove("hidden");
	loadingSpinner.classList.add("flex");

	let sendButton = document.getElementById("send");
	sendButton.classList.add("hidden");
	return { loadingSpinner, sendButton };
}
