// Manipulacion de objetos
//const miOBjeto = Object.create();

const miOBjeto = {};
miOBjeto.prop = "aaa";

const otroObjeto = miOBjeto;
otroObjeto.prop = "cualq";

const nuevoObjeto = {...miOBjeto};
nuevoObjeto.prop = "buuuuu";

console.log(miOBjeto);
console.log(otroObjeto);

const nombre = "John";
const apellido = "Rogerson";

const persona = 
{
    nommbre: nombre,
    apellido: apellido
}

console.log(persona);

const consologuearNombreApellido = (persona) =>
{
    const { nombre, apellido } = persona; 
    console.log(nombre);
    console.log(apellido);
};
consologuearNombreApellido();

const funcionEj = (param1, param2) => {};
const funcionEj = {...params} => {};

