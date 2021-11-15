//EVENTOS
//OPCION 1
let boton=document.getElementById("miBoton");
boton.addEventListener("click", interactuar);

function interactuar(){
    let nombre = prompt("Ingrese su nombre");
    let fecha = new Date();
    alert("hola " + nombre + " hoy es " + fecha);
} 

//OPCION 2
boton.onclick = () => { console.log("Se registró un click")};
boton.onmouseover = () =>{ console.log("No me toques!")};
 

//EVENTOS DE TECLADO
let campoEdad = document.getElementById("edad");
let campoNombre = document.getElementById("nombre");
campoEdad.onkeydown=()=>{console.log("Presionaste una tecla!")};
campoEdad.onkeyup=()=>{console.log("Soltaste una tecla!")};

//EVENTOS SUBMIT
let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", validarFormulario);

function validarFormulario(ev){
    if((campoNombre.value == "") || (isNaN(campoEdad.value))){
        ev.preventDefault(); //evita que se borre los campos, que es la accion por defecto
        console.log("Ingrese un nombre / ingrese numeros en el campo edad");
    }else{
        alert("datos: " + campoNombre.value + " " +campoEdad.value + "años");
    }
}

//EVENTO CLIPBOARD
let texto = document.getElementsByClassName("textoP"); //cuando tomas una clase, ésta se vuelve como array
texto[0].addEventListener("copy", imprimirAlert);

function imprimirAlert(){
    console.log("Copia de texto detectada!!");
}

//EVENTO DE TECLADO DESDE HTML, detectar ENTER
function capturarEnter(evento){
    if(evento.which==13 || (evento.keyCode==13)){
        alert("Presionaste ENTER")
    }
}

//VALIDACION DE EDAD DESDE HTML
function validadEdad(entrada){
    let edadInput = entrada.value;
    if(edadInput<1 || edadInput>100){
        alert("edad inválida!");
    }
}

