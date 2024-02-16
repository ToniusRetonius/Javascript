//Capturando los elementosm del HTML - DOM (Modelo Objeto Documento)
//Capturar : por Etiqueta (body - h1 - p - )
//Capturar : por Clase ( .clase)
//Capturar : por Identificador Único ( #id )
var titulo = document.querySelector('h1');

console.log(titulo);

// Trabajando con la interacción con el usuario
//promp - pedir datos al usuario de tipo string
var nombre = prompt('indique su nombre');
var edad = Number(prompt('indique su edad'));

//parsear datos 
// parseInt - parseFloat


console.log(nombre);
console.log(typeof(nombre));
console.log(edad);
console.log(typeof(edad));

//cómo pedir confimación al usuario
//var respuesta = confirm(' Desea continuar ? ');

//lo que me devuelve es un valor boolean : true - false
//console.log(respuesta)

//Condiciones SI - (if)

if(edad >= 18){

   //cómo enviamos un mensaje al usuario? 
   alert('Bienvenido ' + nombre);
   var fruta = prompt('indique la fruta que desea : manzana - pera - durazno');
  // var fruta = fruta.toUpperCase
  /*
    if(fruta == 'manzana' || fruta == 'MANZANA' || fruta == 'Manzana'){
      alert('veo que te gusta ' + fruta);
    }else if (fruta == 'pera'){
      alert('veo que te gusta ' + fruta);
    }else if (fruta == 'durazno') {
        alert('veo que te gusta ' + fruta);
    }else if (fruta == 'frutilla'){
        alert('veo que te gusta ' + fruta);
    }else{
        alert('veo que no les gustan las frutas que tengo');
    }
  */

  //Aprndiendo sobre el uso de Switch
  
  switch(fruta){
      case 'MANZANA': 
            alert('Veo que te gusta ' + fruta);
            break;
      case 'PERA':
            alert('Veo que te gusta ' + fruta);
            break;
      case 'DURAZNO':
            alert('Veo que te gusta ' + fruta);
            break;
      case 'FRESA':
            alert('Veo que te gusta ' + fruta);
            break;
      default:
        alert('veo que no les gustan las frutas que tengo');
    }
    //Cambiando contenido a los elementos de HTML - previamente capturado
    // innerHTML
    titulo.innerHTML = 'Bienvenido ' + nombre;
    //Aplicando CSS a nuestro elemento capturado
    titulo.style.color = 'white';
    titulo.style.backgroundColor = 'tomato';
    titulo.style.textAlign = 'center';
    titulo.style.fontFamily = 'Arial';
    titulo.style.padding = '20px';
    




} else{
    alert('Usted no puede visualizar a este contenido');
    }