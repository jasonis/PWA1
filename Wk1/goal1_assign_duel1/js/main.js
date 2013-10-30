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
  console.log('in the fight function');
  
    for (var i=0; i < 10; i++){
        console.log(i);
        var minDamage1 = p1Damage * .5;
        var minDamage2 = p2Damage * .5;
        var f1 = Math.floor(Math.random()*(p1Damage-minDamage1)+minDamage1);
        var f2 = Math.floor(Math.random()*(p2Damage-minDamage2)+minDamage2);  
    
    console.log(f1);
    console.log(f2);
    
        p1Health-=f1;
        p2Health-=f2;
        
        console.log(p1Name+":"+p1Health+" *START* "+p2Name+":"+p2Health);
  
  };  
  
};
    
console.log('program starts');
fight();   
    
})();