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

function click() {
  document.getElementById('error').innerHTML = "<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />";
}

function blur() {
  document.getElementById('error').innerHTML = "";
}
