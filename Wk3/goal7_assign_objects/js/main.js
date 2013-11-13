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
        
        var person = new Person(names[Math.floor(Math.random() * names.length)], i + 1);
        
        populateHTML(person.name, "r"+(i+1)+"c1");
        populateHTML(person.job, "r"+(i+1)+"c2");
        
        people.push(person);
            
    };
    
    function populateHTML(pname, pjob){
    
            var display = document.getElementById(pjob).innerHTML = pname;
    
    };
    
    function runUpdate(){
            people.forEach(function(element){
                    element.update();
            });
    };
    console.log(person);
    interval = setInterval(runUpdate, 1000 / 30);
    
    clearInterval(interval);
    
})();

