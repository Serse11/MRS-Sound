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
  "./Witchfinder/WITCHFINDER DOUBLE VINYL ALBUM HAZY RITES/hazyrites-black-LP.jpg",
  "Hazy Rites Black",
  "25",
);
const productsWitchfinde2 = new Products(
  "./Witchfinder/WITCHFINDER DOUBLE VINYL ALBUM HAZY RITES/hazyrites-green-LP.jpg",
  "Hazy Rites Green",
  "20",

);
const productsWitchfinde3 = new Products(
  "./Witchfinder/WITCHFINDER DOUBLE VINYL ALBUM HAZY RITES/hazyrites-yellow-JP.jpg",
  "Hazy Rites yellow",
  "22"
);
const productsWitchfinde4 = new Products(
  "./Witchfinder/WITCHFINDER DOUBLE VINYL ALBUM HAZY RITES/witchfinder-back.jpg",
  "Wild Trippin Sorry",
  "28"
);

const productsWitchfinde6 = new Products(
  "./MARS RED SKY/M.R.S CUSTOM©. FUZZ I LOW TUNINGS/pedal1.jpg",
  "Pedal Red Guittare",
  "35"
);
const productsWitchfinde7 = new Products(
  "./MARS RED SKY/M.R.S CUSTOM©. FUZZ II GUITAR FUZZ/pedal-green1.jpg",
  "Pedal Green Guittare",
  "35"
);
const productsWitchfinde8 = new Products(
  "./MARS RED SKY/MARS RED SKY CASSETTE EP COLLECTOR/k7_verso_MRS-collectorEP.jpg",
  "Cassette Collector K7",
  "15"
);
const productsWitchfinde9 = new Products(
  "./MARS RED SKY/MARS RED SKY CASSETTE EP COLLECTOR/MRS-K7.jpg",
  "Cassette Collector",
  "22"
);

