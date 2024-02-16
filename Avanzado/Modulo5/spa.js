// Single Page Application (SPA)
/* Es una navegacion contruida en la que el usuario visualmente interpreta como si estuviera navegando a traves de distintos contenidos, sin embargo, nosotros inyectamos con AJAX asincronicamente contenido.
   Para ello, debo construir plantillas de navegacion
*/

let links = document.querySelectorAll('a');
let main = document.querySelector('main');

links.forEach((link)=>{
    link.addEventListener('click', (e)=> {
        //e.target.id
        let id = link.id
        let archivo = id + ".html"
        let xhr = ajax(archivo)

        // Para manipular manualmente el Historial >>
        //history.pushState()

        xhr.addEventListener("load", ()=> {
            if (xhr.status == 200){
                main.innerHTML = xhr.response
                // Creo un estado de historial de tipo objeto >>>
                history.pushState({template : xhr.response},"",id)
            }
        })
    })
})

let pagina_principal = ajax("home.html")


function ajax (url,metodo){
    // si no recibe metodo ===> toma GET por default
    let http_metodo = metodo || "GET"
    let xhr = new XMLHttpRequest
    xhr.open(http_metodo, url)
    xhr.send()
    // Retorno el objeto XHR entero ya que no se puede retornar la respuesta
    return xhr
}

// popstate : nos ejecuta el callback cada ve que el usuario vaya manualmente para adelante o para atras
window.addEventListener("popstate",(e)=> {
    console.log(e.state)
    if(e.state.template){
        main.innerHTML = e.state.template
    }else{
        location.pathname.split("/")[1] + ".html"    
        let xhr = ajax(archivo)
        xhr.addEventListener("load", ()=> {
                if (xhr.status == 200){
                    main.innerHTML = xhr.response
                    history.pushState({template : xhr.response},"",id)
                }
            })
    }
    console.log("cambio el historial")
})

