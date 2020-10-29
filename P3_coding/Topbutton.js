//Hentet kode fra https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
//Denne koden vil gi en floating knapp som vil bringe brukeren til toppen av siden når den klikkes
var scrollbutton = document.getElementById("topButton");

// Når brukeren begynner å scrolle vil funksjonen for knappen aktiveres og knappen blir synlig
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    //Når brukeren har scrollet 20px vil knappen bli synlig
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollbutton.style.display = "block";
    }
    //Hvis brukeren er på toppen av siden vises ikke knappen
    else {
    scrollbutton.style.display = "none";
    }
}

//Når knappen trykkes på flyttes viewen til toppen av siden
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

