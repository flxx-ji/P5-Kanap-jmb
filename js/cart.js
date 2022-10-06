let ls = JSON.parse(localStorage.getItem('produit'));

console.log(ls);
   
let itemCard = [];

let productLs = [];

for (i = 0; i < ls.length; i++) {
  productLs.push(ls[i].id);
  console.log(ls[i]);
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
document.getElementById('cart__items').innerHTML += itemCard;
console.log(i);


function sommeArticle () {
  let sommeTotal = [];
  for (i = 0 ; i < ls.length; i++){
    let total = ls[i].price * ls[i].quantity;
    console.log(total);
   
    
   let testTotal =  sommeTotal.push(total);
   console.log(testTotal);


   const reducer = (accumulator, currentValue) => accumulator + currentValue;
    let  prixFinal = sommeTotal.reduce(reducer);

   console.log(prixFinal);

   document.getElementById('totalPrice').textContent = prixFinal;

  
  }
}
sommeArticle();

  

function supprItem(){
      let btn_suppr = document.querySelectorAll('.deleteItem');
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

//  function changeQty() {
//   let btn_qty = document.querySelectorAll('.itemQuantity');
//   console.log(btn_qty);
//   for (let e = 0; 0 < btn_qty.length; e++){
//     btn_qty[e].addEventListener('change',(event) => {
//       let result = document.querySelectorA('.result');
//       result.textContent = `la quantite de l'article est de ${event.target.value}`;

//     }, )
//   }
//  }
 // choix quantite et rechargement de pages
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

                

document.querySelector('#order').addEventListener('click', function (e) {

  let contactForm = {
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

     let firstNameRegExp = new RegExp(/^[A-Za-z][A-Za-z' -]*$/);
      
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

     let lastNameRegExp = new RegExp(/^[A-Za-z][A-Za-z' -]*$/);

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

     let addressRegExp = new RegExp(/^[a-zA-Z0-9\s\,\''\-]*$/);

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

    let cityRegExp = new RegExp (/^[A-Za-z]{3,20}$/);

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

    let emailRegExp = new RegExp(/^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$/);

    if (emailRegExp.test(contactForm.email)){
      emailErrorMsg.textContent = ``;
      return true;
    } else {
      emailErrorMsg.textContent = `votre mail est invalide`;
      return false;
    }
   }

   testEmail();


});





      //---------lastName/nom de famille--------//
    
    
       

   //--------address/adresse---------

   
    

    
     //--------city/ville--------//
      

     //-----------Email--------//

      
 


     //--------BoutonCommander----------;;
    //  let BoutonCommander = document.querySelector('#order');
    //  BoutonCommander.addEventListener('click', function () {
    //   validCommande(this);
    //  });

    //  const validCommande = function (inputSubmit){
    //    let testOrder = OrderRegExp.test(inputSubmit.value);
    //    console.log(testOrder);
    //  };
       
    //  ----------tableau----------//

    //  let tab = [
    //    prenom = document.querySelector('#firstName'),

    //    nom = document.querySelector('#lastName'),

    //    adresse = document.querySelector('#address'),
      
    //    ville = document.querySelector('#city'),

    //    email = document.querySelector('#email')
    //  ];

      