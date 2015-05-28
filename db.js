var mysql = require('mysql');
var connection = null;
	if (!connection) { 
	    connection = mysql.createConnection({
        	host:     'localhost',
        	user:     'root',
        	password: '123',
        	database: 'books'
        });
	}
	connection.connect();

module.exports = connection;
