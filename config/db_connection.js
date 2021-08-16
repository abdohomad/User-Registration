const sql = require('mssql');
const config = {
    // server: "sudansat.database.windows.net",
    server: 'localhost',
    port: 1433,
    user: "Kassala",
    // password: "SUDANsat56#",
    password: 'Kassala93#',
    database: "Api1",
    MultipleActiveResultSets: false,
    Encrypt: true,
    TrustServerCertificate: false,
    ConnectionTimeout: 30

};

module.exports = config;
