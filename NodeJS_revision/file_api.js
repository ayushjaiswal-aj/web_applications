// to check difference between sync and asyn behaivior

let fs = require('fs');

fs.writeFileSync('out.txt', 'this should get written to file');
console.log("This should print after writeFileSync is executed");

fs.writeFile('out.txt', 'This shoudl be written asynchronously', (err) => {
    console.log('this is printed after writefile is executed');
});

console.log("This line is after both writeFileSync and writeFile functions but will be printed before writeFile executed");
