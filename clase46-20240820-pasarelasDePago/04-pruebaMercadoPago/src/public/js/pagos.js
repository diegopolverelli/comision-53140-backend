

const cargarMedios=async()=>{
    let importe=0
    importe=Number(document.getElementById("importe").value)
    if(importe<0 || isNaN(importe)){
        alert("Importe incorrecto: debe ser numérico")
        return
    }

    const mp=new MercadoPago("contraseña produccion publica, usuario de pruebas vendedor", {
        locale: "es-AR"
    })

    let respuesta=await fetch("/pagar",{
        method:"post", 
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify({importe})
    })

    let datos=await respuesta.json()

    console.log(datos)

    const brickBuilder=mp.bricks();
    brickBuilder.create("wallet", "payment-element", {
        initialization:{
            preferenceId: datos.payload.id
        },
        customization: {
            texts: {
                valuePropo: "smart_option"
            }
        },
        callbacks:{
            onError: error=>console.log(error.message),
            onReady: ()=>{
            }
        }
    })

}  // fin carga medios
