/*
* Author : Md. Sholayman
* Description: This file contains all the api end point of the project.
*  Date: 11 February  2024.
* */

const express = require("express");
const router = express.Router();
const userController = require("../controllers/usesController");

//user
router.post("/createUser" , userController.createUser);
router.post("/verifyUser/:email/:otp" , userController.verifyUser);


module.exports = router;