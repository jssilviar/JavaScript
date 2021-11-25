//objetos
//objetos literales
const lapicero = {
    color: "verde",
    marca: "bic",
    trazo: "fino",
    precio: 50,
}
console.log(lapicero);
console.log(lapicero.marca);
lapicero.precio = 60;

const lapicero2 = {
    color: "azul",
    marca: "bic",
    trazo: "grueso",
    precio: 75,
}
console.log(lapicero2);
console.log(lapicero2.trazo); 

//funcion constructora
function Automovil(marca,modelo,color,anio){
    this.marca=marca;
    this.modelo=modelo;
    this.color=color;
    this.anio=anio;
}
let auto1=new Automovil("ford","fiesta","azul","2018");
console.log(auto1);
let miMarca=prompt("Ingresa la marca de tu automòvil");
let miModelo=prompt("Ingresa el modelo de tu automòvil");
let miColor=prompt("Ingresa el color de tu automòvil");
let miAnio=prompt("Ingresa el año de tu automòvil");

let miAuto = new Automovil(miMarca ,miModelo, miColor, miAnio);
console.log("tu auto es " +  miAuto.marca );
console.log(miAuto);

//funcion constructora con objetos literales con paràmetros y método
function Gafa(objLiteral) {
    this.marco = objLiteral.marco;
    this.aumento = objLiteral.aumento;
    this.mostrarGafa=function(){console.log("ésta gafa tiene marco "+this.marco)}
}

let gafa1={marco:"plastico", aumento: 0.25};
let miGafa = new Gafa (gafa1);
console.log(miGafa);

//metodos de string
let texto="Que tengas un hermoso dia";
console.log(texto);
//lenght es propiedad de string
console.log("La longitud del texto es " +texto.length);
//toUpperCase es metodo de string
let aMayusculas=texto.toUpperCase();
console.log(aMayusculas);
//tolowerCase es metodo de String
let aMinuscula=texto.toLowerCase();
console.log(aMinuscula);

//in y for...in
const persona1 = { nombre: "Homero", edad: 39, calle: "Av. Siempreviva 742"};
//devuelve true porque la clave "nombre" existe en el objeto persona1
console.log( "nombre" in persona1);
//devuelve false porque la clave "origen" no existe en el objeto persona1
console.log( "origen" in persona1);
//recorremos todas las propiedades del objeto con el ciclo for...in
for (const propiedad in persona1) {
    console.log(persona1[propiedad]);//es obligatorio usar los corchetes, sino no lee
} 

class Bicicleta{
    constructor(marca, color, condicion, precio) {
        this.marca = marca;
        this.color   = color;
        this.condicion  = condicion;
        this.precio = precio;
    }
    modificarPrecio(){
        let nuevoPrecio=parseFloat(prompt("Ingrese el precio actualizado"));
        this.precio=nuevoPrecio;
    }
    mostrarBici(){
        console.log("la bici es " + this.marca + " el precio es "+ this.precio )
    }
}
const bici = new Bicicleta("goliat", "rojo", "nueva", 1000);
console.log(bici);
bici.modificarPrecio();
bici.mostrarBici();

//datito de color
function f1(){
    return this;
}

console.log(f1());

class Producto {
    constructor(nombre, precio) {
        this.nombre  = nombre.toUpperCase();
        this.precio  = parseFloat(precio);
        this.vendido = false;
    }
    sumaIva() {
        this.precio = this.precio * 1.21;
    }
    vender() {
        this.vendido = true;
    }
}
const producto1 = new Producto("arroz", "125");
const producto2 = new Producto("fideo", "50");
producto1.sumaIva();
producto2.sumaIva();
producto1.vender();