// 1er etape : création d'un tableau pour push()à l'intérieur--
const productsList = [];

// 1er étape : on va créer 6 class corespond à 6 groupes de music-----

class Products {
  
  scr;
  title;
  price;
  constructor(src, title, price) {
    this.src = src;
    this.title = title;
    this.price = price;
  }

  // les getters
  getSrc() {
    return this.src;
  }

  getTitle() {
    return this.title;
  }

  getPrice() {
    return this.price;
  }

  

  // les setters
  setSrc(src) {
    this.src = src;
    return this;
  }
  setDescription(desc) {
    this.title = desc;
    return this;
  }
  setPrice(price) {
    this.price = price;
    return this;
  }

  
  // Nous pourrons rajouter d'autres méthodes ----
}

// 2ème étapes  : Inctanciation d'objets-----

//Instanciattion 1er objet------

const productsWitchfinde1 = new Products(
  "../drive-download-20220523T111720Z-001/Witchfinder/WITCHFINDER DOUBLE VINYL ALBUM HAZY RITES/hazyrites-black-LP.jpg",
  "WITCHFINDER Hazy Rites LP",
  "15",
);
const productsWitchfinde2 = new Products(
  "../drive-download-20220523T111720Z-001/Witchfinder/WITCHFINDER DOUBLE VINYL ALBUM HAZY RITES/hazyrites-green-LP.jpg",
  "WITCHFINDER Hazy Rites Double Vinyl Green",
  "25",

);
const productsWitchfinde3 = new Products(
  "../drive-download-20220523T111720Z-001/Witchfinder/WITCHFINDER DOUBLE VINYL ALBUM HAZY RITES/hazyrites-yellow-JP.jpg",
  "WITCHFINDER Hazy Rites Double Vinyl Yellow",
  "25"
);
const productsWitchfinde4 = new Products(
  "../drive-download-20220523T111720Z-001/Witchfinder/WITCHFINDER DOUBLE VINYL ALBUM HAZY RITES/witchfinder-back.jpg",
  "WITCHFINDER Hazy Rites Double Vinyl Black",
  "28"
);

const productsWitchfinde6 = new Products(
  "../drive-download-20220523T111720Z-001/MARS RED SKY/M.R.S CUSTOM©. FUZZ I LOW TUNINGS/pedal1.jpg",
  "M.R.S CUSTOM©. FUZZ I LOW TUNINGS",
  "195"
);
const productsWitchfinde7 = new Products(
  "../drive-download-20220523T111720Z-001/MARS RED SKY/M.R.S CUSTOM©. FUZZ II GUITAR FUZZ/pedal-green1.jpg",
  "M.R.S CUSTOM©. FUZZ II GUITAR FUZZ",
  "195"
);
const productsWitchfinde8 = new Products(
  "../drive-download-20220523T111720Z-001/MARS RED SKY/MARS RED SKY CASSETTE EP COLLECTOR/k7_verso_MRS-collectorEP.jpg",
  "MARS RED SKY CASSETTE EP Collector K7",
  "15"
);
const productsWitchfinde9 = new Products(
  "../drive-download-20220523T111720Z-001/MARS RED SKY/MARS RED SKY CASSETTE EP COLLECTOR/MRS-K7.jpg",
  "MARS RED SKY CASSETTE",
  "22"
);

const productsWitchfinde10 = new Products(
  "../drive-download-20220523T111720Z-001/MARS RED SKY/MARS RED SKY CASSETTE EP COLLECTOR/Collector-EP-cover.jpg",
  "MARS RED SKY CASSETTE EP COLLECTOR",
  "22"
);
const productsWitchfinde11 = new Products(
  "../drive-download-20220523T111720Z-001/MARS RED SKY/MARS RED SKY VINYL ALBUM DEBUT ALBUM/debut-cover.jpg",
  "MARS RED SKY VINYL ALBUM DEBUT ALBUM",
  "24"
);
const productsWitchfinde12 = new Products(
  "../drive-download-20220523T111720Z-001/MARS RED SKY/MARS RED SKY VINYL ALBUM DEBUT ALBUM/DEBUT-LP.jpg",
  "MARS RED SKY VINYL ALBUM DEBUT ALBUM LP ",
  "25"
);
const productsWitchfinde5 = new Products(
  "../drive-download-20220523T111720Z-001/Witchfinder/WITCHFINDER DOUBLE VINYL ALBUM HAZY RITES/witchfinder-cover.jpg",
  "WITCHFINDER DOUBLE VINYL ALBUM HAZY RITES",
  "25"
);

productsList.push(
  productsWitchfinde1,
  productsWitchfinde2,
  productsWitchfinde3,
  productsWitchfinde4,
  productsWitchfinde5,
  productsWitchfinde6,
  productsWitchfinde7,
  productsWitchfinde8,
  productsWitchfinde9,
  productsWitchfinde10,
  productsWitchfinde11,
  productsWitchfinde12
);

