export const auth=(req, res, next)=>{
    if(!req.session.usuario){
        res.setHeader('Content-Type','application/json');
        return res.status(401).json({error:`No existen usuarios autenticados`})
    }

    next()
}