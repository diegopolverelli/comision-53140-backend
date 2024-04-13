const socket=io()

let ulHeroes=document.getElementById("heroes")

socket.on("nuevoHeroe", heroe=>{
    ulHeroes.innerHTML+=`<li>${heroe}</li>`
})

socket.on("heroeBorrado", heroes=>{
    ulHeroes.innerHTML=""
    heroes.forEach(h=>{
        ulHeroes.innerHTML+=`<li>${h.name}</li>`
    })
})