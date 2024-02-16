const btn = document.querySelector('button');
btn.addEventListener('click',()=>{
    let fecha;
    for (let i = 0; i < 10000 ; i++){
        fecha = new Date()
    }
    console.log(fecha);
})