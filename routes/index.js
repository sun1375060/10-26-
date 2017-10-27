var express = require('express');
var router = express.Router();

var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '123456',
//port:3306
});
/* GET home page. */
router.post('/', function(req, res, next) {
  connection.connect();
  connection.query('SELECT * FROM aaa.BBB', function(err, rows, fields) {
  	console.log(rows)
    res.header('Access-Control-Allow-Origin',"*")
    res.send(rows)
  });
  connection.end();
});

module.exports = router;