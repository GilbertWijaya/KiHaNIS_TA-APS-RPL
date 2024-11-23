import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Admin from "./AdminModel.js";

const {DataTypes} = Sequelize;

const Products = db.define("product",{

    id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true,
        allowNull :false
    },

    namaBarang : {
        type : DataTypes.STRING,
        allowNull : false
    },

    hargaBarang : {
        type : DataTypes.BIGINT,
        allowNull : false
    },

    kodeBarang : {
        type : DataTypes.STRING,
        allowNull : false
    },

    keterangan : {
        type : DataTypes.TEXT("long"),
        allowNull : true
    },

    ProductPicture : {
        type : DataTypes.BLOB('long'),
        allowNull : true
    },

    kodeTokoAdm : {
        type : DataTypes.STRING,
        defaultValue : DataTypes.STRING,
        allowNull : false,
        validate : {
            notEmpty : true
        }
    }

},{
    freezeTableName : true
});

Admin.hasMany(Products);
Products.belongsTo(Admin,{foreignKey : "adminId"});

export default Products;
