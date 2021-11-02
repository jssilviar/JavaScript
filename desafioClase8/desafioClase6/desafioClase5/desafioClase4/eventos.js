//FUNCION SALUDAR
const saludos = [
    "Buen día, ",
    "Buenos días, ",
    "Que agradable verte nuevamente, ",
    "Bienvenido/a, ",
    "Hola, ¿Cómo estás?, ",
    "Hola, "
];

function aleatorio(miArray){
    let max = miArray.length - 1;
    let min = 0;
    let random =  Math.round(Math.random() * (max - min)) + min;
    let saludoAleatorio = miArray[random];
    return saludoAleatorio;
}

function saludo () {
    let nombre = prompt("Ingresa tu nombre");
    let etiquetaNombre = document.getElementById("nombre");
    etiquetaNombre.innerText = aleatorio(saludos) + nombre;
    etiquetaNombre.style.font= "bold";
    etiquetaNombre.style.fontSize= "40px";
    etiquetaNombre.style.textAlign = "center";
}

//saludo();

/* const productos =[{ nombre:"Catering", precio :100 },
                  { nombre:"Cakes", precio:80 },
                  { nombre:"Backing Pallet", precio:30 }];

let botonProductos = document.getElementById("productos");

botonProductos.addEventListener("click", imprimeTabla);

function imprimeTabla(){
    let tabla = document.createElement("table");
    tabla.setAttribute("class","table table-success table-striped");

    let tablaHead = document.createElement("thead");
    tablaHead.innerHTML = `<thead>
                                <tr>
                                    <th scope="col">Productos</th>
                                    <th scope="col">Desde</th>
                                </tr>
                            </thead>`;
    let tablaBody = document.createElement("tbody");
    for (const producto of productos){
        let fila=document.createElement("tr");
        fila.innerHTML = `<td> ${producto.nombre}</td>
        <td><b>S/${producto.precio}.00</b></td>`;
        tablaBody.appendChild(fila);
    }
    tabla.appendChild(tablaHead);
    tabla.appendChild(tablaBody);

    document.getElementById("inferior").appendChild(tabla);
}

let botonReset = document.getElementById("reset");
let pedido = document.getElementById("pedido");
botonReset.addEventListener("click", () => {
    pedido.value = 0;
});

function Categorias(personas,keke,personaje,anios, presupuesto){
    this.personas = personas;
    this.keke = keke;
    this.personaje = personaje;
    this.anios = anios;
    this.presupuesto = presupuesto;
}

let inputNombre = document.getElementById("inputNombre");
let inputNombre1 = document.getElementById("inputNombre1");
let inputNombre2 = document.getElementById("inputNombre2");
let inputNombre3 = document.getElementById("inputNombre3");
function datoCliente(event){
    event.preventDefault();
    if(inputNombre.value === "" || inputNombre1.value === ""|| inputNombre2.value === "" || inputNombre3.value === "")
    {
        alert("Por favor rellene todos los campos del formulario")
    } else {
        console.log(inputNombre.value);
        console.log(inputNombre1.value);
        console.log(inputNombre2.value);
        console.log(inputNombre3.value);
        
        let tablapedidos = document.createElement("table");
        tablapedidos.setAttribute("class","table table-success table-striped");
    
        let tablaHead = document.createElement("thead");
        tablaHead.innerHTML = `<thead>
                                    <tr>
                                        <th scope="col">Modelo de torta</th>
                                        <th scope="col">N° personas</th>
                                        <th scope="col">Temática</th>
                                        <th scope="col">Tipo de celebración</th>
                                    </tr>
                                </thead>`;
        let tablaBody = document.createElement("tbody");
        let fila = document.createElement("tr");
        fila.innerHTML = `<td> ${inputNombre.value}</td>
            <td><b>${inputNombre1.value}</b></td><td><b>${inputNombre2.value}</b></td><td><b>${inputNombre3.value}</b></td>`;
        tablaBody.appendChild(fila);

        tablapedidos.appendChild(tablaHead);
        tablapedidos.appendChild(tablaBody);

        document.getElementById("inferior2").appendChild(tablapedidos);
        inputNombre.value = "";
        inputNombre1.value = "";
        inputNombre2.value = "";
        inputNombre3.value = "";
        
    }
   
} 

//creo contendor que tendra los productos
let contenedor = document.createElement("div");
contenedor.innerHTML = `me estoy frustando`;


//poniendo que el contenedor se apile en productosSelecionados
productosSeleccionados.appendChild(contenedor);*/

const productos = [{
        id: 1,
        nombre: "catering",
        imagen: "galletas.png",
        desc: "fsdfsg",
        precio: 30
    }, {
        id: 2,
        nombre:"backing pallet",
        imagen: "palletBlanco.png",
        desc: "xdgdzg",
        precio: 100
    }, {
        id: 3,
        nombre: "cakes",
        imagen: "tortaBautizo.png",
        desc: "dgfsdg",
        precio: 60
    }
];

let carrito = [];

//tomo el div productosSelecionados para añadir ahi el contenedor
let productosSeleccionados = document.getElementById("productosSeleccionados");

let tituloTotalUnidades = document.createElement("h3");
tituloTotalUnidades.innerText = "0";
productosSeleccionados.appendChild(tituloTotalUnidades);


for(const producto of productos){
    let contenedor = document.createElement("div");
    contenedor.innerHTML = `
    <div class="card">
        <img src="./imagenes/${producto.imagen}" class="card-img-top" alt="${producto.imagen}">
        <div class="card-body">
            <h5 class="card-title font--big">${producto.nombre}</h5>
            <p class="card-text font--large">${producto.desc}</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item font--medium">${producto.precio}</li>
        </ul>
        <div class="cantidad font--small">
            <input type="number" name="" id="pedido" min="1" max="10" placeholder="1">
            <button id="${producto.id}">Añadir</button></a>
            <input id="reset" type="reset" value="Borrar" class="card-link">
        </div>
    </div>
    <p style="display: none">${producto.id}</p>`;

    productosSeleccionados.appendChild(contenedor);
    document.getElementById(`${producto.id}`).onclick = () => agregarAlCarrito(`${producto.id}`)
}
 function agregarAlCarrito(id) {
     carrito.push(productos[id-1]);
     console.log(carrito);
     calcularTotalCarrito();
}
let botonClear = document.createElement("button");
botonClear.setAttribute("id","clear");
botonClear.innerText = "VACIAR CARRITO";
productosSeleccionados.appendChild(botonClear);
botonClear.onclick = () => {
    carrito = [];
    tituloPrecios.innerText = "0";
    tituloTotalUnidades.innerText = "0";
}
console.log(carrito);

function calcularTotalCarrito (){
    let total = 0;
    for(const prod of carrito) {
        total += prod.precio;
        console.log(total);
    }
    tituloPrecios.innerText= total;
    tituloTotalUnidades.innerText = carrito.length;
}

let tituloTotalCompra = document.createElement("h2");
tituloTotalCompra.innerText = "El total de tu compra es: S/ ";
productosSeleccionados.appendChild(tituloTotalCompra);

let tituloPrecios = document.createElement("h2");
tituloPrecios.innerText = "Cantidad de productos: 0";
productosSeleccionados.appendChild(tituloPrecios);














