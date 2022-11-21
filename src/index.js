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

const Task = require("./models/tasks");
const Admin = require("./models/admin");
// const { resourceLimits } = require('worker_threads');
// const { trusted } = require('mongoose');
const route = require('./routes')

app.set('view engine', 'hbs');
app.set('views', viewPath);
app.use(express.static(publicDirPath)); 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('tiny'));


app.get('/reg', function (req, res) {
    res.render('reg');
})

route.apiRoot(app);

app.get('/', function (req, res) {
    res.render('login');
})

app.listen(process.env.PORT, function(){
    console.log("The server is up on Port 7000");
})