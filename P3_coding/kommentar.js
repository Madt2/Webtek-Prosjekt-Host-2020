function fyllaKommentar() {
    var time = new Date().getHours();  // Henter inn tidspunktet på dagen 
    if (time > 6 && time < 14) {
        document.getElementById("kommentar").innerHTML = "Kjør dagsfylla?";  // Kommentar som vises når klokken er mellom 06:00 og 14:00
    }
    
    else if (time > 14 && time < 18) {
        document.getElementById("kommentar").innerHTML = "PS: Du har et vors å rekke!"; // Kommentar som vises når klokken er mellom 14:00 og 18:00
    }
    
    else if (time < 6 && time > 18) {
        document.getElementById("kommentar").innerHTML = "Håper du i dette øyeblikk nyter en hjemmebrygget enhet!"; // Kommentar som vises når klokken er mellom 18:00 og 06:00
    }
    
}