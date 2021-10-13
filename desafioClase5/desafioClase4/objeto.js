//con clase
class Fiesta{
    constructor(personas,keke,personaje,anios, presupuesto){
        this.personas = personas;
        this.keke = keke;
        this.personaje = personaje;
        this.anios = anios;
        this.presupuesto = presupuesto;
    }
    modificarPresupuesto(){
        let nuevoPresupuesto=parseFloat(prompt("Ingrese su presupuesto"));
        this.presupuesto=nuevoPresupuesto;
    }
    mostrarFiesta(){
        console.log("la fiesta es de " + this.personaje + " y el presupuesto es "+ this.presupuesto)
    }
}
const miFiesta = new Fiesta(50,"circular","masha y el oso",2 ,1000);
console.log(miFiesta);
miFiesta.modificarPresupuesto();
miFiesta.mostrarFiesta();

//funcion constructora
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