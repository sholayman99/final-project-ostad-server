/*
* Author : Md. Sholayman
* Description: This file contains database model for user.
* Date: 11 February  2024.
* */

const mongoose = require("mongoose");

const dataSchema = mongoose.Schema({

        email:{type:String, required:true , unique:true},
        password:{type:String,required:true, validate:{
            validator:function (value){
                return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(value)
            },
            message:"Password must contains 8 characters, at least one letter, one number and one special character"
            }},
        name:{type:String,required:true},
        otp:{type:String,required:true},
        avatar:{type:String, default:"https://i.ibb.co/7XLTDWv/user.png"},
        mobile:{type:String,required:true , validate:{
                validator:function(value){
                    return /^(?:\+?88|0088)?01[15-9]\d{8}$/.test(value)
                },
                message:` This is not a valid Number`
            }},
    },
    {versionKey:false , timestamps:true})

const userModel = mongoose.model("users" , dataSchema);
module.exports = userModel;