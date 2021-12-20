const mysql = require("mysql");
const dbConfig = require("../config/db.config.js");

// Conexion a bd
const connection = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  database: dbConfig.DB
});

// Abrir conexion
connection.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

module.exports = connection;