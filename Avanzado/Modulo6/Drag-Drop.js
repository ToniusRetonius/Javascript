// DRAG - DROP 

/* EVENTOS 

 dragenter: dispara un evento cuando el archivo que llevo con el cursor esta dentro de la zona 

 dragleave: dispara un evento cuando el archivo que llevo con el cursor sale de la zona 

 dragover: dispara un evento cuando el archivo que llevo con el cursor esta sobre la zona 

 drop: dispara un evento cuando el archivo que llevo con el cursor es soltado

 */

let drop = document.getElementById("drop");

drop.addEventListener('dragenter', (e)=>{
    e.preventDefault()
    console.log("Estoy dentro del drop");
})

drop.addEventListener('dragleave', (e)=>{
    e.preventDefault()
    console.log("Estoy fuera del drop");
})

drop.addEventListener('dragover', (e)=>{
    e.preventDefault()
    console.log("Estoy encima del drop");
})

drop.addEventListener('drop', (e)=>{
    e.preventDefault()
    console.log("Solte el recurso");
})