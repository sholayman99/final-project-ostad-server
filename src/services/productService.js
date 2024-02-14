/*
* Author : Md. Sholayman
* Description: This file contains query  for product.
* Date: 11 February  2024.
* */

const productModel = require("../models/productModel");
const sliderModel = require("../models/sliderModel");
const brandModel = require("../models/brandModel");
const categoryModel = require("../models/categoryModel");
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

const createProductService = async(req) =>{

    try {
       let reqBody = req.body;
       let data = await productModel.create(reqBody);
       return {status:"success" , data:data};
    }
    catch (e) {
        return {status:"fail" , data:e.message};
    }

}

const updateProductService = async(req) =>{

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


const readProductsService = async()=>{

    try {
        let matchStage ={$match:{}};
        let limitStage ={$limit:6}
        let data = await productModel.aggregate([matchStage,limitStage]);
        return {status:"success" , data:data};
    }
    catch (e) {
        return {status:"fail" , data:e.message};
    }

}

const readALLProductsService= async()=>{

    try {
        let matchStage ={$match:{}};
        let data = await productModel.aggregate([matchStage]);
        return {status:"success" , data:data};
    }
    catch (e) {
        return {status:"fail" , data:e.message};
    }

}


const readSliderService = async ()=>{
    try {
       let matchStage = {$match:{}}
       let data = await sliderModel.aggregate([matchStage]);
       return {status:"success" , data:data}
    }
    catch (e) {
       return {status:"fail" , data:e.message}
    }
}

const productByBrandService = async()=>{
    try {
        let matchStage = {$match:{}}
        let data = await brandModel.aggregate([matchStage]);
        return {status:"success" , data:data}
    }
    catch (e) {
        return {status:"fail" , data:e.message}
    }

}

const productByCategoryService = async ()=>{
    try {
        let matchStage = {$match:{}}
        let data = await categoryModel.aggregate([matchStage]);
        return {status:"success" , data:data}
    }
    catch (e) {
        return {status:"fail" , data:e.message}
    }
}

const listByBrandService = async(req)=>{

    try {
        let brandID = new ObjectId(req.params['brandID']);
        let matchStage = {$match:{brandID:brandID}};
        let joinWithBrandStage ={$lookup:{
            from:"brands" , localField:"brandID" , foreignField:"_id" , as:"brand"
            }};
        let unwindBrandStage ={$unwind:"$brand"};
        let joinWithCategoryStage ={$lookup:{
                from:"categories" , localField:"categoryID" , foreignField:"_id" , as:"category"
            }};
        let unwindCategoryStage ={$unwind:"$category"};
        let projectStage ={$project:{
            "_id":0,"brandID":0,"categoryID":0,"brand._id":0,"category._id":0
            }};

        let data = await productModel.aggregate([
            matchStage,joinWithBrandStage,unwindBrandStage,joinWithCategoryStage,unwindCategoryStage,
            projectStage
        ]);
        return {status:"success" , data:data};
    }
    catch (e) {
        return {status:"fail" , data:e.message};
    }

}

const listByCategoryService = async(req)=>{

    try {
        let categoryID = new ObjectId(req.params['categoryID']);
        let matchStage = {$match:{categoryID:categoryID}};
        let joinWithBrandStage ={$lookup:{
            from:"brands" , localField:"brandID" , foreignField:"_id" , as:"brand"
        }};
        let unwindBrandStage ={$unwind:"$brand"};
        let joinWithCategoryStage ={$lookup:{
            from:"categories" , localField:"categoryID" , foreignField:"_id" , as:"category"
        }};
        let unwindCategoryStage ={$unwind:"$category"};
        let projectStage ={$project:{
                "_id":0,"brandID":0,"categoryID":0,"brand._id":0,"category._id":0
            }};

        let data = await productModel.aggregate([
            matchStage,joinWithBrandStage,unwindBrandStage,joinWithCategoryStage,unwindCategoryStage,
            projectStage
         ]);
        return {status:"success" , data:data};
       }
   catch (e) {
       return {status:"fail" , data:e.message};
      }
}

const listByKeywordService = async(req)=>{

    try {
        let keyword = req.params['keyword'];
        let searchRegex = {$regex:keyword , $options:"i"};
        let searchParams = {productName:searchRegex};
        let matchStage ={$match:searchParams};
        let data = await productModel.aggregate([matchStage]);
        return {status:"success" , data:data};
    }
    catch (e) {
        return {status:"fail" , data:e.message};
    }
    
}

const productListByFilterService = async(req)=>{
    try {
        let matchConditions = {}
        if(req.body['brandID']){
            matchConditions.brandID = new ObjectId(req.body['brandID']);
        }
        if(req.body['categoryID']){
            matchConditions.categoryID = new ObjectId(req.body['categoryID']);
        }
        let matchStage ={$match:matchConditions};
        let joinWithBrandStage = {
            $lookup:{ from:"brands" , foreignField:"_id" , localField:"brandID" , as:"brand"}
        };
        let joinWithCategoryStage = {
            $lookup:{ from:"categories" , foreignField:"_id" , localField:"categoryID" , as:"category"}
        };
        let unwindBrandStage = {$unwind:"$brand"};
        let unwindCategoryStage = {$unwind:"$category"};
        let projectionStage = {
            $project:{ "brand._id":0 , "category._id":0 , "categoryID":0 , "brandID":0 }
        };

        let data = await productModel.aggregate([
            matchStage,joinWithBrandStage,joinWithCategoryStage,unwindBrandStage,unwindCategoryStage,
            projectionStage
        ]);
        return {status:"success" , data:data};
    }
    catch (e) {
        return {status:"fail" , data:e.message};
    }
}

module.exports={
    createProductService,updateProductService,readProductsService,listByBrandService,
    listByCategoryService,listByKeywordService,readSliderService,productByBrandService,
    productByCategoryService,readALLProductsService,productListByFilterService }