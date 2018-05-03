// Create Global Variables for arrays and counters.

var randomNumber;
var win = 0;
var loss = 0;
var firstNumber = 0;


// Creat a variable to hold the Randomly Generated Number that we want to equal to win and tie to an element.

var startGame = function () {

    $(".crystals").empty();

    var images = [
        "assets/images/crystal-blue.jpeg",
        "assets/images/crystal-green.jpeg", 
        "assets/images/crystal-turquoise.jpeg",
        "assets/images/crystals-black-white-line.jpeg"];

    randomNumber = Math.floor(Math.random() * 109 + 19);
    
    $("#random-result").html(randomNumber);

    // Create div elements for each of the 4 crystals that will have a hidden random number from 1-12
    // Create function for random number from 1-12.

    for (var i = 0; i < 4; i++) {

        var randomCrysVal = Math.floor(Math.random() * 12 + 1);

        var crystal = $("<div>");
        crystal.attr({
            "class": 'crystal',
            "data-random": randomCrysVal
        });
        crystal.css({
            "background-image":"url('" + images[i] + "')",
            "background-size":"cover"
        });

        $(".crystals").append(crystal);

    } 
    $("#firstNumber").html("Total Score: " + firstNumber); 
}

//Create click events to run game and call on functions.  This is the Main section.

   // Turn strings into integers, add onto last number clicked on.

startGame();

var reset = function() {
     
}

$(document).on("click", ".crystal", function () {
     
    var num = parseInt($(this).attr("data-random"));

    firstNumber += num;

    $("#firstNumber").html("Total Score: " + firstNumber);


    console.log(firstNumber);

    // create Counters using a condition 

    if(firstNumber > randomNumber){
       loss++;
       $("#loss").html("Losses: " + loss);

       firstNumber = 0;

       startGame();
    }
    else if(firstNumber === randomNumber){
        
        win++;

        $("#win").html("Wins: " + win);

        firstNumber = 0;

        startGame();
    }



});

