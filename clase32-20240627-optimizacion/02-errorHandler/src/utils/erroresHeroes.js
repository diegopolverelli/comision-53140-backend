import os from "os"

export function argumentosHeroe(heroe){

    let {name, ...otros}=heroe
    return `Se han detectado argumentos inválidos:
Argumentos obligatorios:
    - name: tipo String. Se recibió: ${name}
Argumentos opcionales:
    -alias, powers, team, y publisher. Se recibió: ${JSON.stringify(otros)}

Fecha: ${new Date().toUTCString()}
Usuario: ${os.userInfo().username}
Terminal: ${os.hostname()}`

}