var headerHTML =
        '<header>'+
        '<p id="tilbake_til_online">'+
        '<a href="https://online.ntnu.no/hobbygroups">&#8592; Tilbake til Online</a></p>'+
            '<nav>'+
                '<ul>'+
                    '<li><a href="om_oss.html">OM OSS</a></li>'+
                    '<li class="skille"></li>'+
                    '<li><a href="galleri.html">GALLERI</a></li>'+
                    '<li class="skille"></li>'+
                    '<li><a id="test" href="forside.html">'+
                        '<img id="logo" src="img/logo_tonne.png" alt="Logoen til Ontap" style="width: auto; height: 40px;"></a></li>'+
                    '<li class="skille"></li>'+
                    '<li><a href="oppskrifter.html">OPPSKRIFTER</a></li>'+
                    '<li class="skille"></li>'+
                    '<li><a href="kontakt.html">KONTAKT</a></li>'+
                '</ul>'+
            '</nav>'+
        '</header>';

 var footerHTML = 
        '<footer>'+
            '<div id="footerFlex">'+
               '<div class="footer" id="footer_logo">'+
                  '<img id="footer_logo_img" src="../img/1344d445-6f0a-4c74-ad5b-af874925558a.png" alt="Ontap-logo" height="100">'+
               '</div>'+
               '<div class="footer" id="footer1">'+
                  '<h4>Laget av</h4>'+
                  '<p>Håvard Kveen, Tor Madsen <br> Una Førde Schjetne, Mats Klevstad <br> og Emil Gillingham Aukner </p>'+
               '</div>'+
               '<div class="footer" id="footer2">'+
                  '<h4>Kontakt oss</h4>'+
                  '<p>Ta kontakt med Ontap'+
                  '<br>'+ 
                  'ved å klikke her: <a href="kontakt.html">Kontakt</a></p>'+
               '</div>'+
               '<div class="footer" id="footer3">'+
                    '<h4>Slack</h4>'+
                    '<a href="https://onlinentnu.slack.com/archives/C357EQS3U" target="_blank">'+
                        '<img src="../img/Slack.png" alt="Slack" height="40" width="40" >'+
                    '</a>'+
                '</div>'+
                '<div class="footer" id="footer4">'+
                    '<h4>Sideoversikt</h4>'+
                    '<p>For å gå til sidekart,'+
                    '<br>'+ 
                    'klikk her: <a href="index.html">Sidekart</a></p>'+
                '</div>'
            '</div>'
        '</footer>';

//Denne koden vil sette inn header og footer element på siden når den lastes inn for å slippe å repetere kode
function header_and_footer() {
    document.getElementById('header').innerHTML = headerHTML;
    document.getElementById('footer').innerHTML = footerHTML;
}

//Hentet kode fra https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
//Denne koden vil gi en floating knapp som vil bringe brukeren til toppen av siden når den klikkes
var scrollbutton = document.getElementById("topButton");


function fyllaKommentar() {
    var time = new Date().getHours();  // Henter inn tidspunktet på dagen 
    if (time > 6 && time < 14) {
        document.getElementById("demo").innerHTML = "Kjør dagsfylla?";  // Kommentar som vises når klokken er mellom 06:00 og 14:00
    }
    
    else if (time > 14 && time < 18) {
        document.getElementById("demo").innerHTML = "PS: Du har et vors å rekke!"; // Kommentar som vises når klokken er mellom 14:00 og 18:00
    }
    
    else if (time < 6 && time > 18) {
        document.getElementById("demo").innerHTML = "Håper du i dette øyeblikk nyter en hjemmebrygget enhet!"; // Kommentar som vises når klokken er mellom 18:00 og 06:00
    }
    
}

fyllaKommentar()

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

