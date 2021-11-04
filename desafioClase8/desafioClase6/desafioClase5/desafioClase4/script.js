//FUNCION SALUDAR
const saludos = [
    "Buen día, ",
    "Buenos días, ",
    "Que agradable verte nuevamente, ",
    "Bienvenido/a, ",
    "Hola, ¿Cómo estás?, ",
    "Hola, "
];

function aleatorio(miArray) {
    let max = miArray.length - 1;
    let min = 0;
    let random = Math.round(Math.random() * (max - min)) + min;
    let saludoAleatorio = miArray[random];
    return saludoAleatorio;
}

function saludo() {
    let nombre = prompt("Ingresa tu nombre");
    let etiquetaNombre = document.getElementById("nombre");
    etiquetaNombre.innerText = aleatorio(saludos) + nombre;
    etiquetaNombre.style.font = "bold";
    etiquetaNombre.style.fontSize = "40px";
    etiquetaNombre.style.textAlign = "center";
}

//saludo();

let carrito = [];

//tomo el div productosSelecionados para añadir ahi el contenedor
let productosSeleccionados = document.getElementById("productosSeleccionados");

let tituloTotalUnidades = document.createElement("h3");
tituloTotalUnidades.innerText = "0";
productosSeleccionados.appendChild(tituloTotalUnidades);

for (const producto of productos) {
    let contenedor = document.createElement("div");
    contenedor.innerHTML = `
    <div class="card">
        <img src="./imagenes/${producto.imagen}" class="card-img-top" alt="${producto.imagen}">
        <div class="card-body">
            <h5 class="card-title font--big">${producto.nombre}</h5>
            <p class="card-text font--large">${producto.desc}</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item font--medium">S/ ${producto.precio}.00</li>
        </ul>
        <div class="cantidad font--small">
            <input type="number" name="" id="pedido" min="1" max="10" placeholder="1">
            <button id="${producto.id}">Añadir</button>
            <button id="reset-${producto.id}" class="card-link" onclick="borre()">Borrar</button>
        </div>
    </div>
    <p style="display: none">${producto.id}</p>`;

    productosSeleccionados.appendChild(contenedor);

    document.getElementById(`${producto.id}`).onclick = () => agregarAlCarrito(`${producto.id}`);
}


function agregarAlCarrito(id) {
    carrito.push(productos[id - 1]);
    console.log(carrito);
    calcularTotalCarrito();
}

let botonClear = document.createElement("button");
//que atributo quiero que tenga el boton botonClear
botonClear.setAttribute("id", "clear");
botonClear.innerText = "VACIAR CARRITO";
productosSeleccionados.appendChild(botonClear);
botonClear.onclick = () => {
    carrito = [];
    tituloPrecios.innerText = "0";
    tituloTotalUnidades.innerText = "0";

}
console.log(carrito);

//boton borrar
let botonBorrar1 = document.getElementById("reset-1");
let botonBorrar2 = document.getElementById("reset-2");
let botonBorrar3 = document.getElementById("reset-3");

function borre() {
    console.log("borre el producto");
    let bolsa = carrito.length - 1;
    tituloTotalUnidades.innerText = bolsa;
}

function calcularTotalCarrito() {
    let total = 0;
    for (const prod of carrito) {
        total += prod.precio;
        console.log(total);
    }
    tituloPrecios.innerText = total;
    tituloTotalUnidades.innerText = carrito.length;
}

let tituloPrecios = document.createElement("h2");
tituloPrecios.innerText = "0";
productosSeleccionados.appendChild(tituloPrecios);