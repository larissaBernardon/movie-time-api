const mysql = require('mysql')

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    port: 3306,
    password: "taglivros",
    database: "movie_time"
});

module.exports = connection