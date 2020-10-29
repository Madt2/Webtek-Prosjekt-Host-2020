function fyllaKommentar() {
    var time = new Date().getHours();  // Henter inn tidspunktet på dagen 
    var weekday = new Date().getDay();  // Søndag er 0, mandag er 1, tirsdag 2, onsdag 3, torsdag 4, fredag 5, lørdag 6.


    if (time > 0 && time < 8){
        document.getElementById("kommentar").innerHTML = "På tide å sove";  // Mellom 00:00 og 06:00
    }

    else if (time > 6 && time < 16) {
        document.getElementById("kommentar").innerHTML = "Kjør dagsfylla?";  // Kommentar som vises når klokken er mellom 06:00 og 14:00
    }
    
    else if (time >= 18) {
        document.getElementById("kommentar").innerHTML = "Håper du i dette øyeblikk nyter en hjemmebrygget enhet!"; // Kommentar som vises når klokken er mellom 18:00 og 06:00
    }

    // MANDAG - ONSDAG 

    else if ((weekday >= 1 && weekday < 4) && (time > 08 && time < 16)){
        document.getElementById("kommentar").innerHTML = "Jobb hardt nå for en velfortjent hjemmebrygget øl til helga";     // Mellom 08:00 og 16:00 i uken 
    }

    // TORSDAG - SØNDAG 
    else if ((weekday >= 4 || weekday == 0) && (time > 14 && time < 18)){
        document.getElementById("kommentar").innerHTML = "PS: Du har et vors å rekke!";   // Mellom 14:00 og 18:00 i helgene 
    }

}