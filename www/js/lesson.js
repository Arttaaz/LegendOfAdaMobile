
function specific() {
	var request = new XMLHttpRequest();
	var theme = 1;
	var lesson = 1;

	if(queryURL.theme != undefined)
		theme = queryURL.theme;

	if(queryURL.lesson != undefined)
		lesson = queryURL.lesson;

	request.onreadystatechange = function() {
		if(request.readyState == 4) {
			if (request.status == 200) {
				var container = document.getElementsByClassName("lesson")[0];
				container.innerHTML = request.response;
			} else {
				window.location.assign("courses.html");
			}
		}
	}

	request.open('GET', 'http://api.legendofada.eu/courses/'+theme+'/'+lesson);
	request.send();
}
