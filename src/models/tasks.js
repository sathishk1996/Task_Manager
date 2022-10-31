const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true,
        trim: true
    },
    status: {
        type: String,
        enum:['Incomplete','Complete'],
        default:'Incomplete'
    },
    owner_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref:'user'
    }
}) 

const tasks = mongoose.model('tasks',TaskSchema);
module.exports = tasks;
