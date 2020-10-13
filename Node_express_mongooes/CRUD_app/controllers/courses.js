const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();
const courseModel = mongoose.model("course");

router.get("/list", (req, res)=>{
    courseModel.find((err, docs) =>{
        if (err){
            console.log(err);
        }else {
            //res.send("courses controller");
            res.send(docs)
            console.log(docs);
        }
    });
});

module.exports= router;