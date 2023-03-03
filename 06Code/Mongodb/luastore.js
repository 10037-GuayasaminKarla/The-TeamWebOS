const express = require('express');
const mongoose = require('mongoose');
const cardPaymentRoutes = require('./routes/card_paymentRoutes');
const registrationsRoutes = require('./routes/registrationsRoutes');
const deliveryRoutes = require('./routes/deliveryRoutes');


const app = express();


app.use('/card', cardPaymentRoutes);
app.use('/registrations', registrationsRoutes);
app.use('/delivery', deliveryRoutes);

const database= mongoose.connection;

const url= `mongodb+srv://cristian:cristian@cluster0.mvdkpmt.mongodb.net/LuaStore?retryWrites=true&w=majority`


mongoose.connect(url);

database.on('error conecting to MongoDB', (error) =>{
     console.log(error)
})

database.once('conected',()=>{
    console.log('MongoDB Database Connected');
})

app.search(express.json());
app.listen(3000, () => {
    console.log(`Server Started at $(3000)`)
})