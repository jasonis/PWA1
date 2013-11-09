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
    
var rndNum = Math.floor(Math.random()*10);

var dom = {
    input: document.querySelector("#input").value,
    output: document.getElementById("output"),
    button: document.querySelector("button")
}

var made = 0;
var remain = 3;

dom.button.onclick = function guessGame(){
    if(made<3){
        
    
    }else{
    dom.output.innerHTML = "You Are Out of Guesses.  Please Reset Your Browser and Try Again";
    dom.button.onclick = "event.stopPropagation = true";
    return false;
    };

};


})();