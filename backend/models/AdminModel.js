import { Sequelize } from "sequelize";
import db from "../config/Database.js";

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
        type : DataTypes.BIGINT,
        allowNull : false
    },
    
    nomorRek : {
        type : DataTypes.BIGINT,
        allowNull : false
    },
    
    email : {
        type : DataTypes.STRING,
        allowNull : false
    },
    
    kodeTokoAdm : {
        type : DataTypes.STRING,
        allowNull : true,
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

export default Admin;
