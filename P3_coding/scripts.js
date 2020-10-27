var headerHTML =
        '<header>'+
            '<p id="tilbake_til_online">'+
                '<a href="https://online.ntnu.no/hobbygroups">&#8592 Tilbake til Online</a></p>'+
            '<div class="header">'+
                '<div></div>'+
                '<div><a href="om_oss.html">OM OSS</a></div>'+
                '<div>|</div>'+
                '<div><a href="galleri.html">GALLERI</a></div>'+
                '<div>|</div>'+
                '<div id="logo">'+
                    '<a href="../img/1344d445-6f0a-4c74-ad5b-af874925558a.png">'+
                    '<img src="../img/1344d445-6f0a-4c74-ad5b-af874925558a.png" alt="Logoen til Ontap" style="width: auto; height: 75px;"></div>'+
                '<div>|</div>'+
                '<div><a href="oppskrifter.html">OPPSKRIFTER</a></div>'+
                '<div>|</div>'+
                '<div><a href="kontakt.html">KONTAKT</a></div>'+
                '<div></div>'+
            '</div>'+
        '</header>';

 var footerHTML = 
        '<footer>'+
            '<div id="footer5">'+
               '<h4><a href="h1">Tilbake til toppen</a></h4>'+
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
                  '<p>Ta kontakt med ontap'+
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
