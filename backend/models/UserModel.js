import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Nota from "./NotaModel.js";

const {DataTypes} = Sequelize;

const Users = db.define("users",{

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

    role : {
        type : DataTypes.ENUM,
        values : ["users", "admins"],
        allowNull : false,
        defaultValue : "users"
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

Users.hasMany(Nota);
Nota.belongsTo(Users,{foreignKey : "userId"});

export default Users;
