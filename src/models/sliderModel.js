/*
* Author : Md. Sholayman
* Description: This file contains database model for slider.
* Date: 12 February  2024.
* */

const mongoose = require("mongoose");

const dataSchema = mongoose.Schema({
        img:{type:String,required:true}
    },
    {versionKey:false , timestamps:true})

const sliderModel = mongoose.model("sliders" , dataSchema);
module.exports = sliderModel;