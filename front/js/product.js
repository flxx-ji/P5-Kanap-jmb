const prodId = window.location.search;
console.log(prodId);

const urlSearchParams = new URLSearchParams(prodId);
console.log(prodId);

const id = urlSearchParams.get('id');
console.log(id);

function tack() {}

fetch(`http://localhost:3000/api/products/${id}`)
  .then((result) => result.json())

  .then((data) => {
    console.log(data);

    document.querySelector(
      '.item__img'
    ).innerHTML = `<img src = "${data.imageUrl}" alt = "${data.altTxt}">`;
    document.getElementById('title').textContent = `${data.name}`;
    document.getElementById('price').textContent = `${data.price}`;
    document.getElementById('description').textContent = `${data.description}`;
    document.getElementById(
      'colors'
    ).innerHTML = `<option value="${data.colors}"> ${data.colors}</option> `;
  });
