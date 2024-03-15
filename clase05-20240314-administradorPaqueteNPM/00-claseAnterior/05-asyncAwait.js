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


// 5x4 + 3x2
const entorno=async()=>{
    let resFinal
    try {
        let numero=Math.random()
        let res1=await multiplica(5, "4")
        let res2=await multiplica(3,2)
        // console.log(res2)
        resFinal=await suma(res1, res2)
        
    } catch (error) {
        console.log(error.message)
        return
    }
    
    // await fetch()
    console.log(resFinal)
}

entorno()

async function app2(){

}

const app3=async function(){
    return "Buenas tardes..."
}

app3().then(res=>console.log(res))
