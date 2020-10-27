// Her kommer slideshow.js.
// Henter inspirasjon fra: https://www.w3schools.com/howto/howto_js_slideshow.asp?fbclid=IwAR3NGenztebYw5Uj67xAitjNigw-jRRSI8qW8_fCANZqYkjKZqhDrwnU2fA


const images = [
    src = "../img/brygging_slide1.jpg",
    src = "../img/brygging_slide2.jpg" ,
    src = "../img/brygging_slide3.jpg", 
    src = "../img/brygging_slide4.jpg"          //Legger bare til tullebilder før de ekte får en link
];


var slideIndex = 0; // Gir en startverdi til slideshowet slik at dette kan kjøres 
addImages();  //Kjører funksjonen som legger til bildene fra images 
showSlides(); //Kjører funksjonen som rullerer mellom slidene

function showSlides() {
    const imgContainers = document.getElementsByClassName("img-container");

if (slideIndex >= imgContainers.length) {    //Hvis slideren passerer lengenden på antall bilder vi har - nullstilles den til start.
    slideIndex = 0;      
}

for (let i = 0; i < imgContainers.length; i++) {  
    if (i === slideIndex) {
        imgContainers[i].style.display = "block"
    }
    
    else {
        imgContainers[i].style.display = "none"
    }
}

slideIndex ++;    // Øker slideIndex med én 
setTimeout(showSlides, 4000) // Setter her tid på 4000 ms aka 4 sekunder per gang showSlides skal kjøres. 

}

function addImages() {
	const container = document.getElementById("slideshow-container");
  for (let i = 0; i < images.length; i++) {
  	const imgContainer = document.createElement("div");
    imgContainer.setAttribute("class", "img-container");
    const img = document.createElement("img");
    img.src = images[i];
    img.style = "width:300%; height: 300%;";
    imgContainer.append(img);
    container.append(imgContainer);
  }
}