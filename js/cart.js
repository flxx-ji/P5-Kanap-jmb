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

 
 let btn_suppr = document.getElementsByClassName('deleteItem');
 console.log(btn_suppr);



function supprItem  (){
      let btn_suppr = document.querySelectorAll('deleteItem');
      console.log(btn_suppr);
    
    for (let a = 0; a < btn_suppr.length; a++) {
        btn_suppr[a].addEventListener('click', () =>
    { 
       ls.splice(a, 1);
      localStorage.setItem('produit', JSON.stringify(ls));
      alert("article supprime");
      location.reload();
    })
     
  }
    //  btn_suppr.addEventListener(click,);
}
 
 supprItem();
