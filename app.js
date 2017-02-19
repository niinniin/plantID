/**
 * Created by NinaYoda on 2017-02-18.
 */

var express = require('express');
var app = express();



app.set('view engine', 'ejs');
app.use(express.static('public'));



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

  //  for (row in plants){
  //      console.log(plants[row]);
  //  }


    //console.log(plants);
});




app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})