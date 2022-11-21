const service = require('../../api/user/user.service');
const getUser = async function(req, res){
    var userArr = await service.getUsers();
    res.render('user', {
        title: "User",
        userArr
    })
}

const addUser = function(req, res){
    res.render('addUser', {
        title: "Add User"
    });
}

const editUser = function(req, res){
    res.render('addUser', {
        title: "Edit User"
    });
}

module.exports = {
    getUser,
    addUser,
    editUser
}