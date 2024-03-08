const fs=require("fs")

const operacion3=()=>{
    console.log("procesando datos operacion 3...")
    let fecha1=Date.now()
    while(Date.now()-fecha1<2000){
        //...
    }

    return "operacion 3"
}

// console.log("Inicio")
// console.log("operacion 1")
// console.log("operacion 2")
// console.log(operacion3())
// console.log("Fin")




console.log("Inicio")

fs.writeFile("./archivo.txt", "texto de prueba...", (error)=>{
    if(error){
        console.log("Se produjo un error... :(", error.message)
    }
    console.log("Archivo guardado...!!!")
})

setTimeout(() => {
    console.log("impresion a 2 seg.")
}, 2000);

setTimeout(() => {
    console.log("impresion a 0 seg.")
}, 0);

operacion3()
console.log("Fin")