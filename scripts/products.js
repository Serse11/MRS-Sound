  let productsList1 = [

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
];
let i = 0;
  let basket1 = [];
  function basketWich() {
    const spanCounter = document.querySelector(".counter");
    spanCounter.innerText = parseInt(spanCounter.innerText) + 1;
    
    const spanDesktop = document.querySelector(".desktop");
      spanDesktop.innerText =  parseInt(spanDesktop.innerText) + parseInt(productsList1[i].getPrice()) + " €";
      i++;

      basket1.push(productsList1[i]);
  }

  // Panier pour les produits de 2ème Groupe-----

  const productsList2 = [
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
    productsMarsRed12];

    let j = 0;
    let basket2 = [];
    function basketMars() {
      const spanCounter = document.querySelector(".counter");
      spanCounter.innerText = parseInt(spanCounter.innerText) + 1;
      
      const spanDesktop = document.querySelector(".desktop");
        spanDesktop.innerText =  parseInt(spanDesktop.innerText) + parseInt(productsList2[j].getPrice()) + " €";
        j++;
  
        basket2.push(productsList2[j]);
    }



   // Fonction pour le menu burger---------
  function toggleMenu() {
    const navbar = document.querySelector(".show-nav");
    const burger = document.querySelector(".burger");
    burger.addEventListener("click", (e)=>{
      navbar.classList.toggle("show-nav");
    });
  }
  toggleMenu();

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
