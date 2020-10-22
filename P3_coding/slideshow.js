// Her kommer slideshow.js.
// Henter inspirasjon fra: https://www.w3schools.com/howto/howto_js_slideshow.asp?fbclid=IwAR3NGenztebYw5Uj67xAitjNigw-jRRSI8qW8_fCANZqYkjKZqhDrwnU2fA


const images = [
	"img/kontakt.png", "img/forside.png"            //Legger bare til tullebilder før de ekte får en link
];


var slideIndex = 0;
addImages();
showSlides();

function showSlides() {
    const imgContainers = document.getElementsByClassName("img-container");

if (slideIndex >= imgContainers.length) {
    slideIndex = 0;
}

}