$(document).ready(function(){
    $("button").click(function(){
        $("menu").slideToggle();
    });
});

function bSize() {
	document.getElementsByTagName("body")[0].style.backgroundSize = `${screen.width}px ${screen.height}px`;
  document.getElementById('user').removeChild((document.getElementById('user').childNodes[1]));
}
