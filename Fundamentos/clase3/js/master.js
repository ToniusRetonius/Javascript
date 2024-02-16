// Trabajando con Arrays - Vectores - Arreglos - Matrices 
// -------- Array simples ---------
// Pueden tener valores tipo string - numericos - booleanos - ... y ocupan una posicion 
// Posiciones     0        1        2  n-posiciones

var miFamilia = ['Tonio', 'Maconha','Vilmouski'];
console.log(miFamilia);
console.log(miFamilia[2]);
miFamilia[3] = 'Charles';
console.log(miFamilia);

// Métodos - Funciones (ejecuta un bloque de código reutilizable) de Arrays
// Cómo hago para sacar el último elemento del Array -  .pop()

miFamilia.pop();
console.log(miFamilia);

//Para no perder ese último elemento puedo asignarle una variable

var ultimoElemento = miFamilia.pop();
console.log(miFamilia);
console.log(ultimoElemento);


// Cómo hago para agregar elementos al Array -       .push()

miFamilia.push(ultimoElemento);
console.log(miFamilia);

// Cómo hago para agregar elementos al principio del Array - .unshift()

miFamilia.unshift('Nona');
console.log(miFamilia);

// Cómo sacamos el primer elemento del Array -  .shift()

var primerElemento = miFamilia.shift();
console.log(miFamilia);
console.log(primerElemento);


//Desafio : Pedir por pantalla un nombre y dinámicamente lo vamos a guardar en un Array 

var array = [];
var nombre = prompt('indique su nombre');
array.push(nombre);
console.log(array);

//Capturando elemento h1

var titulo = document.querySelector('.titulo');
titulo.innerHTML = 'Bienvenido ' + array[0];


// Array compuestos - multidimensionales - Matrices


var misHijos = [
    ['indira',31],
    ['victor',27],
    ['luis',25],
];
console.log(misHijos[1][0]);

// Trabajando con Objetos Literales
// A un objeto le declaro n-propiedades  
/*
var objeto = [
    {
        propiedad1 : valor
        propiedad2 : valor
    }
];
*/
var misHijosObjeto = [

    {
        nombre : 'indira',
        edad : 31
    },
    {
        nombre : 'victor',
        edad : 27
    },
    {
        nombre : 'luis',
        edad : 25
    }
];
console.log(misHijosObjeto[0].nombre);

//Bucles o Ciclos Iterativos - for
/* Ciclo compuesto por dos partes 

for(declaro una variable i= valor1; hasta dónde quiero que se itere i <= valor2; declaro una operación ej: i = i + 1){
    
    
}
*/
// Bucle ascendente
// i++ ====> Incrementa de 1 en 1 
// i+=2 ====> Incrementa de 2 en 2 

for(var i=1; i <= 6; i++){
    console.log('el valor de i es: ' +i);

}

// Bucle descendente
// i-- ====> Decrementa de 1 en 1
// i-=2 ====> Decrementa de 2 en 2 

for(var i=6; i >= 1; i--){
    console.log('el valor de i es: ' +i);
}

// Recorriendo el Array

var miFamilia = ['toto', 'maki', 'vilmus', 'charles'];
for(var i = 0; i < miFamilia.length; i++){
    console.log('Integrantes de mi familia: ' + miFamilia[i]);
}