import Products from "../models/ProductModel.js";
import Admin from "../models/AdminModel.js";
import { Op } from "sequelize";

// create user
export const createProduct = async(req,res) =>{
    
    const {namaBarang,hargaBarang,kodeBarang,keterangan} = req.body;
    const ProductPicture = req.file.buffer;

    
    try {
        const admin = await Admin.findOne({
            where : {
                refreshToken : `${req.cookies.refreshToken}`
            }
        });

        if (!admin) {
            return res.status(404).json({message: "Admin not found"});
        }
        
        await Products.create({
            namaBarang,
            hargaBarang,
            kodeBarang,
            keterangan,
            ProductPicture,
            kodeTokoAdm : req.kodeTokoAdm ? req.kodeTokoAdm : admin.kodeTokoAdm,
            adminId : req.adminId ? req.adminId : admin.id
        });

        res.status(201).json({message : "Product created successfully"});

    } catch (error) {
        res.status(500).json({message : `Error creating product ${error.message}`});
    }

}

// get user
export const getProducts = async(req,res) =>{

    try {
        
        const response = await Products.findAll();

        res.status(200).json(response);

    } catch (error) {
        res.status(500).json({message : `Error getting products ${error.message}`});
    }

}

// get user by id
export const getProductById = async(req,res) =>{

    try {
        
        const response = await Products.findAll({
            where : {
                kodeTokoAdm : req.params.id
            }
        });

        res.status(200).json(response);

    } catch (error) {
        res.status(500).json({message : `Error getting products ${error.message}`});
    }

}

// update user
export const updateProduct = async(req,res) =>{

    const response = await Products.findOne({
        where : {
            kodeTokoAdm : req.params.id
        }
    });

    if (!response) {
        return res.status(404).json({message : "Product not found"});
    }

    const {namaBarang, hargaBarang, kodeBarang, keterangan} = req.body;
    let picture;

    if (req.file === null) {

        picture = response.ProductPicture.buffer;

    }else if(req.file){

        picture = req.file.buffer;
    
    }

    try {
        
        await Products.update({
            namaBarang,
            hargaBarang,
            kodeBarang,
            keterangan,
            ProductPicture : picture
        },{
            where : {
                kodeTokoAdm : response.kodeTokoAdm
            }
        });

        res.status(200).json({message : "Product updated successfully"});

    } catch (error) {
        res.status(500).json({message : `Error updating product ${error.message}`});
    }

}

// delete user
export const deleteProduct = async(req,res) =>{

    const response = await Products.findOne({
        where : {
            kodeTokoAdm : req.kodeTokoAdm
        }
    });

    if (!response) {
        return res.status(404).json({messsage: "Product not found"});
    }

    const isMatch = req.params.id === response.namaBarang;

    if (!isMatch) {
        return res.status(401).json({message:"Unauthorized to delete this product"});
    }
    
    try {
        
        await Products.destroy({
            where : {
                [Op.and] : [{namaBarang : req.params.id},{kodeTokoAdm : response.kodeTokoAdm}]
            }
        });

        res.status(200).json({message : "Product deleted successfully"});

    } catch (error) {
        res.status(500).json({message : `Error deleting product ${error.message}`});
    }

}

