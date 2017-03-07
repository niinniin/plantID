$(document).ready(function() {

    $("#submitbutton").click(function() {

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

            getPlants(filters, function (callback) {
                //if we receive a result
                if (callback != null) {
                    var resultElement = document.createElement("div");
                    resultElement.setAttribute("id", "result");
                    document.body.appendChild(resultElement);

                    $("#result").html(callback);
                }
            });
        });

    function getPlants(filters, callback){
        $.ajax({
            method: "POST",
            data: filters,
            url: "http://localhost:3000/testsvar",
            success: function (response)
            {
                $("#planttest").slideUp("slow", function () {
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










