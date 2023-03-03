const {Console} = require('console');
const express = require('express');

const router = express.Router()

const delivery = require('../model/delivery');

module.exports = router;

router.get('/delivery', async (req, res)=>{
    console.log(await delivery.find());
    try{
        const deliveryData = (await delivery.find());
        res.json(deliveryData)
    }
    catch(error){
        res.status(500).json({message: error.mesage})
    }
})