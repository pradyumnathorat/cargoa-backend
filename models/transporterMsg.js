const mongoose = require('mongoose');
const schema = mongoose.Schema;

const transporterMsgSchema = schema({
    to : {
        type: String,
        required: true
    },
    from: {
        type: String,
        required: true
    },
    quantity : {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    transporter: {
        type : mongoose.Schema.Types.ObjectId , ref:'Transporter', 
        required : true
    },
    orderId : {
        type: String,
        required: true
    },
    user : {
        type: String,
        required: true
    },
    price : {
        type: Number,
        required: true
    },
    status : {
        type: String,
        default : "Confirm"
    }
})

const transporterMsg = mongoose.model('TransporterMsg', transporterMsgSchema);

module.exports = transporterMsg