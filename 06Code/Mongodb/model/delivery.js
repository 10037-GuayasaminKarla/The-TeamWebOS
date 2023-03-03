const{ Double, Decimal128} = require('bson');
const mongoose = require('mongoose');

const deliverySchema = new mongoose.Schema({
    name:{
        required: true,
        type: String
    },
    last_name:{
        required: true,
        type: String
    },
    city:{
        required: true,
        type: String
    },
    address:{
        required: true,
        type: String
    },
    zip_code:{
        required: true,
        type: Number
    },
    phone:{
        required: true,
        type: Number
    },
    payment:{
        required: true,
        type: String
    },
});

module.exports = mongoose.model('delivery', deliverySchema)