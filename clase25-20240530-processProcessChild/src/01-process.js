import fs from "fs"

console.log("cwd:",process.cwd())
console.log("pid:",process.pid)
console.log("memoryUsage:",process.memoryUsage())

console.log("variables de entorno:", process.env)
console.log("variable de entorno 'path':", process.env.path)
console.log("variable de entorno 'PRUEBA_PORT':", process.env.PRUEBA_PORT)
console.log("argumentos enviados x consola:", process.argv)