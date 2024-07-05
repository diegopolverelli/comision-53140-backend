const colors=require("colors")

const saludo=(nombre="")=>{
    return `Hola ${nombre}...!!! Bienvenido...!!!`.rainbow
}

const saludoCebra=(nombre="")=>{
    return `Hola ${nombre}...!!! Bienvenido...!!!`.zebra
}

module.exports={saludo, saludoCebra}