$(document).ready(function(){
    $("#hambutton").click(function(){
        $("#nav").slideToggle();
    });
});

function bSize() {
	document.getElementsByTagName("body")[0].style.backgroundSize = `${screen.width}px ${screen.height}px`;
  document.getElementById('user').removeChild((document.getElementById('user').childNodes[1]));               //チキンナゲットが大好き
}

document.getElementById('user').addEventListener('click', function() {
    window.location.href = "profile.html";
});
