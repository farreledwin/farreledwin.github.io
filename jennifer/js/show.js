var item = document.querySelectorAll('#text-desc');

var item2 = document.querySelectorAll('.grid-item');

for (i = 0; i < item.length; i++) {
	item[i].onmouseover = function() {
		this.setAttribute('style', 'background-color: rgba(0, 0, 0, 0.6);color: #fff;opacity: 1;transition: 0.5s;');
	};

	item[i].onmouseout = function() {
		this.setAttribute('style', 'opacity: 0;');
	};
}
for (i = 0; i < item2.length; i++) {
	item2[i].onmouseover = function() {
		this.setAttribute('style', 'background-size:100%;');
	};

	item2[i].onmouseout = function() {
		this.setAttribute('style', 'background-size: auto auto;');
	};
}
console.log('udah');
