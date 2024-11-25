import Admin from "../models/AdminModel.js";
import Users from "../models/UserModel.js";
import jwt from "jsonwebtoken";

// login
export const login = async(req,res) => {

    try{
        const admin = await Admin.findOne({
            where : {
                email : req.body.email
            }
        });

        const user = await Users.findOne({
            where : {
                email : req.body.email
            }
        });

        if (!admin && !user) {
            return res.status(404).json({message:"Email Tidak Ditemukan"});
        }

        if (!user && admin) {
            
            const isMatch = req.body.password && admin.password;

            if (!isMatch) {
                return res.status(401).json({message:"Password Salah"});
            }

            const name = admin.name;
            const email = admin.email;
            const kodeTokoAdm = admin.kodeTokoAdm;
            const role = admin.role;

            req.session.userEmail = admin.email;

            const accessToken = jwt.sign({name,email,kodeTokoAdm,role},process.env.ACCESS_TOKEN_SECRET,{
                expiresIn : "1d"
            });

            const refreshToken = jwt.sign({name,email,kodeTokoAdm,role},process.env.REFRESH_TOKEN_SECRET,{
                expiresIn : "1d"
            });

            await Admin.update({refreshToken},{
                where : {
                    email : admin.email
                }
            });

            res.cookie('refreshToken',refreshToken,{
                httpOnly : true,
                maxAge : 24 * 60 * 60 * 1000
            });

            res.status(200).json({
                message: "Login berhasil",
                admin : {
                    name,
                    email,
                    kodeTokoAdm,
                    role
                },
                accessToken
            });

        }

        if (user && !admin) {
        
            const isMatch = req.body.password && user.password;

            if (!isMatch) {
                return res.status(401).json({message:"Password Salah"});
            }

            const name = user.name;
            const email = user.email;
            const role = user.role;

            req.session.userEmail = user.email;
            req.session.userData = `${name}${user.id}`;

            const accessToken = jwt.sign({name,email,role},process.env.ACCESS_TOKEN_SECRET,{
                expiresIn : "1d"
            });

            const refreshToken = jwt.sign({name,email,role},process.env.REFRESH_TOKEN_SECRET,{
                expiresIn : "1d"
            });

            await Users.update({refreshToken},{
                where : {
                    email : user.email
                }
            });

            res.cookie('refreshToken',refreshToken,{
                httpOnly : true,
                maxAge : 24 * 60 * 60 * 1000
            });

            res.status(200).json({
                message: "Login berhasil",
                user : {
                    name,
                    email,
                    // kodeTokoAdm,
                    role
                },
                accessToken
            });

        }
    }catch (e) {
        res.status(500).json({message:`Server Error${e.message}`});
    }


}

// me
export const me = async(req,res) => {

    if (!req.session.userEmail) {
        return res.status(401).json({message:"Anda harus login terlebih dahulu"});
    }

    try{
        const admin = await Admin.findOne({
            where : {
                email : req.session.userEmail
            }
        });

        const user = await Users.findOne({
            where : {
                email : req.session.userEmail
            }
        });

        if (!admin && !user) {
            return res.status(404).json({message:"Email Tidak Ditemukan"});
        }

        if (!user && admin) {
            
            res.status(200).json({
                message: "Login berhasil",
                admin
            });

        }

        if (user && !admin) {
        
            res.status(200).json({
                message: "Login berhasil",
                user
            });

        }
    }catch (e) {
        res.status(500).json({message:`Server Error${e.message}`});
    }
}

// logout
export const logout = async(req,res) => {

    const refreshToken = req.cookies.refreshToken;

    if (!refreshToken) {
        return res.status(401).json({message:"Anda harus login terlebih dahulu"});
    }

    const user = await Users.findOne({
        where : {
            refreshToken
        }
    });

    const admin = await Admin.findOne({
        where : {
            refreshToken
        }
    });


    if (!user && !admin) {
        return res.status(404).json({message:"User Tidak Ditemukan"});
    }

    if(user && !admin){
        await Users.update({refreshToken: null},{
            where : {
                email : req.session.userEmail
            }
        });
    }

    if(!user && admin){
        await Admin.update({refreshToken: null},{
            where : {
                email : req.session.userEmail
            }
        });
    }

    res.clearCookie('refreshToken');

    req.session.destroy(err => {
        if (err) {
            return res.status(400).json({message : `error: ${err.message}`})
        }
        res.status(200).json({message : "Berhasil logout"});
    });

}


