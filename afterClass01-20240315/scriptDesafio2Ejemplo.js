const fs = require("fs");

let rutaArchivo ="./productos.json";


class ProductManager {

    constructor(rutaArchivo) {    // tenes que pedir en el constructor la ruta... para que la envien cuando generes tu objeto o instancia con el new
        // this.products = [];   // esto no va mas... ahora vivirá en un archivo
        this.path = rutaArchivo;
    }

    getProducts() { // tenes que consultar si el archivo existe...
        // ademas, ya que definiste la ruta hacia el archivo en una variable... usala...!!!
        // Y la tenes que enviar vía constructor, como vimos hoy en el ej. de usuarios, y luego acá dentro
        // de la clase hacer this.path
        if(fs.existsSync(rutaArchivo)){
            // el archivo va a estar en formato texto... ¿recordas lo de JSON.stringuify al guardar...?
            // cuando haces la lectura, hay que parsear (proceso inverso a stringify)
            let lecturaArchivo = JSON.parse(fs.readFileSync(this.path, {encoding:"utf-8"}));
            // return this.products = []; // retornas lo que lees del archivo...
            return lecturaArchivo

        }else{
            return []  // si no existe el archivo, devolves un []
        }
    }


    // getProductById(id){ // corregir
    //     lecturaArchivo();
    //     let prod=this.products.find(producto=>producto.id===id); // busca el producto con su id
    //         if(!prod === id){
    //             console.log("Not Found");
    //         }
    //         return prod={};
    // }



    // updateProduct(id){
    //     if(!this.products.find(producto=>producto.id===id)){
    //         this.products; // debe actualizar el producto que tenga el id en el archivo
    //     }
    // }

    // deleteProduct(id){
    //     let prod=this.products.find(producto=>producto.id===id);
    //     // aca se tiene que borrar el id que tenga en ese momento 
    // }


    // this.products no existe más... ahora tenes que recuperar los datos desde
    // el archivo... ya tenes la función getProducts... así que la podes usar.
    // La estrategia es siempre recuperar tu archivo a memoria... manipularlo en memoria (crear productos,
    // modificarlos, borrarlos, etc...), y volver a grabar...
    addProducts(title, description, price, thumbnail, code, stock) {
        let products=this.getProducts()  //recuper desde el archivo a memoria
        // y a partir de acá... siempre te manejas con products (en memoria), hasta el fin 
        // de la función, donde tenes que guardarlo de nuevo en el archivo...
        let existe=products.find(producto=>producto.code==code) // creo variable que busca un producto cuyo code sea igual al que recibe
        if(existe){   // si existen devuelve console.log
            console.log("ERROR ... Ya existe un producto con ese codigo");
            return null // y retorna null
        }
        let id=1 // por defecto se le asigna 1 al id
        if(products.length>0){ // si la longitud de los productos es mayor a 0 ...
            id=products[products.length-1].id + 1 // suma 1 a cada id agregado
        }
        const producto = {
            id,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        }

        // wtf??? no: acá tenes que hacer el push en memoria... y luego,
        // una vez actualizado el array en memoria, lo guardas
        products.push(producto);  // acá ya actualizaste tu BD de productos, pero en memoria... resta grabar a disco de nuevo
        fs.writeFileSync(this.path, JSON.stringify(products,null,5)) // siempre transformado a texto con el JSON.stringify 
        return producto;
    }
    
}

const productManager = new ProductManager(rutaArchivo); // aca le envias la ruta... es lo que pide la consigna
// Para classes tipo "managers", como vas a tener por lo general 1 en 
// tu app, el nombre es productManager (mismo nombre que la class, pero con
// minuscula en su primer letra)
productManager.addProducts("producto prueba", "Este es un producto prueba", 200, "sin imagen", "abe123", 25);
productManager.addProducts("producto estupendo", "Este es un producto original", 201, "sin imagen", "abe115", 24);
productManager.addProducts("producto copado", "Este es un producto rapido", 350, "sin imagen", "abe123", 24);
productManager.addProducts("producto super-mega-impresionante", "Este es un producto más rapido aún", 1100, "sin imagen", "abe999", 100);

console.log("Todos los productos:", productManager.getProducts())