/*
* Author : Md. Sholayman
* Description: This file contains database model for category.
* Date: 11 February  2024.
* */

const mongoose = require("mongoose");

const dataSchema = mongoose.Schema({
        categoryName:{type:String,required:true},
        img:{type:String,required:true}
    },
    {versionKey:false , timestamps:true})

const categoryModel = mongoose.model("categories" , dataSchema);
module.exports = categoryModel;