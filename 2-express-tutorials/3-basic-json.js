const express=require('express')
const app=express()

const { people }=require('../content/data.js')

app.listen(5000,()=>{
    console.log('server listening on port 5000....');
})

app.get('/',(req,res)=>{
    res.send('<h1>Home Page</h1><a href="/api/people">Peoples</a>')
})

app.get('/api/people',(req,res)=>{
    // map used for send selected field send to the browser
    const newPeople=people.map((people)=>{
        const {id,name,city}=people;
        return {id,name,city}
    })
    res.json(newPeople)
})
