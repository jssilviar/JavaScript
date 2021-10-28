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

const productos =[{ nombre:"Catering", precio :100 },
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
















