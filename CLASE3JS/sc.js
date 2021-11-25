//ciclos
//ciclos por conteo -FOR
for (let i = 1; i <= 10; i++) {
    console.log("Vuelta nro. " +i);
}
 
//DIAPO 14
// Solicitamos un valor al usuario
let ingresarNumero = parseInt(prompt("Ingresar Numero"));
// En cada repetición, calculamos el número ingresado x el número de repetición (i)
for (let i = 1; i <= 10; i++) {
    let resultado = ingresarNumero * i ;
    console.log(ingresarNumero +" X "+ i +" = "+ resultado);
}
//DIAPO 15
for (let i = 1; i <= 4; i++) {
    // En cada repetición solicitamos un nombre.
    let ingresarNombre = prompt("Ingresar nombre");
    // Informamos el turno asignado usando el número de repetición (i).
    alert(" Turno  N° "+i+" Nombre: "+ingresarNombre);
}
//sentencia break
for (let i = 1; i <= 3; i++) {
    let contrasenia=prompt("Ingresar contraseña : ");
    if(contrasenia==="Pepe1234"){
        alert("Bienvenido al sistema Pepe");
        break;
    }else{
        alert("Contraseña incorrecta");
    } 
}
//DIAPO 17-sentencia continua
for (let i = 1; i <= 10; i++) {
    //Si la variable i es 5, no se interpreta la repetición
    if(i == 5){
        continue;
    }
    alert(i);
}
 
//CICLO WHILE
let animal=prompt("Ingrese un animal : (s-para salir)");
while(animal != "s"){
    alert("El animal es: " +animal)
    animal=prompt("Ingrese otro animal : (s-para salir)");
}
//CICLO DO...WHILE
let color;
do{
    color=prompt("Ingrese un color : (s-para salir)");
    alert("Color ingresado :" +color);
    if(color=="rojo"){
        alert("Me encanta el dolor rojo");
    }else{
        alert("Ese color no me gusta");
    }
}while(color!="s")

//creo algoritmo que permita calcular el promedio de nota de un curso

//opcion #1 sabiendo la cantidad exacta de alumnos
let sumatoria=0;
for (let i = 1; i <= 5; i++) {
    let nota=parentInt(prompt("ingrese la nota del alumno :" +i));
    sumatoria= sumatoria+nota;
}
let promedio =sumatoria /5;    
console.log("El promedio final sera :" +promedio);

//opcion #2 desconociendo la cantidad de alumnos
let sumatoriaTotal =0;
let contadorAlumnos= 0;
let notaAlumnos=parseInt(prompt("Ingrese la nota del alumno (0-para salir)"));


//CONDICIONAL SWITCH
let fruta=prompt("Ingrese la fruta y saldrá peso por 1kg :");
while(fruta!="s"){
    switch(fruta){
        case"banana":
        alert("Cuesta 1sol");
        case"naranja":
        alert("Cuesta 2.50 soles");
        default:
        alert("Fruta sin stock por el momento");
    }
}
let fruta=prompt("Ingrese la fruta y saldrá peso por 1kg :");
