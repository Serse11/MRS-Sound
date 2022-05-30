let searchP = document.querySelector('#container-biography');
function changeText() {
    searchP.innerHTML = 
    `
    <div id="container-of-cds">
    <div class="container-cd">
        <img src="../drive-download-20220523T111720Z-001/MARS RED SKY/MARS RED SKY VINYL ALBUM DEBUT ALBUM/debut-cover.jpg" alt="">
        <h3>MARS RED SKY</h3>
    </div>   
    <div class="container-cd">
        <img src="../drive-download-20220523T111720Z-001/MARS RED SKY/MARS RED SKY CASSETTE EP COLLECTOR/Collector-EP-cover.jpg" alt="">
        <h3>COLLECTOR</h3>
    </div>  
    <div class="container-cd">
        <img src="../drive-download-20220523T111720Z-001/MARS RED SKY/MARS RED SKY VINYL GATEFOLD THE TASK ETERNAL/couv-thetasketernal.jpg" alt="">
        <h3>THE TASK ETERNAL</h3>
    </div>  
    <div class="container-cd">
        <img src="../drive-download-20220523T111720Z-001/MARS RED SKY/VINYL EP MYRAMYD/myramyd-couv-bd.jpeg" alt="">
        <h3>MYRAMYD</h3>
    </div>  
    <div class="container-cd">
        <img src="../drive-download-20220523T111720Z-001/MARS RED SKY/MARS RED SKY CD ALBUM APEX III (PRAISE FOR THE BURNING SOUL)/MRS-LP-Cover.jpg" alt="">
        <h3>APEX III (PRAISE FOR THE BURNING SOUL)</h3>
    </div>  
    <div class="container-cd">
        <img src="../drive-download-20220523T111720Z-001/MARS RED SKY/MARS RED SKY VINYL ALBUM STRANDED IN ARCADIA/Hovering_Satellites_Arcadia_EP.jpeg" alt="">
        <h3>HOVERING SATELLITES / ARCADIA</h3>
    </div>  
    <div class="container-cd">
        <img src="../drive-download-20220523T111720Z-001/MARS RED SKY/cover-beMyGuide.jpeg" alt="">
        <h3>BE MY GUIDE</h3>
    </div>  
</div>    
    `
};

function returnText() {
    searchP.innerHTML = 
    `
    <div id="container-biography">
        <p>Beyond a highly recognizable sound, MARS RED SKY have been opening gateways to new dimensions with their otherworldly songs since their self-titled debut back in 2011. Whether you experience their records or live performances, their hulking yet trippy brand of stoner rock takes you into an infinite journey. From the early days, the Bordeaux trio has established as an essential live act, treading upon the biggest rock and metal stages (SXSW, Hellfest, Roadburn, Desertfest, Eurockéennes festival) and opening for the likes of Sleep, Dinosaur Jr., Kyuss Lives!, Killing Joke or Gojira.</p>
        <p>With their sophomore full-length “Stranded In Arcadia” (2014), a sci-fi odyssey filled with dystopian reveries, MARS RED SKY quickly became a cornerstone band among the heavy rock scene, garnering praise from international critics. “Hypnotic”, “massive”, “charismatic”, “psychedelic” are some of the words used to define the prolific trio’s sound, floating atop the stoner rock constellation and 70s psych pop nebula. Two years and hundreds of shows across Europe and Americas later, the band released their third album “Apex III (Praise For The Burning Soul)” (2016). Once again produced by Brazilian engineer Gabriel Zander, their behemoth sound blends perfectly with Julien Pras ethereal vocals and guitars, opening a door to even more bewitching paths.</p>
        <p>In 2017, MARS RED SKY treated the fans to a highly collectable item with the “Myramyd” EP – an instrumental odyssey in the form of a 17-minute live recording. After another two years spent on the road, 2019 felt like the right time to return with their brand new album “The Task Eternal” on Listenable Records and Mrs Red Sound, which is set to be followed by a couple of extensive European tours. “The Task Eternal” was recorded and mixed by Benjamin Mandeau at Cryogène Studio in Bègles, France.</p>
        <p>“Hooky and clever” – <strong style="color: black;">DECIBEL MAGAZINE</strong></p>
        <p>“Mars Red Sky’s latest is a triumph in what’s becoming a tradition thereof” – <strong style="color: black;">THE OBELISK</strong></p>
        <p>“Un trait d’union presque parfait entre le rationnel et l’idéal” – <strong style="color: black;">MOWNO</strong></p>
        <p>“Un quatrième album magistral, où se télescopent le doom, le stoner, le rock psychédélique, avec un petit côté progressif totalement assumé” – <strong style="color: black;">GUITAR PART</strong></p>
        <p>“Mars Red Sky arrive une fois de plus à être sacrément intelligent dans sa manière de composer” – <strong style="color: black;">DESERT ROCK</strong></p>
    </div>
    `
};

function updatesText() {
    searchP.innerHTML = 
    `
    <div id="container-twitter-updates">
        <img src="../assets/icons/faviconTwitterBlue.png" alt="twitter favicon">
        <p>Our Twitter feed is currently unavailable but you can visit our official twitter page <a href="https://twitter.com/MarsRedSky1" target="_blank">@MarsRedSky1.</a> </p>
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