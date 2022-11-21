const service = require('./user.service');

const getUsers = async function(req, res){
    try{
        var users = await service.getUsers();
        res.status(200).send(users);  
    }catch(e){
        res.status(500).send("Internal Server Error");
    }
}

const saveUser = async function(req, res){
    try{ 
        await service.saveUser(req);
        res.status(201).send('User Record Saved Succesfully');
    }catch(e){
        res.status(500).send("Internal Server Error");
    }
}

const updateUser = async function(req, res){
  try{
    await service.updateUser(req);
    res.status(201).send('User Record updated Succesfully');
  }catch(e){
    res.status(500).send("Internal Server Error");
  }
}

const deleteUser = async function(req, res){
   try{
      await service.deleteUser(req);
      res.status(200).send('User Record Deleted Succesfully')
   }catch(e){
    res.status(500).send("Internal Server Error");
   }
}

module.exports = {
    getUsers,
    saveUser,
    updateUser,
    deleteUser
}