const prodId = window.location.search;
console.log(prodId);

const urlSearchParams = new URLSearchParams(prodId);
console.log(prodId);

const id = urlSearchParams.get("id");
console.log(id);

function fetchId() {

fetch(`http://localhost:3000/api/products/${id}`)
  .then((result) => result.json())

  .then((data) => {
    console.log(data);
   
    function showPanier () {

    document.querySelector('.item__img').innerHTML = `<img src = "${data.imageUrl}" alt = "${data.altTxt}">`;
    document.getElementById('title').textContent = `${data.name}`;
    document.getElementById('price').textContent = `${data.price}`;
    document.getElementById('description').textContent = `${data.description}`;
    for (let clr of data.colors){
      let elementClr = document.createElement('option'); 
      document.querySelector('#colors').appendChild(elementClr);
      elementClr.textContent = clr;
 
    }
       }
      showPanier();


      //ajoutPanier(colors);
      
  function ajoutPanier ()  {
       
    let bouton = document.querySelector('#addToCart');

     bouton.addEventListener('click', () => {
      let qty = document.getElementById('quantity');
      let kolor = document.getElementById('colors');
      // let info = document.getElementById('data_id');

       const idpanier =  id.value;
       const couleur =  kolor.value;
       const quantite = qty.value 

       let tab = {
        idProduit:id,
        color:couleur,
        quantity:quantite,
        name:data.name,
        } 

        console.log(couleur);
        console.log(quantite);

       if (!couleur) {
         alert('veuillez choisir une couleur');
       } else {
       }
        if (quantite  < 1) {
         alert('veuillez rentrer une quantite');
       } else { 

           //INITIALISATION du LOCALSTORAGE
           let ls = JSON.parse(localStorage.getItem('produit'));

           if (ls === null) {
            ls = [];
           }
          
           //RAJOUTE UN PRODUIT AU TABLEAU 
            ls.push(tab);
            
            // AJOUT AU LOCALSTORAGE
            localStorage.setItem('produit', JSON.stringify(ls));
         }
        
      });
         
  }
       ajoutPanier ();


       if(ajoutPanier <= 1){
        alert("un article vient a ete ajoute au panier");
       }
    })
    
    .catch((error) => {
      alert("server H.S");
    });
  }
  fetchId();

  
  
   
      



       
    