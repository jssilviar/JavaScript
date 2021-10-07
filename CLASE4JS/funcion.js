//FUNCIONES
//sin parámetros
function restar() {
    let numero1=parseInt(prompt("Ingrese el 1er número"));
    let numero2=parseInt(prompt("Ingrese el 2do número"));
    let resta=numero1-numero2;
    console.log("El resultado es: "+resta);
}

restar();


// //CON PARÁMETROS
let resultado;
function restarConParametros(num1,num2){
    resultado=num1-num2;
}

restarConParametros(89,9);
console.log("El resultado es: "+resultado);

//EJEM 1 PARA EDADES
let edad1=parseInt(prompt("Ingrese edad de la 1era persona"));
let edad2=parseInt(prompt("Ingrese edad de la 2da persona"));
restarConParametros(edad1,edad2);
console.log("la diferencia de edad entre las personas es: " +resultado);

//EJEM 2 PARA AÑO DE NACIMIENTO
let anioDeNacimiento=parseInt(prompt("Ingrese su año de nacimiento:"));
const anioActual=2021;
restarConParametros(anioActual,anioDeNacimiento);
console.log("La edad que tienes es:  " +resultado + "años");

//CON PARAMETROS Y RETONRO
function concatenarTextos(texto1, texto2){
let textoConcatenado = texto1 + " " + texto2;
return textoConcatenado; //Mariano Vasquez
}

let nombre=prompt("Ingresar nombre:");
let apellido=prompt("Ingresar apellido:");
let nombreCompleto= concatenarTextos(nombre, apellido);
console.log("buenos dias " + nombreCompleto);

//DIAPO 
function calculadora(primerNumero, segundoNumero, operacion){
//EL ORDEN DE LOS PARAMETROS DECLARADOS NO INFLUYE EN EL RESULTADO, SIEMPRE Y CUANDO EN EL CONSOLE.LOG SE DECLARE DE LA MISMA FORMA
    switch (operacion) {
        case "+":
            return primerNumero + segundoNumero;
            break;
        case "-":
            return primerNumero - segundoNumero;
            break;
        case "*":
            return primerNumero * segundoNumero;
            break;
        case "/":
            return primerNumero / segundoNumero;
            break;
        default:
            return 0;
            break;
    }
}
console.log(calculadora(10, 5, "*"));

let valor1=parseFloat(prompt("ingrese un numero:"));
let valor2=parseFloat(prompt("ingrese otro numero:"));
let ope=prompt("ingrese la operacion a realizar + - * /");
let resultadoFinal=calculadora(valor1, ope, valor2);
alert("El resultado de " + valor1 +" "+ ope + " " + valor2 + " = " + resultadoFinal);

//FUNCIONES FLECHA
//sin parámetros
let saludo=()=>{
    let miNombre=prompt("Ingresa tu nombre");
    alert("Espero que estes bien " + miNombre);
}
saludo();

//con parametros
const saludo2=(unNombre)=>{
    alert("Que descanses " + unNombre);
}

//ejem1
saludo2("Pepe");

//ejem2
let nomb=prompt("Ingresa tu nombre");
saludo2(nomb);

//ejem3
saludo2(prompt("quien eres?")); 

const suma  = (a,b) => a + b;
const resta = (a,b) => a - b;
//Si una función es una sola línea con retorno y un parámetro puede evitar escribir los ()
const iva   = x => x * 0.21;
let precioProducto  = 500; 
let precioDescuento = 50;  
//Calculo el precioProducto + IVA - precioDescueto
let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), precioDescuento); 
console.log(nuevoPrecio);
