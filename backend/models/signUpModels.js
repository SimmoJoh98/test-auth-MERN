const mongoose = require('mongoose');
const signUpTemplate = new mongoose.Schema({
    FullName: {
        type: String,
        required: true,
    },
    Username:{
        type: String,
        required: true,
    },
    Password:{
        type: String,
        required: true,
    },
    Email:{
        type: String,
        required: true,
    },
    timestamp:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('myTable', signUpTemplate);