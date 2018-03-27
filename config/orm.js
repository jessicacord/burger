var connection = require("./connection.js");

var orm = {
    selectAll: function(table, cb) {
        var queryString = "SELECT * FROM " + table +";";

        connection.query(queryString, function(err, result) {
            if (err) throw err;

            cb(result);
        })
    },
    insertOne: function(table, cols, values, cb) {
        var queryString = "INSERT INTO " + table + " (" + cols + ") VALUES ('" + values + "');";

        connection.query(queryString, function(err, result) {
            if (err) throw err;

            cb(result);
        })
    },
    updateOne: function(table, change, condition, cb) {
        var queryString = "UPDATE " + table + " SET " + change + " WHERE " + condition + ";";

        connection.query(queryString, function(err, result) {
            if (err) throw err;

            cb(result);
        })
    },
}

module.exports = orm;