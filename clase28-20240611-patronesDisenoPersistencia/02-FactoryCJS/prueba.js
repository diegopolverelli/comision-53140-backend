

const mode="mongo"

let prueba
if(mode==="FS"){
    prueba=require("./m1.js")
}else{
    prueba=require("./m2.js")
}

console.log(prueba)