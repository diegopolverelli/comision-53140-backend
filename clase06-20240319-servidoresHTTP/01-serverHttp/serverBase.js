const http=require("http")

const PORT=3000

const server=http.createServer((req, res)=>{
    console.log(req.url)

    if(req.url==="/heroes"){
        res.writeHead(200, {"Content-Type":"text/html; charset=utf-8"})
        res.end("Heroes Page")
        return 
    
    }

    res.writeHead(200, {"Content-Type":"text/html; charset=utf-8"})
    res.end("Server básico con módulo http de node...!!! ")
})

server.listen(PORT, ()=>{
    console.log(`Server online en puerto ${PORT}`)
})