// 3 ème étape : boucle sur le tableau puis injection dans le HTML--

  const bandContainer = document.querySelector("#band-container");
  

 

 

const productsContainer = document.querySelector("#products-container");
function displayWitch() {
  productsContainer.innerHTML = "";
  bandContainer.innerHTML = `
  
  <div class="container-1">
            <div class="imgGroup">
                  <img src="../assets/Witchfinder-hero.jpg" alt="Groupe Witchfinder">
            </div>
            <div class="description">
                  <h3>WITCHFINDER</h3>
                  <p>Clément Mostefai (bass, vocals)
                      Stanislas Franczak (guitar)
                      Thomas Dupuy (drums).</p>
            </div>
            <div class ="location">
                  <h3>Location</h3>
                  <p>Clermont-Ferrand, France.</p>
            </div>
            <div class ="genre">
                    <h3>GENRE</h3>
                    <p>Doom, Heavy Psych</p>
            </div>

            <div>
                <h3>Socials</h3>
                <div class="link-icons">
                  <a href="https://www.facebook.com/mrsredsound33"><img src="../assets/icons/facebook-1.png" alt="facebook"></a>
                  <a href="https://www.instagram.com/mrsredsound/"><img src="../assets/icons/instagram.png" alt="instagram"></a>
                  <a href="https://twitter.com/mrsredsound"><img src="../assets/icons/twitter-1.png" alt="twitter"></a>
                  <a href="https://mailchi.mp/1dd7b6114fdb/mrs-red-sound-newsletter"><img src="../assets/icons/mail.png" alt="mailchimp"></a>
                </div>
            </div>
  </div>`
  for (let i = 0; i < productsList.length; i++) {
    productsContainer.innerHTML += `
  <div class="product">
        <img src="${productsList[i].src}" alt="${productsList[i].title}">
        <button class = "styled" type="input" onclick = "basketWich()">Add to Cart</button>

        <div>
          <h3>${productsList[i].title}</h3>
          <h4>${productsList[i].price + " €"}</h4>
        </div>
  </div>
  
  `;
  }
}

//Instanciation 2ème objet-------

const productsMarsRed1 = new Products(
  "../drive-download-20220523T111720Z-001/MARS RED SKY/MARS RED SKY VINYL ALBUM STRANDED IN ARCADIA/Arcadia-cover.jpg",
  "MARS RED SKY VINYL ALBUM STRANDED IN ARCADIA Vinyl Black",
  "25"
);
const productsMarsRed2 = new Products(
  "../drive-download-20220523T111720Z-001/MARS RED SKY/MARS RED SKY VINYL ALBUM STRANDED IN ARCADIA/Arcadia-yellow-LP.jpg",
  "MARS RED SKY VINYL ALBUM STRANDED IN ARCADIA Vinyl Yellow",
  "25"
);
const productsMarsRed3 = new Products(
  "../drive-download-20220523T111720Z-001/MARS RED SKY/MARS RED SKY CD DIGISLEEVE THE TASK ETERNAL/back-GATEFOLD.jpg",
  "MARS RED SKY CD DIGISLEEVE THE TASK ETERNAL Gatefold",
  "35"
);
const productsMarsRed4 = new Products(
  "../drive-download-20220523T111720Z-001/MARS RED SKY/MARS RED SKY CD DIGISLEEVE THE TASK ETERNAL/couv-thetasketernal.jpg",
  "MARS RED SKY CD DIGISLEEVE THE TASK ETERNAL",
  "18"
);
const productsMarsRed5 = new Products(
  "../drive-download-20220523T111720Z-001/MARS RED SKY/MARS RED SKY VINYL GATEFOLD THE TASK ETERNAL/TTE-white-LP.jpg",
  "<a href = 'https://marsredsky.bigcartel.com/product/vinyl-album-the-task-eternal'> The Task Eternal</a>",
  "25"
);
const productsMarsRed6 = new Products(
  "../drive-download-20220523T111720Z-001/MARS RED SKY/MARS RED SKY VINYL ALBUM APEX III (PRAISE FOR THE BURNING SOUL)/APEX-LP.jpg",
  "<a href = 'https://marsredsky.bigcartel.com/product/lp-vinyl-apex-iii-praise-for-the-burning-soul'>Anniverssary Reissue I</a>",
  "22"
);
const productsMarsRed7 = new Products(
  "../drive-download-20220523T111720Z-001/MARS RED SKY/MARS RED SKY VINYL ALBUM ANNIVERSARY REISSUE/insideMRS.jpg",
  "MARS RED SKY VINYL ALBUM ANNIVERSARY REISSUE PRAISE FOR THE BURNING SOUL",
  "25"
);
const productsMarsRed8 = new Products(
  "../drive-download-20220523T111720Z-001/MARS RED SKY/MARS RED SKY VINYL ALBUM ANNIVERSARY REISSUE/reissue-mockup.jpg",
  "MARS RED SKY VINYL ALBUM ANNIVERSARY REISSUE II",
  "22"
);
const productsMarsRed9 = new Products(
  "../drive-download-20220523T111720Z-001/MRS RED SOUND/MRS-RedSound-Records-serigraphie.jpg",
  "MRS Records Serigraphie",
  "21"
);
const productsMarsRed10 = new Products(
  "../drive-download-20220523T111720Z-001/MARS RED SKY/MARS RED SKY CD ALBUM APEX III (PRAISE FOR THE BURNING SOUL)/MRS-fullcover.jpg",
  "MARS RED SKY CD ALBUM APEX III Praise For The Burning Soul ",
  "15"
);
const productsMarsRed11 = new Products(
  "../drive-download-20220523T111720Z-001/MARS RED SKY/MARS RED SKY CD ALBUM STRANDED IN ARCADIA/strandedinarcadia-MRS.jpg",
  "MARS RED SKY CD Stranded In Arcadia ",
  "15"
);
const productsMarsRed12 = new Products(
  "../drive-download-20220523T111720Z-001/MARS RED SKY/MARS RED SKY COBRA T-SHIRT/motif-cobra.jpg",
  "MARS RED SKY Tee-shirt Cobra Motif ",
  "10"
);

