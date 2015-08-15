/**
 * Created by Louis on 15/8/2015.
 */
var express = require('express');
var router = express.Router();

/* GET with item id */
router.get('/:id', function(req, res) {
    res.send('item id = ' + req.params.id);
});

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Inventory' });
});

module.exports = router;