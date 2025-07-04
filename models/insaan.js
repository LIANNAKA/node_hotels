const mongoose = require('mongoose');

//  define the insaan schema

const insaanSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age:{
        type: Number,
    },
    work:{
        type: String,
        enum : ['chef', 'waiter', 'manager'], // only these roles are allowed in work no other options would be accepted
        required: true 
    },
    mobile:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    address:{
        type: String,
    },
    salary:{
        type: Number,
        required: true
    }
});

//  create insaan model
const insaan = mongoose.model('insaan', insaanSchema);
module.exports = insaan;