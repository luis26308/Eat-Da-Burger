const express = require("express");

const router = express.Router();

const burger = require("../models/burger.js")

router.get("/", function (req, res) {
    burger.all(function (data) {
        const hbsObject = {
            burgers: data
        };
        console.log(hbsObject)
        res.render("index", hbsObject)
    });
});

router.post("/api/burgers", function (req, res) {
    burger.create(
        ["burger_name", "devoured"],
        [req.body.burger_name, req.body.devoured], function (results) {
            res.json({ id: results.insertId });
        });
});

router.put("/api/burgers/:id", function (req, res) {
    const devoured = "id = " + req.params.id;
    // console.log("devoured", devoured);

    burger.update({
        devoured: req.body.devoured
    }, devoured, function (results) {
        if (results.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;