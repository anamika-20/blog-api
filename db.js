import mysql from "mysql";
//var mysql = require('mysql');

export const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    port: 'https://blog-api-one-eta.vercel.app/',
    password: 'ANA@20mika',
    database:'blog',
});

//const q  ="ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'ANA@20mika' ";
