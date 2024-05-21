console.log("hola")

const comprar=async(pid)=>{
    let inputCarrito=document.getElementById("carrito")
    let cid=inputCarrito.value
    console.log(`Codigo producto: ${pid}, Codigo Carrito: ${cid}`)

    let respuesta=await fetch(`/api/carts/${cid}/product/${pid}`,{
        method:"post"
    })
    if(respuesta.status===200){
        let datos=await respuesta.json()
        console.log(datos)
        alert("Producto agregado...!!!")
    }
}