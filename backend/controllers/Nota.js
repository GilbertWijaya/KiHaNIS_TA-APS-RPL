import Nota from "../models/NotaModel.js";
import Users from "../models/UserModel.js";
import Sales from "../models/SalesModel.js";
import Admin from "../models/AdminModel.js";
import { Op } from "sequelize";

export const createNota = async(req,res) => {
    
    const {namaPembeli,dataBarang} = req.body;
    const buktiPembayaran = req.file.buffer;

    if (!buktiPembayaran) {
        res.status(404).json({message : "Tidak ada bukti pembayaran"});
    }

    try {
        
        const userEmail = req.session.userEmail;

        const user = await Users.findOne({
            where : {
                email : userEmail
            }
        });

        const sales = await Sales.findOne({
            where : {
                email : userEmail
            }
        });

        const admin = await Admin.findOne({
            where : {
                kodeTokoAdm : req.session.kodeTokoAdm || sales.kodeTokoAdm
            }
        });

        if ( !admin ) {
            return res.status(404).json({message:"User, Sales, atau Admin Tidak Ditemukan"});
        }

        if (!sales) {
            await Nota.create({
                namaPembeli,
                namaSales : null,
                kodeTokoAdm : req.session.kodeTokoAdm || sales.kodeTokoAdm,
                dataBarang,
                buktiPembayaran,
                userId : user.id,
                saleId : null,
                adminId : admin.id
            });
        }

        else if (!user) {
            await Nota.create({
                namaPembeli,
                namaSales : sales.name || null,
                kodeTokoAdm : req.session.kodeTokoAdm || sales.kodeTokoAdm,
                dataBarang,
                buktiPembayaran,
                userId : null,
                saleId : sales.id || null,
                adminId : admin.id
            });
        }


        res.status(201).json({message : "Nota berhasil dibuat"});

    } catch (error) {
        res.status(500).json({message : `Gagal membuat nota ${error.message}`});
    }

}

export const getNotaByUserId = async(req,res) => {

    try {

        const response = await Nota.findAll({
            where : {
                userId : req.params.id
            },
            include : [{
                model : Admin,
                attributes : ['name',"kodeTokoAdm","nomorHP","nomorRek"]
            }]
        });
        

        const formattedResponse = response.map((nota) => {
            const base64Image = nota.buktiPembayaran.toString('base64');
            return {
                id: nota.id,
                namaPembeli: nota.namaPembeli,
                kodeTokoAdm : nota.kodeTokoAdm,
                dataBarang: nota.dataBarang,
                buktiPembayaran : `data:image/*;base64,${base64Image}`,
                statusPembayaran : nota.statusPembayaran,
                userId : nota.userId,
                adminId : nota.adminId
            };
        });

        res.status(200).json(formattedResponse);

    } catch (error) {
        res.status(500).json({message : `Gagal mengambil data nota ${error.message}`});
    }

}
export const getNotaByIdNota = async(req,res) => {

    try {

        const response = await Nota.findOne({
            where : {
                id : req.params.id
            },
            include : [{
                model : Admin,
                attributes : ['name',"kodeTokoAdm","nomorHP","nomorRek"]
            }]
        });
        

            const base64Image = response.buktiPembayaran.toString('base64');
            
            
            
        res.status(200).json({
            id: response.id,
            namaPembeli: response.namaPembeli,
            kodeTokoAdm : response.kodeTokoAdm,
            dataBarang: response.dataBarang,
            buktiPembayaran : `data:image/*;base64,${base64Image}`,
            statusPembayaran : response.statusPembayaran,
            userId : response.userId,
            adminId : response.adminId
                
        });

    } catch (error) {
        res.status(500).json({message : `Gagal mengambil data nota ${error.message}`});
    }

}

export const getNotaBySalesId = async(req,res) => {

    try {

        const response = await Nota.findOne({
            where : {
                saleId : req.session.userId
            },
            include : [{
                model : Admin,
                attributes : ['name',"kodeTokoAdm","nomorHP","nomorRek"]
            }]
        });
        
        res.status(200).json(response);

    } catch (error) {
        res.status(500).json({message : `Gagal mengambil data nota ${error.message}`});
    }

}

export const getNotaByAdminId = async(req,res) => {

    try {

        const response = await Nota.findOne({
            where : {
                [Op.and] : [{adminId : req.session.userId}, {kodeTokoAdm : req.session.kodeTokoAdm}]
            },
            include : [{
                model : Admin,
                attributes : ['name',"kodeTokoAdm","nomorHP","nomorRek"]
            }]
        });
        
        res.status(200).json(response);

    } catch (error) {
        res.status(500).json({message : `Gagal mengambil data nota ${error.message}`});
    }

}

export const getNotaById = async (req, res) => {
    
    try {
        
        const response = await Nota.findOne({
            where : {
                id : req.params.id ,
            },
            include : 
            [
                {
                    model : Admin,
                    attributes : ['name',"kodeTokoAdm","nomorHP","nomorRek"]
                },
                {
                    model : Sales,
                    attributes : ['name',"nomorHP","nomorRek"]
                }
            ]
        });

        if (!response) {
            return res.status(404).json({message:"Nota Tidak Ditemukan"});
        }

        res.status(200).json(response);

    } catch (error) {
        res.status(500).json({message : `Gagal mengambil data nota ${error.message}`});
    }

};

export const updateNota = async(req,res) => {

    try {

        const {statusPembayaran} = req.body;
        
        const nota = await Nota.findOne({
            where : {
                [Op.and] : [{id : req.params.id}, {kodeTokoAdm : req.session.kodeTokoAdm}]
            }
        });

        if (!nota) {
            return res.status(404).json({message:"Nota Tidak Ditemukan"});
        }

        await Nota.update({
            statusPembayaran
        },{
            where : {
                [Op.and] : [{id : req.params.id}, {kodeTokoAdm : req.session.kodeTokoAdm}]
            }
        });

        res.status(200).json({message : "Nota berhasil diubah"});

    } catch (error) {
        res.status(500).json({message : `Gagal mengubah data nota ${error.message}`});
    }

}

export const deleteNota = async(req,res) => {

    try {
        
        await Nota.destroy({
            where : {
                [Op.and] : [{id : req.params.id}, {kodeTokoAdm : req.session.kodeTokoAdm}]
            }
        });

        res.status(200).json({message : "Nota deleted successfully"});

    } catch (error) {
        res.status(500).json({message : `Gagal menghapus data nota ${error.message}`});
    }

}
