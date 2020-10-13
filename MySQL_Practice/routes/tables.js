const express = require("express");
const mysqlConnection = require("../connection");
const router = express.Router();


router.get("/", (req, res)=>{
    mysqlConnection.query("SELECT * FROM actor", (err, rows, fields)=>{
        if (err){
            res.send(err);
            console.log(err);
        }
        else{
            res.send(rows);
        }
    });

});

module.exports = router;