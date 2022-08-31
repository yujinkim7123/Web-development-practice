const mysql = require("mysql2/promise")

const pool = mysql.createPool({
  host: "3.35.182.34",
  // aws ip
  
  user: "ssafy",
  // mysql ID
  
  password: "ssafy_8_A",
  // mysql Password

  database : "jony",
  // db name

  waitForConnections: true,

  connectionLimit: 10,

  queueLimit: 0,
})

module.exports = { pool }