async function cargar(){
    let fecha;
        for (let i = 0; i < 10000 ; i++){
            fecha = new Date()
        }
        return fecha;
}

const cargarAsync = async () => {
    var resultado = await cargar();
    return resultado;
};

cargar();

var carga = await cargar();