let params=new URLSearchParams(window.location.search)
let divMensaje=document.getElementById("mensaje")
let mensaje=params.get("mensaje")
if(mensaje){
    divMensaje.textContent=mensaje
    setTimeout(() => {
        divMensaje.textContent=""
    }, 5000);
}