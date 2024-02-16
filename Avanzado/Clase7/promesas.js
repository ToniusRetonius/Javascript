/* Una Promesa */

const promesa = new Promise((resolver, rechazar ) =>{
    setTimeout( () => {
        resolver("Hola")
    }, 3000);
});

// si sale bien

const exito = (value) => {
    console.log(value);
    return value;
}
promesa.then(exito);
promesa.then(exito, error);

// si sale mal

const error = (err) => {
    console.log(err);
}
promesa.catch(error);


