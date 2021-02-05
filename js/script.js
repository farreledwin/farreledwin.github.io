const TypeWritter = function(txtElement, words, wait = 3000) {
	this.txtElement = txtElement;
	this.words = words;
	this.txt = '';
	this.wordsIndex = 0;
	this.wait = parseInt(wait, 10);
	this.type();
	this.isDeleting = false;
};

TypeWritter.prototype.type = function() {
	const current = this.wordsIndex % this.words.length;
	const fullTxt = this.words[current];

	if (this.isDeleting) {
		this.txt = fullTxt.substring(0, this.txt.length - 1);
		console.log(this.txt);
	} else {
		this.txt = fullTxt.substring(0, this.txt.length + 1);
	}

	this.txtElement.textContent = `${this.txt}`;

	let typeSpeed = 100;

	if (this.isDeleting) {
		typeSpeed /= 2;
		this.txtElement.classList.remove('txt-animation');
	}
	if (!this.isDeleting && this.txt === fullTxt) {
		typeSpeed = this.wait;
		this.isDeleting = true;
		this.txtElement.classList.add('txt-animation');
	} else if (this.isDeleting && this.txt === '') {
		this.isDeleting = false;
		this.wordsIndex++;
		typeSpeed = 500;
	}
	setTimeout(() => this.type(), typeSpeed);
};

function init() {
	const txtElement = document.querySelector('.txt-software');
	let wait = 1350;
	let words = [ 'Full Stack Developer', 'Software Engineer' ];

	new TypeWritter(txtElement, words, wait);
}

document.addEventListener('DOMContentLoaded', init);
