/*
* Author : Md. Sholayman
* Description: This file contains controller  for product.
* Date: 11 February  2024.
* */

const {
    createProductService,updateProductService,readProductsService,listByBrandService,
    listByCategoryService,listByKeywordService,readSliderService,productByBrandService,
    productByCategoryService,readALLProductsService,productListByFilterService,readSingleProductService,
    removeProductService} = require("../services/productService");


exports.createProduct = async(req,res) =>{
    let data = await createProductService(req);
    res.status(201).json(data);
}

exports.updateProduct = async(req,res)=>{
    let data = await updateProductService(req);
    res.status(200).json(data);
}

exports.readSingleProduct = async (req,res)=>{
    let data = await readSingleProductService(req);
    res.status(200).json(data);
}

exports.readProducts = async(req,res)=>{
    let data = await readProductsService();
    res.status(200).json(data);
}

exports.readAllProducts = async(req,res)=>{
    let data = await readALLProductsService();
    res.status(200).json(data);
}

exports.removeProduct = async (req,res)=>{
    let data = await removeProductService(req);
    res.status(200).json(data);
}

exports.readSliders = async (req,res)=>{
    let data = await readSliderService();
    res.status(200).json(data);
}

exports.productByBrand = async (req,res)=>{
    let data = await productByBrandService();
    res.status(200).json(data);
}

exports.productByCategory = async (req,res)=>{
    let data = await productByCategoryService();
    res.status(200).json(data);
}

exports.listByBrand = async(req,res)=>{
    let data = await listByBrandService(req);
    res.status(200).json(data);
}

exports.listByCategory = async(req,res)=>{
    let data = await listByCategoryService(req);
    res.status(200).json(data);
}

exports.listByKeyword = async(req,res)=>{
    let data = await listByKeywordService(req);
    res.status(200).json(data);

}


exports.productListByFilter=async(req,res)=>{
   let data = await productListByFilterService(req);
   res.status(200).json(data);
}