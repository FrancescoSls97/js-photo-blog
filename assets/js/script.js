console.log("hello");

// selezione elemento nod
// selezione row
const rowEl = document.querySelector(".row");
console.log(rowEl);

//veriabile per API
const endpointUrl = "https://lanciweb.github.io/demo/api/pictures/";

//richiesta AJAX per ottenere i dati
//loop per estrarre i singoli oggetti
fetch(endpointUrl)
  .then((Response) => Response.json())
  .then((data) => {
    console.log(data);

    let cardMarkupStr = "";
    data.forEach((photo) => {
      //destrutturazione dellìoggetto
      const { title, date, url } = photo;
      console.log(title, date, url);
      //creazione markup per la card
      cardMarkupStr += `                   
      <div class="col">
        <div class="card">
            <div class="card-head">
                <div class="pin">
                    <img src="/assets/img/pin.svg" alt="">
                </div>
                <img src="${url}" alt="">  
                <div class="card-body">
                    <span>${title}</span>
                    <span>${date}</span>
                </div>
            </div>
        </div>
       </div> `;
      // aggiornare la DOM
    });
    rowEl.innerHTML = cardMarkupStr;
  });
