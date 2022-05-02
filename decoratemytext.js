function myFunction(){
    var style = window.getComputedStyle(document.getElementById("texta"), null).getPropertyValue('font-size');
    var fontSize = parseInt(style) + 2; 
    document.getElementById("texta").style.fontSize = fontSize+"pt";
    setTimeout(myFunction, 1000);
}

function myFunction2(){
    if (document.getElementById('chbox').checked) {
        document.getElementById("texta").style.color ="green";
        document.getElementById("texta").style.textDecoration = "underline";
    } else {
        document.getElementById("texta").style.color ="black";
        document.getElementById("texta").style.textDecoration = "none";
    }
}


