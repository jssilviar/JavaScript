//JQUERY
$("#fila_prueba").css({ background: 'red', color: 'white' });

//js puro
//let miDiv=document.getElementById("fila_prueba");
//miDiv.style.background="red";
//miDiv.style.color="white";

//append-agregar en la parte baja
$("body").append("<p>JQuery ejemplo de append");

//prepend- agrego en la parte alta
//$("body").prepend("<p>Buen dia");

//alert de sweetalter
$("body").prepend("<button class='btn btn-warning' onclick='alertar();'>VER FECHA Y HORA<button>");

const alertar = () => {
    console.log("ejecuta hora");
    let ahora = new Date();
    Swal.fire(
        'fecha hoy',
        ahora.toLocaleString(),
        'success',
    );
    console.log("Se terminó de ejecutar la func alertar");
}


//ordenar el array de productos por precio
productos.sort(function(a, b) { return a.precio - b.precio });

//renderizamos utilizando lista horizontales
for (const producto of productos) {
    $(".milista").append(
        `<li class="list-group-item">
        <h3> ID: ${producto.id} </h3>
        <img src=${producto.foto} width="250" height="250"
        <p> Producto=${producto.nombre}</p>
        <b> $ ${producto.precio} </b>
    </li>`);
}