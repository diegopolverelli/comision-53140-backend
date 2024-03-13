const suma = (a, b) => {
    return new Promise((res, rej) => {
        if (typeof a != "number" || typeof b != "number") {
            rej(new Error("Solo se admiten argumentos numéricos"))
        }
        res(a + b)
    })
}

const multiplica = (a, b) => {
    return new Promise((res, rej) => {
        if (typeof a != "number" || typeof b != "number") {
            rej(new Error("Solo se admiten argumentos numéricos"))
        }
        res(a * b)
    })
}

suma(4, 3)
    .then(res => {
        console.log(`Resultado ${res}`)
    })
    .catch(error => {
        console.log(error.message)
    })

suma(4, [3])
    .then(res => {
        console.log(`Resultado ${res}`)
    })
    .catch(error => {
        console.log(error.message)
    })

// 5x4
suma(5, 5)
    .then(res1=>{
        suma(res1, 5)
            .then(res2=>{
                suma(res2, 5)
                    .then(resFinal=>{
                        console.log("Promise Hell:",resFinal)
                    })
            })
    })
    


suma(5,5)
    .then(res1=>{
        // console.log(lalalalal)
        return suma(res1, 5)
    })
    .then(res2=>{
        return suma(res2, 5)
    })
    .then(res2=>{
        return suma(res2, 5)
    })    
    .then(res2=>{
        return suma(res2, 5)
    })    
    .then(resFinal=>{
        console.log("Encadenamiento de promesas (5x6):",resFinal)
    })
    .catch(error=>console.log(error.message))


    suma(5,5)
    .then(res1=>{
        // console.log(lalalalal)
        return suma(res1, 5)
    })
    .then(res2=>{
        return suma(res2, 5)
    })
    .then(resFinal=>{
        console.log("Encadenamiento de promesas (5x4):",resFinal)
    })
    .catch(error=>console.log(error.message))

// 5x4 + 3x2
let aux=0
multiplica(5,4)
    .then(res1=>{
        aux=res1
        return multiplica(3,2)
    })
    .then(res2=>{
        // return suma(res1, res2)
        return suma(aux, res2)
    })
    .then(resFinal=>{
        console.log("Resultado operacion:", resFinal)
    })