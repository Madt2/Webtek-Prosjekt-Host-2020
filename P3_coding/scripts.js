var headerHTML =
         '<header>'+
            '<p id="tilbake_til_online">'+
               '<a href="https://online.ntnu.no/hobbygroups">Tilbake til Online</a>'+
            '</p>'+
            '<p id="box1">'+
               '<a href="om_oss.html">OM OSS</a>'+
            '</p>'+
            '<p id="box2">'+
               '<a href="galleri.html">GALLERI</a>'+
            '</p>'+
            '<p id="box3">'+
               '<a href="../img/1344d445-6f0a-4c74-ad5b-af874925558a.png" target="_blank">'+
               '<img src="../img/1344d445-6f0a-4c74-ad5b-af874925558a.png" alt="Logoen til Ontap" style="width: 100%; height: auto;">'+
            '</p>'+
            '<p id="box4">'+
               '<a href="oppskrifter.html">OPPSKRIFTER</a>'+
            '</p>'+
            '<p id="box5">'+
               '<a href="kontakt.html">KONTAKT</a>'+
            '</p>'+
         '</header>';

 var footerHTML = 
        '<footer>'+
            '<div class="footer" id="footer_logo">'+
                '<img id="footer_logo_img" src="../img/1344d445-6f0a-4c74-ad5b-af874925558a.png" alt="Ontap-logo" height="100px">'+
            '</div>'+
            '<div class="footer" id="footer1">'+
                '<h4>Laget av</h4>'+
                '<p>Håvard Kveen, Una Førde Schjetne, Emil Gillingham Aukner, Mats Klevstad og Tor Madsen</p>'+
            '</div>'+
            '<div class="footer" id="footer2">'+
                '<h4>Kontakt oss</h4>'+
                '<p>Ta kontakt med ontap ved å klikke her: <a href="kontakt.html">Kontakt</a></p>'+
            '</div>'+
            '<div class="footer" id="footer3">'+
                '<h4>Slack</h4>'+
                '<a href="https://onlinentnu.slack.com/archives/C357EQS3U" target="_blank">'+
                    '<img src="../img/Slack.png" alt="Slack" height="40px" width="40px" >'+
                '</a>'+
            '</div>'+
            '<div class="footer" id="footer4">'+
            '<h4>Sideoversikt</h4>'+
            '<p>For å gå til sidekart, klikk her: <a href="index.html">Sidekart</a></p>'+
            '</div>'+
            '<div class="footer" id="footer5">'+
                '<h4><a href="h1">Tilbake til toppen</a></h4>'+
            '</div>'+
        '</footer>';

function header_and_footer() {
    document.getElementById('header').innerHTML = headerHTML;
    document.getElementById('footer').innerHTML = footerHTML;
}
