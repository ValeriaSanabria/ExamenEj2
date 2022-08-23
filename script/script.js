let botonAgregar = document.querySelector(".btnAgregar");

botonAgregar.addEventListener("click", agregarCaja);

function agregarCaja() {
  let caja = document.querySelector(".cajas").value;
  let elemCaj = document.createElement("li");
  elemCaj.innerHTML = caja;
  listCaja.appendChild(elemCaj);
}
