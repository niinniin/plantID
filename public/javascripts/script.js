$(document).ready(function() {



    $("#submitbutton").click(function() {
        var p1 = new Promise(function(resolve, reject){

            var sun = $('input[name="sun"]:checked').val();
            var water = $('input[name="water"]:checked').val();
            var houseplant = $('input[name="houseplant"]:checked').val();
            var difficulty = $('input[name="difficulty"]:checked').val();


            var filters = {
                light: sun,
                water: water,
                houseplant: houseplant,
                difficulty: difficulty
            };
            resolve(filters);
        });

        p1.then(function(filters){
            //console.log(filters);
           // checkFilters(filters, function(checkedFilters) {
              //  console.log(checkedFilters);

            getPlants(filters, function (callback) {
                //if we reqives a result
                if (callback != null) {
                    var resultElement = document.createElement("div");
                    resultElement.setAttribute("id", "result");
                    document.body.appendChild(resultElement);

                    $("#result").html(callback);
                }
            });
            //});

        });
        //console.log(filters);

    });

    function checkFilters(filters, callback){
        console.log(filters);
        if (filters['difficulty'] == null) {
            filters['difficulty'] = '';
        }
        if (filters['houseplant'] == null) {
            filters['houseplant'] = '';
        }
        if (filters['light'] == null) {
            filters['light'] = '';
        }
        if (filters['water'] == null) {
            filters['water'] = '';
        }
        console.log(filters);
        callback(filters);
    };

    function getPlants(checkedFilters, callback){

        console.log("hehe");

        $.ajax({
            method: "POST",
            data: checkedFilters,
            url: "http://localhost:3000/testsvar",
            //dataType: "html",   //expect html to be returned
            success: function (response)
            {

                //console.log(response);


                $("#planttest").slideUp("slow", function () {

                });

                $(document).ready(function() {
                    $('#returnbutton').click(function() {
                        $('#planttest').slideDown();
                        $('#visaresult').hide();
                        $('#returnbutton').hide();
                    });
                });

                callback(response);
            }
        });

    };

});










