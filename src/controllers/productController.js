/*
* Author : Md. Sholayman
* Description: This file contains controller  for product.
* Date: 11 February  2024.
* */

const {
    createProductService,updateProductService,readProductsService,listByBrandService,
    listByCategoryService,listByKeywordService } = require("../services/productService");


exports.createProduct = async(req,res) =>{

    let data = await createProductService(req);

    if(data['status'] === 'success'){
        res.status(201).json(data);
    }
    else{
        res.status(400).json(data);
    }

}

exports.updateProduct = async(req,res)=>{

    let data = await updateProductService(req);

    if(data['status'] === 'success'){
        res.status(200).json(data);
    }
    else{
        res.status(400).json(data);
    }

}

exports.readProducts = async(req,res)=>{

}

exports.listByBrand = async(req,res)=>{

}

exports.listByCategory = async(req,res)=>{

}

exports.listByKeyword = async(req,res)=>{

}