const service = require('../admin/admin.service');
const bcrypt = require('bcrypt');

const getAdmin = async function(req, res){
    try{
        var task = await service.getAdmin();
        res.status(200).send(task);  
    }catch(e){
        res.status(500).send("Internal Server Error");
    }
}

const saveAdmin = async function(req, res){
    try{
        await service.saveAdmin(req);
        res.status(201).send('User Record Saved Succesfully');
    }catch(e){
        res.status(500).send("Internal Server Error");
    }
}

const updateAdmin = async function(req, res){
  try{
    await service.updateAdmin();
    res.status(201).send('User Record updated Succesfully');
  }catch(e){
    res.status(500).send("Internal Server Error");
  }
}

const deleteAdmin = async function(req, res){
   try{
      await service.deleteAdmin(req);
      res.status(200).send('User Record Deleted Succesfully')
   }catch(e){
    res.status(500).send("Internal Server Error");
   }
}

module.exports = {
    getAdmin,
    saveAdmin,
    updateAdmin,
    deleteAdmin
}