/*
* Author: Md. Sholayman
* Des: This file contains a middleware function.
* Date: 11 February 2024
* */

const {decodeToken} = require("../helpers/tokenHelper");

module.exports =(req, res, next)=>{

        let token = req.headers['token'];
        if(!token){
            token = req.cookies['token'];
        }

        let decoded = decodeToken(token);
        if(decoded === null){
            res.status(401).json({status:"unauthorized" , message:"No user found!"})
        }
        else{
            let email = decoded['email'];
            let userID = decoded['userID'];
            res.headers.email = email ;
            req.headers.userID = userID;
            next();
        }

}