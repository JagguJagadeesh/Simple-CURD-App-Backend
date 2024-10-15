const express = require('express');
const mongoose = require('mongoose');
const ProductRoute = require('./Routes/ProductRoute.js');
const app = express();
require('dotenv').config();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Routes
app.use('/api/products',ProductRoute);

app.get('/',(req,res)=>{
    res.status(200).send('Hello..')
})


mongoose.connect(process.env.URL)
    .then(()=>{
        app.listen(3000,()=>{
            console.log('Server Started at 3000...');
            
        })
        console.log('DataBase is Connected..');
    })
    .catch((error)=>{
        console.log(error);
        
    })



