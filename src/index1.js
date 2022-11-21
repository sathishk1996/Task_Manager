require('dotenv').config();
require('./db/mongoose');
const morgan = require('morgan');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const bcrypt = require('bcrypt');
const auth = require('./middleware/auth');
const checkRole = require('./middleware/checkRole');


const publicDirPath = path.join(__dirname, "../public");
const viewPath = path.join(__dirname, "../templates/views");

const User = require("./models/user");
const Task = require("./models/tasks");
const Admin = require("./models/admin");
const { resourceLimits } = require('worker_threads');
const { trusted } = require('mongoose');

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
    res.render('user', {
        title: "User",
        subTitle: "All User Records",
        showSubTitle: false,
        fruitArr:['apple', 'orange', 'banana', 'mango'],
        stdArr: [
            {
              name: "sathish",
              age: 23
            },
            {
                name: "mano",
                age: 23
            },
            {
                name: "kumar",
                age: 27
            }
        ],
        userArr: [
            {
                name: 'deue',
                email: 'kdowewff',
                password: "1212343421"
            },
            {
                name: 'user2',
                email: "user3@gmail.com",
                password: "123421231"
            },
            {
                name: 'user4',
                email: 'user4@gmail.com',
                password: "98765432"
            }
        ]
    });
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
app.get('/api/user', async function(req, res){
    User.find().then(function(result){
        res.status(200).send(result);        
    }).catch(function(error){
        res.status(500).send("Internal Server Error");
    })
    try{
        await User.find()
        res.status(200).send(result);        
    }catch(e){
         res.status(500).send("Internal Server Error");
    }
})

// To Save a Record into User Collection
app.post('/api/user', auth,checkRole, async function(req, res){
    console.log("input:", req.body);
    var user = new User(req.body);
    user.save().then(function(result){
        res.status(201).send('User Record Saved Succesfully');
    }).catch(function(error){
        console.log(error)
        res.status(500).send("Internal Server Error");
    })
    try{
        var user = new User(req.body);
        var result = await user.save();
        res.status(201).send('User Record Saved Succesfully');
    }catch(e){
        res.status(500).send("Internal Server Error");
    }
})

// To Update a Record in User collection
app.put('/api/user/:id', async function(req, res){
    User.findByIdAndUpdate(req.params.id, req.body).then(function(result){
        res.status(201).send('User Record updated Succesfully');
    }).catch(function(error){
        res.status(500).send("Internal Server Error");
    })
    try{
       await User.findByIdAndUpdate(req.params.id, req.body);
       res.status(201).send('User Record updated Succesfully');
    }catch(e){
        res.status(500).send("Internal Server Error");
    }
})

// To delete a Record in User Collection
app.delete('/api/user/:id', async function(req, res){
    console.log("params Id", req.params.id);
    User.findByIdAndDelete(req.params.id).then(function(result){
        res.status(200).send('User Record Deleted Succesfully')
    }).catch(function(error){
        res.status(500).send("Internal Server Error");
    })
     try{
        await User.findByIdAndDelete(req.params.id)
                res.status(200).send('User Record Deleted Succesfully')
     }catch(e){
               res.status(500).send("Internal Server Error");
     }
})

// Admin 
// To get all the values from admin collection
app.get('/api/admin', async function(req, res){
    try{
        await Admin.find()
            res.status(200).send(result);        
    }catch(e){
        res.status(500).send("Internal Server Error");
    }
})

// To Save a Record into admin Collection
app.post('/api/admin', auth,checkRole, async function(req, res){
    try{
        console.log("input:", req.body);
        req.body.password = await bcrypt.hash(req.body.password, 8);
        var admin = new Admin(req.body);
        await admin.save();
        res.status(201).send('Admin Record Saved Succesfully');
    }catch(e){
        console.log(e);
        res.status(500).send("Internal Server Error");
    }
})

// To Update a Record in admin collection
app.put('/api/admin/:id', async function(req, res){
    try{
        await Admin.findByIdAndUpdate(req.params.id, req.body)
            res.status(201).send('User Record updated Succesfully');
    }catch(e){
        res.status(500).send("Internal Server Error");
    }
})

// To delete a Record in admin Collection
app.delete('/api/admin/:id', async function(req, res){
    try{
        await Admin.findByIdAndDelete(req.params.id)
            res.status(200).send('User Record Deleted Succesfully')
    }catch{
        res.status(500).send("Internal Server Error");
    }
})

// crude opertion of task collection
// to save record in task collection
app.post('/api/tasks', function(req, res){
    var task = new Task(req.body);
    task.save().then(function(result){
        res.status(201).send("Task Record Saved Successfully");
    }).catch(function(error){
        console.log(error)
        res.status(500).send("Internal Server Error");
    })
})

app.get('/api/tasks', function(req, res){
    Task.find().then(function(result){
        res.status(200).send(result);        
    }).catch(function(error){
        res.status(500).send("Internal Server Error");
    })
})

// console.log("---------------", process.env.PORT);

app.listen(process.env.PORT, function(){
    console.log("The server is up on Port 7000");
})