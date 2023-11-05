const {readFileSync, writeFileSync}=require('fs')

console.log('Execution Start');
const first=readFileSync('./content/first.txt','utf-8')
const second=readFileSync('./content/second.txt','utf-8')
console.log(first,second);

// flag - 'a' mean append the data to given file
writeFileSync(
    './content/result-sync.txt',
    `Content is: ${first}, ${second}`,{flag : 'a'}
)
console.log('Execution Done');
console.log('Start next task');