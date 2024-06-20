let divOrdenes=document.getElementById("ordenes")
let aOrdenes=document.getElementById("aOrdenes")

aOrdenes.addEventListener("click", async(e)=>{
    e.preventDefault()
    try {
        let respuesta=await fetch("http://localhost:3000/api/ordenes")
        let {ordenes}=await respuesta.json()
        // console.log(datos.ordenes)
        console.log(ordenes)
        ordenes.forEach(orden=>{
            let pNroOrden=document.createElement("p")
            pNroOrden.textContent="Número de Orden: "+orden.nroOrden
            let pFecha=document.createElement("p")
            pFecha.textContent="Fecha: "+orden.fecha
            let h3Cliente=document.createElement("h3")
            h3Cliente.textContent="Cliente: "+orden.usuario.nombre
            let h3Negocio=document.createElement("h3")
            h3Negocio.textContent="Negocio: "+orden.negocio.nombre
            let h2Total=document.createElement("h2")
            h2Total.textContent="Total a pagar: $"+orden.total
            let hr=document.createElement("hr")

            divOrdenes.append(pNroOrden, pFecha, h3Cliente, h3Negocio, h2Total, hr)

        })
    } catch (error) {
        divOrdenes.textContent="Error al recuperar ordenes de pedido... :("
    }

})