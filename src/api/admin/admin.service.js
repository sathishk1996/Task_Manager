const Admin = require('../../models/admin');
const bcrypt = require('../../index');

const getAdmin = function(){
   try{
    return Admin.find();
   }catch(e){
     return e;
   }
}

const saveAdmin = async function(req){
     try{
        req.body.password = await bcrypt.hash(req.body.password, 8);
        var admin = new Admin(req.body);
        return admin.save();
     }catch(e){
        return e;
     }
}

const updateAdmin = function(req){
     try{
       return  Admin.findByIdAndUpdate(req.params.id, req.body);
     }catch(e){
       return e;
     }
}

const deleteAdmin = function(req){
     try{
     return Admin.findByIdAndDelete(req.params.id);
     }catch(e){
        return e;
     }
}

module.exports = {
    getAdmin,
    saveAdmin,
    updateAdmin,
    deleteAdmin
}