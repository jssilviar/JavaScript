/* //condicionales
let numero=parseInt(prompt("Ingrese un numero"));
if (numero==7){
    console.log("Acertaste");
    }else{
        console.log("Perdiste");
    }

//jugo futbol
let edadMessi= parseInt(prompt("Que edad tiene Messi"));
let puntos=0;
if (edadMessi==34) {
    console.log("Excelente suma 1 punto");
    puntos=puntos +1; //puntos=0+1
} else if (edadMessi<34){
    console.log("Te faltaron unos añitos, Messi tiene 34 años");
    puntos=puntos-1; //puntos=0-1
} else{
    console.log("Te pasaste, Messi no es tan viejo, tiene 34 años");
    puntos=puntos-1;
}
//al final
console.log("Puntaje final: "+ puntos);

//variables booleanas
let edadUsuario=parseInt(prompt("Ingrese su edad"));
let esMayorDeEdad= (edadUsuario > 17); //(24>17)true-> esMayorDeEdad=true
console.log("El usuario es mayor de edad: " +esMayorDeEdad);
if(esMayorDeEdad){
    alert("Usted es mayor de edad");
}
else{
    alert("Usted es menos de edad");
} 

//operadores
let num1=1;
let numUno="1";
let sonIguales= (num1==numUno);
console.log("los numeros son iguales "+sonIguales);
let sonEstrictamenteIguales=(num1===numUno);
console.log("los numeros son estrictamente iguales en tipo y valor: "+sonEstrictamenteIguales);*/

//and /or
let colorFavorito = prompt("Cual es mi color favorito?");
if(colorFavorito=="azul" || colorFavorito=="AZUL" || colorFavorito=="Azul") {
    console.log("Acertaste");
}
else{
    console.log("Perdiste, mi color favorito es el azul");
}

let precio = parseInt(prompt("ingresa el precio"));
if(precio>=0 && precio<=1000){
    console.log("Presupuesto bajo");
} else if(precio>=1001 && precio<=3000){
    console.log("Presupuesto medio");
}