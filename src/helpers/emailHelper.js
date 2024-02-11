/*
* Author : Md. Sholayman
* Description: This file contains a helper function for sending email to user.
* Date: 11 February  2024.
* */

const nodemailer = require("nodemailer");


const emailSend = async (email,emailSub,emailText)=>{

    const transport = nodemailer.createTransport({
        host: "mail.teamrabbil.com",
        port: 587,
        secure: false,
        auth: {user: "info@teamrabbil.com", pass: '~sR4[bhaC[Qs'},
        tls: {rejectUnauthorized: false},
    });

    const options={
        from:"Shoe Store <info@teamrabbil.com>",
        to:email,
        subject:emailSub,
        text:emailText
    };

    await transport.sendMail(options);

}

module.exports = emailSend;