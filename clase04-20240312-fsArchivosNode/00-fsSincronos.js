const fs = require("fs")

let rutaArchivo = "./archivos/archivoSinc.txt"
let texto1 = `La división internacional del trabajo consiste en que unos países se especializan
en ganar y otros en perder. Nuestra comarca del mundo, que hoy llamamos América Latina, fue
precoz: se especializó en perder desde los remotos tiempos en que los europeos del Renacimiento
se abalanzaron a travéz del mar y le hundieron los dientes en la garganta. Pasaron los siglos
y América Latina perfeccionó sus funciones.

Eduardo Galeano - Capítulo introductorio de "Las venas abiertas de Latinoamérica"`



try {
    // fs.writeFileSync(rutaArchivo, texto1, {encoding:"utf-8"})
    fs.writeFileSync(rutaArchivo, texto1)

    if (fs.existsSync(rutaArchivo)) {
        let lecturaDeArchivo = fs.readFileSync(rutaArchivo, { encoding: "utf-8" })
        console.log(lecturaDeArchivo)
        fs.appendFileSync(rutaArchivo, "\n\n\tEditorial Planeta")

        setTimeout(() => {
            fs.unlinkSync(rutaArchivo)
            console.log("Archivo eliminado...!!!")
        }, 3000);
    }

} catch (error) {
    console.log(error.message)
}