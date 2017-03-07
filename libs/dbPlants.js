/**
 * Created by NinaYoda on 2017-02-18.
 */
var mysql = require('mysql');

// deklarera anslutningsuppgifter mot databasen
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'plantApp',
    password: 'plantApp',
    database: 'plantId',
    port: 8889
});

connection.connect(function(err){
    if (err) {
        console.log("Error when connected to databas");
    }
    else{
        console.log("Connected to db");
    }
});

//exportera modulen så den kan bli tillgänglig för servern.
module.exports = {
    //get plants tar två parametrar, body (från frågeformuläret) och ett callbackvärde.
    getPlants: function(body,callback){


        var where;

        if (Object.keys(body).length > 0){
            var where = 'WHERE ';

            for(var i = 0;i<Object.keys(body).length;i++){


                where = where + Object.keys(body)[i] + ' = "' + body[Object.keys(body)[i]] + '"';

                if (i != Object.keys(body).length-1){
                    where = where + ' AND ';
                }
            }
        }

        var question =  connection.query(
        'SELECT * FROM PLANT ' + where +
       ' ORDER BY RAND() LIMIT 3', function (err, rows) {
            if (err){
                callback(err)
            }

            console.log('Frågan ställd utan problem');
            console.log(question.sql);
            //console.log(rows);
            callback(null, rows);

        });
    }
}

