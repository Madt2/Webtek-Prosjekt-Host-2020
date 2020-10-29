var headerHTML =
        '<header>'+
        '<p id="tilbake_til_online">'+
        '<a href="https://online.ntnu.no/hobbygroups">&#8592 Tilbake til Online</a></p>'+
            '<nav>'+
                '<ul>'+
                    '<li><a href="om_oss.html">OM OSS</a></li>'+
                    '<li class="skille"></li>'+
                    '<li><a href="galleri.html">GALLERI</a></li>'+
                    '<li class="skille"></li>'+
                    '<li><a id="test" href="forside.html">'+
                        '<img id="logo" src="img/logo_tonne.png" alt="Logoen til Ontap" style="width: auto; height: 40px;"></a></li>'+
                    '<li class="skille"></li>'+
                    '<li><a href="oppskrifter.html">OPPSKRIFTER</a></li>'+
                    '<li class="skille"></li>'+
                    '<li><a href="kontakt.html">KONTAKT</a></li>'+
                '</ul>'+
            '</nav>'+
        '</header>';

 var footerHTML = 
        '<footer>'+
            '<div id="footer5">'+
               '<h4><a href="#header">Tilbake til toppen</a></h4>'+
            '</div>'+
            '<div id="footerFlex">'+
               '<div class="footer" id="footer_logo">'+
                  '<img id="footer_logo_img" src="../img/1344d445-6f0a-4c74-ad5b-af874925558a.png" alt="Ontap-logo" height="100px">'+
               '</div>'+
               '<div class="footer" id="footer1">'+
                  '<h4>Laget av</h4>'+
                  '<p>Håvard Kveen, Tor Madsen <br> Una Førde Schjetne, Mats Klevstad <br> og Emil Gillingham Aukner </p>'+
               '</div>'+
               '<div class="footer" id="footer2">'+
                  '<h4>Kontakt oss</h4>'+
                  '<p>Ta kontakt med Ontap'+
                  '<br>'+ 
                  'ved å klikke her: <a href="kontakt.html">Kontakt</a></p>'+
               '</div>'+
               '<div class="footer" id="footer3">'+
                    '<h4>Slack</h4>'+
                    '<a href="https://onlinentnu.slack.com/archives/C357EQS3U" target="_blank">'+
                        '<img src="../img/Slack.png" alt="Slack" height="40px" width="40px" >'+
                    '</a>'+
                '</div>'+
                '<div class="footer" id="footer4">'+
                    '<h4>Sideoversikt</h4>'+
                    '<p>For å gå til sidekart,'+
                    '<br>'+ 
                    'klikk her: <a href="index.html">Sidekart</a></p>'+
                '</div>'
            '</div>'
        '</footer>';

function header_and_footer() {
    document.getElementById('header').innerHTML = headerHTML;
    document.getElementById('footer').innerHTML = footerHTML;
}

document.getElementById('alk_prosent_button').addEventListener("click", function alk_i_prosent(){
    var output = document.getElementById('alk_prosent');
    const OG_verdi = document.getElementById('OG_value');
    const FG_verdi = document.getElementById('FG_value');
    output.value = ((OG_verdi.value - FG_verdi.value) * 105 * 1.25).toPrecision(3) + "%";
 })