const productsMars = [];
productsMars.push(
  productsMarsRed1,
  productsMarsRed2,
  productsMarsRed3,
  productsMarsRed4,
  productsMarsRed5,
  productsMarsRed6,
  productsMarsRed7,
  productsMarsRed8,
  productsMarsRed9,
  productsMarsRed10,
  productsMarsRed11,
  productsMarsRed12
);
function displayMars() {
  productsContainer.innerHTML = "";
  bandContainer.innerHTML = `
  <div class="container-2">
                    <div class="imgGroup">
                          <img src="../assets/Mars-red-sky-hero.jpg" alt="Groupe MARS RED SKY">
                    </div>
                    <div class="description">
                          <h3>MARS RED SKY</h3>
                          <p>Julien Pras (vocals, guitar)
                            Jimmy Kinast (Bass, vocals)
                            MatGaz (drums)<br><br><strong>FOLLOW ON SPOTIFY</strong>.</p>
                    </div>
                    <div class ="location">
                          <h3>LOCATION</h3>
                          <p>Bordeaux, France.</p>
                    </div>
                    <div class ="genre">
                          <h3>GENRE</h3>
                          <p>Heavy Psych</p>
                    </div>
                    
                    <div>
                        <h3>SOCIALS</h3>
                        <div class="link-icons">
                          <a href="https://www.facebook.com/mrsredsound33"><img src="../assets/icons/facebook-1.png" alt="facebook"></a>
                          <a href="https://www.instagram.com/mrsredsound/"><img src="../assets/icons/instagram.png" alt="instagram"></a>
                          <a href="https://twitter.com/mrsredsound"><img src="../assets/icons/twitter-1.png" alt="twitter"></a>
                          <a href="https://mailchi.mp/1dd7b6114fdb/mrs-red-sound-newsletter"><img src="../assets/icons/mail.png" alt="mailchimp"></a>
                        </div>
                    </div>
    </div>`
  for (let i = 0; i < productsMars.length; i++) {
    productsContainer.innerHTML += `
    <div class="product">
          <img src="${productsMars[i].src}" alt="${productsMars[i].title}">
          <button class = "styled" type="input" onclick = "basketMars()">Add to Cart</button>

          <div>
            <h3>${productsMars[i].title}</h3>
            <h4>${productsMars[i].price + " €"}</h4>
          </div>
    </div>
    `;
  }
}
// Instanciation 3ème objet-------

