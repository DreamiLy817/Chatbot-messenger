<?php
/**
 * Created by PhpStorm.
 * User: lesliebaltimore
 * Date: 28/06/2018
 * Time: 20:08
 */

module.exports = (req, res) => {
    const hubChallenge = req.query["hub.challenge"];
    const hubMode = req.query["hub.mode"];
    const verifyTokenMatches = (req.query["hub.verify_token"] === "crowdbotics");
    if (hubMode && verifyTokenMatches) {
        res.status(200).send(hubChallenge);
    } else {
        res.status(403).end();
    }
};