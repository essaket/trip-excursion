const mysql = require('mysql2');
const pool = mysql.createPool({
    host: 'localhost',
    user: 'admin',
    password: 'admin',
    database: 'trip_excursion'
});

module.exports = pool.promise();