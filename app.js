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
    var db = require('./libs/dbPlants');

    var plants = db.getPlants(function(err, plants){
       if(!err) {
            res.render('pages/index', {plants: plants});
       }
       else{
           console.log('error retreiving data from database');
       }
    });
});

app.post('/testsvar', bodyparser, function (req, res) {
    console.log(req.body.sun);
    console.log(req.body.water);
    console.log(req.body.houseplant);
    console.log(req.body.difficulty);

    //res.render('testsvar', {qs: req.query});

});


app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})