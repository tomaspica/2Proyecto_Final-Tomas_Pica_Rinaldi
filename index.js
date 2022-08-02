let autos;

let favoritos;

if (JSON.parse(localStorage.getItem("favoritos"))) {
  favoritos = JSON.parse(localStorage.getItem("favoritos"));
} else {
  localStorage.setItem("favoritos", JSON.stringify([]));
  favoritos = JSON.parse(localStorage.getItem("favoritos"));
}

function fetchJSON() {
  fetch("autos.json")
    .then(function (res) {
      return res.json();
    })
    .then((data) => {
      autos = data;
      let card = "";
      data.forEach(function (auto) {
        card += `
            <article class="card">
                <div>
                    <img class="imgAuto" src=${auto.img} alt="${auto.auto}"/>
                <div/>
                <div>
                    <p>${auto.auto}</p>
                <div/>
                <div>
                    <p>$${auto.precio.toLocaleString()}</p>
                <div/>
                <div class="btn-container">
                    <button id=${auto.id} class="btn btn-outline-primary btnAgregar">AGREGAR A FAVORITOS</button>
                </div>
            </article>
              `;
      });
      const container = document.getElementById("container");
      container.innerHTML = card;
    })
    .catch(function () {
      document.write("Error");
    });
}
fetchJSON();


document.addEventListener("click", (e) => {
  if (e.target && e.target.matches("button.btn")) {
    agregarAFavoritos(e.target.id);
  }
});

function agregarAFavoritos(e) {
  const autoEncontrado = autos.find((aut) => aut.id == e);
  const enFavoritos = favoritos.find((aut) => aut.id == autoEncontrado.id);
  console.log(enFavoritos);
  if (!enFavoritos) {
    favoritos.push({ ...autoEncontrado, cantidad: 1 });
  } else {
    let favoritosFiltrado = favoritos.filter((aut) => aut.id != enFavoritos.id);
    favoritos = [
      ...favoritosFiltrado,
      { ...enFavoritos, cantidad: enFavoritos.cantidad + 1 },
    ];
  }
  console.log(favoritos);
  localStorage.setItem("favoritos", JSON.stringify(favoritos));

  Toastify({
    text: "Agregaste este producto a favoritos",
    duration: 1500,
    onClick: function () {},
  }).showToast();
}

const contador = document.getElementById("favCounter");
contador.innerHTML = favoritos.length;