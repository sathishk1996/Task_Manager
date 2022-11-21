const User = require('../../models/user');
const getUsers = function(){
   try{
    return User.find();
   }catch(e){
     return e;
   }
}

const saveUser = function(req){
     try{
        var user = new User(req.body);
        return user.save();
     }catch(e){
        return e;
     }
}

const updateUser = function(req){
     try{
       return  User.findByIdAndUpdate(req.params.id, req.body);
     }catch(e){
       return e;
     }
}

const deleteUser = function(req){
     try{
     return User.findByIdAndDelete(req.params.id);
     }catch(e){
        return e;
     }
}

module.exports = {
    getUsers,
    saveUser,
    updateUser,
    deleteUser
}