const productsDataCha1 = new Products(
  "../drive-download-20220523T111720Z-001/DÄTCHA MANDALA/BUNDLE DÄTCHA MANDALA CD DIGISLEEVE + T-SHIRT/livret-12-pages.jpg",
  "Dätcha Mandala CD DigiSleeve + T-Shirt",
  "28"
);
const productsDataCha2 = new Products(
  "../drive-download-20220523T111720Z-001/DÄTCHA MANDALA/BUNDLE DÄTCHA MANDALA CD DIGISLEEVE + T-SHIRT/bundleCDTS.jpg",
  "Dätcha Mandala CD DigiSleeve + T-Shirt",
  "28"
);
const productsDataCha3 = new Products(
  "../drive-download-20220523T111720Z-001/DÄTCHA MANDALA/BUNDLE DÄTCHA MANDALA CD DIGISLEEVE + T-SHIRT/bundleCDDB.jpg",
  "Dätcha Mandala CD DigiSleeve I ",
  "20"
);
const productsDataCha4 = new Products(
  "../drive-download-20220523T111720Z-001/DÄTCHA MANDALA/DÄTCHA MANDALA - GATEFOLD VINYL ALBUM ROKH/DM-vinyl-rokh.jpg",
  "<a href ='https://marsredsky.bigcartel.com/product/datcha-mandala-lp-rock-vinyl-gatefold'>Mandala CD DigiSleeve II </a>",
  "20"
);
const productsDataCha5 = new Products(
  "../drive-download-20220523T111720Z-001/DÄTCHA MANDALA/DÄTCHA MANDALA - VINYL EP ANÂHATA/ANAHATA-LP.jpg",
  "Dätcha Mandala Vinyl EP Anahata I",
  "22"
);
const productsDataCha6 = new Products(
  "../drive-download-20220523T111720Z-001/DÄTCHA MANDALA/DÄTCHA MANDALA - VINYL EP ANÂHATA/cover-DM.jpg",
  "Dätcha Mandala Vinyl EP Anahata II ",
  "22"
);
const productsDataCha7 = new Products(
  "../drive-download-20220523T111720Z-001/DÄTCHA MANDALA/DÄTCHA MANDALA CD BUNDLE/bundle-CD.jpg",
  "Dätcha Mandala CD bundle I",
  "20"
);
const productsDataCha8 = new Products(
  "../drive-download-20220523T111720Z-001/DÄTCHA MANDALA/DÄTCHA MANDALA CD BUNDLE/CD-TheLastDrop.jpg",
  "Dätcha Mandala CD bundle II ",
  "20"
);
const productsDataCha9 = new Products(
  "../drive-download-20220523T111720Z-001/DÄTCHA MANDALA/DÄTCHA MANDALA CD BUNDLE/HARA-CD.jpg",
  "<a href ='https://marsredsky.bigcartel.com/product/datcha-mandala-preorders-cd-digisleeve-album-hara'>Mandala CD Hara </a>",
  "13"
);
const productsDataCha10 = new Products(
  "../drive-download-20220523T111720Z-001/DÄTCHA MANDALA/DÄTCHA MANDALA CD BUNDLE/ROKH-CD.jpg",
  "Dätcha Mandala CD Rock ",
  "20"
);
const productsDataCha11 = new Products(
  "../drive-download-20220523T111720Z-001/DÄTCHA MANDALA/DÄTCHA MANDALA CD DIGISLEEVE ALBUM HARA/DatchaMandala-CD.jpg",
  "Dätcha Mandala CD DigiSleeve Hara ",
  "18"
);
const productsDataCha12 = new Products(
  "../drive-download-20220523T111720Z-001/DÄTCHA MANDALA/DÄTCHA MANDALA CD DIGISLEEVE ALBUM HARA/DatchaMandala.jpg",
  "Dätcha Mandala CD DigiSleeve Rock",
  "20"
);

const productsData = [];
productsData.push(
  productsDataCha1,
  productsDataCha2,
  productsDataCha3,
  productsDataCha4,
  productsDataCha5,
  productsDataCha6,
  productsDataCha7,
  productsDataCha8,
  productsDataCha9,
  productsDataCha10,
  productsDataCha11,
  productsDataCha12
);

function displayDatacha() {
  productsContainer.innerHTML = "";
  bandContainer.innerHTML = `
  <div class="container-3">
                    <div class="imgGroup" style="margin-top: 20em;">
                          <img src="../assets/datcha-mandala.jpg" alt="Groupe DÄTCHA MANDALA">
                    </div>
                    <div class="description">
                          <h3>DÄTCHA MANDALA</h3>
                          <p>Nicolas Sauvey (vocals, bass, harmonica)
                          Jérémy Saigne (guitar, vocals)
                          Jean-Baptise Mallet (drums, vocals)<br><br><strong>FOLLOW ON SPOTIFY</strong>.</p>
                    </div>
                    <div class ="location">
                          <h3>LOCATION</h3>
                          <p>Bordeaux, France.</p>
                    </div>
                    <div class ="genre">
                          <h3>GENRE</h3>
                          <p>Classic Rock, Heavy blues, Heavy Psych</p>
                    </div>
                    
                    <div>
                        <h3>SOCIALS</h3>
                        <div class="link-icons">
                          <a href="https://www.facebook.com/mrsredsound33"><img src="../assets/icons/facebook-1.png" alt="facebook"></a>
                          <a href="https://www.instagram.com/mrsredsound/"><img src="../assets/icons/instagram.png" alt="instagram"></a>
                          <a href="https://twitter.com/mrsredsound"><img src="../assets/icons/twitter-1.png" alt="twitter"></a>
                          <a href="https://mailchi.mp/1dd7b6114fdb/mrs-red-sound-newsletter"><img src="../assets/icons/mail.png" alt="mailchimp"></a>
                        </div>
                    </div>
    </div>`
  for (let i = 0; i < productsData.length; i++) {
    productsContainer.innerHTML += `
    <div class="product">
          <img src="${productsData[i].src}" alt="${productsData[i].title}">
          <button class = "styled" type="input">Add to Cart</button>

          <div>
            <h3>${productsData[i].title}</h3>
            <h4>${productsData[i].price + " €"}</h4>
          </div>
    </div>
    `;
  }
}
// Instanciation 4ème objet-------

