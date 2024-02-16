// Asincronia vs Sincronia

/* Por Default, la ejecucion del codigo se realiza sincronicamente, sin embargo, podemosutilizar estas funciones para cambiar ese tiempo de ejecucion del programa 
*/

setTimeout() 
//Nos permite ejecutar un codigo luego de un determinado tiempo >>> no ocupa lugar en el stack ..... 

// setTimeout(codigo a ejecutar, tiempo en milisegundos)

// >>>> ejemplo
setTimeout(()=> {
    console.log("Hola mundo!")
}, 2000)

setInterval()
// Nos ejecuta un codigo luego de un intervalo


/* 
    AJAX es una api que nos permite la transferecia asincrocina de datos de una maquina a la otra>>>
    por ello hay que conocer el protocolo HTTP que es el protocolo basico de transferencia de datos en la WEB

    Este es responsable de la comunicacion CLIENTE--SERVIDOR

    El HEADERS noa indica todas los solicitudes que hacemos al servidor (esto lo visualizamos en la consola >> network)

    Existe dos headers conocidos :
        content-length >> tamano en bits del recurso solicitado

        content-type >> el tipo de recurso (ex. Imagen/jpg ... text/html ... etc.)
*/

/* 
    XML Http Request ---> XMR / AJAX que juntos forman el Async JavaScript and XML
*/
// XMLHttpRequest() es un objeto ya existente en el BOW
/* ReadyState nos dice el estado en el que se encuentra nuestra solictud (si la request llego, si volvio, si no pudo llegar, ... puede atravesar por CINCO ESTADOS diferentes :

    0 --> Objeto Instanciado 
    1 --> Objeto Configurado (el objeto ya sabe a donde tiene que ir y como )
    2 --> Headers enviados y recibidos (ya sebemos la respuesta que impacta en nuestra maquina)
    3 --> Descargando informacion
    4 --> Finalizado (no necesariamente exitoso - ex. 404)
    
*/ 

let xhr = new XMLHttpRequest
// xhr es nuestro cartero y tenemos que configurarlo >>
/* con 
    .open
    (parametro de metodo
        (forma en que solicita el recurso (ex. GET / POST / PUT / PATCH / DELETE), 
    parametro de URL 
        (para pedidos externos, que impacta en la seguridad. La politica de CORS - Cross Origin Resource Sharing / Establece las transferencias de servidor a servidor / ),
    parametro opcional)
*/
xhr.open("get","texto.txt");
console.log(xhr.readyState);

/* 
    Luego de crear y configurar nuestro objeto XMLHttpRequest, podemos realizar la transferencia de recursos >>>
    
*/


// Evento >> ReadyStateChange se va a ir ejecuntando cada vez que el readystate cambie

xhr.addEventListener("teadystatechange", ()=> {
    console.log("Estado actual: ", xhr.readyState)
    
    if(xhr.readyState == 4){
        console.log(xhr.response)
    }
});

xhr.send();

/* Validando la respuesta de un servidor */

xhr.addEventListener("teadystatechange", ()=> {
    console.log("Estado actual: ", xhr.readyState)
    
    if(xhr.readyState == 2){
        //Para verificar todos los headers >>>
        let headers = xhr.getAllResponseHeaders();
        // Para verificar uno especifico >>>
        let tipo = xhr.getResponseHeader('content-type');

        console.log(headers);
        console.log(tipo);
        // En caso de querer frenar el flujo de la verificacion >>>
        
        if (tipo != "text/html"){
            xhr.abort();
        }
    }
});

// Queremos configurar el tiempo de respuesta de nuestra solicitud y mostrar por consola si ha excedido >>>
// .timeout nos determina un tiempo de solicitud 
xhr.timeout = 1 

xhr.addEventListener("timeout", ()=> {
    console.log("El pedido se ha excedido de tiempo!")
}); 

// El evento LOAD nos ejecuta el callback en un status efectivo, cuando la solicitud se encuentra FINALIZADA (4)

xhr.addEventListener("load", ()=> {
    if (xhr.status == 200) {
        console.log(xhr.response)
    }
})

// Podemos utilizar un SWITCH para el mismo proposito

xhr.addEventListener("load", ()=> {
    switch (xhr.status) {
        case 200:
            
        break;
        case 404 :
        break;

        default:
            break;
    }
})


/* Aplicaciones de xhr y DOM */

let btn = document.querySelector('button')

btn.addEventListener('click', ()=> {
    let xhr = new XMLHttpRequest;

    xhr.open("get","texto.txt");

    xhr.addEventListener("load", ()=> {
        if (xhr.status == 200) {
            let plantilla = xhr.response;
            let div = document.createElement('div');
            div.innerHTML = plantilla
            document.body.appendChild(div);
            console.log(plantilla);
        }
    })
    xhr.send();
})