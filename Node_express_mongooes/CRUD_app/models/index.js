const mongoose = require("mongoose");
const express = require("express");


mongoose.connect("mongodb://localhost:27017/Test", {useNewUrlParser: true}, (err)=> {
    if (err){
        console.log("error!!! no connection established");
    }else{
        console.log("connection establish");
    }
});

const course = require("./courses.model");
