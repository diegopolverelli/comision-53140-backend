// 1) conectarme a plataforma Stripe
const stripe=Stripe("clave publica Stripe")
let elements

const cargarMedios=async()=>{
    let importe=Number(document.getElementById("importe").value)
    if(importe<1 || isNaN(importe)){
        alert("error en el importe")
        return 
    }

    // 2) solicitar al back que genere un payment intent
    const respuesta=await fetch("/create-payment-intent", {
        method:"post", 
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify({importe})
    })

    let datos=await respuesta.json()
    console.log(datos)

    // 5) generar el "elements" con los medios de pago para completar
    elements=stripe.elements({clientSecret:datos.paymentIntent.client_secret})
    const paymentElement=elements.create("payment")
    paymentElement.mount("#payment-element");
} // fin cargarMedios


const pagar=async()=>{
    // 6) enviar el metodo de pago seleccionado a Stripe
    const resultado=await stripe.confirmPayment(
        {
            elements, 
            confirmParams:{
                return_url: "http://localhost:3000/index.html"
            }
        }
    )

    // esto que sigue solo ejecuta si existen errores...
    console.log(resultado)
    document.getElementById("resultado").textContent=resultado.error.message


}

const mostrarResultado=async(clientSecret)=>{
    // 7) verificar el estado del pago y mostrarlo
    const {paymentIntent}=await stripe.retrievePaymentIntent(clientSecret)
    console.log(paymentIntent)
    document.getElementById("resultado").textContent=paymentIntent.status


}

// payment_intent_client_secret
let params=new URLSearchParams(location.search)
let clientSecret=params.get("payment_intent_client_secret")

if(clientSecret){
    mostrarResultado(clientSecret)
}
