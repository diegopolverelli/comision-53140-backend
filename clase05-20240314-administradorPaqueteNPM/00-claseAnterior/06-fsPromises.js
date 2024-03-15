const fs = require("fs")

let rutaArchivo = "./archivos/archivoPromesas.txt"
let texto3 = `
“Debe trabajar el hombre
Para ganarse su pan;
Pues la miseria, en su afán
De perseguir de mil modos,
Llama a la puerta de todos
Y entra en la del haragán”.

“Muchas cosas pierde el hombre
Que a veces la vuelve a hallar;
Pero los debo enseñar,
Y es güeno que lo recuerden:
Si la vergüenza se pierde,
Jamás se la vuelve a encontrar”.

José Hernandez - fragmento del Martin Fierro`

// fs.promises.writeFile(rutaArchivo, texto3, {encoding:"utf-8"})
// fs.promises.writeFile(rutaArchivo, texto3)
//     .then(() => {
//         console.log("Archivo guardado...!!!")

//         fs.promises.readFile(rutaArchivo, { encoding: "utf-8" })
//             .then((loQueLei) => {
//                 console.log(loQueLei)

//                 // append then unlink... HELL...!!!
//             })
//             .catch(error => console.log(error.message))

//     })
//     .catch(error => console.log(error.message))

// fs.promises.writeFile(rutaArchivo, texto3)
//     .then(() => {
//         console.log("Archivo guardado...!!!")

//         return fs.promises.readFile(rutaArchivo, { encoding: "utf-8" })

//     })
//     .then((loQueLei) => {
//         console.log(loQueLei)

//         // append then unlink... HELL...!!!
//         // return append 
//     })
//     .catch(error => console.log(error.message))

const app=async()=>{
    await fs.promises.writeFile(rutaArchivo, texto3)
    console.log("Archivo guardado...!!!")

    let loQueLeeDeArchivo=await fs.promises.readFile(rutaArchivo, {encoding:"utf-8"})
    console.log(loQueLeeDeArchivo)

    await fs.promises.appendFile(rutaArchivo, "\n\nEditorial Alfaguara")
    console.log("Archivo modificado...!!!")

    setTimeout(async() => {
        await fs.promises.unlink(rutaArchivo)
        console.log("Archivo eliminado...!!!")
    }, 3000);
}



app()