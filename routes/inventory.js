/**
 * Created by Louis on 15/8/2015.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.send('you are at inventory');
});

module.exports = router;