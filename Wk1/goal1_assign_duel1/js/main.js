/*          Jason Slocum
            10.29.13
            The Duel Part 1
*/

(function(){

console.log("fight");//test to make sure js is linked to html

var p1Name = "Yoda";
var p2Name = "Darth Vader";

var p1Health = 100;
var p2Health = 100;

var p1Damage = 20;
var p2Damage = 20;

var round = 0;

function fight(){
    console.log('in the fight function');//this verifies that you are inside of the function
  
    alert(p1Name+":"+p1Health+" *START* "+p2Name+":"+p2Health);
  
    for (var i=0; i < 10; i++){
        //console.log(i);
        
        //random formula -- Math.floor(Math.random() * (max - min) + min);
        
        //random number generator and damage calculator
        var minDamage1 = p1Damage * .5;
        var minDamage2 = p2Damage * .5;
        var f1 = Math.floor(Math.random()*(p1Damage-minDamage1)+minDamage1);
        var f2 = Math.floor(Math.random()*(p2Damage-minDamage2)+minDamage2);  
    
        //console.log(f1);
        //console.log(f2);
    
        p1Health-=f1;
        p2Health-=f2;
        
        console.log(p1Name+":"+p1Health+" *START* "+p2Name+":"+p2Health);
        
        var results = winnerCheck();
        console.log(results);
         
        if (results === "no winner"){
            round++;
            alert(p1Name+":"+p1Health+" *ROUND* "+round+" OVER "+p2Name+":"+p2Health);
        }else{
            alert(results);
            break;
        }
  
  };  
  
};

function winnerCheck(){
    console.log("in winnerCheck FN");
    var result="no winner";
    
    if (p1Health<1 && p2Health<1){
        result = "You Both Die";
    }else if(p1Health<1){
        result = p2Name+" WINS!!!"
    }else if(p2Health<1){
        result = p1Name+" WINS!!!"
    };
    
    return result;
};
    
console.log('program starts');
fight();   
    
})();