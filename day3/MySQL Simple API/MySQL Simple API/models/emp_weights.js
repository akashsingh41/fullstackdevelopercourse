let mysql = require('mysql');
let connection = mysql.createConnection({
	host:"localhost",
	user:"axle",
	password:"1234",
	database:"Weights"
});
//
connection.connect(function(err) {
    if (err) throw err;
});
module.exports = connection;
//
