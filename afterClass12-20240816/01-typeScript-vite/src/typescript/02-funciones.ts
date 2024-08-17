import { Persona } from "./01-tipado"
import { PersonajeStarWars } from "./interfaces/PersonajesStarWars"
import { TypeReqResIn } from "./interfaces/reqresin"
import { PersonajesSW } from '../../../../pruebas/clase02/01-tsc-vite/src/typescript/interfaces/swapi';

export const funciones="Funciones"

const suma=(a:number, b:number):string=>`${a+b}`
console.log(suma(10,9))

const concatenar=<T, U>(dato1:T, dato2:U):{dato1:T, dato2:U}=>{
    // algo...

    return {
        dato1,
        dato2
    }
}

console.log(concatenar<number, string>(100, "Hola"))
console.log(concatenar<boolean, number>(false, 900))

let info=concatenar<number, string>(100, "Hola")

// info.edad=44



const leeAPI=async<T>(url:string)=>{
    let rta=await fetch(url)
    return await rta.json() as T
}

console.log(await leeAPI("https://reqres.in/api/users?page=2"))
let users=await leeAPI<TypeReqResIn>("https://reqres.in/api/users?page=2")

console.log(users.data[2].email)

let vader=await leeAPI<PersonajeStarWars>("https://swapi.dev/api/people/4")

console.log(vader.name)

type PersonajeSWResumida=Pick<PersonajesSW, "name"|"skin_color">
let per2:PersonajeSWResumida

type PersonajeSWsinID=Omit<PersonajesSW, "skin_color">




