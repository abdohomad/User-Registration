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

// app.use(function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
//     next();
// });

app.use(register_router, (send, res) => {

});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});