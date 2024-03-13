const fs=require("fs")

let rutaArchivo="./archivos/archivoCallbacks.txt"
let texto2=`El universo es una perversa inmensidad hecha de ausencia.
Uno no está en casi ninguna parte.
Sin embargo, en medio de las infinitas desolaciones hay una buena noticia: el amor.
Los Hombres Sensibles de Flores tomaban ese rumbo cuando querían explicar el cosmos. 
Y hasta los Refutadores de Leyendas tuvieron que admitir, casi sin reservas, que el amor
existe. Eso sí, nadie debe confundir el amor con la dicha. Al contrario: a veces se
piensa que amor y pena son una misma cosa. Especialmente en el barrio del Ángel Gris,
que es también el barrio del desencuentro.

Alejandro Dolina - fragmento del libro "Crónicas del Ángel Gris"`

// fs.writeFile(rutaArchivo, texto2, {encoding:"utf-8"}, (error)=>{} )
fs.writeFile(rutaArchivo, texto2, (error)=>{
    if(error){
        console.log(error.message)
        return 
    }

    console.log("Archivo guardado...!!!")

    fs.readFile(rutaArchivo, {encoding:"utf-8"}, (error, loQueLeoDelArhivo)=>{
        if(error){
            console.log(error.message)
            return 
        }
        console.log(loQueLeoDelArhivo)

        // fs.appendFile(rutaArchivo, "\n\n\tEditorial Sudamericana", {encoding:"utf-8"})
        fs.appendFile(rutaArchivo, "\n\n\tEditorial Sudamericana", (error)=>{
            if(error){
                console.log(error.message)
                return 
            }
            console.log("Archivo modificado...!!!")

            setTimeout(() => {
                fs.unlink(rutaArchivo, (error)=>{
                    if(error){
                        console.log(error.message)
                        return 
                    }    
                    console.log("Archivo eliminado...!!!")
                })
            }, 3000);
        })

    })
} )



