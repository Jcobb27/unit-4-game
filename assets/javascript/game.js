$(document).ready(function () {
    //set global variables
    var jewelsList = [{id:"blue", jewelValue: ""}, {id: "green", jewelValue: ""}, {id: "pink", jewelValue: ""}, {id: "purple", jewelValue: ""}
    ]
    var targetScore;
    var totalScore = 0;
    var wins = 0;
    var losses = 0;

    newGame ();
    $("#wins-text").text(wins);
    $("#losses-text").text(losses);

    //random number function for jewel value
    function getJewelValue() {
        return Math.floor(Math.random() * 12) + 1;
    };

    function newGame() {
    //Select a random number for target score and write to html
    targetScore = Math.floor(Math.random() * 120) + 19;
    targetScore = parseInt(targetScore);
    $("#randomBox").text(targetScore);
    //loop through jewelsList and assign random numbers
     for (var i = 0; i < jewelsList.length; i++) {
        jewelsList[i].jewelValue = getJewelValue();
    console.log (jewelsList);
    //reset total score to zero
    totalScore = 0;
    $("#total-score").text(totalScore);

}};

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
        newGame();
    };
    
    //check for win, total the wins, write to page
    if (totalScore == targetScore) {
        wins += 1;
        alert("wins: " + wins);
        $("#wins-text").text(wins);
        newGame();
    };
    });
    
});
        


