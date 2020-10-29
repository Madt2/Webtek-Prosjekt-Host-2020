document.getElementById('alk_prosent_button').addEventListener("click", function alk_i_prosent(){
    var output = document.getElementById('alk_prosent');
   const OG_verdi = document.getElementById('OG_value');
   const FG_verdi = document.getElementById('FG_value');
   if (OG_verdi.value < FG_verdi.value) {
       output.value = "FG verdi for stor"
   }

   else {
       output.value = ((OG_verdi.value - FG_verdi.value) * 105 * 1.25).toPrecision(3) + "%";
   }
});