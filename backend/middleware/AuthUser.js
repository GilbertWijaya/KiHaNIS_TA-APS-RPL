import Admin from "../models/AdminModel.js";
import Users from "../models/UserModel.js";

// admin only
export const AdminOnly = async (req,res,next) => {

    const admin = await Admin.findOne({
        where : {
            email : req.session.userEmail
        }
    });    

    if (!admin) {
        return res.status(404).json({message:"Admin Tidak Ditemukan"});
    }

    if (admin.role !== "admins") {
        return res.status(403).json({message:"Anda Tidak Punya Hak Akses Admin"});
    }

    next();

}

// verify admin
export const verifyAdmin = async (req,res,next) => {



}

// verify user
export const verifyUser = async (req,res,next) => {

    if (!req.session.userData) {
        return res.status(401).json({message : "User belum login"});
    }

    const user = await Users.findOne({
        where : {
            email : req.session.userEmail
        }
    });

    if (!user) {
        return res.status(404).json({message : "User Tidak Ditemukan"});
    }

    req.userId = user.id;
    req.userEmail = user.email;

    next();
}