const productsBaron1 = new Products(
  "../drive-download-20220523T111720Z-001/BARON CRÂNE/BARON CRÂNE CD DIGISLEEVE LES BEAUX JOURS/back.jpg",
  "Baron Crâne CD DigiSleeve Les Beaux Jours I",
  "22"
);
const productsBaron2 = new Products(
  "../drive-download-20220523T111720Z-001/BARON CRÂNE/BARON CRÂNE CD DIGISLEEVE LES BEAUX JOURS/BaronCrane-LesBeauxJours.jpg",
  "Baron Crâne CD DigiSleeve Les Beaux Jours II",
  "23"
);
const productsBaron3 = new Products(
  "../drive-download-20220523T111720Z-001/BARON CRÂNE/BARON CRÂNE VINYL ALBUM COMMOTIONS/Commotions-BaronCrane-Artwork-FlorineSamson.jpg",
  "Baron Crâne Vinyl Album Commotions",
  "21"
);
const productsBaron4 = new Products(
  "../drive-download-20220523T111720Z-001/BARON CRÂNE/BARON CRÂNE VINYL ALBUM COMMOTIONS/Commotions-BluesLP.jpg",
  "Baron Crâne Album Commotions Blues",
  "22"
);
const productsBaron5 = new Products(
  "../drive-download-20220523T111720Z-001/BARON CRÂNE/BARON CRÂNE VINYL ALBUM COMMOTIONS/Verso-Commotions-BC.jpg",
  "Baron Crâne Album Commotions Verso",
  "20"
);
const productsBaron6 = new Products(
  "../drive-download-20220523T111720Z-001/BARON CRÂNE/BARON CRÂNE CD DIGISLEEVE LES BEAUX JOURS/back.jpg",
  "Baron Crâne CD DigiSleeve les beaux jours I",
  "22"
);
const productsBaron7 = new Products(
  "../drive-download-20220523T111720Z-001/BARON CRÂNE/BARON CRÂNE VINYL GATEFOLD LES BEAUX JOURS/BaronCrane_LP.jpg",
  "<a href ='https://marsredsky.bigcartel.com/product/baron-crane-vinyl-gatefold-les-beaux-jours'>Vinyl  Gatefold les beaux jours</a>",
  "22"
);
const productsBaron8 = new Products(
  "../drive-download-20220523T111720Z-001/MARS RED SKY/MARS RED SKY TOTE-BAG/totebag.jpg",
  "MARS RED SKY Tote-bag",
  "15"
);
const productsBaron9 = new Products(
  "../drive-download-20220523T111720Z-001/MARS RED SKY/MARS RED SKY ZIP HOODIE/MRS-hoodie-back-red.jpg",
  "MARS RED SKY Zip HOODIE Red",
  "45"
);
const productsBaron10 = new Products(
  "../drive-download-20220523T111720Z-001/MARS RED SKY/MARS RED SKY ZIP HOODIE/MRS-hoodie-back.jpg",
  "MARS RED SKY Zip HOODIE Gray ",
  "45"
);
const productsBaron11 = new Products(
  "../drive-download-20220523T111720Z-001/MARS RED SKY/MARS RED SKY ZIP HOODIE/MRS-hoodie-front.jpg",
  "MARS RED SKY Zip HOODIE Black ",
  "45"
);
const productsBaron12 = new Products(
  "../drive-download-20220523T111720Z-001/MARS RED SKY/MARS RED SKY T-SHIRT ZEUS/Tshirt-Zeus.jpg",
  "MARS RED SKY T-Shirt Zeus",
  "25"
);

const productsBaron = [];
productsBaron.push(
  productsBaron1,
  productsBaron2,
  productsBaron3,
  productsBaron4,
  productsBaron5,
  productsBaron6,
  productsBaron7,
  productsBaron8,
  productsBaron9,
  productsBaron10,
  productsBaron11,
  productsBaron12
);

