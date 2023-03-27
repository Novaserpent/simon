// Variables

var started = false;
var buttonColors = ["red", "blue", "green", "yellow"]
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var currentPosition = 0
var userChosenColor = "none"


// Sounds

var wrongSound = new Audio("sounds/wrong.mp3");


// Button Presses

$(document).keydown(function() {
    if (started === false) {
        started = true;
        nextSequence();
    }
});

$(".btn").click(function() {
    userChosenColor = this.id;
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);

    checkAnswer(userClickedPattern.length - 1);

    // if (this.id !== gamePattern[currentPosition]) {
    //     level = 0;
    //     gamePattern = [];
    //     currentPosition = 0;
    //     userClickedPattern = [];
    //     $("#level-title").text("Press A Key to Start");
    // }

    // if ((userClickedPattern.length < gamePattern.length) && (this.id === gamePattern[currentPosition])) {
    //     currentPosition++;
    // }

    // if ((userClickedPattern.length === gamePattern.length) && (this.id === gamePattern[currentPosition])) {

    //     currentPosition = 0;
    //     userClickedPattern = [];
    //     setTimeout(function() {
    //         nextSequence();
    //     }, 1000);
            
    // }

        


    // console.log("color = " + userChosenColor);
    // console.log("pattern = " + userClickedPattern);
    // console.log("position = " + (currentPosition));

});


// Answer Check

function checkAnswer(currentLevel) {

    if (userChosenColor === gamePattern[currentLevel]) {
        console.log("success");
        if (userClickedPattern.length === gamePattern.length) {

            userClickedPattern = [];
            setTimeout(function() {
                nextSequence();
            }, 1000);
                
        }
    }
    else {
        wrongSound.play();
        $("body").addClass("game-over");

        setTimeout(function() {
        $("body").removeClass("game-over")
        }, 200);

        $("#level-title").text("Game Over, Press A Key to Start");

        console.log("fail");
        startOver();
    }
    
}


// Game Sequence + Audio

function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    level++;
    $("#level-title").text("Level " + level);

    $("#" + randomChosenColor).fadeTo(75, 0);
    $("#" + randomChosenColor).fadeTo(75, 1);

    switch (randomChosenColor) {
        case "red":
            
            var redSound = new Audio("sounds/red.mp3");
            redSound.play();

            break;

        case "blue":
            
            var blueSound = new Audio("sounds/blue.mp3");
            blueSound.play();

            break;

        case "green":
            
            var greenSound = new Audio("sounds/green.mp3");
            greenSound.play();

            break;

        case "yellow":
            
            var yellowSound = new Audio("sounds/yellow.mp3");
            yellowSound.play();

            break;
    
        default:
            break;
    }

    console.log(randomNumber);
    console.log(randomChosenColor);
    console.log(gamePattern);
}


// Click Sounds

function playSound(name) {

    switch (name) {
        case "red":
            
            redSound = new Audio("sounds/red.mp3");
            redSound.play();

            break;

        case "blue":
            
            blueSound = new Audio("sounds/blue.mp3");
            blueSound.play();

            break;

        case "green":
            
            greenSound = new Audio("sounds/green.mp3");
            greenSound.play();

            break;

        case "yellow":
            
            yellowSound = new Audio("sounds/yellow.mp3");
            yellowSound.play();

            break;
    
        default:
            break;
    }

}


// Click Animation

function animatePress(e) {

    $("#" + e).addClass("pressed");

    setTimeout(function() {
        $("#" + e).removeClass("pressed")
    }, 100);

    console.log(e + " was pressed.");

}


// Reset

function startOver() {
    level = 0;
    gamePattern = [];
    userClickedPattern = [];
    started = false;
}
