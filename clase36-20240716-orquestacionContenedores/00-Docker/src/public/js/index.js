let divMensaje = document.getElementById("mensaje")

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const mensaje = urlParams.get('mensaje');

console.log('mensaje:', mensaje)

if(mensaje!==null){
    divMensaje.innerHTML=mensaje+"<br><br>"
    divMensaje.style.color="green"
    divMensaje.style.fontFamily="Arial"
    divMensaje.style.fontWeight="bold"
}