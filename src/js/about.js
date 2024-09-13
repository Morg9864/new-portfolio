document.querySelector(".animate-bounce").addEventListener("click", function () {
	document.querySelector(".animate-bounce").classList.remove("animate-bounce");
});

const mobileFreelanceBtn = document.getElementById("mobile-btn-freelance");
const mobileBeegoBtn = document.getElementById("mobile-btn-beego");
const mobileIlpBtn = document.getElementById("mobile-btn-ilp");

const mobileNoneExp = document.getElementById("mobile-exp-none");
const mobileFreelanceExp = document.getElementById("mobile-exp-freelance");
const mobileBeegoExp = document.getElementById("mobile-exp-beego");
const mobileIlpExp = document.getElementById("mobile-exp-ilp");

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
