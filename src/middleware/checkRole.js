function checkRole(req, res, next){
    console.log('checkRole Middleware');
    next();
}

module.exports = checkRole;