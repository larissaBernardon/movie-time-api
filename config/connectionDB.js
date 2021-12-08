const mysql = require('mysql')

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    port: 3306,
    password: "taglivros",
    database: "movie_time"
});

module.exports = connection
// HOST = 127.0.0.1
// PORT = 3333
// NODE_ENV = development
// APP_URL = http://${HOST}:${PORT}
// CACHE_VIEWS = false
// APP_KEY = esHKomFGU1sgeSP8HvRbEzNYmEZrkRpZ
// DB_CONNECTION = mysql
// DB_HOST = localhost
// DB_PORT = 3306
// DB_USER = root
// DB_PASSWORD = taglivros
// DB_DATABASE = movie_time
// SESSION_DRIVER = cookie
// HASH_DRIVER = bcrypt