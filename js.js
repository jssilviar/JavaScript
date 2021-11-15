//juego de estaciones
let estaciones;
do{
    estaciones=prompt("Ingrese una estación : (e-para salir)");
    alert("Estación ingresada :" +estaciones);
    if(estaciones=="primavera"){
        alert("En esta estación los arboles florecen.");
    }
    else if(estaciones=="otoño"){
        alert("En esta estación las hojas se caen.")
    }
    else if(estaciones=="verano"){
        alert("En esta estación se puede comer helados con mayor frecuencia.")
    }
    else if(estaciones=="invierno"){
        alert("Ésta estación no les gusta a la mayoría de personas.")
    }
    else if(estaciones !="e"){
        alert("Ésta no es una estación")
    }
}while(estaciones!="e")