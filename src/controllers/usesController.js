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

};

exports.loginUser = async(req,res)=>{

    let data = await loginUserService(req);

    if(data['status']==="success"){
        let cookieOptions={
            expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
            httpOnly:false
        }
        res.cookie("token",data['token'],cookieOptions);
        return res.status(200).json(data);
    } else{
        return res.status(200).json(data);
    }

};

exports.updateAvatar = async(req,res)=>{

    let data = await updateAvatarService(req);

    if(data['status']==="success"){
        res.status(201).json(data);
    }
    else{
        res.status(400).json(data);
    }

}

exports.updatePassword = async(req,res)=>{
    let data = await updatePasswordService(req);

    if(data['status']==="success"){
        res.status(201).json(data);
    }
    else{
        res.status(400).json(data);
    }
}