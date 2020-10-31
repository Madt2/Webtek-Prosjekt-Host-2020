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

function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Funksjon for å gå til neste bilde eller forrige bilde. I HTML-en n satt til -1 når plusSlides(-1) og 1 når plusSlides(1). 
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Hvis brukeren klikker utenfor modal elementet lukkes popupen
var modal = document.getElementById("currentModalbox");
window.onclick = function(event) {
  if (event.target == modal) {
      closeModalbox();
  }
}

// Funksjon for å gjøre at om man går tilbake når slideIndex = 1 skal den bli 10, og om man går frem og slideIndex = 10 skal den bli 1
// brukes også for 
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides");

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  
  slides[slideIndex-1].style.display = "block";
}