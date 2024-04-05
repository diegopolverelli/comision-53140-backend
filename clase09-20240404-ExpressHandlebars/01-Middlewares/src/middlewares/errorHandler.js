export const errorHandler=(error, req, res, next)=>{
    if(error){
        console.log(error)
        
        res.setHeader('Content-Type','application/json');
        return res.status(500).json(
            {
                error:`Error inesperado en el servidor - Intente más tarde, o contacte a su administrador`,
                detalle:`${error.message}`
            }
        )
        
    }

    next()
}