    $(document).ready(function(){
    $("#button").click(function() { 

    //on click function used to initiate math
    

    var yourWeight = $('#weight').val(); 
    var planet = $('#planet').find(':selected').val();
    var pValue = $('#planet').find(':selected').text();
    //Grabs user input


    var result = (yourWeight * planet).toFixed(2);
    //Calculates the user's weight on another planet


    $("#result").text("If you were on the " + pValue + " you would weigh " + Math.round(result) + " pounds!");
    


    });
});