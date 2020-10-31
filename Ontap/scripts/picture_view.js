function openModalbox() {
    document.getElementById("currentModalbox").style.display = "block";
  }
  
  function closeModalbox() {
    document.getElementById("currentModalbox").style.display = "none";
  }
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
// Hvis brukeren klikker utenfor modal elementet lukkes popupen
var modal = document.getElementById("currentModalbox");
window.onclick = function(event) {
    if (event.target == modal) {
        closeModalbox();
    }
  }

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