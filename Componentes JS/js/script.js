import listaObjetos from "../components/data.js";

// Map throught the array and make a new array
const content = listaObjetos.map((backpack) => {
  // "backpack" now holds a single backpack object

  // Create new article
  let articulo = document.createElement("article");
  articulo.classList.add("backpack");

  // Set article ID to the backpack.id property
  articulo.setAttribute("id", backpack.id);

  // Set the innerHTML of backpackArticle using the backpack object.
  articulo.innerHTML = `
    <figure class="backpack__image">
      <img src=${backpack.imagen} alt="" loading="lazy" />
    </figure>
    <h1 class="backpack__name">${backpack.nombre}</h1>
    <ul class="backpack__features">
      <li class="feature backpack__volume">Volume:<span> ${
        backpack.volumen
      }l</span></li>
      <li class="feature backpack__color">Color:<span> ${
        backpack.color
      }</span></li>
      <li class="feature backpack__age">Age:<span> ${backpack.datosAños()} days old</span></li>
      <li class="feature backpack__pockets">Number of pockets:<span> ${
        backpack.numeroVolsillo
      }</span></li>
      <li class="feature backpack__strap">Left strap length:<span> ${
        backpack.largor.izquierda
      } inches</span></li>
      <li class="feature backpack__strap">Right strap length:<span> ${
        backpack.largor.derecha
      } inches</span></li>
      <li class="feature backpack__lid">Lid status:<span> ${
        backpack.tapaAbierta ? "open" : "closed"
      }</span></li>
    </ul>
  `;

  // Return the backpackArticle to the content array.
  return articulo;
});

// Get the main
const main = document.querySelector(".maincontent");

// Loop through the content array to append each backpack article.
content.forEach((backpack) => {
  main.append(backpack);
});
