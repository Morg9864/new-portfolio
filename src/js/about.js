document.querySelectorAll(".animate-bounce").forEach((button) => {
	button.addEventListener("click", function () {
		button.classList.remove("animate-bounce");
	});
});

// Desktop

// Récupérer les 3 boutons d'expérience
const freelanceBtn = document.getElementById("btn-freelance");
const beegoBtn = document.getElementById("btn-beego");
const ilpBtn = document.getElementById("btn-ilp");

// Récupérer les 4 sections d'expérience
const noneExp = document.getElementById("exp-none");
const freelanceExp = document.getElementById("exp-freelance");
const beegoExp = document.getElementById("exp-beego");
const ilpExp = document.getElementById("exp-ilp");

// Appuyez sur un bouton fera apparaître la section correspondante et masquera les autres
freelanceBtn.addEventListener("click", function () {
	noneExp.classList.add("hidden");
	freelanceExp.classList.remove("hidden");
	beegoExp.classList.add("hidden");
	ilpExp.classList.add("hidden");
});

beegoBtn.addEventListener("click", function () {
	noneExp.classList.add("hidden");
	freelanceExp.classList.add("hidden");
	beegoExp.classList.remove("hidden");
	ilpExp.classList.add("hidden");
});

ilpBtn.addEventListener("click", function () {
	noneExp.classList.add("hidden");
	freelanceExp.classList.add("hidden");
	beegoExp.classList.add("hidden");
	ilpExp.classList.remove("hidden");
});

// Mobile

// Récupérer les 3 boutons d'expérience
const mobileFreelanceBtn = document.getElementById("mobile-btn-freelance");
const mobileBeegoBtn = document.getElementById("mobile-btn-beego");
const mobileIlpBtn = document.getElementById("mobile-btn-ilp");

// Récupérer les 4 sections d'expérience
const mobileNoneExp = document.getElementById("mobile-exp-none");
const mobileFreelanceExp = document.getElementById("mobile-exp-freelance");
const mobileBeegoExp = document.getElementById("mobile-exp-beego");
const mobileIlpExp = document.getElementById("mobile-exp-ilp");

// Appuyez sur un bouton fera apparaître la section correspondante et masquera les autres
mobileFreelanceBtn.addEventListener("click", function () {
	mobileNoneExp.classList.add("hidden");
	mobileFreelanceExp.classList.remove("hidden");
	mobileBeegoExp.classList.add("hidden");
	mobileIlpExp.classList.add("hidden");
});

mobileBeegoBtn.addEventListener("click", function () {
	mobileNoneExp.classList.add("hidden");
	mobileFreelanceExp.classList.add("hidden");
	mobileBeegoExp.classList.remove("hidden");
	mobileIlpExp.classList.add("hidden");
});

mobileIlpBtn.addEventListener("click", function () {
	mobileNoneExp.classList.add("hidden");
	mobileFreelanceExp.classList.add("hidden");
	mobileBeegoExp.classList.add("hidden");
	mobileIlpExp.classList.remove("hidden");
});
