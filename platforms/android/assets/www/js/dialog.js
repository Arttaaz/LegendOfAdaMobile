prompt(e) {
    function onPrompt(results) {
        e.setAttribute("value", results.input1);
        alert("coucou");
    }

    var message = "tg";
    if(e.type == "text") {
        navigator.notification.prompt('Entrez votre nom d\'utilisateur : ', onPrompt);
    } else {
        navigator.notification.prompt('Entrez votre mot de passe : ', onPrompt);
    }

    navigator.notification.beep(2);

}