function displayBaron() {
  productsContainer.innerHTML = "";
  bandContainer.innerHTML = `
  <div class="container-4">
                    <div class="imgGroup">
                          <img src="../assets/Baron-Crane_Crédits_Emilie-Mauger03.jpg" alt="Groupe BARON CRÂNE">
                    </div>
                    <div class="description">
                          <h3>BARON CRÂNE</h3>
                          <p>Léo Pinon-Chaby (guitar)
                          Léo Goizet (drums)
                          Olivier Pain (bass)<br><br><strong>FOLLOW ON SPOTIFY</strong>.</p>
                    </div>
                    <div class ="location">
                          <h3>LOCATION</h3>
                          <p>Bordeaux, France.</p>
                    </div>
                    <div class ="genre">
                          <h3>GENRE</h3>
                          <p>Heavy Psych, Jazz Fusion, Progressive</p>
                          <h3>WEBSITE</h3>
                          <a href="https://www.baroncrane.com/"><p style="color:red;"> https://www.baroncrane.com/</p></a>
                    </div>
                    
                    <div>
                        <h3>SOCIALS</h3>
                        <div class="link-icons">
                          <a href="https://www.facebook.com/mrsredsound33"><img src="../assets/icons/facebook-1.png" alt="facebook"></a>
                          <a href="https://www.instagram.com/mrsredsound/"><img src="../assets/icons/instagram.png" alt="instagram"></a>
                          <a href="https://twitter.com/mrsredsound"><img src="../assets/icons/twitter-1.png" alt="twitter"></a>
                          <a href="https://mailchi.mp/1dd7b6114fdb/mrs-red-sound-newsletter"><img src="../assets/icons/mail.png" alt="mailchimp"></a>
                        </div>
                    </div>
    </div>`

  for (let i = 0; i < productsBaron.length; i++) {
    productsContainer.innerHTML += `
    <div class="product">
          <img src="${productsBaron[i].src}" alt="${productsBaron[i].title}">
          <button class = "styled" type="input">Add to Cart</button>

          <div>
            <h3>${productsBaron[i].title}</h3>
            <h4>${productsBaron[i].price + " €"}</h4>
          </div>
    </div>
    `;
  }
}

// Iniciation 5ème objet ----

const productsLittleJimi1 = new Products(
  "../drive-download-20220523T111720Z-001/LITTLE JIMI/LITTLE JIMI - VINYL ALBUM EP.1/JP-back.jpg",
  "LITTLE JIMI Vinyl Album EP ",
  "27"
);
const productsLittleJimi2 = new Products(
  "../drive-download-20220523T111720Z-001/LITTLE JIMI/LITTLE JIMI - VINYL ALBUM EP.1/LJ-cover.jpg",
  "<a href='https://marsredsky.bigcartel.com/product/little-jimi-lp-album-vinyl-ep1'>Vinyl Album EP</a> ",
  "15"
);
const productsLittleJimi3 = new Products(
  "../drive-download-20220523T111720Z-001/LITTLE JIMI/LITTLE JIMI - VINYL ALBUM EP.1/LJ-picture.jpg",
  "LITTLE JIMI Vinyl Album EP I",
  "27"
);
const productsLittleJimi4 = new Products(
  "../drive-download-20220523T111720Z-001/LITTLE JIMI/LITTLE JIMI - VINYL ALBUM EP.1/LJ-tour.jpg",
  "LITTLE JIMI Vinyl Album EP II",
  "25"
);
const productsLittleJimi5 = new Products(
  "../drive-download-20220523T111720Z-001/LITTLE JIMI/LITTLE JIMI - VINYL ALBUM EP.1/LJ-vinyl-1.jpg",
  "LITTLE JIMI Vinyl Album EP I",
  "27"
);
const productsLittleJimi6 = new Products(
  "../drive-download-20220523T111720Z-001/LITTLE JIMI/LITTLE JIMI VINYL ALBUM THE CANTOS/Little-Jimi-artwork.jpg",
  "LITTLE JIMI The Cantos Vinyl",
  "26"
);
const productsLittleJimi7 = new Products(
  "../drive-download-20220523T111720Z-001/MARS RED SKY/VINYL EP MYRAMYD/immustration.jpg",
  "LITTLE JIMI Vinyl EP MYRAMYD I ",
  "25"
);
const productsLittleJimi8 = new Products(
  "../drive-download-20220523T111720Z-001/MARS RED SKY/VINYL EP MYRAMYD/Myramyd-back.jpg",
  "LITTLE JIMI Vinyl EP MYRAMYD II ",
  "22"
);
const productsLittleJimi9 = new Products(
  "../drive-download-20220523T111720Z-001/MARS RED SKY/VINYL EP MYRAMYD/MYRAMYD-LP.jpg",
  "LITTLE JIMI Vinyl EP MYRAMYD III ",
  "25"
);
const productsLittleJimi10 = new Products(
  "../drive-download-20220523T111720Z-001/MARS RED SKY/MARS RED SKY VINYL ALBUM STRANDED IN ARCADIA/Arcadia-cover.jpg",
  "MARS RED SKY Stranded In Arcadia Vinyl Album I ",
  "22"
);
const productsLittleJimi11 = new Products(
  "../drive-download-20220523T111720Z-001/MARS RED SKY/MARS RED SKY VINYL ALBUM STRANDED IN ARCADIA/Arcadia-yellow-LP.jpg",
  "MARS RED SKY Stranded In Arcadia Vinyl Album II ",
  "22"
);
const productsLittleJimi12 = new Products(
  "../drive-download-20220523T111720Z-001/LITTLE JIMI/LITTLE JIMI VINYL ALBUM THE CANTOS/Little-Jimi-vinyl.jpg",
  "<a href ='https://marsredsky.bigcartel.com/product/little-jimi-vinyl-album-the-cantos'>Vinyl Album EP </a>",
  "20"
);

