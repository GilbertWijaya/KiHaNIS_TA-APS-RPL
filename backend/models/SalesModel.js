import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Admin from "./AdminModel.js";
import Nota from "./NotaModel.js";

const {DataTypes} = Sequelize;

const Sales = db.define("sales",{

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
    
    password : {
        type : DataTypes.STRING,
        allowNull : false
    },

    jenisKelamin : {
        type : DataTypes.ENUM,
        values : ["laki-laki", "perempuan"],
        allowNull : true
    },

    kodeTokoAdm : {
        type : DataTypes.STRING,
        defaultValue : DataTypes.STRING,
        allowNull : false,
        validate : {
            notEmpty : true
        }
    },

    role : {
        type : DataTypes.ENUM,
        values : ["users", "admins","sales"],
        allowNull : false,
        defaultValue : "sales"
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

// Sales.hasMany(Nota);
// Nota.belongsTo(Sales,{foreignKey : "saleId"});
Admin.hasMany(Sales);
Sales.belongsTo(Admin,{foreignKey : "adminId"});

export default Sales;
