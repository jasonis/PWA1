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
        round: document.querySelector('#round_number'),
        button: document.querySelector('#fight_btn')
}

dom.button.onclick = function fight(){
    console.log('in the fight function');//this verifies that you are inside of the function
  
    //alert(p1[0]+":"+p1[1]+" *START* "+p2[0]+":"+p2[1]);
  
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
        
        var results = winnerCheck();
        console.log(results);
         
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
    
    if (p1[1]<1 && p2[1]<1){
        result = "You Both Die";
    }else if(p1[1]<1){
        result = p2[0]+" WINS!!!"
    }else if(p2[1]<1){
        result = p1[0]+" WINS!!!"
    };
    
    return result;
};
    
console.log('program starts');
fight();   
    
})();