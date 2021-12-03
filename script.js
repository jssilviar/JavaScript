//Declarar las etiquetas en las que se cargarán los productos del archivo json
const backing1 = document.getElementById("backing1");
const backing2 = document.getElementById("backing2");
const cakes1 = document.getElementById("cakes1");
const cakes2 = document.getElementById("cakes2");
const catering1 = document.getElementById("catering1");
const catering2 = document.getElementById("catering2");

const btnFinalizarCompra = document.getElementById("finalizarCompra");

//Declarar los arrays
let productos;
let palletProducts = [];
let cakesProducts = [];
let cateringProducts = [];
let arrayCarrito = [];

async function cargarProductos() {
    productos = await fetch('./productos.json')
                            .then(res => res.json())
                            .then(data => data.productos);
    palletProducts = filtrarProductosPorCategoria(productos, "backingPallet");            
    cakesProducts = filtrarProductosPorCategoria(productos, "cakes");
    cateringProducts = filtrarProductosPorCategoria(productos, "catering");
    pintarArray(backing1, palletProducts.slice(0,3));
    pintarArray(backing2, palletProducts.slice(3,6));
    pintarArray(cakes1, cakesProducts.slice(0, 3));
    pintarArray(cakes2, cakesProducts.slice(3, 6));
    pintarArray(catering1, cateringProducts.slice(0, 3));
    pintarArray(catering2, cateringProducts.slice(3, 6));
    localStorage.setItem("productos", JSON.stringify(productos));      
}
 
cargarProductos();

function filtrarProductosPorCategoria(arreglo, categoria) {
    return arreglo.filter(item => item.categoria == categoria);
}

//Pintar cards
function pintarArray(contenedor, arreglo) {
    for(producto of arreglo) {
        let item = document.createElement("div");
        item.setAttribute("class", "col-sm-12 col-lg-4");
        item.innerHTML =   `<div class="card">
                                <img src="img/${producto.imagen}" class="card-img-top redondeado" alt="pallet blanco">
                            </div>
                            <div class="card-body">
                                <h3 class="card-title font--big">${producto.nombre}</h3>
                                <p class="card-text font--large">${producto.desc}</p>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item font--medium">Desde S/${Number(producto.precio).toFixed(2)}</li>
                                </ul>
                                <button type="button" class="btn btn-warning" onclick="anadirCarrito(${producto.id})">Añadir al Carrito</button>
                            </div>`;
        contenedor.appendChild(item);
    }
}

//Añadir producto
function anadirCarrito(productoId){
    let {id, nombre, imagen, precio} = buscarProductoPorId(productoId);
    let producto = {
        id, nombre, imagen, precio, unidades: 1
    }
    if(arrayCarrito.length == 0){
        arrayCarrito.push(producto);
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Se añadió un producto nuevo al carrito',
            showConfirmButton: false,
            timer: 2000
          })
        btnFinalizarCompra.disabled = false;
    } else {
        let existeEnCarrito = arrayCarrito.find( ({id}) => id === producto.id);
        if (existeEnCarrito === undefined) {
            arrayCarrito.push(producto);
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Se añadió un producto nuevo al carrito',
                showConfirmButton: false,
                timer: 2000
              })
        } else {
            existeEnCarrito.unidades += 1;
        }
    }
    localStorage.setItem("carrito", JSON.stringify(arrayCarrito));
    actualizarCarrito();
}

function buscarProductoPorId(id) {
    let productosEnMemoria = localStorage.getItem("productos");
    let productosJSON = JSON.parse(productosEnMemoria);
    return productosJSON.find(item => item.id === id);
}

