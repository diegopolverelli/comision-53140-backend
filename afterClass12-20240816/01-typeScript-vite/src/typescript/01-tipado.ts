export const tipado="Tipado"
console.log(tipado)

let nombre:string="Juan"
// nombre=false

let dato:string|number
dato=100
dato="Prueba"
console.log(dato)

let respuesta:boolean|null

let dato02:any

export type Persona={
    name:string
    email:string
}

let persona01:Persona
persona01={
    name:"Maria", email:"maria@test.com"
}

interface Heroe{    
    name:string
    alias:string
}

const heroe01:Heroe={
    name: "",
    alias: ""
}

console.log(heroe01)

class Villanos{
    name
    alias?:string
    constructor(nombre:string){
        this.name=nombre
    }

    saludar():void{
        console.log("hola...!!!")
    }
}

let villano01:Villanos={
    name: "",
    saludar: function (): void {
        throw new Error("Function not implemented.")
    }
}

let heroes:Heroe[]=[
    {
        name: "",
        alias: ""
    },
    {
        name: "Batman",
        alias: ""
    },
]