// RegExp / Expresiones regulares

/* 
Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis maiores minus corporis tempore ipsa hic molestias odit, expedita, pariatur recusandae quae earum! Autem nisi deserunt quae magni eum atque dolore. 
aaaaaaar
*/



let regexp = / / //se escriben entre barras

/**
 *  \w  : Word alfanumerico
 *  \W  : Negacion de \w
 *  \d  : Digitos  
 *  \D  : Negacion de \d
 *  \s  : Espacios, saltos de linea ...
 *  \S  : Negacion \s
 */

// Caracteres de cantidad : determinan la cantidad de repeticiones que buscaremos ontener dentro de un patron especifico de nuestra expresion regular

let regexp = /(abc){2} /  // valida el grupo (abc)*2 >>> abcabc

/** Caracteres especiales de tipo llave  >>>
 * {n}      n : numero 
 * {n,m}    n : numero minimo de caracteres aceptables  
 *          m: maximo numero de caracteres aceptables
 * 
 * Caracteres especiales de agrupamiento >>>
 *          es decir valida la cantidad de grupos 
 * ()       : crea un grupo de busqueda
 * 
 * Caracteres  especiales de tipo >>>
 *  *       : repeticion de 0 a muchas instancias del caracter  =={0,}
 * 
 *  +       : repeticion de 1 a muchas instancias del caracter  =={1,}
 * 
 */

// Caracteres de posicion : nos determinan exactamente en que posicion queremos encontrar los patrones de busqueda dentro de la validacion 

let regexp = /a/

/**
 * 
 * ^    :  valida que ese caracter se encuentra al comienzo de un string
 * $    : valida que ese caracter se encuentra al final de un string
 * \b   : BOUNDARY - en el limite de una palabra
 * 
 */

/////////////   APLICACION     ////////////////
/* Partimos de un formulario creado en HTML
<form>
    <input type="text">
    <button>enviar</button>
</form>   
*/
var form = document.querySelector("form");
var input = document.querySelector("input");

form.addEventListener("submit", 
(e) =>
{
    e.preventDefault()
    let valor = input.value
    // Un trim() 
    let regexp = /^\w{5,10}$/ 
    //arranca y finaliza con ello, sin espacios, es alfanumerico, minimo 5 caracteres max.:10 

    if (regexp.test())
    {
        console.log("Valido!")
    }else{
            console.log("No valido!")
         }

})


fo