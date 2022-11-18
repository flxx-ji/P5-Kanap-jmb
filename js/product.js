//Recheche url
const prodId = window.location.search;
console.log(prodId);
//manipulations des donnees propre de l'url
const urlSearchParams = new URLSearchParams(prodId);
console.log(prodId);
//recuperation de la valeur de l'id
const id = urlSearchParams.get("id");
console.log(id);

function FetchId() {

fetch(`http://localhost:3000/api/products/${id}`)
  .then((result) => result.json())
   //extraction
  .then((data) => {
    console.log(data);

     showPanier(data);

     ajoutPanier(data);
            });
          }
        FetchId();

        console.log(FetchId);

            function showPanier (data) {
      const productImg = document.createElement('img');
    document.querySelector('.item__img').appendChild(productImg);
    productImg.src = data.imageUrl;
    productImg.alt = data.altTxt;  

    document.getElementById('title').textContent = `${data.name}`;
    document.getElementById('price').textContent = `${data.price}`;
    document.getElementById('description').textContent = `${data.description}`;
    //boucle pour chaques options des prod
    for (let clr of data.colors){
      let elementClr = document.createElement('option'); 
      document.querySelector('#colors').appendChild(elementClr);
      //injection dans le texte la valeur de la boucle
      elementClr.textContent = clr;
 
    }
       }
      showPanier();


      //ajoutPanier;
      
  function ajoutPanier (data)  {
       
    const bouton = document.querySelector('#addToCart');

     bouton.addEventListener('click', () => {
      const qty = document.getElementById('quantity');
      const kolor = document.getElementById('colors');
      // let in eur =  kolor.value;
       const idpanier = id.value;
       const couleur = kolor.value;
       const quantite = qty.value ;
    
        //recup donnee tableau pour l'affichage dans l.storage

       const tab = {
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
       } else if(quantite  < 1)  {
          alert('veuillez rentrer une quantite');
      } else {

           //INITIALISATION du LOCALSTORAGE
           let ls = JSON.parse(localStorage.getItem('produit'));
              
           if (ls === null){
            ls = [];
           }

           let initProduct = false;
            if (ls) {
            
                
              //incrementation sans avoir a une ligne pour chaque couleur du produit
            ls.forEach((element, key) => {
              if (element.idProduit === id && element.color === couleur) {

                ls[key].quantity = parseInt(element.quantity) + parseInt(quantite);

                localStorage.setItem('produit', JSON.stringify(ls));
               
                //reinitialisation du l.storage
                initProduct = true;
                alert('panier mis a jour');

              }
 

             
          //RAJOUTE UN PRODUIT AU TABLEAU en utilisant la methode push.
            if (!initProduct){
              ls.push(tab);
              localStorage.setItem('produit', JSON.stringify(ls));
            }

            
             
          })
            
             
         
        
      };
         
  }
        


    
    })
    
    .catch((error) => {
      alert("server H.S");
    });
  }
   

  
   
      



       
    