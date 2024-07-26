const recupera=async()=>{
    let respuesta=await fetch("http://localhost:3000/leedatos")
    let datos=await respuesta.json()
    console.log(datos)
    let ul1=document.createElement('ul')
    datos.datos.forEach(dato=>{
        let li1=document.createElement('li')
        
        let dirty=dato.dato
        let clean 
        // clean = DOMPurify.sanitize(dirty)
        // clean = DOMPurify.sanitize(dirty, { USE_PROFILES: { html: false } })
        const config = {
            ALLOWED_TAGS: ['b', 'i', 'img'], // Permitir solo <b> y <i>
            // FORBID_TAGS: ["a"],
            // ALLOWED_ATTR: ["src", "alt", "width"] // No permitir atributos (útil si quieres desactivar todos los atributos)
        };
        clean=DOMPurify.sanitize(dato.dato, config)
        // console.log({dirty, clean})
        // li1.innerHTML=DOMPurify.sanitize(dato.dato, { USE_PROFILES: { html: false } })

        li1.innerHTML=clean
        // li1.innerHTML=dato.dato
        // li1.textContent=dato.dato
        ul1.append(li1)
    })
    let divDatos=document.getElementById('datos')
    divDatos.append(ul1)
}


/**
Ejemplos de entradas con código:

<img src="img/messi2.jpg" width="200" />
<a href="http://www.google.com.ar"><img src="img/messi2.jpg" width="200" /></a>
<b>Prueba</b>
<b><i>Prueba 2</b></i>
<div style="background-color: #ccc; color: #333;"><h3>Página web Diego</h3><a href="http://www.google.com.ar"><img src="https://resizer.iproimg.com/unsafe/880x/filters:format(webp)/https://assets.iproup.com/assets/jpg/2021/04/18059.jpg" alt="Hacker" width="200"></a></div>
<a href="http://www.google.com.ar">Goles Messi</a>
<script>alert("hola")</script>

 */