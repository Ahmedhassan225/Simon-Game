var btnColors = ["green", "red", "yellow", "blue"];

var colorSequance = [];
var playerSequance = [];

var level = 0;
var isStarted = false;

$(document).keypress(function(event){
    if(isStarted == false && event.key === ' '){
        
        level = 0;
        isStarted = true;
        newLevel();        
    }
})

$(".btn").click(function(event){
    var playerChosenColor = $(this).attr("id");
    playerSequance.push(playerChosenColor);

    btnFlash(playerChosenColor);
    btnPlaySound(playerChosenColor);

    checkAnswer(playerSequance.length-1);
})

function checkAnswer(pLevel){
    if(colorSequance[pLevel] == playerSequance[pLevel]){
        if(colorSequance.length == playerSequance.length){
            setTimeout(function () {
                newLevel();
              }, 500);
        }
    }
    else {

        gameOver(); 
        startOver();
    }
}

function newLevel(){
    level++;
    playerSequance = [];
    $("#level-title").text("LEVEL "+ level); 

    var randomNum = Math.floor(Math.random()* 4);
    colorSequance.push(btnColors[randomNum]);
    
    $("#" + btnColors[randomNum]).fadeIn(100).fadeOut(100).fadeIn(100);
    
}

function btnFlash(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function () {
      $("#" + currentColor).removeClass("pressed");
    }, 100);
  }

function btnPlaySound(currentColor) {
    var audio = new Audio("sounds/"+ currentColor +".mp3");
    audio.play();
     
}

function gameOver() {

    console.log("wrong");

    btnPlaySound("wrong");

    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);

    $("#level-title").text("Game Over, Press Any Key to Restart");
}

function startOver() {
    level = 0;
    playerSequance = [];
    colorSequance = [];
    isStarted = false;
  }

function nothing(){

}