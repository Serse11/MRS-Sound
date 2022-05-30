class Group {
    link;
    image;
    name;
    typeOfMusic;


    constructor(link, image, name, typeOfMusic) {
        this.link = link;
        this.image = image;
        this.name = name;
        this.typeOfMusic = typeOfMusic;
    }
};

const groupeOne = new Group("../pages/witchfinder.html","../assets/Witchfinder.jpg", "WITCHFINDER", "Doom / Heavy Psych");
const groupeTwo = new Group("../pages/marsRedSky.html","../assets/mars-red-sky.jpg", "MARS RED SKY", "Heavy Psych");
const groupeThree = new Group("../pages/datchaMandala.html","../assets/datcha-mandala-band.jpg", "DÄTCHA MANDALA", "Classic Rock / Heavy blues / Heavy Psych");
const groupeFour = new Group("../pages/baronCrane.html","../assets/Baron-Crane_Crédits_Emilie-Mauger03.jpg", "BARON CRÂNE", "Heavy Psych / Jazz Fusion / Progressive");
const groupeFive = new Group("../pages/littleJimi.html","../assets/little-jimi.jpg", "LITTLE JIMI", "Heavy Psych / Progressive / Rock");
const groupeSix = new Group("../pages/redSunAtacama.html","../assets/RedSunAtacama.jpg", "RED SUN ATACAMA", "Heavy Psych");

let arrayOfGroups = [];
arrayOfGroups.push(groupeOne, groupeTwo, groupeThree, groupeFour, groupeFive, groupeSix)
const searchSectionOfGroups = document.querySelector('#section-of-group');


arrayOfGroups.forEach(element => {
    searchSectionOfGroups.innerHTML += 
    `
        <div class="groups">
            <a href="${element.link}" id="link-page-group">
            <img src="${element.image}" class="img-of-group"/>
            <h3 class="title">${element.name}</h3>
            <p class="music">${element.typeOfMusic}</p>
        </div>
    `
});