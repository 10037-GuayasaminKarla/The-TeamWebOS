const {Console} = require('console');
const express = require('express');

const router = express.Router()

const registration = require('../model/registrations');

module.exports = router;

router.get('/registration', async (req, res)=>{
    console.log(await registration.find());
    try{
        const registrationData = (await registration.find());
        res.json(registrationData)
    }
    catch(error){
        res.status(500).json({message: error.mesage})
    }
})