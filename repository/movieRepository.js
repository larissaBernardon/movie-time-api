const connection = require('../config/connectionDB');

exports.list = (callback) => {
    const sql = "SELECT * FROM MOVIES";

    connection.query(sql, (err, rows) => {
        if (err) {
            callback(err, null);
        }
        else {
            callback(null, rows);
        }
    })
}