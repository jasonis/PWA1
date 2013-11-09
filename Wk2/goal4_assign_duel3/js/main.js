/*          Jason Slocum
            10.29.13
            The Duel Part 2
*/

(function(){

console.log("fight");//test to make sure js is linked to html

//created objects to contain the players info
var fighter = [
        p1 = {
            name: 'Yoda',
            health: 100,
            damage: 20
    },
        p2 = {
            name: 'Darth Vader',
            health: 100,
            damage: 20
    }
];


var fighting = true;
var round = 0;

var dom = {
        yoda: document.querySelector('#kabal'),
        vader: document.querySelector('#kratos'),
        round: document.querySelector('#round'),
        button: document.querySelector('#fight_btn')
}

dom.button.onclick = function fight(){
    console.log('in the fight function');//this verifies that you are inside of the function
    
    //alert(fighter[0].name+":"+fighter[0].health+" *START* "+fighter[1].name+":"+fighter[1].health);
  
    if(fighting === true){
        dom.yoda.innerHTML = fighter[0].name + ": " + fighter[0].health;
        dom.vader.innerHTML = fighter[1].name + ": " + fighter[1].health;
        //random formula -- Math.floor(Math.random() * (max - min) + min);
        
        //random number generator and damage calculator
        var minDamage1 = fighter[0].damage * .5;
        var minDamage2 = fighter[1].damage * .5;
        var f1 = Math.floor(Math.random()*(fighter[0].damage-minDamage1)+minDamage1);
        var f2 = Math.floor(Math.random()*(fighter[1].damage-minDamage2)+minDamage2);  
    
        //console.log(f1);
        //console.log(f2);
    
        fighter[0].health-=f1;
        fighter[1].health-=f2;
        
        console.log(fighter[0].name+":"+fighter[0].health+" *START* "+fighter[1].name+":"+fighter[1].health);
        
        var result = winnerCheck();
        console.log(result);
         
        if (result === "no winner"){
            round++;
            dom.yoda.innerHTML = fighter[0].health + " " + fighter[0].name;
            dom.vader.innerHTML = fighter[1].health + " " + fighter[1].name;
            dom.round.innerHTML = "Round " + round + " " + result;
            
        }else{
            dom.round.innerHTML = "Round " + round +  " - " + result;
            dom.button.onclick = "event.stopPropagation = true";
            fight.onclick = null;
            fighting = false;
           
        }
        dom.round.innerHTML = "Round " + round + ": " + result;
    };  
  
};

function winnerCheck(){
    console.log("in winnerCheck FN");
    var result="no winner";
    
    if (fighter[0].health<1 && fighter[1].health<1){
        result = "You Both Die";
        document.getElementById('scores').innerHTML = "You Both Die!";
    }else if(fighter[0].health<1){
        result = fighter[1].name+" WINS!!!";
        document.getElementById('scores').innerHTML = fighter[1].name + "WINS!";
    }else if(fighter[1].health<1){
        result = fighter[0].name+" WINS!!!";
        document.getElementById('scores').innerHTML = fighter[0].name + "WINS!";
    };
    
    return result;
};

//fight();    
console.log('program starts');

  
})();