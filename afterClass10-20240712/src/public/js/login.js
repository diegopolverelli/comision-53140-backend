const login=async(e)=>{
    e.preventDefault()
    console.log("hacer fetch...")
    let [email, password]=new FormData(document.getElementById("formLogin")).values()
    console.log(email, password)
    let body={
        email, password
    }

    let respuesta=await fetch("/api/sessions/login", {
        method:"post", 
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(body)
    })
    let datos=await respuesta.json()
    console.log(datos)
    if(respuesta.ok){
        window.location.href="/perfil"
    }else{
        window.location.href="/login?error=Error al validar"
    }
}