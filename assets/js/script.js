console.log("hello");

// selezione elemento nod
// selezione row
const rowEl = document.querySelector(".row");
const modalEl = document.getElementById("myModal");
// const modalContEl = document.getElementById("modal-content");
const closeButton = document.querySelector(".close-button");
const modalBodyEl = document.querySelector(".modal-body");
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
      //aggiungere addeventlistener per mostrare la modale
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
                <img class="modalImgEls" src="${url}" alt="">               
                <div class="card-body">
                    <p class="title">${title}</p>
                    <p class="data">${date}</p>
                </div>
            </div>
        </div>
       </div>
        `;
      // aggiornare la DOM
    });
    rowEl.innerHTML = cardMarkupStr;

    const modalImgEls = document.querySelectorAll(".modalImgEls");
    console.log(modalImgEls);

    console.log(modalImgEls[0]);

    for (let i = 0; i < 6; i++) {
      modalImgEls[i].addEventListener("click", () => {
        const img_url = modalImgEls[i].getAttribute("src");
        console.log(img_url);
        modalBodyEl.innerHTML = `<img src="${img_url}" style="width: 100%;" />`;
        modalEl.classList.remove("hide");
      });
    }
  });

document.querySelector(".close-button").addEventListener("click", () => {
  document.querySelector(".modal").classList.add("hide");
});
