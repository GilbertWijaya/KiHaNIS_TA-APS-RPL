import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Sales from "./SalesModel.js";
import Admin from "./AdminModel.js";
import Users from "./UserModel.js";

const {DataTypes} = Sequelize;

const Nota = db.define("nota",{

    id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true,
        allowNull :false
    },

    namaPembeli : {
        type : DataTypes.STRING,
        defaultValue : DataTypes.STRING,
        allowNull : false
    },

    namaSales : {
        type : DataTypes.STRING,
        defaultValue : DataTypes.STRING,
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

    dataBarang : {
        type : DataTypes.TEXT("long"),
        allowNull : false
    },

    buktiPembayaran : {
        type : DataTypes.BLOB('long'),
        allowNull : false
    },

    statusPembayaran : {
        type : DataTypes.ENUM,
        values : ["1", "0"],
        allowNull : false,
        defaultValue : "0"
    }

},{
    freezeTableName : true
});

// Users.hasMany(Nota);
// Sales.hasMany(Nota);
Nota.belongsTo(Admin,{foreignKey : "adminId"});

// diedit
Nota.belongsTo(Sales,{foreignKey : "saleId"});
Nota.belongsTo(Admin,{foreignKey : "adminId"});

export default Nota;
