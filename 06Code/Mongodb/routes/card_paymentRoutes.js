const {Console} = require('console');
const express = require('express');

const router = express.Router()

const cards = require('../model/card_payment');

module.exports = router;

router.get('/cards', async (req, res)=>{
    console.log(await cards.find());
    try{
        const cardsData = (await cards.find());
        res.json(cardsData)
    }
    catch(error){
        res.status(500).json({message: error.mesage})
    }
})