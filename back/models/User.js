const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        username: {
            type : String ,
            required : true ,
            unique : true
        },
        email : {
            type : String,
            required : true,
            unique:true
        },
        password : {
            type : String,
            required : true
        },
        isAdmin : {
            type : Boolean,
            default : false
        },
        timeTaken : {
            type : Number,
            default : 0
        },
        level:{
            type : Number,
            default : 0
        }
    }
)

module.exports = mongoose.model("User", userSchema);