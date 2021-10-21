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

//TABLA CON DOM
document.getElementById("armaTuFiesta").value="LadydiCakes";
const productos =[{ nombre:"Pallet", precio :100 },
                  { nombre:"keke Redondo", precio:80 },
                  { nombre:"paletas", precio:30 },
                  { nombre:"cupcakes", precio:40 }];
document.getElementById("cantidad").value= productos.length;

let tabla = document.createElement("table");
tabla.setAttribute("class","table table-success table-striped");
let tablaBody =document.createElement("tbody");

for (const producto of productos){
    let fila=document.createElement("tr");
    fila.innerHTML = `<td> ${producto.nombre}</td>
    <td><b> ${producto.precio}</b></td>`;
    tablaBody.appendChild(fila);
}

tabla.appendChild(tablaBody);
document.getElementById("inferior").appendChild(tabla);

