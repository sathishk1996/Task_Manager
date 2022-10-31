const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true
    },
    password: {
          type: String,
          required: true,
          trim: true,
          minlength: 8
    }
})

const user = mongoose.model('user',UserSchema);
module.exports = user;
