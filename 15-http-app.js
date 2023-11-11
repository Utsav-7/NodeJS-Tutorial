const http = require('http')
const {readFileSync}=require('fs')

const homePage=readFileSync('./content/index.html')
const homeStyle=readFileSync('./content/style.css')


const server=http.createServer((req,res)=>{
    const url=req.url;
    // Home page
    if(url === '/'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write(homePage)
        res.end()
    }
    else if(url === '/style.css'){
        res.writeHead(200,{'content-type':'text/css'})
        res.write(homeStyle)
        res.end()
    }
    // about page
    else if(url === '/about'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write('<h1>About Page</h1>')
        res.end()
    }
    // 404 error page
    else{
        res.writeHead(404,{'content-type':'text/html'})
        res.write('<h1>Page not found</h1>')
        res.end()
    }
})

server.listen(5000)