const productsLittle = [];
productsLittle.push(
  productsLittleJimi1,
  productsLittleJimi2,
  productsLittleJimi3,
  productsLittleJimi4,
  productsLittleJimi5,
  productsLittleJimi6,
  productsLittleJimi7,
  productsLittleJimi8,
  productsLittleJimi9,
  productsLittleJimi10,
  productsLittleJimi11,
  productsLittleJimi12
);

function displayLittleJimi() {
  productsContainer.innerHTML = "";
  bandContainer.innerHTML = `
  <div class="container-5">
                    <div class="imgGroup">
                          <img src="../assets/little-jimi.jpg" alt="Groupe LITTLE JIMI">
                    </div>
                    <div class="description">
                          <h3>LITTLE JIMI</h3>
                          <p>Benjamin Monnereau (vocals – guitar)
                          Guillaume Arancibia (guitar, backing vocals)
                          Antoine Le Gall (drums)<br><br><strong>FOLLOW ON SPOTIFY</strong>.</p>
                    </div>
                    <div class ="location">
                          <h3>LOCATION</h3>
                          <p>Bordeaux, France.</p>
                    </div>
                    <div class ="genre">
                          <h3>GENRE</h3>
                          <p>Heavy Psych, Progressive, Rock</p>
                    </div>
                    
                    <div>
                        <h3>SOCIALS</h3>
                        <div class="link-icons">
                          <a href="https://www.facebook.com/mrsredsound33"><img src="../assets/icons/facebook-1.png" alt="facebook"></a>
                          <a href="https://www.instagram.com/mrsredsound/"><img src="../assets/icons/instagram.png" alt="instagram"></a>
                          <a href="https://twitter.com/mrsredsound"><img src="../assets/icons/twitter-1.png" alt="twitter"></a>
                          <a href="https://mailchi.mp/1dd7b6114fdb/mrs-red-sound-newsletter"><img src="../assets/icons/mail.png" alt="mailchimp"></a>
                        </div>
                    </div>
    </div>`

  for (let i = 0; i < productsLittle.length; i++) {
    productsContainer.innerHTML += `
    <div class="product">
          <img src="${productsLittle[i].src}" alt="${productsLittle[i].title}">
          <button class = "styled" type="input">Add to Cart</button>

          <div>
            <h3>${productsLittle[i].title}</h3>
            <h4>${productsLittle[i].price + " €"}</h4>
            </div>
    </div>
    `;
  }
}

//  Instanciation 6ème Objet------

const productsRedSun1 = new Products(
  "./Red Sun Atacama/PREORDER RED SUN ATACAMA CD ALBUM DARWIN/Darwin-CD.jpg",
  "<a href ='https://marsredsky.bigcartel.com/product/red-sun-atacama-cd-album-darwin'>CD Darwin I</a>",
  "13"
);
const productsRedSun2 = new Products(
  "./MARS RED SKY/MARS RED SKY CD ALBUM STRANDED IN ARCADIA/Strandedinarcadia-MRS2.jpg",
  "MARS RED SKY Standed In Arcadia CD III",
  "15"
);

