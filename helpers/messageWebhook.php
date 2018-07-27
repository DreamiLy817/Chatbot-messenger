<?php
/**
 * Created by PhpStorm.
 * User: lesliebaltimore
 * Date: 28/06/2018
 * Time: 20:10
 */

const processMessage = require("../helpers/processMessage");
module.exports = (req, res) => {
    if (req.body.object === "page") {
        req.body.entry.forEach(entry => {
            entry.messaging.forEach(event => {
                if (event.message && event.message.text) {
                    processMessage(event);
                }
            });
 });
res.status(200).end();
 }
};