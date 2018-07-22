$(document).ready(function () {
    //set global variables
    var jewelsList = ["blue", "green", "pink", "purple"];
    var targetScore;
    var totalScore;
    var wins = 0;
    var losses = 0;

    //Select a random number for target score and write to html
    targetScore = Math.floor(Math.random() * 200) + 50;
    $("#randomBox").text(targetScore);
    
    //loop assigning random values to jewelslist array
    for (var i = 0; i<jewelsList.length; i++) {
        jewelsList[i] = Math.floor(Math.random() * 40) + 1;
        console.log(jewelsList);
        //assign value to images?
        $("#blue").attr(jewelsList.blue)
        imageCrystal.attr("Crystalvalue", jewelsList[i]);
    }

// function newGame() {
//         targetScore = math.floor(math.random() * 200) + 50;
//         $("#randomBox").text(targetScore);
//     }

});
