export class User {
    id:number
    first_name:string
    last_name:string
    email:string
    password:string
    age?: number
    role?: string
}

type typeUser={
    name:string
    email:string
}

interface interfaceUser{
    name:string
    email?:string
}

let persona:typeUser={
    name: "",
    email: ""
}
console.log(persona)

let persona02:interfaceUser
persona02={
    name:"Marcela"
}
