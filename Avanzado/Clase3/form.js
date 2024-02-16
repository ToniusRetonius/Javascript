var formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', function(e) 
{
    e.preventDefault();
    let esValido = true;
    e.target.addEventListener.querySelectorAll('input').forEach(input => 
    {
        if(!input.checkValidity())
        {
            esValido = false;
        }        
    });
    if(!esValido)
    {
        e.preventDefault();
    }
})

// ! significa negacion 
// checkValidity 