var solicitud = new XMLHttpRequest();
solicitud.open("GET", 'archivo.txt');

// escuchamos la carga
solicitud.addEventListener('load', e => {
    
})

// escuchamos el inicio de la carga
solicitud.addEventListener('loadstart', e => {
    
})

// escuchamos el final de la carga
solicitud.addEventListener('loadend', e => {

})

// escuchamos 
solicitud.addEventListener('timeout', e => {
    
})

// escuchamos 
solicitud.addEventListener('abort', e => {
    
})

// escuchamos un error de carga
solicitud.addEventListener('error', e => {
    
})

// escuchamos el estado de carga y lo mostramos en el DOM 
solicitud.addEventListener('progress', e => {
    console.log("L C", e.lengthComputable);
    console.log("Cargado", e.loaded);
    console.log("Total", e.total);
    const porcentaje = 100/ e.total * e.loaded
    console.log("Porcentaje", porcentaje);

    document.querySelector('progress').value = porcentaje;
})


  
solicitud.send();

