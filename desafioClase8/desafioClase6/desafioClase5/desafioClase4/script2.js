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
let carrito2 = [];

let carritoSize = document.getElementById("cantidadProductos");
let inputProducto = document.getElementById(`detalleProductos`);

function agregarAlCarrito(id) {
    let precioProducto = document.getElementById(`precio-producto-${id}`).textContent;
    console.log("producto con id " + id + " cuyo precio es " + precioProducto);
    carrito.push(id);
    //localStorage.setItem("carrito", carrito);
    //console.log(carrito.length);
    //carritoSize.innerText = carrito.length;

    if (carrito2.length === 0) {
        console.log("El carrito estaba vacío");
        carrito2.push({
            idProducto: id,
            unidades: 1,
            precioProducto: precioProducto
        });
        localStorage.setItem("carrito2", JSON.stringify(carrito2));
        console.log("Se añadió el primer item del carrito");
    } else {
        let carritoGuardado = localStorage.getItem("carrito2");
        //Recuperé el carrito en JSON
        let carritoJSON = JSON.parse(carritoGuardado);
        console.log(carritoJSON)

        //buscar si dentro del array existe el id ingresado
        existeId(carritoJSON, id);

    }

    function existeId(arreglo, idIngresado) {
        arreglo.find(item => {
            item.idProducto = idIngresado
        })
    }

    /*carrito2.find(item => {
        if (item.idProducto === id) {
            console.log('El productos seleccionado ya existe');
            carrito2.push({
                idProducto: id,
                unidades: unidades + 1,
                precioProducto: precioProducto
            });
        } else {
            console.log('Producto nuevo');
            carrito2.push({
                idProducto: id,
                unidades: unidades,
                precioProducto: precioProducto
            });
        }
    })*/

    /*localStorage.setItem("carrito2", JSON.stringify(carrito2));

    let nombreProducto = document.getElementById(`nombre-producto-${id}`).textContent;
    inputProducto.innerHTML = `
        <h5 class="card-title font--big">${nombreProducto}</h5>
    `;*/


    //pintarDetalleProducto(id);

    //carrito.push(productos[id - 1]);
    //console.log(carrito.length);
    //calcularTotalCarrito();
}



function pintarDetalleProducto(id) {
    inputProducto.innerText(id);
}