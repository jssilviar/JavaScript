//este es un comentario en JS

/*comentario con mas lineas
el script tiene que ir justo antes
de cerrar el body*/
//variables declaracion y asignacion
var edad=45;
let edad2=30;
const VALOR=3;
let suma=edad+edad2; //75
let resta=edad-edad2; //15
let multiplicacion=edad*edad2; //1350
let division=edad2/3; //10

let nombre = "Pepe";
let apellido = "Alvarez"
const BLANCO="";
//concatenacion
let nombreCompleto=nombre+ " "+ apellido; //PepeAlvarez

//salida de datos o mensajes
console.log("Bienvenidos al curso de JS");
console.log("me gusta la clase");
console.log("la suma de las edades es:"+suma);
console.log("la resta de las edades es:"+resta);
console.log("la multiplicacion de las edades es: "+multiplicacion);
console.log("la division de las edad por 3:"+division);
console.log("el nombre completo del usuario es:"+nombreCompleto);

alert("Buenos dias "+nombreCompleto);

//entrada de datos
let nombreIngresado= prompt("ingrese su nombre");
alert("Buenos dias "+nombreIngresado);
let numeroIngresado=parseInt(prompt("ingrese un numero"));//hay que parsearlo
let sumaNumero= numeroIngresado +3;
console.log("sumaNumero da:"+sumaNumero);