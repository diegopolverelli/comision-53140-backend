// addEventListener("click", e=>{
//     e.preventDefault()
// })

let numeros=[1,2,3,4,5]
let cuadrados=numeros.map(elemento=>elemento**2)
console.log({numeros})
console.log({cuadrados})
console.table({numeros, cuadrados})

let miMap=(arreglo=[], fnCallback)=>{
    let arregloResultado=[]
    for(let i=0; i<numeros.length; i++){
        let resultado=fnCallback(arreglo[i])
        arregloResultado.push(resultado)
    }
    return arregloResultado
}

cuadrados=miMap(numeros, elemento=>elemento**2)
console.log({cuadrados})

const operar=(a, b, fnCallOperacion)=>{
    if(typeof a!="number" || typeof b!="number"){
        throw new Error("Solo se aceptan argumentos numéricos...!!!")
    }
    return fnCallOperacion(a, b)
}

function sumar(a, b){

    return a+b
}

console.log(operar(5,4, (a,b)=>a+b))
console.log(operar(5,6, sumar))
console.log(operar(5,4, (a,b)=>a-b))
console.log(operar(5,4, (a,b)=>a*b))
console.log(operar(5,4, (a,b)=>a/b))

let resultado=operar(5,4, (a,b)=>a+b)
console.log({resultado})

// resultado=operar(5,true, (a,b)=>a+b)
// console.log({resultado})

try {
    resultado=operar(5,true, (a,b)=>a+b)
    console.log({resultado})
} catch (error) {
    console.log(error.message)
}

//                          (error, a, b)=>{}
const operaciones=(a, b, fnCallOperacion)=>{
    if(typeof a!="number" || typeof b!="number"){
        // throw new Error("Solo se aceptan argumentos numéricos...!!!")
        return fnCallOperacion(new Error("Solo se aceptan argumentos numéricos...!!!"))

    }
    // return fnCallOperacion(a, b)
    return fnCallOperacion(null ,a, b)
}

resultado=operaciones(5, 10, (error, a, b)=>{
    if(error){
        console.log(error.message)
    }
    return a+b
})
console.log({resultado})


resultado=operaciones(5, "juan", (error, a, b)=>{
    if(error){
        // console.log(error.message)
        return error.message
    }
    return a+b
})
console.log({resultado})