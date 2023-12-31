const express = require('express')
const app = express()
let { people }= require('../../content/data')

app.use(express.static('./static-file'))
// parse form data
app.use(express.urlencoded({extended:false}))
// parse json
app.use(express.json())

app.get('/api/people',(req,res) => {
    res.status(200).json({success:true, data:people})
})

app.post('/api/people',(req,res) => {
    const {name}=req.body
    if(!name){
        return res.status(400).json({success:false,msg:'Please provide valid name'})
    }
    res.status(201).json({success:true,person:name})
})

app.post('/api/postman/people',(req,res)=>{
    const {name}=req.body
    if(!name){
        return res.status(400).json({success:false,msg:'Please provide valid name'})
    }   
    res.status(201).json({success:true,data:[...people,name]})
})

app.post('/login',(req,res)=>{
    console.log(req.body);
    const {name}=req.body;
    if(name){
        return res.status(200).send(`Welcome, ${name}`)
    }
    res.status(401).send('Please Provide valid data.')
})

app.listen(5000,()=>{
    console.log('Server running on port 5000....');
})