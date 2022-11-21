const service = require('../../api/task/task.service');
const userService = require('../../api/user/user.service');
const getTask = async function(req, res){
       var taskArr = await service.getTask();
       res.render('tasks',{
        taskArr
       });
}

const addTask = async function(req, res){
    var id_result = await userService.getUsers();
    res.render('addTask', {
        title: "Add Task",
        id_result
    });
}

const editTask = function(req, res){
    res.render('addTask', {
        title: "Edit Task"
    });
}

module.exports = {
    getTask,
    addTask,
    editTask
}