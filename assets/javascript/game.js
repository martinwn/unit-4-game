// Functions
const generateTargetScore = () => {
    return Math.floor(Math.random() * 120) + 19;
}

const generateCrystalScore = () => {
    return Math.floor(Math.random() * 12) + 1;
}

var runGameResults = () => {
    if (userScore === targetScore) {
        wins++;
        userScore = 0;
        targetScore = generateTargetScore();
        crystal1 = generateCrystalScore();
        crystal2 = generateCrystalScore();
        crystal3 = generateCrystalScore();
        crystal4 = generateCrystalScore();
        $('#wins').text("Wins: " + wins);
        $('#user-score').text(userScore);
        $('#target-score').text(targetScore);
    } else if (userScore > targetScore) {
        losses++;
        userScore = 0;
        targetScore = generateTargetScore();
        crystal1 = generateCrystalScore();
        crystal2 = generateCrystalScore();
        crystal3 = generateCrystalScore();
        crystal4 = generateCrystalScore();
        $('#losses').text("Losses: " + losses);
        $('#user-score').text(userScore);
        $('#target-score').text(targetScore);
    }
}


// Variables
var userScore = 0;
var targetScore =  generateTargetScore();
var crystal1 = generateCrystalScore();
var crystal2 = generateCrystalScore();
var crystal3 = generateCrystalScore();
var crystal4 = generateCrystalScore();
var wins = 0;
var losses = 0;

//JQuery
$(document).ready(function () {
    $('#target-score').text(targetScore);
    $('#crystal1').click(function () {
        userScore += crystal1;
        $("#user-score").text(userScore);
        runGameResults();
        });
    $('#crystal2').click(function () {
        userScore += crystal2;
        $('#user-score').text(userScore);
        runGameResults();
        });
    $('#crystal3').click(function () {
        userScore += crystal3;
        $('#user-score').text(userScore);
        runGameResults();
        });
    $('#crystal4').click(function () {
        userScore += crystal4;
        $('#user-score').text(userScore);
        runGameResults();
        });
});
    
