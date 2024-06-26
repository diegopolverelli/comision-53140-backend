// export const suma=(a, b)=>{
//     if(!a || !b) return null
//     if(typeof a!="number" || typeof b!="number") return "error"
//     return a+b
// }

// export const suma=(...sumandos)=>{
//     if(sumandos.length===0) return null
//     for(let i=0; i<sumandos.length; i++){
//         if(typeof sumandos[i]!="number") return "error"
//     }

//     let resultado=0
//     for(let i=0; i<sumandos.length; i++){
//         resultado+=sumandos[i]
//     }
//     return resultado

// }

// export const suma=(...sumandos)=>{
//     if(sumandos.length===0) return null

//     let resultado=0
//     for(let i=0; i<sumandos.length; i++){
//         if(typeof sumandos[i]!="number") return "error"
//         resultado+=sumandos[i]
//     }
//     return resultado

// }

export const suma=(...sumandos)=>{
    if(sumandos.length===0) return null
    if(!sumandos.every(numero=>typeof numero=="number")) return "error"
    let resultado=sumandos.reduce((acum, numero)=>acum+=numero , 0)
    return Number(resultado.toFixed(5))
}