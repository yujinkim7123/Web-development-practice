const mysql = require('mysql2/promise');
const pool = mysql.createPool({

host: "3.39.130.149",
user :"ssafy",
password: "kimyujin",
database: "order_system",
waitForConnections:true,
connectionLimit: 10,
queueLimit: 0,


})


module.exports = {pool};