const productsWitchfinde10 = new Products(
  "./MARS RED SKY/MARS RED SKY CASSETTE EP COLLECTOR/Collector-EP-cover.jpg",
  "Vinyl Collector",
  "22"
);
const productsWitchfinde11 = new Products(
  "./MARS RED SKY/MARS RED SKY VINYL ALBUM DEBUT ALBUM/debut-cover.jpg",
  "Vinyl Collector ",
  "24"
);
const productsWitchfinde12 = new Products(
  "./MARS RED SKY/MARS RED SKY VINYL ALBUM DEBUT ALBUM/DEBUT-LP.jpg",
  "Vinyl Collector LP ",
  "25"
);
const productsWitchfinde5 = new Products(
  "./Witchfinder/WITCHFINDER DOUBLE VINYL ALBUM HAZY RITES/witchfinder-cover.jpg",
  "Hazy Rites Lives",
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
  bandContainer.innerHTML = `
  
  <div class="container-1">
            <div class="imgGroup">
                  <img src="./images/Witchfinder-hero.jpg" alt="Groupe Witchfinder">
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
                  <a href="https://www.facebook.com/mrsredsound33"><img src="./icons/facebook-1.png" alt="facebook"></a>
                  <a href="https://www.instagram.com/mrsredsound/"><img src="./icons/instagram.png" alt="instagram"></a>
                  <a href="https://twitter.com/mrsredsound"><img src="./icons/twitter-1.png" alt="twitter"></a>
                  <a href="https://mailchi.mp/1dd7b6114fdb/mrs-red-sound-newsletter"><img src="./icons/mail.png" alt="mailchimp"></a>
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
  "./MARS RED SKY/MARS RED SKY VINYL ALBUM STRANDED IN ARCADIA/Arcadia-cover.jpg",
  "Vinyl Arcadia",
  "25"
);
const productsMarsRed2 = new Products(
  "./MARS RED SKY/MARS RED SKY VINYL ALBUM STRANDED IN ARCADIA/Arcadia-yellow-LP.jpg",
  "Started In Arcadia",
  "25"
);
const productsMarsRed3 = new Products(
  "./MARS RED SKY/MARS RED SKY CD DIGISLEEVE THE TASK ETERNAL/back-GATEFOLD.jpg",
  "The Task Eternal ",
  "35"
);
const productsMarsRed4 = new Products(
  "./MARS RED SKY/MARS RED SKY CD DIGISLEEVE THE TASK ETERNAL/couv-thetasketernal.jpg",
  "The Task Eternal",
  "18"
);
const productsMarsRed5 = new Products(
  "./MARS RED SKY/MARS RED SKY VINYL GATEFOLD THE TASK ETERNAL/TTE-white-LP.jpg",
  "<a href = 'https://marsredsky.bigcartel.com/product/vinyl-album-the-task-eternal'> The Task Eternal</a>",
  "25"
);
const productsMarsRed6 = new Products(
  "./MARS RED SKY/MARS RED SKY VINYL ALBUM APEX III (PRAISE FOR THE BURNING SOUL)/APEX-LP.jpg",
  "<a href = 'https://marsredsky.bigcartel.com/product/lp-vinyl-apex-iii-praise-for-the-burning-soul'>Anniverssary Reissue I</a>",
  "22"
);
const productsMarsRed7 = new Products(
  "./MARS RED SKY/MARS RED SKY VINYL ALBUM ANNIVERSARY REISSUE/insideMRS.jpg",
  "PRAISE FOR THE BURNING SOUL",
  "25"
);
const productsMarsRed8 = new Products(
  "./MARS RED SKY/MARS RED SKY VINYL ALBUM ANNIVERSARY REISSUE/reissue-mockup.jpg",
  "Anniverssary Reissue II",
  "22"
);
const productsMarsRed9 = new Products(
  "./MRS RED SOUND/MRS-RedSound-Records-serigraphie.jpg",
  "Rocords Serigraphie",
  "21"
);
const productsMarsRed10 = new Products(
  "./MARS RED SKY/MARS RED SKY CD ALBUM APEX III (PRAISE FOR THE BURNING SOUL)/MRS-fullcover.jpg",
  "CD Praise For The Burning Soul ",
  "15"
);
const productsMarsRed11 = new Products(
  "./MARS RED SKY/MARS RED SKY CD ALBUM STRANDED IN ARCADIA/strandedinarcadia-MRS.jpg",
  "CD Stranded In Arcadia ",
  "15"
);
const productsMarsRed12 = new Products(
  "./MARS RED SKY/MARS RED SKY COBRA T-SHIRT/motif-cobra.jpg",
  "Cobra Motif ",
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
  bandContainer.innerHTML = `
  <div class="container-2">
                    <div class="imgGroup">
                          <img src="./images/Mars-red-sky-hero.jpg" alt="Groupe MARS RED SKY">
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
                          <a href="https://www.facebook.com/mrsredsound33"><img src="./icons/facebook-1.png" alt="facebook"></a>
                          <a href="https://www.instagram.com/mrsredsound/"><img src="./icons/instagram.png" alt="instagram"></a>
                          <a href="https://twitter.com/mrsredsound"><img src="./icons/twitter-1.png" alt="twitter"></a>
                          <a href="https://mailchi.mp/1dd7b6114fdb/mrs-red-sound-newsletter"><img src="./icons/mail.png" alt="mailchimp"></a>
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
  "./DÄTCHA MANDALA/BUNDLE DÄTCHA MANDALA CD DIGISLEEVE + T-SHIRT/livret-12-pages.jpg",
  "Mandala CD DigiSleeve + T-Shirt",
  "28"
);
const productsDataCha2 = new Products(
  "./DÄTCHA MANDALA/BUNDLE DÄTCHA MANDALA CD DIGISLEEVE + T-SHIRT/bundleCDTS.jpg",
  "Mandala CD DigiSleeve + T-Shirt",
  "28"
);
const productsDataCha3 = new Products(
  "./DÄTCHA MANDALA/BUNDLE DÄTCHA MANDALA CD DIGISLEEVE + T-SHIRT/bundleCDDB.jpg",
  "Mandala CD DigiSleeve I ",
  "20"
);
const productsDataCha4 = new Products(
  "./DÄTCHA MANDALA/DÄTCHA MANDALA - GATEFOLD VINYL ALBUM ROKH/DM-vinyl-rokh.jpg",
  "<a href ='https://marsredsky.bigcartel.com/product/datcha-mandala-lp-rock-vinyl-gatefold'>Mandala CD DigiSleeve II </a>",
  "20"
);
const productsDataCha5 = new Products(
  "./DÄTCHA MANDALA/DÄTCHA MANDALA - VINYL EP ANÂHATA/ANAHATA-LP.jpg",
  "Vinyl EP Anahata I",
  "22"
);
const productsDataCha6 = new Products(
  "./DÄTCHA MANDALA/DÄTCHA MANDALA - VINYL EP ANÂHATA/cover-DM.jpg",
  "Vinyl EP Anahata II ",
  "22"
);
const productsDataCha7 = new Products(
  "./DÄTCHA MANDALA/DÄTCHA MANDALA CD BUNDLE/bundle-CD.jpg",
  "Mandala CD bundle I",
  "20"
);
const productsDataCha8 = new Products(
  "./DÄTCHA MANDALA/DÄTCHA MANDALA CD BUNDLE/CD-TheLastDrop.jpg",
  "Mandala CD bundle II ",
  "20"
);
const productsDataCha9 = new Products(
  "./DÄTCHA MANDALA/DÄTCHA MANDALA CD BUNDLE/HARA-CD.jpg",
  "<a href ='https://marsredsky.bigcartel.com/product/datcha-mandala-preorders-cd-digisleeve-album-hara'>Mandala CD Hara </a>",
  "13"
);
const productsDataCha10 = new Products(
  "./DÄTCHA MANDALA/DÄTCHA MANDALA CD BUNDLE/ROKH-CD.jpg",
  "Mandala CD Rock ",
  "20"
);
const productsDataCha11 = new Products(
  "./DÄTCHA MANDALA/DÄTCHA MANDALA CD DIGISLEEVE ALBUM HARA/DatchaMandala-CD.jpg",
  "Mandala CD DigiSleeve Hara ",
  "18"
);
const productsDataCha12 = new Products(
  "./DÄTCHA MANDALA/DÄTCHA MANDALA CD DIGISLEEVE ALBUM HARA/DatchaMandala.jpg",
  "Mandala CD DigiSleeve Rock",
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

  bandContainer.innerHTML = `
  <div class="container-3">
                    <div class="imgGroup">
                          <img src="./images/datcha-mandala.jpg" alt="Groupe DÄTCHA MANDALA">
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
                          <a href="https://www.facebook.com/mrsredsound33"><img src="./icons/facebook-1.png" alt="facebook"></a>
                          <a href="https://www.instagram.com/mrsredsound/"><img src="./icons/instagram.png" alt="instagram"></a>
                          <a href="https://twitter.com/mrsredsound"><img src="./icons/twitter-1.png" alt="twitter"></a>
                          <a href="https://mailchi.mp/1dd7b6114fdb/mrs-red-sound-newsletter"><img src="./icons/mail.png" alt="mailchimp"></a>
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
  "./BARON CRÂNE/BARON CRÂNE CD DIGISLEEVE LES BEAUX JOURS/back.jpg",
  "CD DigiSleeve les beaux jours I",
  "22"
);
const productsBaron2 = new Products(
  "./BARON CRÂNE/BARON CRÂNE CD DIGISLEEVE LES BEAUX JOURS/BaronCrane-LesBeauxJours.jpg",
  "CD DigiSleeve les beaux jours II",
  "23"
);
const productsBaron3 = new Products(
  "./BARON CRÂNE/BARON CRÂNE VINYL ALBUM COMMOTIONS/Commotions-BaronCrane-Artwork-FlorineSamson.jpg",
  "Vinyl Album Commotions",
  "21"
);
const productsBaron4 = new Products(
  "./BARON CRÂNE/BARON CRÂNE VINYL ALBUM COMMOTIONS/Commotions-BluesLP.jpg",
  "Album  Commotions Blues",
  "22"
);
const productsBaron5 = new Products(
  "./BARON CRÂNE/BARON CRÂNE VINYL ALBUM COMMOTIONS/Verso-Commotions-BC.jpg",
  "Album Commotions Verso",
  "20"
);
const productsBaron6 = new Products(
  "./BARON CRÂNE/BARON CRÂNE CD DIGISLEEVE LES BEAUX JOURS/back.jpg",
  "CD DigiSleeve les beaux jours I",
  "22"
);
const productsBaron7 = new Products(
  "./BARON CRÂNE/BARON CRÂNE VINYL GATEFOLD LES BEAUX JOURS/BaronCrane_LP.jpg",
  "<a href ='https://marsredsky.bigcartel.com/product/baron-crane-vinyl-gatefold-les-beaux-jours'>Vinyl  Gatefold les beaux jours</a>",
  "22"
);
const productsBaron8 = new Products(
  "./MARS RED SKY/MARS RED SKY TOTE-BAG/totebag.jpg",
  "TOTE-BAG",
  "15"
);
const productsBaron9 = new Products(
  "./MARS RED SKY/MARS RED SKY ZIP HOODIE/MRS-hoodie-back-red.jpg",
  "Zip HOODIE Red",
  "25"
);
const productsBaron10 = new Products(
  "./MARS RED SKY/MARS RED SKY ZIP HOODIE/MRS-hoodie-back.jpg",
  "Zip HOODIE gray ",
  "45"
);
const productsBaron11 = new Products(
  "./MARS RED SKY/MARS RED SKY ZIP HOODIE/MRS-hoodie-front.jpg",
  "Zip HOODIE black ",
  "45"
);
const productsBaron12 = new Products(
  "./MARS RED SKY/MARS RED SKY T-SHIRT ZEUS/Tshirt-Zeus.jpg",
  "T-Shirt Zeus",
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

  bandContainer.innerHTML = `
  <div class="container-4">
                    <div class="imgGroup">
                          <img src="./images/Baron-Crane_Crédits_Emilie-Mauger03.jpg" alt="Groupe BARON CRÂNE">
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
                          <a href="https://www.facebook.com/mrsredsound33"><img src="./icons/facebook-1.png" alt="facebook"></a>
                          <a href="https://www.instagram.com/mrsredsound/"><img src="./icons/instagram.png" alt="instagram"></a>
                          <a href="https://twitter.com/mrsredsound"><img src="./icons/twitter-1.png" alt="twitter"></a>
                          <a href="https://mailchi.mp/1dd7b6114fdb/mrs-red-sound-newsletter"><img src="./icons/mail.png" alt="mailchimp"></a>
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
  "./LITTLE JIMI/LITTLE JIMI - VINYL ALBUM EP.1/JP-back.jpg",
  "Vinyl Album EP ",
  "27"
);
const productsLittleJimi2 = new Products(
  "./LITTLE JIMI/LITTLE JIMI - VINYL ALBUM EP.1/LJ-cover.jpg",
  "<a href='https://marsredsky.bigcartel.com/product/little-jimi-lp-album-vinyl-ep1'>Vinyl Album EP</a> ",
  "15"
);
const productsLittleJimi3 = new Products(
  "./LITTLE JIMI/LITTLE JIMI - VINYL ALBUM EP.1/LJ-picture.jpg",
  "Vinyl Album EP I",
  "27"
);
const productsLittleJimi4 = new Products(
  "./LITTLE JIMI/LITTLE JIMI - VINYL ALBUM EP.1/LJ-tour.jpg",
  "Vinyl Album EP II",
  "25"
);
const productsLittleJimi5 = new Products(
  "./LITTLE JIMI/LITTLE JIMI - VINYL ALBUM EP.1/LJ-vinyl-1.jpg",
  "Vinyl Album EP ",
  "27"
);
const productsLittleJimi6 = new Products(
  "./LITTLE JIMI/LITTLE JIMI VINYL ALBUM THE CANTOS/Little-Jimi-artwork.jpg",
  "The Cantos ",
  "26"
);
const productsLittleJimi7 = new Products(
  "./MARS RED SKY/VINYL EP MYRAMYD/immustration.jpg",
  "vinyl EP MYRAMYD I ",
  "25"
);
const productsLittleJimi8 = new Products(
  "./MARS RED SKY/VINYL EP MYRAMYD/Myramyd-back.jpg",
  "Vinyl EP MYRAMYD II ",
  "22"
);
const productsLittleJimi9 = new Products(
  "./MARS RED SKY/VINYL EP MYRAMYD/MYRAMYD-LP.jpg",
  "Vinyl EP MYRAMYD III ",
  "25"
);
const productsLittleJimi10 = new Products(
  "./MARS RED SKY/MARS RED SKY VINYL ALBUM STRANDED IN ARCADIA/Arcadia-cover.jpg",
  "Stranded In Arcadia I ",
  "22"
);
const productsLittleJimi11 = new Products(
  "./MARS RED SKY/MARS RED SKY VINYL ALBUM STRANDED IN ARCADIA/Arcadia-yellow-LP.jpg",
  "Stranded In Arcadia II ",
  "22"
);
const productsLittleJimi12 = new Products(
  "./LITTLE JIMI/LITTLE JIMI VINYL ALBUM THE CANTOS/Little-Jimi-vinyl.jpg",
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

  bandContainer.innerHTML = `
  <div class="container-5">
                    <div class="imgGroup">
                          <img src="./images/little-jimi.jpg" alt="Groupe LITTLE JIMI">
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
                          <a href="https://www.facebook.com/mrsredsound33"><img src="./icons/facebook-1.png" alt="facebook"></a>
                          <a href="https://www.instagram.com/mrsredsound/"><img src="./icons/instagram.png" alt="instagram"></a>
                          <a href="https://twitter.com/mrsredsound"><img src="./icons/twitter-1.png" alt="twitter"></a>
                          <a href="https://mailchi.mp/1dd7b6114fdb/mrs-red-sound-newsletter"><img src="./icons/mail.png" alt="mailchimp"></a>
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
  "Standed In Arcadia III",
  "15"
);

const productsRedSun3 = new Products(
  "./Red Sun Atacama/PREORDER RED SUN ATACAMA CD ALBUM DARWIN/Darwin-LP-back.jpg",
  "CD Darwin III",
  "27"
);
const productsRedSun4 = new Products(
  "./VICTORY HALL/VICTORY HALL VINYL ALBUM THE SOMEDAY HERALD/victoryhall-back.jpg",
  "The somme day herald I",
  "28"
);
const productsRedSun5 = new Products(
  "./VICTORY HALL/VICTORY HALL VINYL ALBUM THE SOMEDAY HERALD/victoryhall-booklet.jpg",
  "The somme day herald II",
  "27"
);
const productsRedSun6 = new Products(
  "./VICTORY HALL/VICTORY HALL VINYL ALBUM THE SOMEDAY HERALD/victoryhall-vinyl.jpg",
  "The somme day herald III",
  "23"
);
const productsRedSun7 = new Products(
  "./MARS RED SKY/MARS RED SKY VINYL GATEFOLD THE TASK ETERNAL/back-GATEFOLD.jpg",
  "Gatefold the Task Eternal I",
  "21"
);
const productsRedSun8 = new Products(
  "./MARS RED SKY/MARS RED SKY CD ALBUM STRANDED IN ARCADIA/strandedinarcadia-MRS.jpg",
  "Gatefold the Task Eternal II",
  "27"
);
const productsRedSun9 = new Products(
  "./MARS RED SKY/MARS RED SKY VINYL GATEFOLD THE TASK ETERNAL/TTE-white-LP.jpg",
  "Gatefold the Task Eternal III",
  "27"
);
const productsRedSun10 = new Products(
  "./MARS RED SKY/MARS RED SKY CD ALBUM STRANDED IN ARCADIA/Stranded-cd.jpg",
  "Standed In Arcadia I",
  "22"
);
const productsRedSun11 = new Products(
  "./MARS RED SKY/MARS RED SKY CD ALBUM STRANDED IN ARCADIA/Strandedinarcadia-MRS.jpg",
  "Standed In Arcadia II",
  "18"
);
const productsRedSun12 = new Products(
  "./Red Sun Atacama/PREORDER RED SUN ATACAMA CD ALBUM DARWIN/Darwin-cover.jpg",
  "CD Darwin II",
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

  bandContainer.innerHTML = `
  <div class="container-6">
                    <div class="imgGroup">
                          <img src="./images/RedSunAtacama.png" alt="Groupe RED SUN ATACAMA">
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
                          <a href="https://www.facebook.com/mrsredsound33"><img src="./icons/facebook-1.png" alt="facebook"></a>
                          <a href="https://www.instagram.com/mrsredsound/"><img src="./icons/instagram.png" alt="instagram"></a>
                          <a href="https://twitter.com/mrsredsound"><img src="./icons/twitter-1.png" alt="twitter"></a>
                          <a href="https://mailchi.mp/1dd7b6114fdb/mrs-red-sound-newsletter"><img src="./icons/mail.png" alt="mailchimp"></a>
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
