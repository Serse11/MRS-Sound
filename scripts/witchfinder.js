let searchP = document.querySelector('#container-biography');
function changeText() {
    searchP.innerHTML = 
    `
    <div id="container-of-cds">
        <div class="container-cd">
            <img src="../drive-download-20220523T111720Z-001/Witchfinder/WITCHFINDER DOUBLE VINYL ALBUM HAZY RITES/Witchfinder-cover.jpg" alt="cover hazy rites">
            <h3>HAZY RITES</h3>
        </div>   
    </div>    
    `
};

function returnText() {
    searchP.innerHTML = 
    `
    <div id="container-biography">
        <p>French doom sludge unit WITCHFINDER took the metal scene by storm, spreading out their heavier-than-heavy mucky riffs with a highly psychedelic potential. Gloomy and haunted voices in the vein of Monolord or Windhand are blended with saturated Bongzilla or Weedeater vocals like, and fat riffage.</p>
        <p>Since their formation in 2016, and off of the back of their debut eponymous full-length, the Clermont-Ferrand-based occult doom trio quickly garnered a sizable following with many prolific support slots, opening for stoner and doom behemoths such as Red Fang, Corrosion Of Conformity, Dopethrone, Ufomammut, Conan, Monolord, Kadavar or The Necromancers.</p>
        <p>With ‘Hazy Rites’, WITCHFINDER are throwing in plenty of hardcore and sludge influences to their already massive and doom-laden sound. Their sophomore album was recorded, mixed and mastered at the Polish Monochrom Studio by Satanic Audio in October 2018. ‘Hazy Rites’ went out on June 19th (LP) via Mars Red Sound.</p>
        <p>“As impressive and memorable as it is thunderous” – <strong style="color: black;">DISTORTED SOUND MAGAZINE</strong></p>
        <p>“The hum of the riff is accompanied by a fearsome fuzz as the deafening rhythm section kicks in” – <strong style="color: black;">GHOST CULT MAGAZINE</strong></p>
        <p>“L’un des meilleurs albums doom de ces dernières années” – <strong style="color: black;">DESERT-ROCK</strong></p>
    </div>
    `
};

function updatesText() {
    searchP.innerHTML = 
    `
    <div id="container-twitter-updates">
        <img src="../assets/icons/faviconTwitterBlue.png" alt="twitter favicon">
        <p>Our Twitter feed is currently unavailable but you can visit our official twitter page <a href="https://twitter.com/witchfinderdoom" target="_blank">@witchfinderdoom.</a> </p>
    </div>
    `
};