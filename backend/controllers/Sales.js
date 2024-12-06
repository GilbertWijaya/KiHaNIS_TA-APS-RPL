import Sales from "../models/SalesModel.js";
import Admin from "../models/AdminModel.js";

// create sales
export const createSales = async(req,res) =>{

    const {name,kodeTokoAdm,password,email,nomorRek} = req.body;
    
    const response = await Admin.findOne({
        where : {
            kodeTokoAdm : kodeTokoAdm
        }
    })

    try {
        
        await Sales.create({
            name,   
            nomorRek,
            nomorHP : "isi dulu",
            email,
            password,
            adminId : response.id,
            kodeTokoAdm : kodeTokoAdm
        });

        res.status(201).json({message : "Sales created successfully"});

    } catch (error) {

        res.status(500).json({message : `Error creating Sales ${error.message}`});
        
    }
    
}

// get sales
export const getSales = async(req,res) =>{

    try {
        
        const response = await Sales.findAll();

        res.status(200).json(response);

    } catch (error) {
        res.status(500).json({message : `Error getting sales ${error.message}`});
    }

}

// get sales by id
export const getSalesById = async(req,res) =>{

    try {
        
        const response = await Sales.findAll({
            where : {
                kodeTokoAdm : req.params.id
            }
        });

        res.status(200).json(response);

    } catch (error) {
        res.status(500).json({message : `Error getting Sales by id ${error.message}`});
    }

}

// update sales
export const updateSales = async(req,res) =>{

    const response = await Sales.findOne({
        where : {
            id : req.params.id
        }
    });

    if (!response) {
        return res.status(404).json({message : "id tidak ditemukan"});
    }

    const {name,nomorHP,nomorRek,email,jenisKelamin,alamat,keterangan} = req.body;
    let picture;
    
    if (req.file === null) {

        picture = response.ProfilePicture.buffer;

    }else if(req.file){

        picture = req.file.buffer;
    
    }
    
    try {

        await Sales.update({
            name,
            nomorHP,
            nomorRek,
            email,
            jenisKelamin,
            alamat,
            keterangan,
            ProfilePicture : picture
        },{
            where : {
                id : response.id
            }
        });

        res.status(200).json({message : "Sales updated successfully"});

    } catch (error) {
        
        res.status(500).json({message : `Error updating Sales ${error.message}`});

    }

}

// delete sales
export const deleteSales = async(req,res) =>{

    const sales = await Sales.findOne({
        where : {
            id : req.params.id
        }
    });

    if (!sales) {
        return res.status(404).json({messsage: "Sales tidak ditemukan"});
    }

    try {
        
        await Sales.destroy({
            where : {
                id : sales.id
            }
        });

        res.status(200).json({message : "Sales deleted successfully"});

    } catch (error) {
        res.status(500).json({message : `Error deleting Sales ${error.message}`});
    }

}

