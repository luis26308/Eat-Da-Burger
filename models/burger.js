const orm = require("../config/orm.js")

const burger = {
    all: function (cb) {
        orm.all("burgers", function (res) {
            cb(res);
        });
    },

    create: function (cols, vals, cb) {
        orm.create("burgers", cols, vals, function (res) {
            cb(res);
        });
    },

    update: function (objColVals, devoured, cb) {
        orm.update("burgers", objColVals, devoured, function(res) {
            cb(res);
        });
    }
};

module.exports = burger;

