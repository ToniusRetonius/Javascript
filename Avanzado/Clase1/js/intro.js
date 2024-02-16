var nombre = "Toto";

if (nombre == "Toto")
{
     var apellido = "Melli";
     debugger;
}

//  LET es una variable que se puede modificar
//  CONST es una variable que NO se puede modificar 

// El DEBUGGER nos permite desaparecer de memoria una variable luego de ejecutarla para evitar la existencia de miles de ellas. Contexto de ejecucion mas veloz.

const miObjeto = 
{
    direccion : 
    {
        calle : 'Calle',
        nro : 123
    }
}

miObjeto.direccion = {};

