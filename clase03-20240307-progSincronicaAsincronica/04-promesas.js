const suma=(a, b)=>{
    return new Promise((res, rej)=>{

        if(typeof a!="number" || typeof b!="number"){
            return rej(new Error("solo aceptamos args numéricos"))
        }

        return res(a+b)
        // res ({nombre:"Raul"})

    })
}

// console.log(suma(3,5) + 10)
console.log(suma(0,0))
suma(5,3)
    .then(res=>console.log(res))
    .catch(error=>console.log(error.message))
    .finally(()=>console.log("operaciones de cierre..."))

suma("Martin",3)
    .then(res=>console.log(res))
    .catch(error=>console.log(error.message))
    .finally(()=>console.log("operaciones de cierre..."))

suma(3,3)
    .then(res=>suma(res,10))