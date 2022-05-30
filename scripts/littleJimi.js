let searchP = document.querySelector('#container-biography');
function changeText() {
    searchP.innerHTML = 
    `
    <div id="container-of-cds">
        <div class="container-cd">
            <img src="../drive-download-20220523T111720Z-001/LITTLE JIMI/LITTLE JIMI VINYL ALBUM THE CANTOS/Little-Jimi-artwork.jpg" alt="">
            <h3>THE CANTOS</h3>
        </div>
        <div class="container-cd">
            <img src="../drive-download-20220523T111720Z-001/LITTLE JIMI/LITTLE JIMI - VINYL ALBUM EP.1/LJ-cover.jpg" alt="">
            <h3>EP.I</h3>
        </div>
    </div>    
    `
};

function returnText() {
    searchP.innerHTML = 
    `
    <div id="container-biography">
        <p>French trio LITTLE JIMI was born in 2017. The same year, they release their eponymous debut EP that launches the disturbing adventures of Jimi the kid, told over the trio’s releases. Bordeaux-based underground prodigies’ psychedelic and progressive rock is intense, audacious and thrilling. Their fuzzy 60s/70S-inspired notes draw heady and powerful compositions, modernised by a colourful heavy sound.</p>
        <p>In November 2018, LITTLE JIMI ink deal on Mrs Red Sound for the release of their debut album ‘Ep.1’, and start to tour with international stoner scene major acts like Mars Red Sky, The Necromancers or Belzebong. On stage, the band’s exaltation features strength, energy and passion, as you can see with bands like Earthless or Slift. LITTLE JIMI’s two guitars together build a massive wall of fuzz through which listeners will likely never notice the absence of the bass guitar.</p>
        <p>Their upcoming record ‘The Cantos’ is none other than the sonic initiation story of Jimi, a strange kid whose schizophrenic personality is a doorway toward an in-depth introspective and fanciful musical universe. Space rock, trippy doom and a bit of grunge are perfectly mixed here, bearing elements as disparate as hypnotic and mythological riffs in the vein of Mr. Bison or Elephant Tree, and All Them Witches’s creative subtlety. ‘The Cantos’ arrives on August 20th (digital) and September 17th (LP special edition) through Mrs Red Sound.</p>
        <p>“Du haut niveau musical” – <strong style="color: black;">DESERT ROCK</strong></p>
        <p>“Entre folles envolées lyriques, riffs où le fuzz roi tourne en boucle, les Bordelais me subjuguent. Par l’énergie déployée sur scène et la qualité de leur interprétation, ils sont bluffants de maturité !” – <strong style="color: black;">SOIL CHRONICLES</strong></p>
        <p>“Little Jimi are back with a record that can best be described as sublime”” – <strong style="color: black;">DOOMED & STONED</strong></p>
        <p>“Appealing and equally addictive” – <strong style="color: black;">OUTLAWS OF THE SUN</strong></p>
        <p>“They’ve set themselves in the first-person, and it works well with their aesthetic, tapping inspiration from the progressive textures of Pink Floyd” – <strong style="color: black;">THE OBELISK</strong></p>
    </div>
    `
};

function updatesText() {
    searchP.innerHTML = 
    `
    <div id="container-twitter-updates">
        <img src="../assets/icons/faviconTwitterBlue.png" alt="twitter favicon">
        <p>Our Twitter feed is currently unavailable but you can visit our official twitter page <a href="https://twitter.com/LittleJimiMusic" target="_blank"> @LittleJimiMusic.</a> </p>
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