const sql = require('mssql');
const express = require('express');
const router = express.Router();
// const db_connection = require('../config/db_operations');
const db_connection = require('../config/db_connection');
const { request } = require('express');

const newUser = async (Users) => {
    try {
        let pool = await sql.connect(db_connection);
        let result = await pool.request()
            .input("PersonID", sql.Int(), Users.PersonID)
            .input("FirstName", sql.VarChar(255), Users.FirstName)
            .input("LastName", sql.VarChar(255), Users.LastName)
            .input("Email", sql.VarChar(255), Users.Email)
            .input("password", sql.VarChar(255), Users.password)
            .execute(Users)
        return result.recordsets;

    } catch (err) {
        console.log(err);
    }
}
router.post("/api/v1/Registration", async (req, res) => {

    let order = { ...request.body }

    newUser(order).then(result => {
        res.status(201).json(result);
    })

});



module.exports = router;