//DOM
//console.dir(document.body);

//ID
let seccion = document.getElementById("principal");
//console.log(seccion.innerHTML);
//console.log(seccion.innerText);
seccion.style.background = "green";

let titulo = document.getElementById("titulo");
let nombre = prompt("Ingresa tu nombre");
titulo.innerText = "Buenos dias "+ nombre;
titulo.style.font = "bold 45px arial"

//TAG
let parrafos = document.getElementsByTagName("p");
parrafos[0].innerText = "Que bueno que viniste!";
parrafos[1].innerText = new Date().toLocaleDateString();

let labels1 = document.getElementsByTagName("label");

//ACTIVARDARK
function activarDark(){
    for(const parrafo of parrafos){
        parrafo.style.color ="white";
    }
    seccion.style.background ="black";
    labels1[0].style.color = "white";
    labels1[1].style.color = "white";
    titulo.style.color ="white";
    let boton = document.getElementById("boton");
    boton.innerText = "Light mode";
}

//CAMPOS
document.getElementById("empresa").value="Mercado Libre";
const productos = [{ id: 1,  nombre: "Arroz", precio: 125},
                  {  id: 2,  nombre: "Fideo", precio: 70 },
                  {  id: 3,  nombre: "Pan"  , precio: 50 },
                  {  id: 4,  nombre: "Flan" , precio: 100}
                ];
document.getElementById("cantidad").value= productos.length;

//TABLA CON DOM
let tabla = document.createElement("table");
tabla.setAttribute("class","table table-striped");
let tablaBody =document.createElement("tbody");

for (const producto of productos){
    let fila=document.createElement("tr");
    //plantilla literal
    fila.innerHTML = `<td> ${producto.id}</td>
    <td> ${producto.nombre}</td>
    <td><b> ${producto.precio}</b></td>`;
    //termina la fila
    tablaBody.appendChild(fila);
}

tabla.appendChild(tablaBody);
document.getElementById("inferior").appendChild(tabla);
