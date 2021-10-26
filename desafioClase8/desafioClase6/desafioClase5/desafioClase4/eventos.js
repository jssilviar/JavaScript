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

saludo();

const productos =[{ nombre:"Catering", precio :100 },
                  { nombre:"Cakes", precio:80 },
                  { nombre:"Backing Pallet", precio:30 }];

let botonProductos = document.getElementById("productos");

botonProductos.addEventListener("click", lista);

function lista(){
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


















