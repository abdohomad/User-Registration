var mysql = require('mysql')
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'naksh',
    password: 'SUDANsat56#',
    database: 'customers'
})
module.exports = connection;