/**
 * Created by NinaYoda on 2017-02-18.
 */
var mysql = require('mysql');

console.log('test2');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'plantApp',
    password: 'plantApp',
    database: 'plantId',
    port: 8889
});


module.exports = {

    getPlants: function(callback){
        connection.connect(function(err){
            if (err) {
                console.log("Error when connected to databas");
            }
            else{
                console.log("Connected to db");
            }
        });

        var question =  connection.query('SELECT * FROM PLANT', function (err, rows) {
            if (err){
                callback(err)
            }

            console.log('Fråga funkar braaa');
            console.log(question.sql);
            //console.log(rows);
            callback(null, rows);

        });
    }
}

