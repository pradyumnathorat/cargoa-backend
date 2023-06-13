const mongoose = require('mongoose');
const schema = mongoose.Schema;

const transporterSchema = schema({
    name : {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const transporterModel = mongoose.model('Transporter', transporterSchema);

module.exports = transporterModel