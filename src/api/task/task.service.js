const Task = require('../../models/tasks');
const getTask = function(){
   try{
    return Task.find();
   }catch(e){
     return e;
   }
}

const saveTask = function(req){
     try{
        var task = new Task(req.body);
        return task.save();
     }catch(e){
        return e;
     }
}

const updateTask = function(req){
     try{
       return  Task.findByIdAndUpdate(req.params.id, req.body);
     }catch(e){
       return e;
     }
}

const deleteTask = function(req){
     try{
     return Task.findByIdAndDelete(req.params.id);
     }catch(e){
        return e;
     }
}

module.exports = {
    getTask,
    saveTask,
    updateTask,
    deleteTask
}