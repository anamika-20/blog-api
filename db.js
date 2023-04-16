//import mysql from "mysql";
//const mysql = require('serverless-mysql');
var mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config();


export const db = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    //port: 'https://blog-api-hv38.vercel.app/',
    password: process.env.PASSWORD,
    database:process.env.DATABASE,
});



//const q  ="ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'ANA@20mika' ";
