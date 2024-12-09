import { Sequelize } from "sequelize";

const db = new Sequelize("kihanis_db", process.env.DATABASE_USER, process.env.DATABASE_PASS,{

    host : "localhost",
    dialect : "mysql",
    dialectModule : require('mysql2')

});

export default db;