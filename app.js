/**
 * Created by NinaYoda on 2017-02-18.
 */

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var db = require('./libs/dbPlants');


//bodyparser tolkar värden som skickas med via POST metod, dvs vad som finns med i formulär.
var bodyparser = bodyParser.urlencoded({ extended: false });


//Middlewares
    // deklaration av view engine
app.set('view engine', 'ejs');
    //ge åtkomst för användarna till den publika mappen med javascriot, bilder, css
app.use(express.static('public'));

console.log("incoming request");

// respond with "hello world" when a GET request is made to the homepage

// första rout till index-sidan
app.get('/', function (req, res) {
    console.log('test');
    res.render('pages/index');
});

// Rout som används med ajax för att hämta växterna
app.post('/testsvar', bodyparser, function (req, res) {
    console.log(req.body);



    var plants = db.getPlants(req.body,function(err, plants){
    if(!err) {
        //console.log(plants);
        res.render('partials/result', {plants: plants});
    }
    else{
        console.log('error retreiving data from database');
        res.send(null);
    }
    });


});

//om ingen av de ovanstående routerna matchar så kommer den hit och renderar 404.
app.use(function (req, res) {
    res.render('pages/404');
});

//starta servern på port 3000.
app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})