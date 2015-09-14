/**
 * Created by Louis on 15/8/2015.
 */
var express = require('express');
var router = express.Router();
var ba = require('basic-auth');
var su = require('../../utils/string'); //FIXME I don't think this is the best practice

router.get('/search/', function (req, res) {
    var gender = req.query.gender;
    res.send('searching stuff: ' + gender);
});

/* GET with patient id */
router.get('/:id', function(req, res) {
    var temp_patient = JSON.parse('{"id":"6b86b273ff34fce19d6b804eff5a3f5747ada4eaa22f1d49c01e52ddb7875b4b","name":{"firstname":"Tsz Ho","middlename":"XXXX","lastname":"Tsai"},"birthday":{"year":1994,"month":9,"day":16},"gender":"male","race":"Mongolian","address":{"apartment":"A","floor":"99","village":"Sth","building":"Sth else","street":"sth street","province":"somewhere","country":"Cambodia"},"picture_id":"1024"}');
    var user = ba(req);
    var message;
    if (req.params.id == temp_patient.id) {
        message = 'are you looking for me? \n' + JSON.stringify(temp_patient) + '\n';
    }
    message = message + 'username = ' + user.name + '\n' + 'password = ' + user.pass + '\n' + 'patient id = ' + req.params.id;
    res.send(message);
});

router.post('/', function (req, res) {
    var body = req.body;
    var message;
    message = su.extend_or_replace(message, 'race: ' + body.race + '\n');
    message = su.extend_or_replace(message, 'gender: ' + body.gender + '\n');
    message = su.extend_or_replace(message, 'name: ' + body.name + '\n');
    message = su.extend_or_replace(message, 'birthday: ' + body.birthday + '\n');
    res.send(message);
});

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Patient' });
});

module.exports = router;