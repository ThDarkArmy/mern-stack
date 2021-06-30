const express = require('express');
const router = express.Router();
require('../db/conn');
const user = require('../models/userSchema');

router.get('/course',(req,res) => {
    res.send('Hello world from the register');
});

router.post('/course', async (req,res) => {

    const {coursename, dcsp,number, Sdate, weekno} = req.body;

   if(!coursename || !dcsp || !number || !Sdate || !weekno){
             return res.status(422).json({error:"pls fill all field"});
    }
    try{
        const users = new user({coursename, dcsp,number,Sdate, weekno});
        await users.save();

        res.status(201).json({message:"user registered successful"});
    }catch (err){
        console.log(err);
    }
});

router.get('/dashboard', async (req,res) => {
  const courses = await user.find({})
  res.json({courses});
});


module.exports = router;