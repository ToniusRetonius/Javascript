var zonaArchivos = document.getElementById('zona-archivos');

zonaArchivos.querySelector('span').innerText = "Soltar aqui!"

// escucho cuando los archivos que tengo en el puntero se ingresan al div 
zonaArchivos.addEventListener('dragover', e => {
    // como estamos en un div... tenemos comportamientos por default -->
    e.preventDefault();
    e.stopPropagation();
})

// escucho cuando suelto en el div los archivos
zonaArchivos.addEventListener('drop', e => {
    
})

// escucho cuando saco los archivos que tengo en el puntero del div
zonaArchivos.addEventListener('dragleave', e => {
    
})


zonaArchivos.addEventListener('dragenter', e => {
    
})

zonaArchivos.addEventListener('dragend', e => {
    
})



