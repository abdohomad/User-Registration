const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const register_router = require('./routers/users');

const sql = require('mssql');
// const db_operations = require('./config/db_operations');
const newUser = require('./routers/users')
const port = process.env.PORT || 8080;

// db_operations.register().then(res => {
//     console.log(res);
// })

app.use(bodyParser.json());
app.use(cors());

var mysql = require('mysql');

const db = mysql.createConnection({
    host: '192.168.0.102',
    user: 'naksh',
    password: 'SUDANsat56#',
    database: 'customers',

});
db.connect((err) => {
    if (err) throw err
    console.log("db is connected successfully:", db.threadId);
});



app.post('/reqister', (req, res) => {

    var sql = `INSERT INTO users(name, gender) VALUES (?)`;
    var values = [
        ['abdalrahman bashir', 'male'],
        ['khalid hassen', 'male'],
        ['noram ali', 'femal']
    ];

    db.query(sql, [values], function (err, data, fields) {
        if (err) throw err;
        console.log(data);
    })

});

app.get('/users', (req, res) => {
    db.query(`select * from users`, (err, result, fields) => {
        if (err) {
            return console.log(err);
        }

        res.json({
            result
        }

        );
    });
})




app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});