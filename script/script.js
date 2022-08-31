let botonAgregar = document.querySelector(".btnAgregar");
let cajas = document.querySelector(".cajas");

botonAgregar.addEventListener("click", agregarCaja);

function agregarCaja() {
  let cajasCantidadValue = document.querySelector(".cajasCantidad").value;
  for (let i = 0; i < cajasCantidadValue; i++) {
    let elemCaj = document.createElement("div");
    elemCaj.innerHTML = i;
    elemCaj.classList.add("caja");
    cajas.appendChild(elemCaj);
  }
}
