function typing(e) {

  if(e.name == "friend") {
    navigator.notification.prompt("Entrez le nom de l'ami", onPrompt, '');
  }
  else if(e.name == "guild") {
    navigator.notification.prompt("Entrez le nom de la guilde", onPrompt, '');
  }

  function onPrompt(results) {
    if(results.buttonIndex == 1) {
      e.value = results.input1;
    }
  }

}
