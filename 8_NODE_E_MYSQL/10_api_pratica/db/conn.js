const mysql = require("mysql2")

const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '9139',
    database: 'contatos'
})

module.exports = pool