const conteo = document.getElementById("cantidadProductos");
const totalCompra = document.getElementById("totalCompra");
function actualizarCarrito() {
    let carritoString = localStorage.getItem("carrito");
    let carrito = JSON.parse(carritoString);
    let unidades = 0;
    let totalCarrito = 0;
    for (let item of carrito) {
        unidades += item.unidades;
        let totalPorItem = item.unidades * item.precio;
        totalCarrito += totalPorItem;
    } if (unidades === 0){
        btnFinalizarCompra.disabled = true;
    }
    totalCompra.textContent = Number(totalCarrito).toFixed(2);
    conteo.textContent = unidades;
    actualizarTabla(carrito);
}

//Crear tabla
const tablaDetalle = document.getElementById("resumen");
function actualizarTabla(arreglo) {
    if (arreglo === null) {
        tablaDetalle.innerHTML = "";
    } else {
        tablaDetalle.innerHTML = "";
        for (let productoSeleccionado of arreglo) {
            let linea = document.createElement("tr");
            linea.innerHTML = `<td>${productoSeleccionado.nombre}</td>
                                <td><img src="./img/${productoSeleccionado.imagen}" class="imgResumen redondeado"></td>
                                <td>S/${Number(productoSeleccionado.precio).toFixed(2)}</td>
                                <td><input type="number" class="unidades" min="1" max="10" value="${productoSeleccionado.unidades}" readonly/></td>
                                <td><i class="fas fa-trash-alt delete" onclick="deleteProduct(${productoSeleccionado.id})"></i></td>`;
            tablaDetalle.appendChild(linea);
        }
    }
}

//Borrar producto
function deleteProduct(id){
    Swal.fire({
        title: '¿Estás seguro?',
        text: "Se eliminará este producto de tu carrito",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, borrar!'
      }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                'Eliminado!',
                'El producto ha sido eliminado',
                'success'
            );
            let nuevoArreglo = arrayCarrito.filter( item => item.id !== id);
            arrayCarrito = nuevoArreglo;
            actualizarTabla(arrayCarrito);
            localStorage.setItem("carrito", JSON.stringify(arrayCarrito));
            actualizarCarrito();
        }
      });     
}

//Finalizar compra
btnFinalizarCompra.addEventListener("click", handleFinCompra);
function handleFinCompra(){
    let total =  Number(totalCompra.textContent).toFixed(2)
    Swal.fire(
        `Tu compra ha sido por S/${total}`,
        '¡Gracias por tu preferencia!',        
        'success'
    );
}

//comprobando formulario
const formulario = document.getElementById("formulario");
const mandarCorreo = document.getElementById("mandarCorreo");
formulario.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(this);
    let nombre = data.get('nombre');
    let inputAddress = data.get('inputAddress');
    let referencia = data.get('referencia');
    let email = data.get('email');
    let mensaje = data.get('mensaje');
    let calendario = data.get('calendario');
    let celular = data.get('celular');
    let encabezado = "COTIZACIÓN"
    let body = `CLIENTE: ${nombre}\
    DIRECCIÓN: ${inputAddress}\
    REFERENCIA: ${referencia}\
    EMAIL: ${email}\
    TELÉFONO: ${celular}\
    FECHA DE EVENTO: ${calendario}\
    MENSAJE: ${mensaje}`;
    mandarCorreo.setAttribute('href', `mailto:jssilviar@gmail.com?subject=${encabezado}&body=${body}`);
    mandarCorreo.click();
    Swal.fire(
        `En breve nos contactaremos contigo`,
        '¡Gracias por tu preferencia!',        
        'success'
    );
    this.reset();
}

//sombreado de secciones de la nav
const secciones = document.querySelectorAll('.seccion');
const menuItems = document.querySelectorAll('.menu_item');

const funcionObserver = entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const itemActual = Array.from(menuItems).find(item => item.dataset.url === entry.target.id)
            itemActual.classList.add('active')
            for (const item of menuItems) {
                if (item != itemActual) {
                    item.classList.remove('active')
                }
            }
        }
    })
}

const observer = new IntersectionObserver(funcionObserver, {
    root: null,
    rootMargin: '0%',
    threshold: 0.8
})

secciones.forEach(seccion => observer.observe(seccion))