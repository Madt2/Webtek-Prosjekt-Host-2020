//Hentet kode fra https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
//Denne koden vil gi en floating knapp som vil bringe brukeren til toppen av siden når den klikkes

var scrollbutton = document.getElementById("topButton"); //Henter en gjemt knapp på siden

window.onscroll = function() {scrollFunction()}; // Når brukeren begynner å scrolle vil funksjonen for knappen aktiveres og knappen blir synlig

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) { //Når brukeren har scrollet 20px vil knappen bli synlig
        scrollbutton.style.display = "block"; //Gjør knappen synlig
    }    
    else {
    scrollbutton.style.display = "none"; //Hvis brukeren er på toppen av siden vises ikke knappen
    }
}

//Når knappen trykkes på flyttes viewen til toppen av siden
function topFunction() {
  document.body.scrollTop = 0; //for Safari
  document.documentElement.scrollTop = 0; //For Chrome, Firefox, IE og Opera
}

