$(document).ready(function () {
    //set global variables
    var jewelsList = [{id:"blue", jewelValue: getJewelValue(1, 40)}, {id: "green", jewelValue: getJewelValue(1, 30)}, {id: "pink", jewelValue: getJewelValue(1, 20)}, {id: "purple", jewelValue: getJewelValue(1, 40)}
    ]
    var targetScore;
    var totalScore = 0;
    var wins = 0;
    var losses = 0;

    //Select a random number for target score and write to html
    targetScore = Math.floor(Math.random() * 200) + 50;
    $("#randomBox").text(targetScore);
    
    //random number function for jewel value
    function getJewelValue(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
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
    console.log("Total score: " + totalScore);
    $("#total-score").text(totalScore);
    })
 
});
        




// function newGame() {
//         targetScore = math.floor(math.random() * 200) + 50;
//         $("#randomBox").text(targetScore);
//     }


