const onHashChange = e => {
    const pagina = location.hash.replace('#', '');
    // Para hacer aparecer el contenido >>>
    cargarHtmlEnMain(`pages/${pagina}.html`)
}

window.addEventListener('hashchange', onhashchange);

// En caso de copiar la URL y que el contenido de la ruta aparezca en pantalla >>>
if (location.hash){
    cargarHtml();
}


