const {readFile, writeFile} = require('fs')

console.log('Execution started');
readFile('./content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    const first=result;
    readFile('./content/second.txt','utf8',(err,result)=>{
        if(err){
            console.log(err)
            return
        }
        const second=result
        writeFile(
            './content/result-async.txt',
            `Content:${first},${second}`,
            (err,result)=>{
            if(err){
                console.log(err);
                return
            }
            console.log('Done task');
        })
    })
})
console.log('Execute the another task');