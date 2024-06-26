const suma=require("./suma.js").suma

describe("Pruebas funcion suma", ()=>{

    test("si recibe 2 args retorna la suma de ambos", ()=>{
        expect(suma(3,3)).toBe(6)
        expect(suma(30,3)).toBe(33)
        expect(suma(0.1,0.2)).toBe(0.3)
    })

    test("si no recibo argumentos retorna null", ()=>{
        expect(suma()).toBe(null)
        expect(suma()).toBeNull()
    })

    test("si recibo args no numéricos, retorna 'error'", ()=>{
        expect(suma(false, 70)).toBe("error")
        expect(suma("juan", 5)).toBe("error")
        expect(suma(null, 1)).toBe("error")
    })

    test("si recibo n args, retorna la suma de los n", ()=>{
        expect(suma(1, 2, 3, 4, 5)).toBe(15)
        expect(suma(10,10,10)).toBe(30)
   })

})