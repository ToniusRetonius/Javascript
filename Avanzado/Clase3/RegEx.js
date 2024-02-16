// Regular Expressions  : nos permiten filtrar informacion en el string  .... recorrerlo dinamicamente ... patrones que se encuentran dentro de un string

// <<< Notacion literal >>>> 

// RegExp(patron, modificador de busqueda)
// /patron/, (modificador de busqueda)

var miRegex = new RegExp("a", "i"); 
var miRegex = /ab/m;
var miRegex = /[b]{1,2}/m;

// i = no distingue entre mayusculas y minusculas
// m = busca entre multiples lineas
// [] si usamos grupo tenemos que especificar la cantidad esperada >>>> {min, max} que determina la cantidad de caracteres
// \d buscamos numeros naturales
// [\D] numeros negativos
// [^ ] negacion de lo que sigue
// \w alfanumerico   >>> a-zA-Z0-9

const result = "aaaaaas d".matchAll(miRegex);

const textoJunto = "Juan-Perez, Pepe-Bottle, Laura-Lorenz, Patricia-Inissel";



console.log(miRegex.test("aaaaabbbbccccc"));
// .test() me pide que le inserte un string para realizar la busqueda
console.log(miRegex.exec("aaaaabbbbccccc"));
// .exec() devuelve un objeto con informacion adicional : el patron encontrado , el indice, 
console.log(result);

for (const item of result)
{
    console.log(item);   
}

console.log(textoJunto.split(','));
// el split va a separar el string en las comas y los punto-y-coma
console.log(textoJunto.split(/[,;]/)); 
// el split va a separar el string en las comas y los punto-y-coma y tiene un alcance enorme el RegEx
