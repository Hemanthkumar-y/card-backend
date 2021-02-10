const express = require("express");
const cors = require('cors');
const mongoose = require("mongoose");
//const bcrypt = require('bcrypt');

const app = express();
app.use(express.json());
app.use(cors());

const db = mongoose.createConnection("mongodb://localhost:27017/card", { useNewUrlParser: true, useUnifiedTopology: true });
const userSchema = new mongoose.Schema({
    userName: String,
    CardNumber: Number,
    CVcode:Number
});

//Model
const userModel = db.model('users',userSchema);

app.post('/', async (req, res) => {
    const {CardNumber,CVcode,userName} = req.body;
    const newUser = new userModel({
        userName:userName,
        CardNumber:CardNumber,
        CVcode:CVcode
    });
    await newUser.save();
    res.status(201).send();
});


 

app.listen(8999, () => {
    console.log("Connecting at  8999");
});