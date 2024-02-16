var inputArchivos = document.getElementById('input-archivos');
document.getElementById('subir-archivos').onclick = () => {
    var archivos = inputArchivos.files;
};

var fecha = Date.now();
var archivo = new File(
    ["Hola esto es un archivo txt"], 
    "miarchivo.txt",
    {
        lastModified: fecha,
        type: "text/text"
    }
);

console.log(archivo);
console.log(URL.createObjectURL(archivo));