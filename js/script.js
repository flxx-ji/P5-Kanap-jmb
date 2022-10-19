function prod() {
  fetch('http://localhost:3000/api/products')
    .then(function (response) {
      return response.json();
    })
    //extraction des donnees dans le parametre de la fonction 'data'
    .then(function (data) {
      console.log(data);

      showProduct(data);
    })
    // au cas ou qu'il y a une erreure.
    .catch((err) => console.log('Erreur : ' + err));
}
prod();

console.log(prod);
// fonction pour l'affichage des produits et leurs infos
function showProduct(data) {
  for (product of data) {
    let produit = `
           <a href="./product.html?id=${product._id} ">
          <article>
           <img src= ${product.imageUrl} alt= ${product.altTxt}>
           <h3 class="productName">${product.name}</h3>
          <p class="productDescription">${product.description}</p>
          </article>
          `;
    document.getElementById('items').insertAdjacentHTML('beforeend', produit);
  }
}

console.log(showProduct);
 