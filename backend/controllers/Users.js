import Users from "../models/UserModel.js";

// create user
export const createUser = async(req,res) =>{

    const {name,nomorHP,password,email,nomorRek} = req.body;
    
    try {
        
        await Users.create({
            name,
            nomorHP,
            nomorRek,
            email,
            password,
        });

        res.status(201).json({message : "User created successfully"});

    } catch (error) {

        res.status(500).json({message : `Error creating user ${error.message}`});
        
    }
    
}

// get user
export const getUsers = async(req,res) =>{

    try {
        
        const response = await Users.findAll();

        res.status(200).json(response);

    } catch (error) {
        res.status(500).json({message : `Error getting users ${error.message}`});
    }

}

// get user by id
export const getUserById = async(req,res) =>{

    try {
        
        const response = await Users.findOne({
            where : {
                id : req.params.id
            }
        });

        const base64Image = response.ProfilePicture.toString('base64');
        
        res.status(200).json({
            id : response.id,
            name : response.name,
            nomorHP : response.nomorHP,
            nomorRek : response.nomorRek,
            email : response.email,
            jenisKelamin : response.jenisKelamin,
            alamat : response.alamat,
            keterangan : response.keterangan,
            ProfilePicture : null || `data:image/*;base64,${base64Image}`
        });

    } catch (error) {
        res.status(500).json({message : `Error getting users by id ${error.message}`});
    }

}

// update user
export const updateUser = async(req,res) =>{

    const response = await Users.findOne({
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

        await Users.update({
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

        res.status(200).json({message : "User updated successfully"});

    } catch (error) {
        
        res.status(500).json({message : `Error updating user ${error.message}`});

    }

}

// delete user
export const deleteUser = async(req,res) =>{

    const user = await Users.findOne({
        where : {
            id : req.params.id
        }
    });

    if (!user) {
        return res.status(404).json({messsage: "User tidak ditemukan"});
    }

    try {
        
        await Users.destroy({
            where : {
                id : user.id
            }
        });

        res.status(200).json({message : "User deleted successfully"});

    } catch (error) {
        res.status(500).json({message : `Error deleting user ${error.message}`});
    }

}

