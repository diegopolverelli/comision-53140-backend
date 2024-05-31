import {Command, Option} from "commander"

let programa=new Command()

programa.option("-p, --puertoConn <puerto>", "Puerto de conexión del server", 3000)
programa.option("-r, --ruta <ruta archivo>", "Ruta archivo de datos")
programa.option("-d, --debug", "Activa el modo debug")
programa.option("-c, --colores [colores...]", "Recibe array de colores")
programa.requiredOption("-u, --usuario <usuario>", "Usuario que corre el script")
programa.addOption(new Option("-m, --mode <modo>", "Mode de ejecución del script").choices(["dev", "prod", "test"]).default("dev"))
// programa.option("-p, --password <password>", "Clave de acceso")

programa.allowUnknownOption()
programa.parse()
const argumentos=programa.opts()
console.log(argumentos)
const port=argumentos.puertoConn
console.log(port)
console.log(programa.args)


