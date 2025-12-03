const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "crud_node"
});

db.connect((err) => {
  if (err) throw err;
  console.log("MySQL conectado com sucesso!");
});

module.exports = db;
