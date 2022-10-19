var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/task_manager',{

    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.once('open',function(){
  console.log('mongo database connection established successfully');
});