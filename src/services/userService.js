/*
* Author : Md. Sholayman
* Description: This file contains query  for user.
* Date: 11 February  2024.
* */

const userModel = require("../models/userModel");
const emailSend = require("../helpers/emailHelper");
const {encodeToken} = require("../helpers/tokenHelper");


const createUserService = async(req)=>{

    try {
        let reqBody = req['body'];
        let email = req.body['email'];
        let otp = Math.round(Math.floor(100000 + Math.random()*900000));
        let emailText = `Your otp verification code is: ${otp}`;
        let emailSub = "Account Verification";
        await emailSend(email,emailSub,emailText);
        reqBody.otp = otp ;
        let data = await userModel.create(reqBody);
        return {status:"success", data:data};
    }
    catch (e) {
        return {status:"fail" , data:e.message};
    }
}

const verifyUserService = async(req,res)=>{

    try {
      let email = req.params['email'];
      let otp = req.params['otp'];
      let matchStage ={$match:{
          email:email,otp:otp
          }};
      let countStage = {$count:"total"};
      let totalCount = await userModel.aggregate([
          matchStage,countStage
      ]);

      if(totalCount.length === 1){
          let data = await userModel.updateOne({email:email} , {$set:{otp:"0"}});
          return {status:"success", message:"Verified successfully", data:data};
      }
    }
    catch (e) {
        return {status:"fail" , data:e.message};
    }

}

const loginUserService = async(req,res)=>{

    try {
       let email = req.body['email'];
       let pass = req.body['password'];
       let matchStage = {$match: {
           email:email,password:pass
           }};
       let countStage ={$count: "total"};
       let totalCount = await userModel.aggregate([
           matchStage,countStage
       ]);
       if(totalCount.length === 1){
           let userID = await userModel.find({  email:email,password:pass}).select('_id');
           let token = encodeToken(email,userID[0]['_id']);
           return {status:"success" , message:"Logged in successfully" , token:token};
       }
    }
    catch (e) {
        return {status:"fail" , message:"Something went wrong!" , data:e.message};
    }

}

const updateAvatarService = async(req,res)=>{

    try {
       let avatar = req.body['avatar'];
       let email = req.headers['email'];
       let data = await userModel.updateOne(
           {email:email} , {$set:{avatar:avatar}},{upsert:true}
       );
       return {status:"success" , data:data};
    }
    catch (e) {
       return {status:"fail" , data:e.message};
    }

}

const updatePasswordService = async(req,res)=>{

    try {
        let pass = req.body['password'];
        let email = req.headers['email'];
        let data = await userModel.updateOne(
            {email:email} , {$set:{password:pass}},{upsert:true}
        );
        return {status:"success" , data:data};
    }
    catch (e) {
        return {status:"fail" , data:e.message};
    }

}

const userInfoService = async (req)=>{
    try {
        let email = req.headers['email'];
        let matchStage = {$match:{email:email}};
        let projectStage ={$project:{
            "_id":0,"password":0,"otp":0,"createdAt":0,"updatedAt":0
            }};
        let data = await userModel.aggregate([matchStage,projectStage]);
        return {status:"success", data:data}
    }
    catch (e) {
        return {status:"fail" , data:e.message}
    }
}

module.exports={
    createUserService, verifyUserService,loginUserService,updateAvatarService,updatePasswordService,
    userInfoService }