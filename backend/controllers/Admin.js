import Admin from "../models/AdminModel.js";

// create user
export const createAdmin = async(req,res) =>{
    
    const {name,nomorHP,password,email,nomorRek} = req.body;

    try {
        
        await Admin.create({
            name,
            nomorHP,
            password,
            email,
            nomorRek
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

    try {
        
        const response = await Admin.findOne({
            where : {
                kodeTokoAdm : req.params.id
            }
        });

        if (!response) {
            return res.status(404).json({message : "id tidak ditemukan"});
        }

        
        try {
            const {name,nomorHP,nomorRek,email,jenisKelamin,alamat,keterangan} = req.body;
            const ProfilePicture = req.file.buffer;
            
            await Admin.update({
                name,
                nomorHP,
                nomorRek,
                email,
                jenisKelamin,
                alamat,
                keterangan,
                ProfilePicture
            },{
                where : {
                    kodeTokoAdm : response.kodeTokoAdm
                }
            });

            res.status(200).json({message : "Admin updated successfully"});

        } catch (error) {
            
            res.status(500).json({message : `Error updating admin ${error.message}`});

        }

    } catch (error) {
        
    }

}

// delete user
export const deleteAdmin = async(req,res) =>{

}

