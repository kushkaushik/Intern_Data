const express = require('express');
const app = express();
const mongoose = require('mongoose');
const {URLS}   = require('./db')


app.use(express.json());
app.use(express.urlencoded({extended:false}));

mongoose.connect(URLS)
mongoose.connection.on("connected",()=>{
    console.log("Successfully connected to database")
})


require('./schema/userSch')
require('./schema/internData')
app.use(require('./route/post'))
app.use(require('./route/auth'))










app.listen(9000 , () => {
    console.log("Connected to 9000 port")
})