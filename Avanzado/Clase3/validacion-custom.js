formulario.querySelector('#apellido').addEventListener('input', (e) => 
{
    const regexApellido = /\w{1,}/; 
    if(regexApellido.test(e.target.value)) 
    {
        e.target.setCustomValidity("");
    } else 
    {
        e.target.setCustomValidity("Ingresa 2 apellidos separados por guion")
    } 
})
//IndexOf busca dentro de un string

// Validamos un EMAIL >>>>> custom :

formulario.querySelector('#email').addEventListener('input', (e) => 
{
    const regexMail = /[a-zA-Z-_]{1,}@[a-zA-Z-_]{1,}[.]{1,1}[a-zA-Z]{2,}/; 
    if(regexMail.test(e.target.value)) 
    {
        e.target.setCustomValidity("");
    } else 
    {
        e.target.setCustomValidity("Ingrese un email valido Ej: mail@mail.com ")
    } 
})

