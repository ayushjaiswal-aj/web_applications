const fs = require('fs');
const readline = require('readline');

const writeGreetingToFile = (name) => {
    fs.writeFile('greeting.txt', `hello, ${name}!`, err => {
        if(err) {
            console.log("error occured when writing to file");
        }
        else {
            console.log("writing to file was successful");
        }
    });
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("What is your name?", (name) => {
    rl.close();
    writeGreetingToFile(name);
});