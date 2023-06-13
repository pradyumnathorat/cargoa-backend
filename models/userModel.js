const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userSchema =  schema({
    name : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    password : {
        type: String,
        required: true
    }
})

const userModel = mongoose.model('Manufacture', userSchema);

module.exports = userModel