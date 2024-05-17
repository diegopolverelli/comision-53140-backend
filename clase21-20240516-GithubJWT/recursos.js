// backend53140@yopmail.com
// backend53140
// CoderCoder


// Strings de conexión:
// 'mongodb://127.0.0.1:27017/pruebas_mongo'
// mongodb+srv://backend53140:CoderCoder@cluster0.5cr4g2l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0



let usuarios=[
    {
        nombre:'Diego', password:123, 
        rol: 'usuario'
    },
    {
        nombre:'Laura', password:123, 
        rol: 'usuario'
    },
    {
        nombre:'Admin', password:'codercoder', 
        rol: 'admin'
    },
]



// Guardar imagenes en MongoDB (tamaño mayor a 16m):
// https://www.mongodb.com/docs/drivers/node/current/fundamentals/gridfs/


// especificar colección en el esquema:
const usuariosEsquema= new Schema({
    nombre: String,
    apellido: String,
    codigo: Number,

},{collection:'usuariosBig'});


// Configurar express-handlebars para que tome lectura de Atlas
app.engine('handlebars', engine({
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true,
    },
}));


// timestamps en mongoose (createdAt y updatedAt)
// const schema=moongoose.Schema({

// },{timestamps:true})


// zona horaria en NodeJS
// const nDate = new Date().toLocaleString('es-AR', {
//     timeZone: 'America/Argentina/Buenos_Aires'
// });


// autoimportacion VSCode???
// https://stackoverflow.com/questions/62503006/vscode-add-js-extension-on-import-autocomplete

// Configuracion Nest, para ValidationPipe, a nivel endpoint, para verificar lo que llega por un body
  // @Post()
  // create(@Body(new ValidationPipe({whitelist: true, forbidNonWhitelisted: true,})) createUsuarioDto: CreateUsuarioDto) {
  //   const usuarioCreado = this.usuariosService.create(createUsuarioDto);
  //   return {status:'success', usuarioCreado}
  // }

// Instalaciones requeridas para ValidationPipe
// yarn add class-validator class-transformer

// Validaciones concretas (se realizan sobre el tipo de datos asociado a la variable decorada; CreateUserDto en este caso)
// import { IsOptional, IsString } from "class-validator";
// export class CreateUserDto {
//   @IsString()
//   @IsOptional()
//   first_name: any;

//   @IsString()
//   email: any;

//   @IsString()
//   password: any;
// }

// Validaciones posibles incluidas en class-validator
https://github.com/typestack/class-validator#validation-decorators

// Configuración de Nest, para ValidationPipe, a nivel app;
  app.useGlobalPipes( 
    new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    })
   );




// Muestra versión de Node, y datos del sistema operativo y cpu's
console.log(process.version);
console.log(os.platform());
console.log(os.arch());
console.log(os.cpus());

// Valida que un dato sea un Objeto Id de Mongo válido. 
if (mongoose.Types.ObjectId.isValid(idUsuario)) {
  // El valor proporcionado es un ObjectId válido
}

// Para instalar Jest y usar imports del EM6. Se usa Babel
//https://babeljs.io/setup#installation
//https://jestjs.io/es-ES/docs/expect


// Función para filtrar arrays, enviando como parámetro un objeto
function filtrarPorObjeto(array, filtro) {
    // return array.filter((elemento) =>
    //     Object.entries(filtro).every(([clave, valor]) => elemento[clave] === valor)
    // );

    return array.filter((elemento) =>{
        
        console.log(Object.entries(filtro))
        let resultado=Object.entries(filtro).every(([clave, valor]) => elemento[clave] === valor)
        return resultado
    }
    );
}





// Ejemplo petición con librería Axios:
const peticionConAxios=(res)=>{
  //construimos nuestra peticion
  const myInit = {
    method: 'GET',
    headers: {
      // 'Authorization': token
    },
    mode: 'cors',
    cache: 'default'
  };

  // let destination = 'http://www.simiapi.com/ApiSimiweb/response/v21/inmueblesDestacados/total/:cantidad';
  let destination = 'http://localhost:3000/login';

  //obtenemos los resultados
  axios.get(destination, myInit)
    .then((result) => {
      console.clear()
      console.log(result.data)
      res.send(result.data)
    })
    .catch((error) => {
      console.error(error)
    })
}



// Configurar cabeceras y cors
const corsPersonalizado=(req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
};



// Commander, opciones complejas:
program.addOption(new Option('-p, --port <number>', 'specify port number')
  .default(80, 'puerto por defecto: 80')
  .env('PORT')
);

program.addOption(new Option('-s, --size <type>', 'specify size of screen')
  .choices(['small', 'medium', 'large'])
  .env('SIZE')
);


// Recuperar token de un header (alternativamente se puede hacer con split(' ') y tomar el [1]
auth = auth.substring("Bearer ".length() - 1, auth.length());

