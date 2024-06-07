
// @decorador(parametro1, parametro2)  // forma habitual de encontrar decoradores (en frameworks)
const suma = (a, b) => {
    return a + b
}


const agregaLogDecorador = fn => {
    return (...params) => {  // args... [ ] params (rest)
        console.log(`Se ejecuto la funcion ${fn.name} en ${new Date().toUTCString()}`)
        return fn(...params)   // spread
    }
}

const funcionDecorada = agregaLogDecorador(suma)

console.log(funcionDecorada(4, 5))

console.log(suma(4, 5))
