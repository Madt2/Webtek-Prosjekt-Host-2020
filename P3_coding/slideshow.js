// Hentet litt inspirasjon fra: https://www.w3schools.com/howto/howto_js_slideshow.asp?fbclid=IwAR3NGenztebYw5Uj67xAitjNigw-jRRSI8qW8_fCANZqYkjKZqhDrwnU2fA

const images = [
    src = "../img/brygging_slide1.jpg",
    src = "../img/brygging_slide2.jpg" ,
    src = "../img/brygging_slide3.jpg", 
    src = "../img/brygging_slide4.jpg"          //Bildene slideshowet skal bruke 
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
            imgContainers[i].style.display = "block" // Bildet som er "først i køen" skal vises.
        }
        
        else {
            imgContainers[i].style.display = "none" // Hvis bildet ikke er det ene bildet som skal vises, skjules det 
        }
    }

    slideIndex ++;    // Øker slideIndex med én 
    setTimeout(showSlides, 4000) // Setter her tid på 4000 ms aka 4 sekunder per gang showSlides skal kjøres. 
}


function addImages() {
	const container = document.getElementById("slideshow-container");   // Hvor bildene skal legges inn. Dvs. legges i id = slideshow-contianer
  for (let i = 0; i < images.length; i++) {  // Loop som legger bildene inn i slideshowet
  	const imgContainer = document.createElement("div"); 
    imgContainer.setAttribute("class", "img-container");
    const img = document.createElement("img");
    img.src = images[i]; 
    img.style = "width:100%; height: 100%;";     // "Scalen" bildene skal ha 
    imgContainer.append(img);
    container.append(imgContainer);    // Container inneholder fire ulike imgcontainere hvor imgcontainer er div'en som "holder" hvert enkelt bilde. 
  }
}