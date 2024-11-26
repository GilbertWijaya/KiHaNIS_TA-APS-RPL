import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Nota from "./NotaModel.js";

const {DataTypes} = Sequelize;

const Admin = db.define("admin",{

    id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true,
        allowNull :false
    },

    name : {
        type : DataTypes.STRING,
        allowNull : false
    },

    nomorHP : {
        type : DataTypes.STRING,
        allowNull : false
    },
    
    nomorRek : {
        type : DataTypes.STRING,
        allowNull : false
    },
    
    email : {
        type : DataTypes.STRING,
        allowNull : false
    },
    
    kodeTokoAdm : {
        type : DataTypes.STRING,
        allowNull : false,
    },

    password : {
        type : DataTypes.STRING,
        allowNull : false
    },

    jenisKelamin : {
        type : DataTypes.ENUM,
        values : ["laki-laki", "perempuan"],
        allowNull : true
    },

    role : {
        type : DataTypes.ENUM,
        values : ["users", "admins"],
        allowNull : false,
        defaultValue : "admins"
    },

    alamat : {
        type : DataTypes.TEXT("long"),
        allowNull : true
    },

    keterangan : {
        type : DataTypes.TEXT("long"),
        allowNull : true
    },

    ProfilePicture : {
        type : DataTypes.BLOB('long'),
        allowNull : true
    },

    refreshToken : {
        type : DataTypes.TEXT,
        allowNull : true
    }

}, {
    freezeTableName : true
});

// Admin.hasMany(Nota);
// Nota.belongsTo(Admin,{foreignKey : "adminId"});

export default Admin;
