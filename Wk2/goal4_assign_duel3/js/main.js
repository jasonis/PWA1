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

var round = 0;

function fight(){
    console.log('in the fight function');//this verifies that you are inside of the function
  
    alert(p1[0]+":"+p1[1]+" *START* "+p2[0]+":"+p2[1]);
  
    for (var i=0; i < 10; i++){
        //console.log(i);
        
        //random formula -- Math.floor(Math.random() * (max - min) + min);
        
        //random number generator and damage calculator
        var minDamage1 = p1[2] * .5;
        var minDamage2 = p2[2] * .5;
        var f1 = Math.floor(Math.random()*(p1[2]-minDamage1)+minDamage1);
        var f2 = Math.floor(Math.random()*(p2[2]-minDamage2)+minDamage2);  
    
        //console.log(f1);
        //console.log(f2);
    
        p1[1]-=f1;
        p2[1]-=f2;
        
        console.log(p1[0]+":"+p1[1]+" *START* "+p2[0]+":"+p2[1]);
        
        var results = winnerCheck();
        console.log(results);
         
        if (results === "no winner"){
            round++;
            alert(p1[0]+":"+p1[1]+" *ROUND* "+round+" OVER "+p2[0]+":"+p2[1]);
        }else{
            alert(results);
            break;//this gets us out of the function when we get to 10 rounds
        }
  
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