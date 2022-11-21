const apiRoot = function (app){
    //Api Routes
    app.use('/api/user', require('./api/user'));
    app.use('/api/tasks', require('./api/task'));
    app.use('/api/admin', require('./api/admin'));

   // Hbs Routes
   app.use('/user', require('./hbsPages/user'))
   app.use('/tasks', require('./hbsPages/task'))

}

module.exports = {
    apiRoot
};

