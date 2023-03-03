const{ Double, Decimal128} = require('bson');
const mongoose = require('mongoose');

const card_paymentSchema = new mongoose.Schema({
    name:{
        required: true,
        type: String
    },
    card_number:{
        required: true,
        type: Number
    },
    expiration_date:{
        required: true,
        type: Date
    },
    zip_code:{
        required: true,
        type: Number
    }
});

module.exports = mongoose.model('card_payment', card_paymentSchema)