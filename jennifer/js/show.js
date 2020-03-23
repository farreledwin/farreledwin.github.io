var item = document.querySelectorAll('#text-desc');

for (i = 0; i < item.length; i++) {
	item[i].onmouseover = function() {
		this.setAttribute('style', 'background-color: rgba(0, 0, 0, 0.6);color: #fff;opacity: 1;transition: 0.5s;');
	};

	item[i].onmouseout = function() {
		this.setAttribute('style', 'opacity: 0;');
	};
}
console.log('udah');
