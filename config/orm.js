const { createConnection } = require("net");
let connection = require("../config/connection.js");

function printQuestionMarks(num) {
    const arr = [];

    for (let i = 0; i < num; i++) {
        arr.push("?");
        
    }

    return arr.toString();
}

function objToSql(ob) {
    const arr = [];
    
    for (let key in ob) {
        let value = ob[key];

        if (Object.hasOWnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }

            arr.push(key + "=" + value);
        }
    }

    return arr.toString();
}

const orm = {
    selectAll: function(tabelInput, cb) {
        const queryString = `SELECT * FROM ${tabelInput}`;
        connection.query(queryString, function (err, res) {
            if (err) throw err;
            cb(res);
        })
    }

    insertOne: function(table, col, val, cb)
}