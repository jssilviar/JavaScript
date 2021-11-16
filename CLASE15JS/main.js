//EJEMPLO SPA PLANTILLA
const controlador = new ProductoController(new ProductoModel(), new ProductoView());
//controlador.listar('#app');

// LISTA DE RUTAS (ASOCIAR A CADA ACCION)
const routes = [
    { path: '/', action: 'agregar' },
    { path: '/pagina1', action: 'listar' },
    { path: '/pagina2', action: 'buscar' },
];

console.dir(location);

//OBTENER LA RUTA ACTUAL (USAMOS EL OBJETO LOCATION Y SU PROPIEDAD HASH). SI "" || '/'  ENTONCES parseLocation = '/'
const parseLocation = () => location.hash.slice(1).toLowerCase() || '/';

console.log(parseLocation());

//BUSCAMOS LA ACCIÓN EN EL ARRAY routes QUE CORRESPONDE A LA RUTA CON FIND 
const findActionByPath = (path) => routes.find(r => r.path == path || undefined); //devuelve un objeto del array de routes

const router = () => {
    //obtenemos la ruta actual
    const rutaActual = parseLocation();
    const objetoRuta = findActionByPath(rutaActual);
    //LLamada al metodo correspondiente segun la ruta
    switch (objetoRuta.action) {
        case 'agregar':
            controlador.agregar('#app');
            break;
        case 'listar':
            controlador.listar('#app');
            break;
        case 'buscar':
            controlador.buscar('#app');
            break;
        default:
            ErrorComponent('#app');
            break;
    }
};


//CADA VEZ QUE SE DETECTA LA CARGA DE LA VENTANA SE LLAMA A LA FUNCION ROUTER
$(window).on('load', function() {
    router();
});
//CADA VEZ QUE SE DETECTA UN CAMBIO EN EL HASH (EJEMPLO la URL CAMBIA DE #/pagina1 a #/pagina2) SE LLAMA A LA FUNCION ROUTER
$(window).on('hashchange', function() {
    router();
});