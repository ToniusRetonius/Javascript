
let xhr = new XMLHttpRequest
xhr.open("get","https://jsonplaceholder.typicode.com/users")
xhr.addEventListener("load", ()=>{
    if(xhr.status == 200){
        // transformo el tipo de resultado
        let respuesta = JSON.parse(xhr.response)
        console.log(respuesta)
    }
})
xhr.send()

// headers de autorizacion >>>
// Existe una politica de seguridad que limita el consumo de recursos de servidores externos, para ello se envian headers de tipo CORS (Cross Origin Resource Sharing) que se comparten entre dominios para demandar acceso 

/* access-control-allow-origin : determina quien tiene acceso a que recurso */
/* access-control-allow-origin >>> puede retornar un asterisco (*) esto indica que todo el mundo tiene acceso */

// la API e GLOBE me permite hacer traducciones >>>

let xhr = new XMLHttpRequest
let url = "https://globe.com/gapi/translate?from=es&dest=en&phrase=hola&format=json&callback=unCallback"
xhr.open("get",url)

/* Nos presenta los siguientes parametros :
    from : de que idioma realizo la traduccion
    dest : en que idioma recibo la traduccion
    phrase : el texto a traducir
    format : formato en que recibo el texto traducido
    pretty : nos modifica la visualizacion del script
    JSONP es una tecnica para consumir el mismo recurso anidado en >>
        un callback .
*/

xhr.addEventListener("load", ()=>{
    if(xhr.status == 200){
        let respuesta = JSON.parse(xhr.response)
        console.log(respuesta)
    }
})

xhr.addEventListener("error", ()=> {
    let script = document.createElement("script")
    script.src = `$(url)&callback=algunCallback`
    document.body.appendChild(script)
})

xhr.send()


function algunCallback(resultado){
    console.log(resultado)
}



