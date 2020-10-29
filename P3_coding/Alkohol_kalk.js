//Fikk inspirasjon fra https://www.w3schools.com/howto/howto_css_modals.asp

// Henter modal elementet fra oppskrifter.html
var modal = document.getElementById("alkoholModal");

// Henter alkoholkalkulator knappen som skal aktivere popupen
var btn = document.getElementById("alkohol");

// Henter span elementet som kan krysse ut popupen
var span = document.getElementsByClassName("alkohol_close")[0];

// kode som aktiveres når alkohol knappen trykkes på, gjør modal elemnetet synlig
btn.onclick = function() {
  modal.style.display = "block";
}

// Når brukeren trykker på x span vil popupen lukkes(ikke vises)
span.onclick = function() {
  modal.style.display = "none";
}

// Hvis brukeren klikker utenfor modal elementet lukkes popupen
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//Kode for å regne ut alkoholvolum i prosent
//Legger til funksjonen til "Alkohol i volum" knappen
document.getElementById('alk_prosent_button').addEventListener("click", function alk_i_prosent(){
    var output = document.getElementById('alk_prosent');
   const OG_verdi = document.getElementById('OG_value');
   const FG_verdi = document.getElementById('FG_value');
   if (OG_verdi.value < FG_verdi.value) {
       output.value = "FG verdi for stor"
   }

   else {
    //Formel fått fra klient, kode vil regne ut alkohol i volum utifra oppgitt Original Gravity og Final Gravity
       output.value = ((OG_verdi.value - FG_verdi.value) * 105 * 1.25).toPrecision(3) + "%";
   }
});