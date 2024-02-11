/*
* Author : Md. Sholayman
* Description: This file contains database model for product.
* Date: 11 February  2024.
* */

const mongoose = require("mongoose");

const dataSchema = mongoose.Schema({
        productName:{type:String,required:true},
        image:{type:String,required:true},
        des:{type:String,required:true},
        brandID:{type:mongoose.Schema.Types.ObjectId,required:true},
        categoryID:{type:mongoose.Schema.Types.ObjectId,required:true},
    },
    {versionKey:false , timestamps:true})

const categoryModel = mongoose.model("categories" , dataSchema);
module.exports = categoryModel;