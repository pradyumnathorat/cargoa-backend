const mongoose = require('mongoose');
const schema = mongoose.Schema;

const manufactureMsgSchema = schema({
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
        type : mongoose.Schema.Types.ObjectId , ref:'Manufacture'
    }
})

const manufactureMsg = mongoose.model('ManufacturerMsg', manufactureMsgSchema);

module.exports = manufactureMsg