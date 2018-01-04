function prompt(e) {

    console.log(navigator.notification);

    function onPrompt(results) {
        e.setAttribute("value", results.input1);
    }

    var message = "tg";
    if(e.type == "text") {
        navigator.notification.prompt('Entrez votre nom d\'utilisateur : ', onPrompt, '');
    } else {
        navigator.notification.prompt('Entrez votre mot de passe : ', onPrompt, '');
    }
}
