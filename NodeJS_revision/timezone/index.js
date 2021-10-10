const moment = require('moment-timezone');

moment.tz.setDefault('Asia/Kolkata');
let targetTimeZone;

console.log(process.argv);

if(process.argv.length != 3){
    console.log("Usage: node <script-file> <timezone>");
    process.exit(1);
}
else {
    targetTimeZone = process.argv[2];
}

console.log(`The time at the ${targetTimeZone} timezone is ${moment().tz(targetTimeZone).format()}`);
