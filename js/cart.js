//recherche dans le LS , produit pour effectuer une incrementation

let ls = JSON.parse(localStorage.getItem('produit'));

 
  
//creation de 2 tableaux
 let itemCard = [];

const productLs = [];
//boucle d'incremention des produits et leurs options depuis le panier. 
for (i = 0; i < ls.length; i++) {
  productLs.push(ls[i].id);
  console.log(ls[i]);
  //infos recup et renseigner le carte de chaques articles et leurs options
  itemCard =
    itemCard +
    `<article class="cart__item" data-id="${ls[i].id}" data-color="${ls[i].color}">
                <div class="cart__item__img">
                  <img src="${ls[i].image}">
                </div>
                <div class="cart__item__content">
                  <div class="cart__item__content__description">
                    <h2>${ls[i].name}</h2>
                    <p>${ls[i].color}</p>
                    <p>${ls[i].price}€</p>
                  </div>
                  <div class="cart__item__content__settings">
                    <div class="cart__item__content__settings__quantity">
                      <p>Qté : </p>
                      <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${ls[i].quantity}">
                    </div>
                    <div class="cart__item__content__settings__delete">
                      <p class="deleteItem">Supprimer</p>
                    </div>
                  </div>
                </div>
              </article>`;
}

// deepcode ignore DOMXSS: <please specify a reason of ignoring this>
//manip du DOM pour afficher les infos de chaque articles dans le panier
document.getElementById('cart__items').innerHTML += itemCard;
console.log(i);

// fonction qui calculera la somme finale de la commande / 
function sommeArticle () {
  let sommeTotal = [];
  for (i = 0 ; i < ls.length; i++){
    let total = ls[i].price * ls[i].quantity;
    
   
    
   let testTotal =  sommeTotal.push(total);
   


   const reducer = (accumulator, currentValue) => accumulator + currentValue;
    let  prixFinal = sommeTotal.reduce(reducer);

   

   document.getElementById('totalPrice').textContent = prixFinal;

  
  }
}
sommeArticle();

  // fonction pour supprimer le ou les article(s) et rechargement page

function supprItem(){
      const btn_suppr = document.querySelectorAll('.deleteItem');
      console.log(btn_suppr);
    
    for (let a = 0; a < btn_suppr.length; a++) {
        btn_suppr[a].addEventListener('click', () =>
    { 
       ls.splice(a, 1);
      localStorage.setItem('produit', JSON.stringify(ls));
      alert("article supprime");
      location.reload();
    });
     
  }
    //  btn_suppr.addEventListener(click,);
}
 
 supprItem();
 
 // choix quantite des articles et rechargement de pages
 function changeQty2(){
  let btn_qty = document.querySelectorAll('.itemQuantity');
  for (let d = 0; d < btn_qty.length; d++){
    btn_qty[d].addEventListener('change', function (event) {
      let qtyModified = parseInt(btn_qty[d].value , 10);
      console.log(qtyModified);
      ls[d].quantity = qtyModified;
      localStorage.setItem('produit', JSON.stringify(ls));
      location.reload();
    });
  }
   
 }
  changeQty2();


           //------------formulaire------------//

    //utilisation du DOM pour la partie infos de la commande, ecoute du clique    

document.querySelector('#order').addEventListener('click', function (e) {
  e.preventDefault();

  const contactForm = {
      firstName : document.querySelector('#firstName').value,
      lastName : document.querySelector('#lastName').value,
      address : document.querySelector('#address').value,
      city : document.querySelector('#city').value,
      email : document.querySelector('#email').value
   };
   
  console.log(contactForm);

//----------firstname----------//
   function testFirstName() {
     
      let firstNameErrorMsg = document.getElementById('firstNameErrorMsg');

      const firstNameRegExp = new RegExp(/^[A-Za-z][A-Za-z' -]*$/);
      
      if (firstNameRegExp.test(contactForm.firstName)) {
       firstNameErrorMsg.textContent = '';
       return true;
     } else {
       firstNameErrorMsg.textContent = 'votre nom est invalide';
       return false;
     }
   }

   testFirstName();


//--------------Lastname--------------//


   function testLastName() {
     let lastNameErrorMsg = document.getElementById('lastNameErrorMsg');

     const lastNameRegExp = new RegExp(/^[A-Za-z][A-Za-z' -]*$/);

     if (lastNameRegExp.test(contactForm.lastName)) {
       lastNameErrorMsg.textContent = '';
       return true;
     } else {
       lastNameErrorMsg.textContent = 'votre nom est invalide';
       return false;
     }
   }
   testLastName();
// ----------------Address--------------//
   function testAddress() {
     let addressErrorMsg = document.getElementById('addressErrorMsg');

     const addressRegExp = new RegExp(/^[a-zA-Z0-9\s\,\''\-]*$/);

     if (addressRegExp.test(contactForm.address)) {
       addressErrorMsg.textContent = ``;
       return true;
     } else {
       addressErrorMsg.textContent = `votre adresse est invalide`;
       return false;
     }
   }

   testAddress();

//---------------city/ville----------------//
   function testCity () {

    let cityErrorMsg = document.getElementById('cityErrorMsg');

    const cityRegExp = new RegExp (/^[A-Za-z]{3,20}$/);

    if (cityRegExp.test(contactForm.city)){
      cityErrorMsg.textContent = ``;
      return true;
    }else{
      cityErrorMsg.textContent = `le nom de la ville est invalide`;
      return false;
    }
   }

   testCity();

   //-------------Email-------------//

   function testEmail() {

    let emailErrorMsg = document.getElementById('emailErrorMsg');

    const emailRegExp = new RegExp(/^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$/);

    if (emailRegExp.test(contactForm.email)){
      emailErrorMsg.textContent = ``;
      return true;
    } else {
      emailErrorMsg.textContent = `votre mail est invalide`;
      return false;
    }
   }

   testEmail();

    function sendPost(){
       if (testFirstName() && testLastName() && testAddress() && testCity() && testEmail() === true ){  
        alert('formulaire OK');
         let ls = JSON.parse(localStorage.getItem('produit'));
         console.log(ls);
        let products = [];
         
        for(let a = 0 ; a<  ls.length; a++){
          products.push(ls[a].idProduit);
           
        }
        let totalInfo = {
          products,
          contact: contactForm,
        };
          let final = 
         fetch('http://localhost:3000/api/products/order', {
           method: 'POST', // or 'PUT'
           headers: {
             Accept: 'application/json',
             'Content-Type': 'application/json',
           },
           body: JSON.stringify(totalInfo)
         })
           .then((response) => response.json())
           .then((data) => {
            window.location.href = `confirmation.html?id=${data.orderId}`;
             console.log(data.orderId);
           })
           .catch((error) => {
             console.error('Error:', error);
           });
           console.log(final);
            
           

 
           
      }else{
        alert('tous les champs ne sont pas remplis')
      };
      
    }

    sendPost();
           
 
});




 
   
      