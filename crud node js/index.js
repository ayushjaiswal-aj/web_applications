const express = require('express');
const Joi = require('joi');
const app = express();
const db = require('./db');
const collection = "todo"

app.use(express.json);


db.connect((err)=>{
    if (err){
        console.log('no connection');
        process.exit();
    }
    else {
        app.listen(3000, ()=>{
            console.log('connection establish');
        });
    }
});

const courses = [
    {
        id: 1, 
        value: "course1" 
    },
    {
        id: 2, 
        value: "course2" 
    },
    {
        id: 3, 
        value: "course3" 
    }

]

app.get('/', (req, res) => {
    res.send('hello world');
});

app.get('/api/courses', (req, res)=>{
    res.send(courses);
});

app.get('/api/courses/:id', (req, res) =>{
    let course = courses.find (c => c.id === parseInt(req.params.id));
    if (!course){
        res.status(404).send("Not found");
    }else{
        res.send(course);
    }
});

//request params
app.get('/api/courses/:id/:value', (req, res) =>{
    res.send(req.params);
});

//query handling
app.get('/api/courses/:id/:value', (req, res) =>{
    res.send(req.query);
});

app.post('/api/courses', (req, res) => {

    const Schema = {
        name: Joi.string().min(2).required()
    };

    const result = Joi.ValidationError(require.body, Schema);
    console.log(result);

    if (result.error){
        res.status(400).send(result.error);
        return;
    }
    
    const course = {
        id: course.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});

app.put('/api/courses/:id', (req, res) => {
    //check if it is present or not
    let course = courses.find (c => c.id === parseInt(req.params.id));
    if (!course){
        res.status(404).send("Not found");
        return;
    }

    //validate
    const result = validateCourse(course);
    if (result.error){
        res.status(400).send(result.error);
        return;
    }

    //update
    course.name = req.body.name;
    res.send(course);
});

function validateCourse(course) {
    const Schema = {
        name: Joi.string().min(2).required()
    };

    return Joi.ValidationError(course, Schema);
};

app.delete('/api/courses/:id', (req, res) => {
    // look for course
    let course = courses.find (c => c.id === parseInt(req.params.id));
    if (!course){
        res.status(404).send("Not found");
        return;
    }

    //delete course
    const index = courses.indexOf(course);
    courses.splice(index, 1);

    res.send(course);
});

