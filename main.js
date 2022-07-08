
const contador = document.getElementById("contar");
const sumar = document.getElementById("incrementar");
const restar = document.getElementById("disminuir");
const reset = document.getElementById("reiniciar");

let numero = 0;

sumar.addEventListener("click", ()=>{
    numero++;
    contador.innerHTML = numero;
});


restar.addEventListener("click", ()=>{

    if(numero==0){}
    else{
        numero--;
        contador.innerHTML = numero;
    }
});

reset.addEventListener("click", ()=>{
    numero = 0;
    contador.innerHTML = numero;
});