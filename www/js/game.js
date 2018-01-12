var response;

function specific() {
	if(queryURL.id == undefined) {
		window.location.assign('index.html');
	}

	let request = new XMLHttpRequest();

	request.onreadystatechange = function() {
		if(request.readyState == 4) {
			if(request.status == 200) {
				response = JSON.parse(request.responseText);
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

				footer.href = "javascript:play()";
			} else {
				window.location.assign('index.html');
			}
		}
	}

	request.open('GET', 'http://api.legendofada.eu/games/index.php?id=' + queryURL.id);
	request.send();

	let request2 = new XMLHttpRequest();

	request2.onreadystatechange = function() {
		if(request2.readyState == 4) {
			if(request2.status == 200) {
				let answer = JSON.parse(request2.responseText);
				let board = document.getElementsByTagName('table')[0];
				for (var i = 0; i < answer.length; i++) {
					let boardRow = document.createElement('tr');
					let boardName = document.createElement('td');
					let boardValue = document.createElement('td');
					boardName.appendChild(document.createTextNode(answer[i].username));
					boardValue.appendChild(document.createTextNode(answer[i].value));
					boardRow.appendChild(boardName);
					boardRow.appendChild(boardValue);
					board.appendChild(boardRow);
				}

			}
		}
	}

	request2.open('GET', 'http://api.legendofada.eu/games/boards.php?game=' + queryURL.id);
	request2.send();
}

function play() {
	let str = 'http://api.legendofada.eu/games/' + response.id;
	cordova.InAppBrowser.open(str, '_self', 'location=no,zoom=no');
}
