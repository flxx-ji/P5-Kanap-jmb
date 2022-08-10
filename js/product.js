const prodId = window.location.search;
console.log(prodId);

const urlSearchParams = new URLSearchParams(prodId);
console.log(prodId);

const id = urlSearchParams.get("id");
console.log(id);

function tack() {}

fetch(`http://localhost:3000/api/products/${id}`)
  .then((result) => result.json())

  .then((data) => {
    console.log(data);

    document.querySelector('.item__img').innerHTML = `<img src = "${data.imageUrl}" alt = "${data.altTxt}">`;
    document.getElementById('title').textContent = `${data.name}`;
    document.getElementById('price').textContent = `${data.price}`;
    document.getElementById('description').textContent = `${data.description}`;
    for (let clr of data.colors){
      let elementClr = document.createElement('option'); 
      document.querySelector('#colors').appendChild(elementClr);
      elementClr.textContent = clr;
 
    }
    //  ajoutPanier(colors);
     }
  );
  
  const ajoutPanier = () => {
       
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
       }  {
       }
       let ls = JSON.parse(localStorage.getItem('produit'));
        localStorage.setItem('ls', JSON.stringify(ls));
        ls.push(tab);
      });
         
  };
     ajoutPanier ();

       
    