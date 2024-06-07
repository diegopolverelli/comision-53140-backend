class Producto{
    constructor(nombre, precio){
        this.nombre=nombre;
        this.precio=precio
    }
}

const procesaProducto=(producto, ...operaciones)=>{ // ... son operador rest
    operaciones.forEach(operacion=>{
        operacion(producto)
    })
    return producto
}

const desc1=(producto)=>{
    if(producto.precio>100){
        console.log(`- aplica 10% dto`)
        producto.precio=producto.precio*0.9
    }
    return producto
}

const desc2=(producto)=>{
    if(producto.precio>200){
        console.log(`- aplica 5% dto adicional`)
        producto.precio=producto.precio*0.95
    }
    return producto
}

const desc3=(producto)=>{
    if(producto.precio>200){
        console.log(`- aplica 2% dto adicional`)
        producto.precio=producto.precio*0.98
    }
    return producto
}

const impuestos=(producto)=>{
    producto.precio=producto.precio*1.21
    return producto
}

const validaProducto=(producto)=>{
    if(producto.precio<=0){
        console.error('Error en el producto')
        producto.error=true
        return producto
    }

    return producto
    
}

const formato=(producto)=>{
    producto.nombre=producto.nombre.toUpperCase()
    producto.precio=producto.precio.toFixed(2)
    return producto
}

let producto1=new Producto('zapatilla',250)

console.log(procesaProducto(producto1, validaProducto, desc1, desc2, desc3, impuestos, formato))


