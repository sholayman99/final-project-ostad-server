/*
* Author : Md. Sholayman
* Description: This file contains all the api end point of the project.
*  Date: 11 February  2024.
* */

const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const productController = require("../controllers/productController");
const authVerifyMiddleware = require("../middlewares/authVerifyMiddleware");

//user
router.post("/createUser" , userController.createUser);
router.post("/verifyUser/:email/:otp" , userController.verifyUser);
router.post("/loginUser" , userController.loginUser);
router.post("/updateAvatar" , authVerifyMiddleware , userController.updateAvatar);
router.post("/updatePassword" , authVerifyMiddleware , userController.updatePassword);

//product
router.post("/createProduct" , authVerifyMiddleware , productController.createProduct);
router.post("/updateProduct/:id" , authVerifyMiddleware , productController.updateProduct);
router.get("/readProducts" , authVerifyMiddleware , productController.readProducts);
router.get("/listByBrand/:brandID" , authVerifyMiddleware , productController.listByBrand);
router.get("/listByCategory/:categoryID" , authVerifyMiddleware , productController.listByCategory);
router.get("/listByKeyword/:keyword" , authVerifyMiddleware , productController.listByKeyword);



module.exports = router;