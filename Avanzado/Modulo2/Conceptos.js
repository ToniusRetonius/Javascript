// Eventos
/* Podemos programar eventos directamente sobre nuestro HTML como atributo de etiqueta :

    <button onclick="console.log("Hiciste click")"> CLICK </button>

Sin embargo, desde nuestro JS podemos capturar el elemento:

    <button id="boton" >    </button>

Para luego asignarle un evento o funcion (callback) >>>
*/

var boton = document.getElementById("boton");

var uno = () => 
    {
        console.log('Me hiciste click');
    }

/* Teniendo el elemnto capturado y la funcion programada es momento de utilizar >>> 

    (Elemento).addEventListener((nombre del evento), (nombre de la funcion));
*/

boton.addEventListener("click", uno);

// En caso de querer aplicar diferentes funciones al mismo evento, puedo plantear :

var dos = () => 
    {
        console.log('Hola mundo!');
    }

    boton.addEventListener("click", dos());

// Ahora, cuando le de click al boton, voy a recibir por consola tanto "Me hiciste click" como "Hola mundo!"
