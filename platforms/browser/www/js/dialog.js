function prompt(e) {

    function onPrompt(results) {
      if(results.buttonIndex == 1)
        e.setAttribute("value", results.input1);
    }

    if(e.type == "text") {
        navigator.notification.prompt('Entrez votre nom d\'utilisateur : ', onPrompt, '');
    } else {
        navigator.notification.prompt('Entrez votre mot de passe : ', onPrompt, '');
    }
}

function clicked(e) {
  document.getElementById('error').innerHTML = "<br /><br /><br /><br /><br /><br /><br /><br />";
  document.getElementById('error').scrollIntoView(true);
}

function blured() {
  document.getElementById('error').innerHTML = "";
}
