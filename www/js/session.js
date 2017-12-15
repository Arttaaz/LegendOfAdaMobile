
var queryURL;
(window.onpopstate = function () {
    var match,
        pl     = /\+/g,  // Regex for replacing addition symbol with a space
        search = /([^&=]+)=?([^&]*)/g,
        decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
        query  = window.location.search.substring(1);

    queryURL = {};
    while (match = search.exec(query))
       queryURL[decode(match[1])] = decode(match[2]);
})();

function getSession() {
	return JSON.parse(localStorage.getItem('session'));
}

function setSession(session) {
	localStorage.setItem('session', JSON.stringify(session));
}

function wake() {
	let session = getSession();
	var user = document.getElementById('user');
	var link = document.createElement('a');
	var text = 'Connexion';
	var avatar = document.createElement('img');

	if(session == undefined) {
		link.setAttribute('href', 'login.html');
		avatar.setAttribute('src', 'images/logo.png');
	} else {
		link.setAttribute('href', 'login.html');
		text = session.username + '  ';
		avatar.setAttribute('src', 'http://api.legendofada.eu/avatar/sandrine.jpg');
	}

	link.appendChild(document.createTextNode(text));
	link.appendChild(avatar);

	user.appendChild(link);

	if(typeof specific == 'function')
		specific();
}
