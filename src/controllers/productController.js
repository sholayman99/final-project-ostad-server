/*
* Author : Md. Sholayman
* Description: This file contains controller  for product.
* Date: 11 February  2024.
* */

const {
    createProductService,updateProductService,readProductsService,listByBrandService,
    listByCategoryService,listByKeywordService,readSliderService,productByBrandService,
    productByCategoryService } = require("../services/productService");


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

    let data = await readProductsService();

    if(data['status'] === 'success'){
        res.status(200).json(data);
    }
    else{
        res.status(400).json(data);
    }

}

exports.readSliders = async (req,res)=>{
    let data = await readSliderService();

    if(data['status'] === 'success'){
        res.status(200).json(data);
    }
    else{
        res.status(400).json(data);
    }
}

exports.productByBrand = async (req,res)=>{
    let data = await productByBrandService();

    if(data['status'] === 'success'){
        res.status(200).json(data);
    }
    else{
        res.status(400).json(data);
    }
}

exports.productByCategory = async (req,res)=>{
    let data = await productByCategoryService();

    if(data['status'] === 'success'){
        res.status(200).json(data);
    }
    else{
        res.status(400).json(data);
    }
}

exports.listByBrand = async(req,res)=>{

    let data = await listByBrandService(req);

    if(data['status'] === 'success'){
        res.status(200).json(data);
    }
    else{
        res.status(400).json(data);
    }

}

exports.listByCategory = async(req,res)=>{

    let data = await listByCategoryService(req);

    if(data['status'] === 'success'){
        res.status(200).json(data);
    }
    else{
        res.status(400).json(data);
    }

}

exports.listByKeyword = async(req,res)=>{

    let data = await listByKeywordService(req);

    if(data['status'] === 'success'){
        res.status(200).json(data);
    }
    else{
        res.status(400).json(data);
    }

}