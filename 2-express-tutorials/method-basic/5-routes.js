const express = require('express')
const app = express()

const people = require('../routes/people')
const auth = require('../routes/auth')

app.use(express.static('./static-file'))
// parse form data
app.use(express.urlencoded({extended:false}))
// parse json
app.use(express.json())

app.use('/api/people',people)
app.use('/login',auth)

app.listen(5000,()=>{
    console.log('Server running on port 5000....');
})  