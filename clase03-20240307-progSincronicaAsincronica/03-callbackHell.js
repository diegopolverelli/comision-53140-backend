const operaciones=(a, b, fnCallOperacion)=>{
    if(typeof a!="number" || typeof b!="number"){
        // throw new Error("Solo se aceptan argumentos numéricos...!!!")
        return fnCallOperacion(new Error("Solo se aceptan argumentos numéricos...!!!"))

    }
    // return fnCallOperacion(a, b)
    return fnCallOperacion(null ,a, b)
}

// (5x4 + 3X2)/10 + 100 = 102,6
let resultado=operaciones(100, 0, (error, a, b)=>{
    return operaciones(10, 0, (error, a, b)=>{
        return operaciones(3, 2, (error, a, b)=>{
            return operaciones(5, 4, (error, a, b)=>{
                return a*b
            }) + a*b
        }) / a
    }) + a
})
console.log({resultado})