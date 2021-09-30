//saludo
let dimeHola = prompt("salúdame");
if (dimeHola=="hola" || dimeHola=="Hola" || dimeHola=="HOLA"){
    alert("¿Como estás?");
}
else{
    alert("Que pena, no me saludaste correctamente.")
}


//adivina el número
let numero=parseInt(prompt("Ingresa el número y acierta:"));
if (numero>=0 && numero<500){
    console.log("Vamos un poco mas...");
}
else if(numero===500){
    alert("Acertaste es 500!")
}
else if (numero>500){
    console.log("Te pasaste, un poco menos...");
}
else{
    console.log("Escribe un número")
}

