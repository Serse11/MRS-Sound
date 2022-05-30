let searchP = document.querySelector('#container-biography');
function changeText() {
    searchP.innerHTML = 
    `
    <div id="container-of-cds">
        <div class="container-cd">
            <img src="../drive-download-20220523T111720Z-001/BARON CRÂNE/BARON CRÂNE VINYL GATEFOLD LES BEAUX JOURS/BaronCrane-LesBeauxJours.jpg" alt="">
            <h3>LES BEAUX JOURS</h3>
        </div>
        <div class="container-cd">
            <img src="../drive-download-20220523T111720Z-001/BARON CRÂNE/BARON CRÂNE VINYL ALBUM COMMOTIONS/Commotions-BaronCrane-Artwork-FlorineSamson.jpg" alt="">
            <h3>COMMOTIONS</h3>
        </div>
    </div>    
    `
};

function returnText() {
    searchP.innerHTML = 
    `
    <div id="container-biography">
        <p>Since 2014, instrumental trio BARON CRÂNE show an overflowing inspiration, confidently mixing fat and psychedelic riffage with fusion or noise sounds. Their influences are wild and blended with a disconcerting ease: progressive, jazz, post-rock and heavy psychedelic coexist in a communicative happiness. They leave nothing undared and lend prestige to experimental music.</p>
        <p>Paris-based outfit release an eponymous debut album in 2015 – the record quickly gained praises from the French underground scene. Driven by their dawning success, the band came back to the studio the following year to record their sophomore album ‘Electric Shades’, six Primus-influenced tracks with stunning powerful riffs. 2017 marks a turning point for the trio, with big line-up changes: a new drummer, then a new bassist join the band. The live experience is reworked, enhanced, heightened. They start touring across Europe alongside Ufomammut, Dub Trio or We Insist, providing unforgettable visual and sonic live shows.</p>
        <p>Mrs Red Sound Records issues their third record ‘Commotions’ in April 2020. The album highlights remarkable groovy sonic explorations. It features vocalist Arthur Brossard on “Acid Rains”, for the most dazzling desert rock effect, and hip hop singer INCH on “On Rase Les Murs” for a mind-blowing urban experience.</p>
        <p>Recorded and mixed by Guillaume Roess – at La Capsule (Paris, France) and Le Plan (Ris-Orangis, France) – and mastered by Camille Gateau, Baron Crâne’s fourth studio album ‘Les Beaux Jours’ is out since October 15th on CD digisleeve, double LP and digital through Mrs Red Sound and Commotions.</p>
        <p>“Parisian proggers Baron Crâne give good psych.  Their third record, ‘Commotions’ is a total blast.” – <strong style="color: black;">MAGAZINE</strong></p>
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

