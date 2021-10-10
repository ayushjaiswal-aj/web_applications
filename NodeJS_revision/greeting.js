const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    outpur:process.stdout
});

rl.question("what is your name?\n", (name) =>{
    console.log('hello ' + name);
    rl.close();
})