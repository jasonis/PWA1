/**
 * GUESSING GAME:
 *
 * Created By: Jason Slocum
 * Date: 11.08.13
 * 
 * GUESSING GAME
 */

//Game variables
(function (){

//generates a random number    
var rndNum = Math.floor(Math.random()*10);

//creates an object for easy dom access
var dom = {
    input: document.querySelector("#input").value,
    output: document.getElementById("output"),
    button: document.querySelector("button")
}

//counters for guesses made and guesses remaining
var made = 0;
var remain = 3;

//main game function and initiates a click event
dom.button.onclick = function guessGame(){
    if(made<3){
        
        var input = document.querySelector("#input").value;
        
        made++;
        remain--;
        
        if(input === " "){
            dom.output.innerHTML = "Please Enter Your Guess.  Guess: " + made + " Remaining: " + remain;
            return false;
        }else if (input > 10){
            dom.output.innerHTML = input + " is too high.  Guess: " + made + " Remaining: " + remain;
            return false;
        }else if (input < 1){
            dom.output.innerHTML = input + " is too low.  Guess: " + made + " Remaining: " + remain;
            return false;
        }else{
            if(input < rndNum){
                dom.output.innerHTML = input + " is too low.  Guess: " + made + " Remaining: " + remain;
                return false;
            }else if(input > rndNum){
                dom.output.innerHTML = input + " is too high.  Guess: " + made + " Remaining: " + remain;
                return false;
            }else{
                dom.output.innerHTML = "You Won! " + input + " is correct!";
                dom.button.onclick = "event.stopPropagation = true";
                dom.button.innerHTML = "Done";
                return false;
            }
            return false;
        }
        
    }else{
    dom.output.innerHTML = "You Are Out of Guesses.  Please Reset Your Browser and Try Again";
    dom.button.onclick = "event.stopPropagation = true";
    return false;
    };

};


})();