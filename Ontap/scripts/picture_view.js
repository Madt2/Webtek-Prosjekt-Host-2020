// hentet insperasjon fra https://www.w3schools.com/howto/howto_js_slideshow.asp

// Funksjon for å åpne visningsmodus
function openModalbox() {
  document.getElementById("currentModalbox").style.display = "block";
}
// funksjon for å lukke visningsmodus
function closeModalbox() {
  document.getElementById("currentModalbox").style.display = "none";
}
// Definerer variabel slideIndex som 1 og showSlides() av slideIndex
var slideIndex = 1;
showSlides(slideIndex);

// funksjon som setter slideIndex til n
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Funksjon for å gå til neste bilde eller forrige bilde. I HTML-en n satt til -1 når plusSlides(-1) og 1 når plusSlides(1)
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Hvis brukeren klikker utenfor modal elementet lukkes popup-en
var modal = document.getElementById("currentModalbox");
window.onclick = function(event) {
  if (event.target == modal) {
      closeModalbox();
  }
}

// Funksjon for å skjule og vise bildene i visningsmodus
function showSlides(n) {
  var i; // definerer verdien i
  var slides = document.getElementsByClassName("slides"); // lager listen "slides" som inneholder elementene fra classen "slides"

  if (n > slides.length) {slideIndex = 1} // gjør at om man trykker neste bilde og slideIndex = 10 skal den bli 1
  if (n < 1) {slideIndex = slides.length} // gjør at om man trykker forrige bilde og slideIndex = 1 skal den bli 10
  for (i = 0; i < slides.length; i++) { // for løkke som skjuler alle slides/bildene (setter display lik "none" for alle elementene i listen "slides")
      slides[i].style.display = "none";
  }
  
  slides[slideIndex-1].style.display = "block"; // viser sliden/bildet som tilsvarer slideIndexen (det må være slideIndex-1 siden listen begynner å telle fra 0 mens indexene i html-en begynner på 1)
}