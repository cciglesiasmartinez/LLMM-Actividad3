const testimonials = [
	{
		name: "Chris Evans",
		job: "CTO @ YourCheapSupermarket.us",
		text:
			"Working with your development company has been an exceptional experience. The team consistently delivers clean, efficient code with a clear focus on user experience and innovation. Truly a standout in the tech industry!",
		image: "https://randomuser.me/api/portraits/men/62.jpg"
	},

	{
		name: "Leslie Mccoy",
		job: "CEO @ StartupGrower.com",
		text: 
		"Your development company combines technical expertise with a genuine passion for problem-solving. Every project reflects a deep understanding of modern software practices and a commitment to excellence.",
		image: "https://randomuser.me/api/portraits/women/44.jpg"
	},

	{
		name: "Claude Ward",
		job: "CTO @ YourPizzaIn5mins.com",
		text:
			"Impressive from start to finish — your team brings precision, creativity, and reliability to every line of code. A trusted partner for any digital solution.",
		image: "https://randomuser.me/api/portraits/men/9.jpg"
	},

	{
		name: "Gina Reynolds",
		job: "CISO @ BigBank.com",
		text: 
			"A forward-thinking development team that delivers clean, scalable solutions with remarkable consistency. Truly a benchmark in software craftsmanship.",
		image: "https://randomuser.me/api/portraits/women/39.jpg"
	},

	{
		name: "Dana Dixon",
		job: "CDO @ WeSellYourData.com",
		text: 
			"From user experience to backend performance, your company excels on all fronts. A rare blend of innovation, precision, and professionalism.",
		image: "https://randomuser.me/api/portraits/women/8.jpg"
	}
];

let leftControl = document.querySelector("#control-left");
let rightControl = document.querySelector("#control-right");

let cardName = document.querySelector("#card-name");
let cardJob = document.querySelector("#card-job-title");
let cardImage = document.querySelector("#card-img");
let cardText = document.querySelector("#card-text");

let cardCount = 0;
let cardLength = testimonials.length;

(function () {
	let currentCard = testimonials[cardCount];

	setCard(currentCard);
})();

leftControl.addEventListener("click", () => {
	cardCount === 0 ? (cardCount = cardLength - 1) : (cardCount -= 1);

	changeCard();
});

rightControl.addEventListener("click", () => {
	cardCount < cardLength - 1 ? (cardCount += 1) : (cardCount = 0);

	changeCard();
});

function changeCard() {
	let currentCard = testimonials[cardCount];

	setCard(currentCard);
}

function setCard(currentCard) {
	cardName.textContent = currentCard.name;
	cardJob.textContent = currentCard.job;
	cardImage.src = currentCard.image;
	cardText.textContent = currentCard.text;
}
