/*
* Author : Md. Sholayman
* Description: This file contains query  for product.
* Date: 11 February  2024.
* */

const productModel = require("../models/productModel");

const createProductService = async(req,res) =>{

    try {
       let reqBody = req.body;
       let data = await productModel.create(reqBody);
       return {status:"success" , data:data};
    }
    catch (e) {
        return {status:"fail" , data:e.message};
    }

}

const updateProductService = async(req,res) =>{

    try {
        let id = req.params.id;
        let reqBody = req.body;
        let data = await productModel.updateOne({_id:id} , reqBody);
        return {status:"success" , data:data};
    }
    catch (e) {
        return {status:"fail" , data:e.message};
    }

}


const readProductsService = async(req,res)=>{

}

const listByBrandService = async(req,res)=>{

}

const listByCategoryService = async(req,res)=>{

}

const listByKeywordService = async(req,res)=>{

}

module.exports={
    createProductService,updateProductService,readProductsService,listByBrandService,
    listByCategoryService,listByKeywordService }