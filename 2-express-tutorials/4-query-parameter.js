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

app.get('/api/people/:peopleId',(req,res)=>{
    console.log(req);
    console.log(req.params);
    
    const {peopleId}=req.params;

    const singlePeople = people.find((people)=>people.id === Number(peopleId))

    // if given peopleId not found 
    if(!singlePeople){
        return res.status(404).send('People Does Not Exist!')
    }
    return res.json(singlePeople)
})

app.get('/api/people/:peopleId/city/:cityId',(req,res)=>{
    console.log(req.params);
    res.send('Hello World!')
})


app.get('/api/v1/query',(req,res)=>{
    // console.log(req.query);
    const {search, limit}= req.query;
    let sortedPeople=[...people]

    if(search){
        sortedPeople=sortedPeople.filter((people)=>{
            return people.name.startsWith(search)
        })
    }
    if(limit){
        sortedPeople=sortedPeople.slice(0,Number(limit))
    }
    if(sortedPeople < 1){
        return res.status(200).send('No People matched your search')
    }
    res.status(200).json(sortedPeople)
})