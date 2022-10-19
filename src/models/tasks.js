const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true,
        trim: true
    },
    status: {
        name: String,
        required: true,
        trim: true,
    }
})

const User = mongoose.model('User',UserSchema);
module.exports = User;
