const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
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

const admin = mongoose.model('admin',AdminSchema);
module.exports = admin;
