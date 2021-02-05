document.addEventListener('DOMContentLoaded', function() {
	var page = window.location.hash.substr(1);
	console.log(page);
	if (page == '') page = 'home';
	loadPage(page);
	loadNav();

	async function loadPage(page) {
		// fetch('/content/klasemenliga.html')
		//     .then(function(response){
		//         return response.text();
		//     })
		//     .then(function(page){
		//         var content = document.getElementById("body-content");
		//         content.innerHTML = page;
		//     });
		const response = await fetch(`/content/${page}.html`);
		const pages = await response.text();
		var content = document.getElementById('body-content');
		content.innerHTML = pages;

		if (page == 'jadwaltanding') {
			getInfo();
		} else if (page == 'informasitim') {
			getInfoTeam();
		} else if (page == 'favoritesaya') {
			get();
		}
	}

	function loadNav() {
		window.addEventListener('hashchange', function(elm) {
			page = window.location.hash.substr(1);
			loadPage(page);
			// Muat konten halaman yang dipanggil
		});
		var elems = document.querySelectorAll('#nav-mobile');
		var instances = M.Sidenav.init(elems);
	}
});
