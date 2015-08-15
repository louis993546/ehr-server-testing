/**
 * Created by Louis on 15/8/2015.
 */
var express = require('express');
var router = express.Router();

/* GET with patient id */
router.get('/:id', function(req, res) {
    //TODO basic auth
    res.send('patient id = ' + req.params.id);
});

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Patient' });
});

module.exports = router;