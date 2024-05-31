console.log("argumentos enviados x consola:", process.argv)

let [rutaNode, rutaScript, ...argumentos]=process.argv   /// ... son op. rest

console.log(argumentos)
if(argumentos.includes("--nombre")){
    let indiceNombre=argumentos.findIndex(a=>a==="--nombre")
    console.log(`El nombre ingresado es ${argumentos[indiceNombre+1]}`)
}