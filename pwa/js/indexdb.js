var dbPromise = idb.open('fcbarcelonadatabase', 1, function(upgradeDb) {
	if (!upgradeDb.objectStoreNames.contains('standings')) {
		upgradeDb.createObjectStore('standings', { keyPath: 'standings_id' });
	}
});

function create(hometeam, awayteam, startdate, matchday, competition, standings_id) {
	dbPromise
		.then(function(db) {
			var tx = db.transaction('standings', 'readwrite');
			var store = tx.objectStore('standings');
			var item = {
				standings_id: standings_id,
				HomeTeam: hometeam,
				AwayTeam: awayteam,
				StartDate: startdate,
				MatchDay: matchday,
				Competition: competition,
				created: new Date().getTime()
			};
			store.put(item);
			return tx.complete;
		})
		.then(function() {
			console.log('Data berhasil disimpan.');
		})
		.catch(function() {
			console.log('Data gagal disimpan.');
		});
}

function get() {
	dbPromise
		.then(function(db) {
			var tx = db.transaction('standings', 'readonly');
			var store = tx.objectStore('standings');
			return store.getAll();
		})
		.then(function(items) {
			console.log('Data yang diambil: ');
			console.log(items);
			var favoriteHtml = `
            <p class="flow-text center">My Favorite Schedule</p>`;
			items.forEach(function(match) {
				favoriteHtml += `<div class="row">
                    <div class="col s12 m7">
                    <div class="card">
                        <div class="card-content">
                        <p>${match.HomeTeam} vs ${match.AwayTeam}</p>
                        </div>
                        <div class="card-action">
                        <a href="#">${match.StartDate} Matchday: ${match.MatchDay}</a>
                        <a href="#">${match.Competition}</a>
                        <button onClick="deletefavorite('${match.standings_id}')" class="btn waves-effect waves-light" type="submit" name="action">Delete Item From Favorite
                          </button>
                        </div>
                    </div>
                    </div>
                </div>`;
				document.querySelector('.content').innerHTML = favoriteHtml;
			});
		})
		.catch(error);
}

function deletefavorite(standings_id) {
	dbPromise
		.then(function(db) {
			var tx = db.transaction('standings', 'readwrite');
			var store = tx.objectStore('standings');
			store.delete(standings_id);
			return tx.complete;
		})
		.then(function() {
			location.reload();
			console.log('Item deleted');
		});
}
