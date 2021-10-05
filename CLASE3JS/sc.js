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
