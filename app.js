/**
 * Created by NinaYoda on 2017-02-18.
 */

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var bodyparser = bodyParser.urlencoded({ extended: false });

app.set('view engine', 'ejs');
app.use(express.static('public'));

console.log("incoming request");

// respond with "hello world" when a GET request is made to the homepage


app.get('/', function (req, res) {

    console.log('test');
    res.render('pages/index');
});


app.post('/testsvar', bodyparser, function (req, res) {
    console.log(req.body);

    var db = require('./libs/dbPlants');

    var plants = db.getPlants(req.body,function(err, plants){
    if(!err) {
        console.log(plants);
        res.render('partials/result', {plants: plants});
    }
    else{
        console.log('error retreiving data from database');
        res.send(null);
    }
    });


});


app.get('/404', bodyparser, function (req, res) {
    res.render('pages/404');
});



app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})