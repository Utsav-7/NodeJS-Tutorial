const { log } = require('console');
const os = require('os')

const user=os.userInfo()
console.log(user);

console.log(`The System Uptime is ${os.uptime()} second`);

const data={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem()
}
console.log(data);