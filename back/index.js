const express = require('express');
const app = express();
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const cors= require('cors');
const cookiePars = require('cookie-parser');


dotenv.config();

const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URL).then(()=>console.log("DB successfully connected!!")).catch(
    (err)=>{
        console.log(err);
    }
)

app.use(express.json());
app.use(cors({credentials:true, origin:'http://localhost:3000/'}));
app.use(cookiePars());
app.use("/auth", authRoute);

app.get('/welcome',(req,res)=>{
    res.json(req.cookie);
})

app.post('/answer/verify', (req,res)=>{
    const {level, answer}= req.body;

    const ans=[
        {level:1,
        ans: "Welcome to Treasure Hunt"},
        {level:2,
        ans: "Hello There"},
        {level:3,
        ans: "Ready for next level"},
        {level:4,
        ans: "Welcome to this page"},
        {level:5,
        ans: "The End"}

    ]
    console.log(ans[level-1].ans==answer);
    if(ans[level-1].ans==answer){
        const update =  await User.findOneAndUpdate({_id: req.body.user}, {$inc: {level: 1}})
        console.log(update);
        res.json("ok");
    }
    else{
       res.status(400).json("wrong");
    }
   
})


app.listen(process.env.PORT || 5000, () => {
    console.log("Server is running!!!!");
})