https://github.com/diegopolverelli/Programacion-Backend-51080-ejercicios-clase

// excluir carpetas de nodemon:
// CLI:
// nodemon --ignore ./src/sessions/ ./src/appSession.js
// package.json:
  // "scripts": {
  //   "start": "nodemon --ignore ./src/sessions/ ./src/appSession.js",
  //   "test": "echo \"Error: no test specified\" && exit 1"
  // },


// zona horaria en NodeJS
const nDate = new Date().toLocaleString('es-AR', {
    timeZone: 'America/Argentina/Buenos_Aires'
});


// timestamps en mongoose (createdAt y updatedAt)
const schema=moongoose.Schema({

},{timestamps:true})




// envio de datos vía script de JavaScript:

/*
<script>
    const form  = document.getElementById('loginForm');
    form.addEventListener('submit',evt=>{
        evt.preventDefault();
        const data = new FormData(form);
        console.log(data)
        const obj = {};
        data.forEach((value,key)=>obj[key]=value);
        console.log(obj)

        const email = document.getElementById("email").value
        const password = document.getElementById("password").value

        const body = { email, password }

        console.log(body);

        fetch('/api/sessions/login',{
            method:'POST',
            body:JSON.stringify(body),
            headers: {
                'Content-Type':'application/json'
            }
        }).then(result=>{
            console.log(result.status)
            return result.json()
        }).then(json=>{
            console.log(json);
            localStorage.setItem('CoderToken',json.token)
            document.cookie=`CoderToken=${json.token};max-age=3600`
            document.location.href=`/?token=${json.token}`;
        });
    })
</script>
*/


/*
<script>
    let datos=document.getElementById('datos');
    let btnDatos=document.getElementById('btnDatos');

    btnDatos.addEventListener('click',(e)=>{
        e.preventDefault();

        fetch('/datos',{
            method:'GET',
            headers: {
                'Content-Type':'application/json',
                'Authorization':'Bearer '+localStorage.getItem('CoderToken')
            }
        }).then(result=>{
            return result.text()
        }).then(data=>{
            datos.innerHTML=data;

            let cookies=document.cookie;
            console.log(cookies) 
        });


    })
</script>
*/



    // misResponses(req, res, next){
    //     res.sendSuccess = payload => res.send({status: "success", payload})
    //     res.sendServerError = error => res.status(500).send({status: "error", error })
    //     res.sendUserError = error => res.status(400).send({status: "error", error})
    //     res.sendNoAuthenticatedError = error => res.status(401).send({status: "error", error})
    //     res.sendNoAuthorizatedError = error => res.status(403).send({status: "error", error})
        
    //     next()
    // }




    handlePolicies = policies => (req, res, next) => {
        if(policies.includes('PUBLIC')) return next()

        if(policies.length > 0) {
            const authHeaders = req.headers.authorization
            if(!authHeaders) return res.sendNoAuthenticatedError('Unauthenticated')

            const tokenArray = authHeaders.split(" ")
            const token = (tokenArray.length > 1) ? tokenArray[1] : tokenArray[0]

            const user = jwt.verify(token, 'secret')

            if(!policies.includes(user.role.toUpperCase()) ) {
                return res.sendNoAuthorizatedError("Unauthorizated")
            }

            req.user = user
            return next()
        }

        next()
    }








// variables como objects keys:
var foo = 'Hello',
    bar = 'World';
 
var myObj = {};
myObj[foo] = bar; 




// Códigos ANSI básicos para dar formato al texto en la terminal:

//         Colores:
//         \x1b[30m - Negro
//         \x1b[31m - Rojo
//         \x1b[32m - Verde
//         \x1b[33m - Amarillo
//         \x1b[34m - Azul
//         \x1b[35m - Magenta
//         \x1b[36m - Cyan
//         \x1b[37m - Blanco

//         Estilo de fuente:
//         \x1b[1m - Negrita
//         \x1b[3m - Itálica
//         \x1b[4m - Subrayado
//         \x1b[22m - Quitar negrita
//         \x1b[23m - Quitar itálica
//         \x1b[24m - Quitar subrayado

//         Color de fondo:
//         \x1b[40m - Negro
//         \x1b[41m - Rojo
//         \x1b[42m - Verde
//         \x1b[43m - Amarillo
//         \x1b[44m - Azul
//         \x1b[45m - Magenta
//         \x1b[46m - Cyan
//         \x1b[47m - Blanco

//         Resetear el estilo de fuente:
//         \x1b[0m

//         Para utilizar estos códigos en un string, debes concatenarlos al inicio del texto que quieras formatear y luego concatenar el código para resetear el estilo al final del texto.
//  EJ:    console.log('\x1b[34m\x1b[1mEjemplo\x1b[0m');



// en package.json, para que nodemon no reinicie si agrego un .json (un file)
  // "nodemonConfig": {
  //   "ignore": ["*.json", "public/javascripts/*.js"]
  // },
