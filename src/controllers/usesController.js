/*
* Author : Md. Sholayman
* Description: This file contains controller  for user.
* Date: 11 February  2024.
* */
const { createUserService, verifyUserService,loginUserService,updateAvatarService,
    updatePasswordService } = require("../services/userService");


exports.createUser = async(req,res)=>{

    let data = await createUserService(req);

    if(data['status']==="success"){
        res.status(201).json(data);
    }
    else{
        res.status(400).json(data);
    }

};

exports.verifyUser = async(req,res)=>{
    let data = await verifyUserService(req);

    if(data['status']==="success"){
        res.status(201).json(data);
    }
    else{
        res.status(400).json(data);
    }
}

exports.loginUser = async(req,res)=>{

}

exports.updateAvatar = async(req,res)=>{

}

exports.updatePassword = async(req,res)=>{

}