document.addEventListener("DOMContentLoaded", function () {
	const cookieBanner = document.getElementById("cookie-banner");
	const acceptCookiesBtn = document.getElementById("accept-cookies");

	// Fonction pour vérifier si le consentement a déjà été donné
	function checkCookieConsent() {
		const cookieConsent = localStorage.getItem("cookieConsent");
		// //TODO : Supprimer à la fin du test
		// if(cookieConsent) {
		// 	localStorage.removeItem("cookieConsent");
		// }
		// //! Fin du test
		if (cookieConsent) {
			cookieBanner.classList.add("hidden"); // Afficher le bandeau si le consentement n'a pas été donné
		}
	}

	// Fonction pour gérer l'acceptation des cookies
	function acceptCookies() {
		localStorage.setItem("cookieConsent", "true"); // Enregistre le consentement
		cookieBanner.classList.add("hidden"); // Cache le bandeau après acceptation
	}

	// Lancer la fonction quand l'utilisateur clique sur "J'accepte"
	acceptCookiesBtn.addEventListener("click", acceptCookies);

	// Vérifier si le consentement a été donné au chargement de la page
	checkCookieConsent();
});
