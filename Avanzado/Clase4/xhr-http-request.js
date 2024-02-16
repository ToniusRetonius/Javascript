var cargarHtml = (urlHtml, callback) => {
    const solicitud = new XMLHttpRequest();

    solicitud.open("GET", urlHtml());

    solicitud.onload = (ev) => {
        callback(solicitud.response)
    }


    solicitud.send();
};

const agregarHtmlAlBody = html => {
    const elemento = document.createElement('main');
        elemento.innerHTML = html;
        document.body.appendChild(elemento);
};

cargarHtml("html.html", agregarHtmlAlBody)


var cargarJson = (urlHtml, callback) => {
    const solicitud = new XMLHttpRequest();

    solicitud.open("GET", urlHtml());
    solicitud.setRequestHeader('content-type',"application/json")
    solicitud.setRequestHeader('Authentication', 'Bearer')
    solicitud.onload = (ev) => {
        const resultado = JSON.parse(solicitud.response);
        callback(resultado);
        
    };

    solicitud.onerror = err => {}

    solicitud.onprogress = progress =>{}

     
    
    solicitud.send();
};

cargarJson = ('url',data => {
        cargarHtml('html.html', agregarHtmlAlBody);
        data.forEach(data => {
            const htmlItem = 'html'.replace("{{title}}", data.title);
            cargarHtml('html.html', agregarHtmlAlBody(htmlItem));
        });
});