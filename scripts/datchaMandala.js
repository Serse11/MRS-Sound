let searchP = document.querySelector('#container-biography');
function changeText() {
    searchP.innerHTML = 
    `
    <div id="container-of-cds">
        <div class="container-cd">
            <img src="../drive-download-20220523T111720Z-001/DÄTCHA MANDALA/DÄTCHA MANDALA VINYL ALBUM HARA/DM-Artwork.jpg" alt="">
            <h3>HARA</h3>
        </div>
        <div class="container-cd">
            <img src="../drive-download-20220523T111720Z-001/DÄTCHA MANDALA/DÄTCHA MANDALA - CD ALBUM ROKH/Cover-ROKH.jpg" alt="">
            <h3>ROKH</h3>
        </div>
        <div class="container-cd">
            <img src="../drive-download-20220523T111720Z-001/DÄTCHA MANDALA/DÄTCHA MANDALA - VINYL EP ANÂHATA/cover-DM.jpg" alt="">
            <h3>ANÂHATA</h3>
       </div>
    </div>    
    `
};

function returnText() {
    searchP.innerHTML = 
    `
    <div id="container-biography">
        <p>Over the years, French heavy blues trio DÄTCHA MANDALA have found the perfect balance between material and spiritual thoughts, providing a sensorial experience directly inspired by the sonic effervescence of the 70s. The Bordeaux-based blues rockers seduce with their high-powered guitars, transcendental voices and this generous energy of theirs. Their musical esthetics falls within a blend of mystical psychedelia and oriental-tinged sounds.</p>
        <p>Since 2009, DÄTCHA MANDALA have performed more than 550 shows through Europe and North America. In 2017, they supported famous French rock trio Les Insus (former Téléphone) in an arena in front of a 35,000 people! The same year, they released their fully analog debut album ‘Rokh’ through Mrs Red Sound, which was produced by Clive Martin (Queen, Tom Yorke, The Cure, Midnight oil, Skunk Anansie).</p>
        <p>Hundred of gigs later, the French prodigies returned to the studio to record their sophomore and ecologically conscious album ‘Hara’, out since June 5th via Mrs Red Sound. High voltage riffs, political and philosophical themes, Robert Plant-like vocals and an overflowing energy perfectly characterize DÄTCHA MANDALA’s new album “Hara”. With their sophomore LP, the heavy blues trio deliver their strongest, most generous and firmly rock’n’roll record to date. Each one of these songs oozes their unstoppable live energy, and offers a wild ride through the ages of rock’n’roll, from country blues to Bowie-esque digressions and the Beatles’ mighty pop rock ignition.</p>
        <p>“A powerful, political soundscape” – NEW NOISE MAGAZINE</p>
        <p>“One hell of an album. Wonderful work altogether” – <strong style="color: black;">POWERPLAY MAGAZINE</strong></p>
        <p>“Furieux et addictif. La relève du rock en France” – <strong style="color: black;">ROLLING STONE MAGAZINE</strong></p>
        <p>“Une efficacité forgée par de nombreux concerts” – <strong style="color: black;">ROCK & FOLK</strong></p>
    </div>

    `
};

function updatesText() {
    searchP.innerHTML = 
    `
    <div id="container-twitter-updates">
        <img src="../assets/icons/faviconTwitterBlue.png" alt="twitter favicon">
        <p>Our Twitter feed is currently unavailable but you can visit our official twitter page <a href="https://twitter.com/Datcha_Mandala" target="_blank">@Datcha_Mandala.</a> </p>
    </div>
    `
};

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-210px";
  }
  prevScrollpos = currentScrollPos;
}