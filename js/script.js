function prod() {
  fetch('http://localhost:3000/api/products')
    .then(function (response) {
      return response.json();
    })

    .then(function (data) {
      console.log(data);

      showProduct(data);
    })

    .catch((err) => console.log('Erreur : ' + err));
}

prod();
console.log(prod);

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
