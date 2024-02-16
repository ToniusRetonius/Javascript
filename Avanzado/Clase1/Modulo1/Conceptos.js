// El BOM (Browser Object Model) es una representacion del navegador en forma de objeto GLOBAL. Este puede ser accedido a traves del nombre WINDOW

// Todas las variables que escribimos sueltas van a parar al WINDOW

window.innerHeight     // Alto del documento abierto
window.innerWidth      // Ancho del documento abierto
window.outerHeight     // Alto del navegador
window.outerWidth      // Ancho del navegador
window.location.href   // Variable que controla la      direccion de la barra de navegacion       
window.console         // Objeto interfaz de la APIconsole
window.alert           // Notificaciones de alerta
window.confirm         // Ventanas de confirmacion
window.prompt          // Ventanas de ingreso de texto
window.history         // Estado del historial
window.document        // Acceder a info relativa al documento

// Para la manipulacion del DOM (Document Object Model) tenemos que acceder a los elementos de nuestro HTML y para ello ya conocemos el:

document.getElementById();          // ID (es unico)
document.getElementsByTagName();    // Etiqueta (ex: h1)
document.getElementsByClassName();  // Class (atributo class)

// Para crear un ELEMENTO NUEVO tenemos las siguentes sentencias:

document.createElement();   // Crea una etiqueta
document.appendChild();     // Asigna informacion al DOM
document.removeChild();     // Elimina informacion del DOM

// Luego  de crearlo, hay que capturarlo en una variable:

var p = document.createElement('p');

// Y luego tendremos que crearle su contenido con >>>

p.innerText = "Bienvenido a mi pagina web";

// Sin embargo, esta informacion no se muestra en nuestro documento, ya que esta en memoria de JS : para imprimirlo en algun lugar del DOM hay que capturar aquel, y luego ASIGNARLE su lugar.

/* en este caso capturamos <body></body>  */
var body = document.getElementsByTagName('body')[0];

// Finalmente, con APPENDCHILD le asigno un lugar a mi var p en el body capturado >>>

body.appendChild(p);






