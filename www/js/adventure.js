
var dialog;
var dialogIndex;
var dialogTargetURL;

function hideDialog() {
	let dialogFrame = document.getElementById('dialog');
	let avatarFrame = document.getElementById('avatar');

	dialogFrame.getElementsByTagName('h2')[0].innerHTML = '';
	dialogFrame.getElementsByTagName('p')[0].innerHTML = '';
	dialogFrame.style.visibility = 'hidden';
	avatarFrame.style.visibility = 'hidden';
	dialog = [];
	dialogIndex = 0;
	dialogTargetURL = '';
}

function loadDialog() {
	let dialogFrame = document.getElementById('dialog');
	let avatarFrame = document.getElementById('avatar');

	if(dialogIndex == 0) {
		dialogFrame.style.visibility = 'visible';
		avatarFrame.style.visibility = 'visible';
	}

	if(dialogIndex >= dialog.length) {
		let game = dialogTargetURL;

		hideDialog();
		if(game != window.location) {
			window.location.assign(game);
		}
	} else {
		dialogFrame.getElementsByTagName('h2')[0].innerHTML = dialog[dialogIndex].name;
		dialogFrame.getElementsByTagName('p')[0].innerHTML = dialog[dialogIndex].text;
		avatarFrame.setAttribute('src', 'http://api.legendofada.eu/adventure/avatars/'
						+ dialog[dialogIndex].name + '.png');
	}

	dialogIndex++;
}

function specific() {
	let session = getSession();
	let request = new XMLHttpRequest();
	var query = '';
	var world = 'Mongolie';

	if(queryURL.world != undefined) {
		world = queryURL.world;
	}

	if(session != undefined) {
		query = '?token=' + session.token
			+ '&world=' + world;
	} else {
		query = '?world=' + world;
	}

	let areaOnClick = function(event) {
		event.preventDefault();

		let requestDialog = new XMLHttpRequest();

		requestDialog.onreadystatechange = function() {
			if(requestDialog.readyState == 4
				&& requestDialog.status == 200) {

				if(dialogTargetURL == event.target.href) {
					hideDialog();
				} else {
					dialog = JSON.parse(requestDialog.responseText);
					dialogIndex = 0;
					dialogTargetURL = event.target.href;

					loadDialog();
				}
			}
		}

		requestDialog.open('GET', 'http://api.legendofada.eu/adventure/dialogs/'
					+ event.target.alt + '.json');
		requestDialog.send();
	}

	request.onreadystatechange = function() {
		if(request.readyState == 4
			&& request.status == 200) {
			let response = JSON.parse(request.responseText);
			let menu = document.getElementsByTagName('menu')[1];
			let map = document.getElementsByTagName('map')[0];

			for(var i = 0; i < response.worlds.length; i++) {
				let link = document.createElement('a');

				link.setAttribute('href', 'adventure.html?world=' + response.worlds[i].name);
				link.appendChild(document.createTextNode(response.worlds[i].name));
				menu.appendChild(link);
			}

			for(var i = 0; i < response.world.length; i++) {
				let area = document.createElement('area');

				area.setAttribute('shape', 'circle');
				area.setAttribute('coords', response.world[i].x
							+ ',' + response.world[i].y
							+ ',35');
				area.setAttribute('href', 'game.html?id=' + response.world[i].game);
				area.setAttribute('alt', response.world[i].id);

				area.addEventListener('click', areaOnClick);

				if(response.world[i].previous != null
					&& response.world[i-1].nbscore != undefined
					&& response.world[i-1].nbscore == 0) {
						console.log(window.location);
						area.addEventListener('click', function() {
							dialog = [{ 'name' : '', 'text' : 'Vous n\'avez pas encore débloqué ce niveau' }];
							dialogIndex = 0;
							dialogTargetURL = window.location.href;

							loadDialog();
						});
					} else {
						area.setAttribute('href', 'game.html?id=' + response.world[i].game
						+ '&level=' + response.world[i].id);
						area.addEventListener('click', areaOnClick);
					}
					
				map.appendChild(area);

			}
		}
	}

	request.open('GET', 'http://api.legendofada.eu/adventure/worlds/index.php' + query);
	request.send();

	let worldmap = document.getElementById('worldmap');
	worldmap.setAttribute('src', 'http://api.legendofada.eu/adventure/worlds/' + world + '.png');

	let dialogFrame = document.getElementById('dialog');
	dialogFrame.addEventListener('click', loadDialog);

	let avatarFrame = document.getElementById('avatar');
	avatarFrame.addEventListener('click', hideDialog);
}
