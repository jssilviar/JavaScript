let gridCarro = document.getElementById("gridCarro");
for (const producto of productos) {
    let cardProducto = document.createElement("div");
    cardProducto.setAttribute("class", "cardCarrito");
    cardProducto.innerHTML = `
        <img src="./imagenes/${producto.imagen}" class="card-img-top" alt="${producto.imagen}">
        <div class="card-body">
            <h5 id="nombre-producto-${producto.id}" class="card-title font--big">${producto.nombre}</h5>
            <p class="card-text font--large">${producto.desc}</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item font--medium">S/ <span id="precio-producto-${producto.id}">${producto.precio}</span></li>
        </ul>
        <div class="cantidad font--small">
            <button id="${producto.id}">Añadir</button>
            <button id="reset-${producto.id}" class="card-link" onclick="borre()">Borrar</button>
        </div>
    <p style="display: none">${producto.id}</p>`;

    gridCarro.appendChild(cardProducto);

    document.getElementById(`${producto.id}`).onclick = () => agregarAlCarrito(`${producto.id}`);
}

let carrito = [];

let carritoSize = document.getElementById("cantidadProductos");
let detalleProductos = document.getElementById(`detalleProductos`);

function agregarAlCarrito(id) {
    let precioProducto = document.getElementById(`precio-producto-${id}`).textContent;
    let productoNombre = document.getElementById(`nombre-producto-${id}`).textContent;
    if (carrito.length === 0) {
        carrito.push({
            idProducto: id,
            productoNombre: productoNombre,
            unidades: 1,
            precioProducto: precioProducto
        });
        localStorage.setItem("carrito", JSON.stringify(carrito));
    } else {
        let carritoGuardado = localStorage.getItem("carrito");
        //Recuperé el carrito en JSON
        let carritoJSON = JSON.parse(carritoGuardado);

        //buscar si dentro del array existe el id ingresado
        existeId(carritoJSON, id, productoNombre, precioProducto);
    }
    actualizarCarrito();
}

function existeId(arreglo, idIngresado, nombreIngresado, precioIngresado) {
    let producto = arreglo.find(item => item.idProducto === idIngresado);
    if (producto === undefined) {
        arreglo.push({
            idProducto: idIngresado,
            productoNombre: nombreIngresado,
            unidades: 1,
            precioProducto: precioIngresado
        });
        localStorage.setItem("carrito", JSON.stringify(arreglo));
    } else {
        producto.unidades += 1;
        localStorage.setItem("carrito", JSON.stringify(arreglo));
    }
}

function actualizarCarrito() {
    let carritoString = localStorage.getItem("carrito");
    let carrito = JSON.parse(carritoString);
    let unidades = 0;
    for (let item of carrito) {
        unidades += item.unidades
    }
    carritoSize.textContent = unidades;
    actualizarDetalle();
}

function actualizarDetalle() {
    detalleProductos.innerHTML = "";
    let carritoString = localStorage.getItem("carrito");
    let carrito = JSON.parse(carritoString);
    for (let producto of carrito) {
        let linea = document.createElement("pre");
        linea.innerHTML = `<li>${producto.productoNombre} (${producto.unidades})        S/${Math.round(producto.precioProducto * producto.unidades)}.00</li>`;
        detalleProductos.appendChild(linea);
    }
}