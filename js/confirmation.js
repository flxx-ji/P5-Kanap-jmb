  function numConfirmation (){
    //recuperation des infos conserves dans l'emplacement windowLoc href
    const orderId = window.location.search;
    console.log(orderId);
   // nouvelle url a partie de l'id
    const urlSearchParams = new URLSearchParams(orderId);
    console.log(orderId);
    // recuperation de cette nouvelle de la commande 
    const id = urlSearchParams.get('id');
    console.log(orderId);
   // injection dans l'HTML de la reference de la commande
   let final =  document.getElementById("orderId");
   final.innerText = id;

   localStorage.clear();
  }
  numConfirmation ();