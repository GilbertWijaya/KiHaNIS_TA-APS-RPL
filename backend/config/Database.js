import { Sequelize } from "sequelize";
import mysql2 from 'mysql2';

const db = new Sequelize("kihanis_db", process.env.DATABASE_USER, process.env.DATABASE_PASS,{

    host : "localhost",
    dialect : "mysql",
    dialectModule : mysql2

});

export default db;