const express = require('express')
const app = express()
const logger = require('../logger-middleware.js')
const authorize = require('../authorized-middleware.js')
// req => middleware => res 

// Here we used 'use' method for pass middleware so we can't add middleware function logger manually to all the app.get request
// below use function set middleware in all the request
// pass multiple middleware in the request
// sequence must be considered
app.use([logger, authorize])

// below use function set middleware in the request starting from /api/home/...
// app.use('/api',logger)

app.get('/', (req,res)=>{

    res.send("Home Page");
})

app.get('/about',(req,res)=>{
    res.send("About Page");
})

app.get('/api/people', (req,res)=>{
    console.log(req.user);
    res.send("People Page");
})

app.get('/api/study',(req,res)=>{
    res.send("Study Page");
})


app.listen(5000,()=>{
    console.log('server listening on port 5000....');
})