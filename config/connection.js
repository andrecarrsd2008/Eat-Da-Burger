var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'burgers_db',
  port: 3306,
});

module.exports = connection;

 
