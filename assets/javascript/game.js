$(document).ready(function () {
    //set global variables
    var jewelsList = [{id:"blue", jewelValue: getJewelValue()}, {id: "green", jewelValue: getJewelValue()}, {id: "pink", jewelValue: getJewelValue()}, {id: "purple", jewelValue: getJewelValue()}
    ]
    var targetScore;
    var totalScore = 0;
    var wins = 0;
    var losses = 0;

    //Select a random number for target score and write to html
    targetScore = Math.floor(Math.random() * 120) + 19;
    targetScore = parseInt(targetScore);
    $("#randomBox").text(targetScore);
    
    //random number function for jewel value
    function getJewelValue() {
        return Math.floor(Math.random() * 12) + 1;
    }
    console.log (jewelsList);

    //on click, get user's pick based on image id
    $(".crystal-choice").on("click", function() {
        var userPick = this.id;
        console.log("User pick: " + userPick);

    //based on id, grab the jewel value
        for (var i = 0; i < jewelsList.length; i++) {
            if (jewelsList[i].id === userPick) {
                var userPickValue = jewelsList[i].jewelValue;
            }};
    //Add the jewel value to the total score    
    totalScore = totalScore + userPickValue;
    totalScore = parseInt(totalScore);
    console.log("Total score: " + totalScore);
    $("#total-score").text(totalScore);

       //check for loss, total the losses, write to page
       if (totalScore > targetScore) {
        losses += 1;
        alert("losses: " + losses);
        $("#losses-text").text(losses);
        //new game function
    };
    
    //check for win, total the wins, write to page
    if (totalScore == targetScore) {
        wins += 1;
        alert("wins: " + wins);
        $("#wins-text").text(wins);
        //new game function
    };
    });
    
});
        




// function newGame() {
//         targetScore = math.floor(math.random() * 200) + 50;
//         $("#randomBox").text(targetScore);
//     }


