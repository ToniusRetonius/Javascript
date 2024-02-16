// Trabajar con funciones

// Una función es un bloque de código reutilizable 

// Funciones declarativas 
/*

function (nombre de la funcion) (parametro){
    return (argumentos a procesar);
}

*/
/*
function sumar(valor1,valor2){
    return valor1 + valor2;
}

// Invocar la función - Ejecución de la función
//          valores o arguementos                      
var resultado = sumar(10,10);
var resultado1 = sumar(200,500);
var resultado2 = sumar(1,4);

console.log(resultado);
console.log(resultado1);
console.log(resultado2);

// Desafio: una funcion (saludar) q pida nombre y la funcion debe x medio de un alert, mostrar la bienvenida al usuario

//--- Variable Global ----
// variable fuera de un bloque de codigo
//---Variable Local --- 
// variable dentro de un bloque de codigo

function saludar(dato){
    return alert("Bienvenido " + dato);
}
var nombre = prompt("Indique su nombre");
saludar(nombre);

// Funciones expresadas

var restar = function(valor1,valor2){
    return (valor1 - valor2);
}

// Invoco la funcion

var resta = restar(100,50);
var resultado3 = document.getElementById('resultado');
resultado3.innerHTML = 'El resultado de la resta es ' + resta;


//Trabajando con eventos

var body = document.querySelector('body');
var titulo = document.getElementById('titulo');

function colorFondo(){
    body.style.backgroundColor = 'teal';
    titulo.classList.add('titulo');
}

function mensaje(){
    titulo.classList.remove('titulo');
    return alert('QUE ONDA PEERROOO CUMBIA 420 PA LOS NEGROS');
}

function fondoOriginal(){
    body.style.backgroundColor = 'white';
}
*/
// Capturando datos del formulario

var enviar = document.getElementById('enviar');
var usuarios = [];

function imprimir(){
    var listar = document.getElementById('listar');
    for(i= 0;  i < usuarios.length; i++){

        var lista = '<li>' + usuarios[i] + '</li>' 
        listar.innerHTML += lista; }                
}

function agregar(){
    var nombre = document.getElementById('nombre').value;
    usuarios.push(nombre);
    var nombre = document.getElementById('nombre').value='';
   
    console.log(usuarios);
}

