import Admin from "../models/AdminModel.js";

// create user
export const createAdmin = async(req,res) =>{
    
    const {name,nomorHP,password,email,nomorRek} = req.body;
    
    try {
        
        await Admin.create({
            name,
            nomorHP,
            nomorRek,
            email,
            password,
            kodeTokoAdm : `${name.charAt(0)}${nomorHP.slice(-4)}${name.charAt(name.length-1)}`
        });

        res.status(201).json({message : "Admin created successfully"});

    } catch (error) {

        res.status(500).json({message : `Error creating admin ${error.message}`});
        
    }

}

// get user
export const getAdmins = async(req,res) =>{

    try {
        
        const response = await Admin.findAll();

        res.status(200).json(response);

    } catch (error) {
        res.status(500).json({message : `Error getting admins ${error.message}`});
    }

}

// get user by id
export const getAdminById = async(req,res) =>{

    try {
        
        const response = await Admin.findAll({
            where : {
                kodeTokoAdm : req.params.id
            }
        });

        res.status(200).json(response);

    } catch (error) {
        res.status(500).json({message : `Error getting admin by id ${error.message}`});
    }

}

// update user
export const updateAdmin = async(req,res) =>{
        
    const response = await Admin.findOne({
        where : {
            kodeTokoAdm : req.params.id
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

        await Admin.update({
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
                kodeTokoAdm : response.kodeTokoAdm
            }
        });

        res.status(200).json({message : "Admin updated successfully"});

    } catch (error) {
        
        res.status(500).json({message : `Error updating admin ${error.message}`});

    }

}

// delete user
export const deleteAdmin = async(req,res) =>{

    const admin = await Admin.findOne({
        where : {
            kodeTokoAdm : req.params.id
        }
    });

    if (!admin) {
        return res.status(404).json({messsage: "Admin tidak ditemukan"});
    }

    try {
        
        await Admin.destroy({
            where : {
                kodeTokoAdm : admin.kodeTokoAdm
            }
        });

        res.status(200).json({message : "Admin deleted successfully"});

    } catch (error) {
        res.status(500).json({message : `Error deleting admin ${error.message}`});
    }

}

