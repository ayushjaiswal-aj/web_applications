const connection = require("./models");
const express = require("express");
const app = express();
const path = require("path");
const expressHandlebars = require("express-handlebars");
const bodyParser = require("body-parser");

const courseController = require("./controllers/courses");

app.use(bodyParser.urlencoded({
    extended : true
}));

app.set('views', path.join(__dirname, "./views/"));

app.engine("hbs", expressHandlebars({
    extname: "hbs",
    defaultLayout: "mainlayout",
    layoutsDir: __dirname + "/views/layouts"
}));

app.set("view engine", "hbs");

app.get("/", (req, res)=>{
   // res.send("hello world");
    res.render("index", {});
});

app.use("/courses", courseController);

app.listen(3000, ()=>{
    console.log("servers started");
});