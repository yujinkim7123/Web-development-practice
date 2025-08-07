// async await를 활용하기 위해서는 해당 모듈이 promise 형식으로 리턴이 되어야한다.
const mysql = require('mysql2/promise');
// Ctrl + P 폴더및 파일검색

// Ctrl +Shift + F 전체 내용검색
const pool = mysql.createPool({
  // aws 주소 (없는 경우 127.0.0.1)
  host: "13.209.99.93",
  // db 아이디
  user: "ssafy",
  // db 비밀번호
  password: "ssafy_8_A",
  // 스키마
  database: "order_system",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0

})

module.exports = {pool}
// 객체로 내보내면 객체로 받아온다
// const db = require('./db/index')
// 활용시 db.pool.query~
// const {pool} = require("./db/index")

// module.exports = pool 변수로 내보내면 변수로 받는다
// const db =  require('./db/index')
// db.query 
