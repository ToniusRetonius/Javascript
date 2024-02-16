// El objeto FORMDATA me permite registrar todos los datos dentro de si y enviarlos simultaneamente al servidor

var forElemento = document.getElementById('mi-formulario');

forElemento.addEventListener('submit', e => {
    var miFormulario = new FormData(forElemento);
    var nombre = miFormulario.get("nombre");
    miFormulario.set("apellido", "Perez");

})

var paramentros = new URLSearchParams();
paramentros.set('id', 12);
paramentros.set('cliente','alumno')
// agarramos el formulario y lo enviamos
solicitud.open('PUT', "/url-api?" + paramentros.toString());
solicitud.send(miFormulario);
 


