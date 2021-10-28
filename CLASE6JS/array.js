/* //arrays se puede escribir con const, let o var y siempre lleva []
//arrays listas
const listaDeCompras =["1kg pan","3 gaseosas","3kg asado","1kg chorizo","lechuga","carbon"];
console.log(listaDeCompras[0]);//me mostrará 1kg de pan
for(let i=0; i<6; i++){
    console.log(listaDeCompras[i])
}
//console.log(listaDeCompras.length);

//CADENA
let listaACadena = listaDeCompras.toString();
console.log( listaACadena);

//PUSH:añade un nuevo elemento
listaDeCompras.push("postre");
console.log(listaDeCompras); */

//JOIN
//console.log(listaDeCompras.join(" /*/ "));

/* //CONCAT
const elementosOlvidados = ["vino", "sal"];
const listaCompleta = listaDeCompras.concat(elementosOlvidados);
console.log(listaCompleta);

//SLICE
const carne = listaDeCompras.slice(2,4);
console.log(carne);

const sal = elementosOlvidados.slice(1);//tambien se puede poner (-1) o (1,2)
console.log(sal); */

/* //Declaraciòn de array vacío y variable para determinar cantidad
const listaNombres = [];
let   cantidad     = 5;
//Empleo de do...while para cargar nombres en el array por prompt()
do{
   let entrada = prompt("Ingresar nombre");
   listaNombres.push(entrada.toUpperCase());
   console.log(listaNombres.length);
}while(listaNombres.length != cantidad)
//Concatenamos un nuevo array de dos elementos
const nuevaLista = listaNombres.concat(["ANA","EMA"]);
//Salida con salto de línea usando join
alert(nuevaLista.join("\n")); 

//ARRAY CON OBJETOS
let listaAlumnos= [{ nombre:"Pedro Gomez", nota:8 },
                  { nombre:"Luciana Martinez", nota:10},
                  { nombre:"Alberto Gonzales", nota:5 },
                  { nombre:"Pepe G", nota:10 }];

//RECORRO LA LISTA
let acumuladorNotas=0;
for (let alumno of listaAlumnos) {
    console.log("Nombre: " +alumno.nombre + "nota final: " +alumno.nota);
    acumuladorNotas=acumuladorNotas+alumno.nota; //o acumuladorNotas+=alumno.nota
}
let promedio=acumuladorNotas/listaAlumnos.length;
console.log("El promedio de la clase es: " +promedio);

//FIND: encuentra el primer elemento que cumpla con la condicion pedida
let alumnoAlberto = listaAlumnos.find(alumno => alumno.nombre === "Alberto Gonzales");
console.log(alumnoAlberto);

//FILTER
let alumnosAprobados=listaAlumnos.filter(alumno => alumno.nota > 7);
console.log(alumnosAprobados);


class Producto {
    constructor(nombre, precio) {
        this.nombre  = nombre.toUpperCase();
        this.precio  = parseFloat(precio);
        this.vendido = false;
    }
    sumaIva() {
        this.precio = this.precio * 1.21;
    }
}
//Declaramos un array de productos para almacenar objetos

const productos = [];
productos.push(new Producto("arroz", "125"));
productos.push(new Producto("fideo", "70"));
productos.push(new Producto("pan", "50"));

//console.log(productos);

//Iteramos el array con for...of para modificarlos a todos
for (const producto of productos){
    producto.sumaIva();
    console.log("Precio con IVA "+ producto.precio)
}
   
console.log(productos);
 
//METODO MAP: crea un nuevo array
let precioConInflacion=productos.map(producto => producto.precio + 10);
console.log(precioConInflacion);*/

const productos = [{ id: 1,  producto: "Arroz", precio: 125 },
                  {  id: 2,  producto: "Fideo", precio: 70 },
                  {  id: 3,  producto: "Pan"  , precio: 50},
                  {  id: 4,  producto: "Flan" , precio: 100}];

const buscarPan = productos.find(producto => producto.id === 3); 
console.log(buscarPan);//{id: 3, producto: "Pan", precio: 50}

const baratos = productos.filter(producto => producto.precio < 100); 
console.log(baratos);//
[{id: 2,producto:"Fideo",precio:70},{id:3,producto:"Pan",precio: 50}]

const aumentos = productos.map(producto => producto.precio += 30);
console.log(aumentos);
//[155, 100, 80, 130] y el valor de cada producto cambio.
