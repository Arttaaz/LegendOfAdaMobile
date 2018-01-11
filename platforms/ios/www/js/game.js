<<<<<<< HEAD
var response;
=======
>>>>>>> 062cdd15430a6375b4bc8f10925edbd8feba8240

function specific() {
	if(queryURL.id == undefined) {
		window.location.assign('index.html');
	}

	let request = new XMLHttpRequest();

	request.onreadystatechange = function() {
		if(request.readyState == 4) {
			if(request.status == 200) {
<<<<<<< HEAD
				response = JSON.parse(request.responseText);
=======
				let response = JSON.parse(request.responseText);
>>>>>>> 062cdd15430a6375b4bc8f10925edbd8feba8240
				let course = document.getElementById('course');
				let rules = document.getElementsByTagName('rules')[0];
				let title = document.createElement('h1');
				let preview = document.createElement('img');
				let description = document.createElement('p');
				let footer = document.getElementById('play');

				document.title = response.name;
				course.setAttribute('href', 'lesson.html?theme='
					+ response.theme + '&lesson=' + response.about);
				rules.appendChild(title);
				rules.appendChild(preview);
				rules.appendChild(description);
				title.appendChild(document.createTextNode(response.name));
				preview.setAttribute('src', 'http://api.legendofada.eu/games/'
					+ response.id + '/preview.png');
				description.appendChild(document.createTextNode(response.description));
<<<<<<< HEAD

				footer.href = "javascript:play()";
=======
				footer.href = 'http://api.legendofada.eu/games/' + response.id;
>>>>>>> 062cdd15430a6375b4bc8f10925edbd8feba8240
			} else {
				window.location.assign('index.html');
			}
		}
	}

	request.open('GET', 'http://api.legendofada.eu/games/index.php?id=' + queryURL.id);
	request.send();
}
<<<<<<< HEAD

function play() {
	let str = 'http://api.legendofada.eu/games/' + response.id;
	cordova.InAppBrowser.open(str, '_self', 'location=no,zoom=no');
}
=======
>>>>>>> 062cdd15430a6375b4bc8f10925edbd8feba8240
