const mysql = require("mysql");
const dotenv = require("dotenv");
dotenv.config();

let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "Hospital_management",
  port: "3306",
  //    user:process.env.DBBUSER,
  //    password:process.env.DBPASSWORD,
  //    database:process.env.DATABASE,
  //    host:process.env.DBHOST,
  //    port:process.env.DBPORT
});
connection.connect((error) => {
  if (error) {
    console.log("error", error.sqlMessage);
  } else {
    console.log("db connected");
  }
});

module.exports = connection;