const productsRedSun3 = new Products(
  "../drive-download-20220523T111720Z-001/Red Sun Atacama/PREORDER RED SUN ATACAMA CD ALBUM DARWIN/Darwin-LP-back.jpg",
  "Red Sun Atacama CD Darwin III",
  "27"
);
const productsRedSun4 = new Products(
  "../drive-download-20220523T111720Z-001/VICTORY HALL/VICTORY HALL VINYL ALBUM THE SOMEDAY HERALD/victoryhall-back.jpg",
  "VICTORY HALL The somme day herald I",
  "28"
);
const productsRedSun5 = new Products(
  "../drive-download-20220523T111720Z-001/VICTORY HALL/VICTORY HALL VINYL ALBUM THE SOMEDAY HERALD/victoryhall-booklet.jpg",
  "VICTORY HALL The somme day herald II",
  "27"
);
const productsRedSun6 = new Products(
  "../drive-download-20220523T111720Z-001/VICTORY HALL/VICTORY HALL VINYL ALBUM THE SOMEDAY HERALD/victoryhall-vinyl.jpg",
  "VICTORY HALL The somme day herald III",
  "23"
);
const productsRedSun7 = new Products(
  "../drive-download-20220523T111720Z-001/MARS RED SKY/MARS RED SKY VINYL GATEFOLD THE TASK ETERNAL/back-GATEFOLD.jpg",
  "MARS RED SKY Gatefold the Task Eternal I",
  "21"
);
const productsRedSun8 = new Products(
  "../drive-download-20220523T111720Z-001/MARS RED SKY/MARS RED SKY CD ALBUM STRANDED IN ARCADIA/strandedinarcadia-MRS.jpg",
  "MARS RED SKY STRANDED IN ARCADIA",
  "27"
);
const productsRedSun9 = new Products(
  "../drive-download-20220523T111720Z-001/MARS RED SKY/MARS RED SKY VINYL GATEFOLD THE TASK ETERNAL/TTE-white-LP.jpg",
  "MARS RED SKY Gatefold the Task Eternal III",
  "27"
);
const productsRedSun10 = new Products(
  "../drive-download-20220523T111720Z-001/MARS RED SKY/MARS RED SKY CD ALBUM STRANDED IN ARCADIA/Stranded-cd.jpg",
  "MARS RED SKY Standed In Arcadia I",
  "22"
);
const productsRedSun11 = new Products(
  "../drive-download-20220523T111720Z-001/MARS RED SKY/MARS RED SKY CD ALBUM STRANDED IN ARCADIA/Strandedinarcadia-MRS.jpg",
  "MARS RED SKY Standed In Arcadia II",
  "18"
);
const productsRedSun12 = new Products(
  "../drive-download-20220523T111720Z-001/Red Sun Atacama/PREORDER RED SUN ATACAMA CD ALBUM DARWIN/Darwin-cover.jpg",
  "Red Sun Atacama CD Darwin II",
  "27"
);


const productsRedSun = [];
productsRedSun.push(
  productsRedSun1,
  productsRedSun2,
  productsRedSun3,
  productsRedSun4,
  productsRedSun5,
  productsRedSun6,
  productsRedSun7,
  productsRedSun8,
  productsRedSun9,
  productsRedSun10,
  productsRedSun11,
  productsRedSun12
);

function displayRedSun() {
  productsContainer.innerHTML = "";
  bandContainer.innerHTML = `
  <div class="container-6">
                    <div class="imgGroup">
                          <img src="../assets/RedSunAtacama.png" alt="Groupe RED SUN ATACAMA">
                    </div>
                    <div class="description">
                          <h3>RED SUN ATACAMA</h3>
                          <p>Clément Marquez: bass, vocals
                          Robin Caillon: drums
                          Vincent Hospital: guitar, keyboard<br><br><strong>FOLLOW ON SPOTIFY</strong>.</p>
                    </div>
                    <div class ="location">
                          <h3>LOCATION</h3>
                          <p>Paris / Bordeaux</p>
                    </div>
                    <div class ="genre">
                          <h3>GENRE</h3>
                          <p>Heavy Psych</p>
                          <h3>WEBSITE</h3>
                          <a href="https://elsolrojodeatacama.bandcamp.com"><p style="color:red;">https://elsolrojodeatacama.bandcamp.com</p></a>

                    </div>
                    
                    <div>
                        <h3>SOCIALS</h3>
                        <div class="link-icons">
                          <a href="https://www.facebook.com/mrsredsound33"><img src="../assets/icons/facebook-1.png" alt="facebook"></a>
                          <a href="https://www.instagram.com/mrsredsound/"><img src="../assets/icons/instagram.png" alt="instagram"></a>
                          <a href="https://twitter.com/mrsredsound"><img src="../assets/icons/twitter-1.png" alt="twitter"></a>
                          <a href="https://mailchi.mp/1dd7b6114fdb/mrs-red-sound-newsletter"><img src="../assets/icons/mail.png" alt="mailchimp"></a>
                        </div>
                    </div>
    </div>`

  

  for (let i = 0; i < productsRedSun.length; i++) {
    productsContainer.innerHTML += `
    <div class="product">
          <img src="${productsRedSun[i].src}" alt="${productsRedSun[i].title}">
          <button class = "styled" type="input">Add to Cart</button>

          <div>
            <h3>${productsRedSun[i].title}</h3>
            <h4>${productsRedSun[i].price + " €"}</h4>
            </div>
    </div>
    `;
  }
}
