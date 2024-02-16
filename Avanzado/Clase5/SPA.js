// buscamos los enlaces
document.querySelectorAll('a').forEach(enlace => {

    // escuchamos el click
    enlace.addEventListener('clicl', e => {

        // frenamos comportamiento default
        e.preventDefault()

        // cargamos html dinamico
        cargarHtmlEnMain(e.target.href);
    });
});