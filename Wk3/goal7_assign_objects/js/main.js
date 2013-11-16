/**
 * Created by the JavaScript Development Team
 * Class: PWA
 * Goal: Goal7
 * Jason Slocum
 * 11.12.13
 */
(function(){
    
    var names = ["Homer", "Marge", "Bart", "Lisa", "Maggie"];
    var people = [];
    var interval;
    
    for(var i = 0; i < 3; i++){        
        var peopleArray = Math.floor(Math.random() * names.length);
        var person = new Person(names[peopleArray], i + 1);
        people.push(person);
        
        populateHTML(person.name, "r"+(i+1)+"c1");
        populateHTML(person.job, "r"+(i+1)+"c2");
        
        names.splice(peopleArray,1);            
    };
    
    function populateHTML(pname, pjob){           
        var display = document.getElementById(pjob);
        display.innerHTML = pname;        
    };
    
    function runUpdate(){
        people.forEach(function(element){
            element.update();
        });
    };
    console.log(person);
    
    clearInterval(interval);
    interval = setInterval(runUpdate, 1000 / 30);
    
    
})();

