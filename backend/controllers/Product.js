import Products from "../models/ProductModel.js";
import Admin from "../models/AdminModel.js";
import { Op } from "sequelize";

// create product
export const createProduct = async(req,res) =>{
    
    const {namaBarang,hargaBarang,kodeBarang,keterangan} = req.body;
    const ProductPicture = req.file.buffer;

    
    try {
        const admin = await Admin.findOne({
            where : {
                kodeTokoAdm : req.params.id
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
            kodeTokoAdm :  admin.kodeTokoAdm,
            adminId : admin.id
        });

        res.status(201).json({message : "Product created successfully"});

    } catch (error) {
        res.status(500).json({message : `Error creating product ${error.message}`});
    }

}

// get product
export const getProducts = async(req,res) =>{

    try {
        
        const response = await Products.findAll();

        res.status(200).json(response);

    } catch (error) {
        res.status(500).json({message : `Error getting products ${error.message}`});
    }

}

// get product by id
export const getProductById = async(req,res) =>{

    try {
        
        const response = await Products.findAll({
            where : {
                kodeTokoAdm : req.params.id
            }
        });

        // console.log(response);
        

        // const base64Image = response[0].ProductPicture.toString('base64');


        // res.status(200).json({
        //     id : response[0].id,
        //     namaBarang : response[0].namaBarang,
        //     hargaBarang : response[0].hargaBarang,
        //     kodeBarang : response[0].kodeBarang,
        //     keterangan : response[0].keterangan,
        //     ProductPicture : `data:image/*;base64,${base64Image}`,
        //     kodeTokoAdm : response[0].kodeTokoAdm,
        //     adminId : response[0].adminId
        // });

        const formattedResponse = response.map((product) => {
            const base64Image = product.ProductPicture.toString('base64');
            return {
                id: product.id,
                namaBarang: product.namaBarang,
                hargaBarang: product.hargaBarang,
                kodeBarang: product.kodeBarang,
                keterangan: product.keterangan,
                ProductPicture: `data:image/*;base64,${base64Image}`,
                kodeTokoAdm: product.kodeTokoAdm,
                adminId: product.adminId
            };
        });

        res.status(200).json(formattedResponse);

    } catch (error) {
        res.status(500).json({message : `Error getting products ${error.message}`});
    }

}

export const getProductByAdminId = async(req,res) =>{

    try {
        
        const response = await Products.findOne({
            where : {
                id : req.params.id
            }
        });

        // console.log(response);
        
        const base64Image = response.ProductPicture?.toString('base64');

        res.status(200).json({
            id : response.id,
            namaBarang : response.namaBarang,
            hargaBarang : response.hargaBarang,
            kodeBarang : response.kodeBarang,
            keterangan : response.keterangan,
            ProductPicture : `data:image/*;base64,${base64Image}`,
            kodeTokoAdm : response.kodeTokoAdm,
            adminId : response.adminId
        });

        // const formattedResponse = response.map((product) => {
        //     const base64Image = product.ProductPicture.toString('base64');
        //     return {
        //         id: product.id,
        //         namaBarang: product.namaBarang,
        //         hargaBarang: product.hargaBarang,
        //         kodeBarang: product.kodeBarang,
        //         keterangan: product.keterangan,
        //         ProductPicture: `data:image/*;base64,${base64Image}`,
        //         kodeTokoAdm: product.kodeTokoAdm,
        //         adminId: product.adminId
        //     };
        // });

        // res.status(200).json(formattedResponse);

    } catch (error) {
        res.status(500).json({message : `Error getting products ${error.message}`});
    }

}

export const getProductByKodeToko = async(req,res) =>{

    try {
        
        const response = await Products.findAll({
            where : {
                kodeTokoAdm : req.session.kodeTokoAdm
            }
        });

        // console.log(response);

        const base64Image = response.ProductPicture.toString('base64');

        res.status(200).json(response);

    } catch (error) {
        res.status(500).json({message : `Error getting products ${error.message}`});
    }

}

// update product
export const updateProduct = async(req,res) =>{

    const response = await Products.findOne({
        where : {
            id : req.params.id
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
                id: response.id
            }
        });

        res.status(200).json({message : "Product updated successfully"});

    } catch (error) {
        res.status(500).json({message : `Error updating product ${error.message}`});
    }

}

// delete product
export const deleteProduct = async(req,res) =>{

    const response = await Products.findOne({
        where : {
            id : req.params.id
        }
    });

    if (!response) {
        return res.status(404).json({messsage: "Product not found"});
    }

    // const isMatch = req.params.id === response.namaBarang;

    // if (!isMatch) {
    //     return res.status(401).json({message:"Unauthorized to delete this product"});
    // }
    
    try {
        
        await Products.destroy({
            where : {
                id : response.id
            }
        });

        res.status(200).json({message : "Product deleted successfully"});

    } catch (error) {
        res.status(500).json({message : `Error deleting product ${error.message}`});
    }

}

