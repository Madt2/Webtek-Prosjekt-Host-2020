// Her kommer slideshow.js.
// Henter inspirasjon fra: https://www.w3schools.com/howto/howto_js_slideshow.asp?fbclid=IwAR3NGenztebYw5Uj67xAitjNigw-jRRSI8qW8_fCANZqYkjKZqhDrwnU2fA


const images = [
    "https://www.lunsj.no/18804-large_default/kronenbourg-1664-blanc.jpg",
    "https://res.cloudinary.com/norgesgruppen/image/upload/c_pad,b_white,f_auto,h_900,q_50,w_900/v1587169380/Product/75032814.jpg",
    "https://dk3wdpvyk5ksy.cloudfront.net/wp-content/uploads/sites/375/2020/06/03002311/100085-1.jpg"         //Legger bare til tullebilder før de ekte får en link
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
    img.style = "width:100%; height: 100%;";
    imgContainer.append(img);
    container.append(imgContainer);
  }
}