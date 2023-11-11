const express =require('express');
const path=require('path')
const app=express()


// app.listen
app.listen(5000,()=>{
    console.log('server is listening on port 5000...');
})

// setup static and middleware
app.use(express.static('../public'))

// app.get
app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'../content/index.html'))
    // adding to static assets
    // SSR (Server Side Rendering)
})
