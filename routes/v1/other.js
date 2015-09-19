/**
 * Created by Louis on 15/8/2015.
 */
var express = require('express');
var router = express.Router();

/**
 * Send apk for installation
 * No auth, no checking, no instruction, just the apk
 */
router.get('/apk/', function (req, res, next) {
    //http://stackoverflow.com/questions/9321027/how-to-send-files-with-node-js
    res.send('apk');
});

module.exports = router;