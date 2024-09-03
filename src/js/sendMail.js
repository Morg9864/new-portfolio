function sendMail() {
	let gender = document.querySelector('input[name="gender"]:checked');
	let params = {
		firstname: document.getElementById("firstname").value,
		lastname: document.getElementById("lastname").value,
		email: document.getElementById("email").value,
		gender: gender ? gender.value : "",
		reason: document.getElementById("reason").value,
		message: document.getElementById("message").value,
	};

	emailjs.send("service_80o021q", "template_mxnf9kn", params).then(
		function (response) {
			alert("Email sent with success!");
			document.getElementById("contact-form").reset();
		},
		function (error) {
			alert("Failed to send email. Please try again later.");
			console.log("FAILED...", error)
		}
	);
}
