const express = require("express");
const bodyParser = require("body-parser");

const mysqlConnection = require("./connection");
const peopleRoutes = require("./routes/tables");


var app = express();

app.use(bodyParser.json());

app.use("/tables", peopleRoutes);

app.listen(3000);

