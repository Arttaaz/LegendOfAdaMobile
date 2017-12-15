
localStorage.clear();

function login() {
	let username = document.getElementById('username').value;
	let password = document.getElementById('password').value;
	let create = document.getElementById('create').checked;
	var request = new XMLHttpRequest();

	request.open('POST', 'http://api.legendofada.eu/login.php', false);
	request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

	request.send('username='+username+'&password='+password+'&create='+create);

	let response = JSON.parse(request.responseText);

	var error = document.getElementById('error');

	if(response.length == 0) {
		error.style.visibility = 'visible';
		error.innerHTML = 'Impossible de se connecter, veuillez réessayer plus tard';
		return false;
	}

	if(response.error != undefined) {
		error.style.visibility = 'visible';
		error.innerHTML = response.error;
		return false;
	}	

	localStorage.setItem('session', request.responseText);

	return true;
}
