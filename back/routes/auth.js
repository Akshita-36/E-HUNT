const express = require('express');
const app = express();
const router = require("express").Router();
const User = require("../models/User")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const cors= require('cors');

const salt = bcrypt.genSaltSync(10);

dotenv.config();


router.post("/register", async(req,res)=>{
    const {username,email,password} = req.body;
    
    try{
        
        const userDoc = await User.create(
            {username,email,
                password:bcrypt.hashSync(password,salt)
            });
            console.log(userDoc);
        res.json(userDoc);
    }catch(e){
        res.status(400).json(e);
    }
})


router.post("/signin", async(req,res)=>{
    const {email,password} = req.body;
    //console.log(req.body);

    const userDoc = await User.findOne({email:email});
    console.log(userDoc);

    const pssw = bcrypt.compareSync(password,userDoc.password);
    if(pssw){
        //signed in
        jwt.sign({email}, process.env.JWT_SECRET,
            {}, (err,token)=>{
                if(err) throw(err);
                res.cookie('token',token).json("ok");

            })

    }else{
        res.status(400).json("Wrong credientials");

    }
    
})

router.post('/signout',(req,res)=>{
    res.cookie('token','').json('ok');
})

router.get("/admin",(req,res)=>{
    User.find({isAdmin:"false"}).then(response=>{
        response.forEach((user)=>{
            user.password=undefined;
        })
        res.json(response);
    }).catch(err=>{
        console.log(err);
    })
})

router.post("/level/get", async (req, res) => {
    const id = req.body.id
    const user = await User.findOne({ _id: id })
    if(!user) res.json({error: true, message: "User not found."})
    else {
        res.status(200).json({level: user.level})
    }
})


module.exports = router;