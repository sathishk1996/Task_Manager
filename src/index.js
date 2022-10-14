const express = require('express');
const path = require('path');
const app = express();

const publicDirPath = path.join(__dirname, "../public");
const viewPath = path.join(__dirname, "../templates/views");

app.set('view engine', 'hbs');
app.set('views', viewPath);
app.use(express.static(publicDirPath));

app.get('/reg', function (req, res) {
    res.render('reg');
})

app.get('/user', function (req, res) {
    res.render('user');
})

app.get('/login', function (req, res) {
    res.render('login');
})

app.get('/user/add', function (req, res) {
    res.render('addUser', {
        title: "Add User"
    });
})

app.get('/user/edit', function (req, res) {
    res.render('addUser', {
        title:"Edit User"
    });
})

app.get('/tasks', function (req, res) {
    res.render('tasks');
})

app.get('/tasks/add', function (req, res) {
    res.render('addTask',  {
        title:"Add Task"
    });
})

app.get('/tasks/edit', function (req, res) {
    res.render('addTask', {
        title:"Edit Task"
    });
})

app.listen(7000, function(){
    console.log("The server is up on Port 7000");
})