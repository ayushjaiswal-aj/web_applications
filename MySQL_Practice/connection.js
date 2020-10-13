const mysql = require("mysql");

var mysqlConnection = mysql.createConnection({
    host : "127.0.0.1",
    user: "root",
    password : "root@mysql",
    database: "sakila",
    multipleStatements : true
});

mysqlConnection.connect((err)=>{
    if (err){
        console.log("not connected");
        console.log(err);
    }
    else{
        console.log("connected");
    }
});

module.exports = mysqlConnection;