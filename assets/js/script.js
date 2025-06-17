console.log("hello");

// selezione elemento nod
// selezione row
const rowEl = document.querySelector("row");
//veriabile per API
const endpointUrl = "https://lanciweb.github.io/demo/api/pictures/";

//richiesta AJAX per ottenere i dati
//loop per estrarre i singoli oggetti
fetch(endpointUrl)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    data.forEach((photo) => {
      //destrutturazione dellìoggetto
      const { title, date, urlimg } = photo;
      console.log(title, date, urlimg);
      //creazione markup per la card
      const cardMarkup = `                   
      <div class="col">
        <div class="card">
            <div class="card-head">
                <div class="pin">
                    <img src="/assets/img/pin.svg" alt="">
                </div>
                <img src="${urlimg}" alt="">  
                <div class="card-body">
                    <span>${title}</span>
                    <span>${date}</span>
                </div>
            </div>
        </div>
       </div> `;
      // aggiornare la DOM
      rowEl.insertAdjacentHTML("beforeend", cardMarkup);
    });
  });
