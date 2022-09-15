const prodId = window.location.search;
console.log(prodId);

const urlSearchParams = new URLSearchParams(prodId);
console.log(prodId);

const id = urlSearchParams.get("id");
console.log(id);

function FetchId() {

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
      // let in eur =  kolor.value;
       const idpanier = id.value;
       const couleur = kolor.value;
       const quantite = qty.value ;
    
        

       let tab = {
        image: data.imageUrl,
        imageAlt:data.altTxt,
        idProduit: id,
        color: couleur,
        quantity: quantite,
        name: data.name,
        price: data.price,
        } 

         

       if (!couleur) {
         alert('veuillez choisir une couleur');
       } else {
       }
        if (quantite  < 1) {
         alert('veuillez rentrer une quantite');
       } else { 

           //INITIALISATION du LOCALSTORAGE
           let ls = JSON.parse(localStorage.getItem('produit'));
              
           if (ls === null){
            ls = [];
           }

           let initProduct = false;
            if (ls) {
            
                
 
            ls.forEach((element, key) => {
              if (element.idProduit === id && element.color === couleur) {

                ls[key].quantity = parseInt(element.quantity) + parseInt(quantite);

                localStorage.setItem('produit', JSON.stringify(ls));

                initProduct = true;
                alert('panier mis a jour');

              }

              console.log(element.idProduit);
              console.log(id);
              console.log(element.color);
              console.log(couleur);

              console.log(quantite);

            });
             
          //RAJOUTE UN PRODUIT AU TABLEAU
            if (!initProduct){
              ls.push(tab);
              localStorage.setItem('produit', JSON.stringify(ls));
            }

            
             
          } 
            // AJOUT AU LOCALSTORAGE
             
         }
        
      });
         
  }
       ajoutPanier();


    
    })
    
    .catch((error) => {
      alert("server H.S");
    });
  }
  FetchId();

  
   
      



       
    