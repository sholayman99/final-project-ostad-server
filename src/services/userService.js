/*
* Author : Md. Sholayman
* Description: This file contains query  for user.
* Date: 11 February  2024.
* */

const userModel = require("../models/userModel");
const emailSend = require("../helpers/emailHelper");


const createUserService = async(req,res)=>{

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

}

const updateAvatarService = async(req,res)=>{

}

const updatePasswordService = async(req,res)=>{

}

module.exports={
    createUserService, verifyUserService,loginUserService,updateAvatarService,updatePasswordService
             }