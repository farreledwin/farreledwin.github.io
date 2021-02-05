const base_url = 'https://api.football-data.org/';

//Blok kode yang akan di panggil jika fetch berhasil
function status(response) {
	if (response.status !== 200) {
		console.log('Error : ' + response.status);
		// Method reject() akan membuat blok catch terpanggil
		return Promise.reject(new Error(response.statusText));
	} else {
		// Mengubah suatu objek menjadi Promise agar bisa "di-then-kan"
		return Promise.resolve(response);
	}
}
// Blok kode untuk memparsing json menjadi array JavaScript
function json(response) {
	return response.json();
}
// Blok kode untuk meng-handle kesalahan di blok catch
function error(error) {
	// Parameter error berasal dari Promise.reject()
	console.log('Error : ' + error);
}

function getInfo() {
	if ('caches' in window) {
		caches.match(base_url + 'v2/teams/81/matches?status=SCHEDULED').then(function(response) {
			if (response) {
				response.json().then(function(data) {
					var articlesHTML = '';
					data.matches.forEach(function(match) {
						const { awayTeam, homeTeam, season, competition } = match;
						articlesHTML += `
                        <div class="row">
                            <div class="col s12 m7">
                            <div class="card">
                                <div class="card-content">
                                <p>${homeTeam.name} vs ${awayTeam.name}</p>
                                </div>
                                <div class="card-action">
                                <a href="#">${season.startDate} Matchday: ${season.currentMatchday}</a>
								<a href="#">${competition.name}</a>
								<button onClick="create('${homeTeam.name}','${awayTeam.name}','${season.startDate}','${season.currentMatchday}','${competition.name}','${match.id}')" class="btn waves-effect waves-light" type="submit" name="action">Save To My Favorite
								  </button>
                                </div>
                            </div>
                            </div>
                        </div>`;

						document.querySelector('.content').innerHTML = articlesHTML;
					});

					console.log('ffff');
				});
			}
		});
	}
	fetch(base_url + 'v2/teams/81/matches?status=SCHEDULED', {
		method: 'GET',
		headers: {
			'X-Auth-Token': '18f5fcab62b9422099494292b55473a3'
		}
	})
		.then(status)
		.then(json)
		.then(function(data) {
			console.log(data);
			// Objek/array JavaScript dari response.json() masuk lewat data.
			// Menyusun komponen card artikel secara dinamis
			var articlesHTML = '';
			data.matches.forEach(function(match) {
				const { awayTeam, homeTeam, season, competition } = match;
				articlesHTML += `
		<div class="row">
			<div class="col s12 m7">
			<div class="card">
				<div class="card-content">
				<p>${homeTeam.name} vs ${awayTeam.name}</p>
				</div>
				<div class="card-action">
				<a href="#">${season.startDate} Matchday: ${season.currentMatchday}</a>
				<a href="#">${competition.name}</a>
				<button onClick="create('${homeTeam.name}','${awayTeam.name}','${season.startDate}','${season.currentMatchday}','${competition.name}','${match.id}')" class="btn waves-effect waves-light" type="submit" name="action">Save To My Favorite
				  </button>
				</div>
			</div>
			</div>
		</div>`;

				document.querySelector('.content').innerHTML = articlesHTML;
			});
		})
		.catch(error);
}

function getInfoTeam() {
	if ('caches' in window) {
		caches.match(base_url + 'v2/teams/81').then(function(response) {
			if (response) {
				response.json().then(function(data) {
					var infohtml = '';
					infohtml += `
        <div class="container">
        <img class="materialboxed" width="200" src="http://upload.wikimedia.org/wikipedia/de/a/aa/Fc_barcelona.svg">
        <p class="flow-text center">${data.name}</p>
        <ul class="collection">
                <li class="collection-item">Short Name : ${data.shortName}</li>
                <li class="collection-item">TLA : ${data.tla}</li>
                <li class="collection-item">Address : ${data.address}</li>
				<li class="collection-item">Phone : ${data.phone}</li>
        </ul>
        </div>`;
					document.querySelector('.content').innerHTML = infohtml;
				});
			}
		});
	}
	fetch(base_url + 'v2/teams/81', {
		method: 'GET',
		headers: {
			'X-Auth-Token': '18f5fcab62b9422099494292b55473a3'
		}
	})
		.then(status)
		.then(json)
		.then(function(data) {
			var infohtml = '';
			infohtml += `
        <div class="container">
        <img class="materialboxed" width="200" src="http://upload.wikimedia.org/wikipedia/de/a/aa/Fc_barcelona.svg">
        <p class="flow-text center">${data.name}</p>
        <ul class="collection">
                <li class="collection-item">Short Name : ${data.shortName}</li>
                <li class="collection-item">TLA : ${data.tla}</li>
                <li class="collection-item">Address : ${data.address}</li>
				<li class="collection-item">Phone : ${data.phone}</li>
        </ul>
        </div>`;
			document.querySelector('.content').innerHTML = infohtml;
		})
		.catch(error);
}
