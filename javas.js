let pedido = "";
const torta= 60;
const catering=50;
const mobiliario=150;
const precioDescuento = 5;

const suma  = (a,b) => a + b;
const resta = (a,b) => a - b;
const igv = x => x * 0.18;

function saludo () {
    let nombre = prompt("Ingresa tu nombre");
    alert("Bienvenido/a: " + nombre);
}
saludo();

const calculo = (producto) => {
    let nuevoPrecio = resta(suma(producto, igv(producto)), precioDescuento);
    return nuevoPrecio;
}

//DÁNDOLE PRECIOS AL CLIENTE SEGÚN SU ELECCIÓN
do{
    pedido=prompt("Ingrese un pedido : 1:torta, 2:mobiliario o 3:catering (exit-para salir)");
    
    if(pedido=="1"){
    		alert("El pedido ingresado es torta.");
        alert("Precios desde S/" + calculo(torta));
        break;
    } else if(pedido=="2"){
    		alert("El pedido ingresado es mobiliario.");
    		alert("Precios desde S/" + calculo(mobiliario));        
        break;
    } else if(pedido=="3"){
    		alert("El pedido ingresado es catering.");
        alert("Precios desde S/" + calculo(catering));
        break;
    } else if (pedido !="exit");
        alert("Disculpa, por el momento no ofrecemos ésto.")
        break;
} while(pedido!="exit");