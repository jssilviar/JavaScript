//sessionstorage o localstorage
//storage
let nombreUsu=prompt("Ingrese su nombre");
localStorage.setItem("nombre", nombreUsu);

let nombreGuardado=localStorage.getItem("nombre");
console.log("el nombre de local storage es: " +nombreGuardado);

localStorage.setItem("edad",45);
let edadGuardada = localStorage.getItem("edad");
console.log(typeof edadGuardada);

sessionStorage.setItem("notas", [ 6, 8, 4, 10, 5 ]);
let notasGuardadas = sessionStorage.getItem("notas").split(",");
console.log(notasGuardadas);
let notasFinal = notasGuardadas.map(nota=> parseInt(nota));
console.log(notasFinal);

//Ciclo para recorrer las claves almacenadas en el objeto localStorage
for (let i = 0; i < localStorage.length; i++) {
    let clave = localStorage.key(i);
    console.log("Clave: "+ clave);
    console.log("Valor: "+ localStorage.getItem(clave));
}

//remover item y clear
localStorage.setItem('bienvenida', '¡Hola Code!');
sessionStorage.setItem('esValido', true);

localStorage.removeItem('bienvenida');
sessionStorage.removeItem('esValido');
localStorage.clear()    //elimina toda la información
sessionStorage.clear() //elimina toda la información

const multiplicar  = (a, b) => a * b;
const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };

// Solicitamos un valor al usuario
let ingresarNumero = parseInt(prompt("Ingresar Numero"));
// En cada repetición calculamos el número ingresado por el número de repetición (i)
for (let i = 1; i <= 10; i++) {
    guardarLocal(i,multiplicar( parseInt(ingresarNumero),i));
}

//GUARDANDO OBJETOS EN STORAGE
//con getItem das un dato, con setItem pides el dato

//DE OBJETO A STRING
localStorage.setItem("unEmpleado", JSON.stringify({ legajo: 12341,nombre: "Jorge Arias", sueldo:67000})
);
let jsonGuardado = localStorage.getItem("unEmpleado");
console.log("Json guardado: " + jsonGuardado);
//DE STRING A array de OBJETO
let jsonAObjeto = JSON.parse(jsonGuardado);
console.log("Json convertido nuevamente a objeto: ");
console.log(jsonAObjeto);

localStorage.clear();
const empleados = [
        { legajo: 12341, nombre: "Jorge Arias", sueldo: 67000},
        {legajo: 78654, nombre: "Nicolas Gomez", sueldo: 55000},
        {legajo: 87090, nombre: "Josefina Perez", sueldo: 67000},
        {legajo: 12888, nombre: "Jorge Arias", sueldo: 120000}
];
const guardarlocalSt = (clave, valor) => { localStorage.setItem(clave, valor) };

for(const empleado of empleados) {
    guardarlocalSt(empleado.legajo, JSON.stringify(empleado));
}

guardarlocalSt("listaEmpleados", JSON.stringify(empleados));
const almacenados = JSON.parse(localStorage.getItem("listaEmpleados")); //lista de objetos literales

class Empleado {
    constructor(objLit){
        this.legajo = objLit.legajo;
        this.nombre = objLit.nombre;
        this.sueldo = objLit.sueldo;
    }
    aumentarSueldo(){
        this.sueldo = this.sueldo * 1.15; 
    }
}
const misEmpleados = [];
for (const literal of almacenados){
    misEmpleados.push(new Empleado(literal));
}
for (const empleado of misEmpleados){
    empleado.aumentarSueldo();
}
console.log(misEmpleados);


