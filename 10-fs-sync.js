const {readFileSync,writeFileSync} = require('fs')
console.log('START');
const first = readFileSync('./content/first.txt','utf-8')
const second = readFileSync('./content/second.txt','utf-8')

writeFileSync('./content/result.txt',`Here is the result: ${first} and ${second}`,{flag: 'a'})

console.log('DONE WITH THIS TASK');
console.log('STARTING THE NEXT ONE');
