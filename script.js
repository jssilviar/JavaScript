//cambiando de color en la nav
const backingPallet = document.querySelector('#backingPallet');
const cakes = document.querySelector('#cakes');
const catering = document.querySelector('#catering');
const contactanos = document.querySelector('#contactanos');
const ubicanos = document.querySelector('#ubicanos');
const carritoDeCompras = document.querySelector('#carritoDeCompras');

const itemBackingPallet = document.querySelector('#li-backingPallet');
const itemCakes = document.querySelector('#li-cakes');
const itemCatering = document.querySelector('#li-catering');
const itemContactanos = document.querySelector('#li-contactanos');
const itemUbicanos = document.querySelector('#li-ubicanos');
const itemCarritoDeCompras = document.querySelector('#li-carritoDeCompras');

const ob1 = new IntersectionObserver(callback);

function callback(entries, observador) {
    if (entries[0].isIntersecting) {
        itemBackingPallet.classList.add('header__sombra');
    } else {
        itemBackingPallet.classList.remove('header__sombra');
    }
}

ob1.observe(backingPallet);

const ob2 = new IntersectionObserver(callback2);
const ob3 = new IntersectionObserver(callback3);

ob2.observe(cakes);
ob3.observe(catering);

function callback2(entries, observador) {
    if (entries[0].isIntersecting) {
        itemBackingPallet.classList.remove('header__sombra');
        itemCakes.classList.add('header__sombra');
    } else {
        itemCakes.classList.remove('header__sombra');
    }
}

function callback3(entries, observador) {
    if (entries[0].isIntersecting) {
        itemCakes.classList.remove('header__sombra');
        itemCatering.classList.add('header__sombra');
    } else {
        itemCatering.classList.remove('header__sombra');
    }
}

if (localStorage.getItem("carrito")) {
    localStorage.removeItem("carrito");
}

let gridCarro = document.getElementById("gridCarro");
//llamar json de productos
function cargarProductos() {
    fetch('./productos.json')
        .then(data => console.log(data.json()))
        // .then(p)
}

cargarProductos()
    /* 

    for (const producto of productos) {
        let cardProducto = document.createElement("div");
        cardProducto.setAttribute("class", "cardCarrito");
        cardProducto.innerHTML = `
            <img src="./imagenes/${producto.imagen}" class="card-img-top" alt="${producto.imagen}">
            <div class="card-body">
                <h5 id="nombre-producto-${producto.id}" class="card-title font--big">${producto.nombre}</h5>
                <p class="card-text font--large">${producto.desc}</p>
            </div>
            <div class="cardPrecio">
                <ul class="list-group list-group-flush"><strong>
                    <li class="list-group-item font--medium">S/ <span id="precio-producto-${producto.id}">${producto.precio}</span></li>
                </ul>
            </div>
            <div class="cantidad font--small">
                <button id="${producto.id}">Añadir</button>
                <button id="reset-${producto.id}" class="card-link" onclick="borre()">Borrar</button>
            </div>
        <p style="display: none">${producto.id}</p>`;

        gridCarro.appendChild(cardProducto);

        document.getElementById(`${producto.id}`).onclick = () => agregarAlCarrito(`${producto.id}`);
        $(".cardCarrito").css({ background: 'darkkhaki', color: 'black' });
        $(".cardPrecio").css({ background: '#f5db5d', color: 'black' });
    }

    $("#vaciarCarrito").prepend("<button id='btnVaciarCarrito' class='btn btn-warning' onclick='alertar();' disabled>Vaciar el carrito</button>");

    let carrito = [];

    let carritoSize = document.getElementById("cantidadProductos");
    let detalleProductos = document.getElementById(`detalleProductos`);
    let btnVaciarCarrito = document.getElementById(`btnVaciarCarrito`);

    $("#mostrarOcultar").hide();

    function agregarAlCarrito(id) {
        let precioProducto = parseFloat(document.getElementById(`precio-producto-${id}`).textContent);
        let productoNombre = document.getElementById(`nombre-producto-${id}`).textContent;
        let carritoString = localStorage.getItem("carrito");
        if (carritoString == null) {
            btnVaciarCarrito.disabled = false;
            carrito.push({
                idProducto: id,
                productoNombre: productoNombre,
                unidades: 1,
                precioProducto: precioProducto
            });
            localStorage.setItem("carrito", JSON.stringify(carrito));
            $("#mostrarOcultar").show();

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
        let carritoString = localStorage.getItem("carrito");
        if (carritoString === null) {
            detalleProductos.innerHTML = "";
        } else {
            detalleProductos.innerHTML = "";
            let carrito = JSON.parse(carritoString);
            let totalItem
            let totalCompra
            for (let producto of carrito) {
                let linea = document.createElement("tr");
                linea.innerHTML = `<td>${producto.productoNombre} (${producto.unidades})</td><td> S/${Number(producto.precioProducto * producto.unidades).toFixed(2)}<button id="btn-delete-${producto.idProducto}" onclick="deleteProduct(${producto.idProducto})">Eliminar</button></td>`;
                detalleProductos.appendChild(linea);
                totalCompra = +(producto.precioProducto * producto.unidades);
                console.log(totalCompra);
            }
        }
    }

    /*function deleteProduct(id) {
        console.log("Eliminando el producto:", id);
        let carritoString = localStorage.getItem("carrito");
        let carrito = JSON.parse(carritoString);
        carrito.find(item => {
            if (id === item.idProducto) {

            }
        })
    }

     
    $(`#eliminar${productoNombre}`).click(function()){
        let eliminarProd
    } 

    const alertar = () => {
        let fecha = new Date().toLocaleDateString();
        Swal.fire({
            title: '¿Seguro que deseas eliminar todo los productos de tu bolsa de compra?',
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: 'Sí',
            denyButtonText: `No`,
            icon: 'warning',
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire('Eliminado!', '', 'success');
                localStorage.removeItem("carrito");
                actualizarDetalle();
                carrito.length = 0;
                carritoSize.textContent = 0;
                btnVaciarCarrito.disabled = true;
                $("#mostrarOcultar").hide();
            } else if (result.isDenied) {
                Swal.fire('No se ha eliminado los productos', '', 'info')
            }
        })
    }

    //mostrarOcultar detalles del carro de compras
    $("#mostrarOcultar").click(function() {
        if ($("#mostrarOcultar").html() == "Ocultar") {
            $("#mostrarOcultar").html(" Mostrar");
        } else {
            $("#mostrarOcultar").html("Ocultar");
        }
        $("#detalleProductos").fadeToggle(1000);
    }); */