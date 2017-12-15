
function specific() {
	let session = getSession();
	var request = new XMLHttpRequest();
	var query = '';
	var world = 0;

	if(queryURL.world != undefined) {
		world = queryURL.world;
	}

	if(session != undefined) {
		query = '?token='+session.token;
	}

	request.onreadystatechange = function() {
		if(request.readyState == 4
			&& request.status == 200) {
			let worlds = JSON.parse(request.responseText);
			var menu = document.getElementsByTagName('menu')[0];

			for(var i = 0; i < worlds.length; i++) {
				var link = document.createElement('a');

				link.setAttribute('href', 'adventure.html?world=' + i);
				link.appendChild(document.createTextNode(worlds[i]));
				menu.appendChild(link);
			}
		}
	}

	request.open('GET', 'http://api.legendofada.eu/adventure/worlds/index.php'+query);
	request.send();

	let areaOnClick = function(event) {
		event.preventDefault();

		console.log(event.target.href);
		console.log(window.location);

		if(event.target.href == window.location) {
			alert('Clicked');
		} else {
			window.location.assign(event.target.href);
		}
	}

	var areas = document.getElementsByTagName("area");

	for(var i = 0; i < areas.length; i++) {
		var area = areas[i];
		area.addEventListener('click', areaOnClick);
	}
}
