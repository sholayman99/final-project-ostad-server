/*
* Author : Md. Sholayman
* Description: This file contains two helper functions for encoding and decoding jwt token.
* Date: 11 February  2024.
* */

const jwt = require("jsonwebtoken");

exports.encodeToken =(userID,email)=>{

    let secret = "abc123xyz@#";
    let expires = {expiresIn: "168 hrs"};
    let payload = {email:email , userID:userID};
    return jwt.sign(payload,secret,expires);

};


exports.decodeToken =(token)=>{

    try {
        let secret = "abc123xyz@#";
        return jwt.verify(token,secret);
    }
    catch (e) {
        return null;
    }

};
