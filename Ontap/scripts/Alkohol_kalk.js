//Fikk inspirasjon fra https://www.w3schools.com/howto/howto_css_modals.asp

var modal = document.getElementById("alkoholModal"); // Henter modal elementet fra oppskrifter.html som inneholder alkohol kalkulatoren

var btn = document.getElementById("alkohol"); // Henter alkoholkalkulator knappen som skal aktivere popupen

var span = document.getElementsByClassName("alkohol_close")[0]; // Henter span elementet som kan krysse ut popupen

// Kode som aktiveres når alkohol knappen trykkes på, gjør modal elementet synlig
btn.onclick = function() {
  modal.style.display = "block";
}

// Når brukeren trykker på span elementet vil popupen lukkes(ikke vises)
span.onclick = function() {
  modal.style.display = "none";
}

// Hvis brukeren klikker utenfor kalkulator elementet men på bakgrunnen(modalen) lukkes popupen(ikke vises)
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//Kode for å regne ut alkoholvolum i prosent
document.getElementById('alk_prosent_button').addEventListener("click", function alk_i_prosent(){ // Legger til funksjonen til "Alkohol i volum" knappen
  var output = document.getElementById('alk_prosent'); // Henter output element fra oppskrifter.html
  const OG_verdi = document.getElementById('OG_value').value; // Henter input verdi fra bruker for Original Gravity
  const FG_verdi = document.getElementById('FG_value').value; // Henter input verdi fra bruker for Final Gravity
  if (OG_verdi < 0 || FG_verdi < 0) {
    output.value = "Verdi kan ikke være negativ"
  }
   
  else if (OG_verdi < FG_verdi) {                                  // Sjekker om Final Gravity er større enn Original Gravity da dette ikke funker for formelen
    output.value = "FG verdi for stor"
  }
    
   else {
    output.value = ((OG_verdi - FG_verdi) * 105 * 1.25).toPrecision(3) + "%"; // Formel fått fra klient, kode vil regne ut alkohol i volum utifra oppgitt Original Gravity og Final Gravity
  }
});