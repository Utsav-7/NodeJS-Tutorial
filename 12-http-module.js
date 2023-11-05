const http=require('http')

const server=http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Welcome to home page')
    }
    if(req.url === '/about'){
        res.end('This is a about page')
    }

    res.end(
        `<h1>Oops!!</h1>
        <p>We can't seem to find the page you are looking for</p>
        <a href="/about">about</a>
        <a href="/">back</a>
    `)
})

server.listen(5000)