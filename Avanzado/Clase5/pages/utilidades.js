const ERROR_HTML = "No se pudo cargar la sesion"
const cargarHtml = (urlHtml, callback, callbackErr) => {
    const solicitud = new XMLHttpRequest();

    solicitud.open("GET", urlHtml);

    solicitud.onload = (ev) => {
        if(solicitud.status == 200){
        callback(solicitud.response);
        } else {
        callbackErr(solicitud.status);
        }
    };

    solicitud.send();
};

const cargarHtmlEnMain = url => {
    const main = document.querySelector('main');
    cargarHtml(
        url,
        html => main.innerHTML = html,
        eer => main.innerHTML = ERROR_HTML);
};