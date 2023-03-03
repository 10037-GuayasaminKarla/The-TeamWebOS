const{ Double, Decimal128} = require('bson');
const mongoose = require('mongoose');

const registrationsSchema = new mongoose.Schema({
    email:{
        required: true,
        type: String
    },
    password:{
        required: true,
        type: String
    },
    gender:{
        required: true,
        type: String
    }
});

module.exports = mongoose.model('registrations', registrationsSchema)