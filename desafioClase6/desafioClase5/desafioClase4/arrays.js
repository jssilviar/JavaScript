//FUNCION SALUDAR
function saludo () {
    let nombre = prompt("Ingresa tu nombre");
    alert("Bienvenido/a: " + nombre);
}
saludo();

function Producto(personas,keke,personaje,anios, presupuesto){
    this.personas = personas;
    this.keke = keke;
    this.personaje = personaje;
    this.anios = anios;
    this.presupuesto = presupuesto;
}

let miPersona=prompt("Ingresa la cantidad de personas que asistiran a tu fiesta.");
let miKeke=prompt("Ingresa el modelo de keke (redondo, circular, rectangular,cuadrado).");
let miPersonaje=prompt("Ingresa el personaje de tu fiesta.");
let miAnios=prompt("Ingresa la edad del cumpleañero/a.");
let miPresupuesto=prompt("Ingresa tu presupuesto:"); 
let miProducto = new Producto(miPersona ,miKeke, miPersonaje, miAnios, miPresupuesto);
console.log("tu fiesta será de " +  miProducto.personaje );
console.log(miProducto);

//ARRAYS
let listaProductos=[{ nombre:"Pallet", precio :100 },
                  { nombre:"keke Redondo", precio:80 },
                  { nombre:"paletas", precio:30 },
                  { nombre:"cupcakes", precio:40 }];


let listaFiesta=0;
for (let lista of listaProductos) {
    console.log("Productos: " + lista.nombre + " precio: " + lista.precio);
    listaFiesta = listaFiesta + lista.precio;
}
let sumatoria = listaFiesta;
console.log("El total de su compra es: " + sumatoria);

//SORT Y FUNCION COMPARAR
var precios = [];
for (var item of listaProductos) {
    precios.push(item.precio);
}
console.log(precios);

function comparar(a, b) { return a - b; }
precios.sort(comparar);
console.log(precios);


