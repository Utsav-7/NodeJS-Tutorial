const express = require('express')
const app = express()
let { people }= require('../../content/data')

app.use(express.static('./static-file'))

app.get('/api/people',(req,res) => {
    res.status(200).json({success:true, data:people})
})

app.listen(5000,()=>{
    console.log('Server running on port 5000....');
})