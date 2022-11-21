const service = require('../task/task.service');

const getTask = async function(req, res){
    try{
        var task = await service.getTask();
        res.status(200).send(task);  
    }catch(e){
        res.status(500).send("Internal Server Error");
    }
}

const saveTask = async function(req, res){
    try{
        await service.saveTask(req);
        res.status(201).send('User Record Saved Succesfully');
    }catch(e){
        res.status(500).send("Internal Server Error");
    }
}

const updateTask = async function(req, res){
  try{
    await service.updateTask();
    res.status(201).send('User Record updated Succesfully');
  }catch(e){
    res.status(500).send("Internal Server Error");
  }
}

const deleteTask = async function(req, res){
   try{
      await service.deleteTask(req);
      res.status(200).send('User Record Deleted Succesfully')
   }catch(e){
    res.status(500).send("Internal Server Error");
   }
}

module.exports = {
    getTask,
    saveTask,
    updateTask,
    deleteTask
}