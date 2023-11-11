console.log("first")
setTimeout(()=>{
    console.log("second")
},0)
console.log("third")
// first will run synchronous javascript line- 1 & 5
// after that run callback function(setTimeout()) 