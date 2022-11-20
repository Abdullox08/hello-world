const http = require('http')
const fs  = require('fs')
const path = require('path')


const server = http.createServer((req,res)=>{
    if(req.url === '/'){
    fs.readFile(path.join(__dirname,'public','index.html'),(err,content)=>{
        if(err) throw err
        res.end(content)
    })
    }else if(req.url === '/about'){
        fs.readFile(path.join(__dirname,'public','about.html'),(err,content)=>{
            if(err) throw err
            res.end(content)
        })
    }
    
})
const PORT = process.env.PORT || 3000
server.listen(PORT,()=>console.log("server runnig localhost:3000"))
