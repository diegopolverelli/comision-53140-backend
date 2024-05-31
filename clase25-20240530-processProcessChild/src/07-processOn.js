process.on("exit", code=>{
    console.log({code})
    console.log(`El sistema finaliza... borrando archivos temporales`)
})

process.on("uncaughtException", error=>{
    console.log(`Ocurrió un error: ${error.message}`)
})

let contador=0
let intervalo=setInterval(() => {
    contador++
    console.log(`Proceso nro ${contador}...`)


    if(contador===4){
        // throw new Error("error forzado...")
        console.log(tatata)
    }

    if(contador===7){
        process.exit(-5)
    }

    if(contador===8){
        clearInterval(intervalo)
    }
}, 300);