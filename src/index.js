require('dotenv').config();
require('./db/mongoose');
const morgan = require('morgan');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

const publicDirPath = path.join(__dirname, "../public");
const viewPath = path.join(__dirname, "../templates/views");

const User = require("./models/user");
const Task = require("./models/tasks");

app.set('view engine', 'hbs');
app.set('views', viewPath);
app.use(express.static(publicDirPath));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('tiny'));

// Page Render
app.get('/user/add', function (req, res) {
    res.render('addUser', {
        title: "Add User"
    });
})

app.get('/User/edit', function (req, res) {
    res.render('addUser', {
        title: "Edit User"
    });
})

app.get('/user', function (req, res) {
    res.render('user');
})

app.get('/tasks', function (req, res) {
    res.render('tasks');
})

app.get('/tasks/add', function (req, res) {
    res.render('addTask', {
        title: "Add Task"
    });
})

app.get('/tasks/edit', function (req, res) {
    res.render('addTask', {
        title: "Edit Task"
    });
})

app.get('/reg', function (req, res) {
    res.render('reg');
})

// app.get('/', function (req, res) {
//     res.render('login');
// })

//API - Application Programming Interface

// To get all the values from user collection
app.get('/api/user', function(req, res){
    console.log("Query", req.query);
    res.status(200).send('All Users Record');
})

// To Save a Record into User Collection
app.post('/api/user', function(req, res){
    console.log("input:", req.body);
    var user = new User(req.body);
    user.save().then(function(result){
        res.status(201).send('User Record Saved Succesfully');
    }).catch(function(error){
        res.status(500).send("Internal Server Error");
    })
})

// To Update a Record in User collection
app.put('/api/user/:id', function(req, res){
    console.log("params", req.params);
    console.log("Body", req.body);
    res.status(201).send('User Record updated Succesfully');
})

// To delete a Record in User Collection
app.delete('/api/user', function(req, res){
    res.status(200).send('User Record Deleted Succesfully')
})

// crude opertion of task collection
// to save record in task collection
app.post('/api/tasks', function(req, res){
    var task = new Task(req.body);
    task.save().then(function(result){
        res.status(201).send("Task Record Saved Successfully");
    }).catch(function(error){
        res.status(500).send("Internal Server Error");
    })
})

// console.log("---------------", process.env.PORT);

app.listen(process.env.PORT, function(){
    console.log("The server is up on Port 7000");
})