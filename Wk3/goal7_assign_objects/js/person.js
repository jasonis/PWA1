/**
 * Created by the JavaScript Development Team
 * Class: PWA
 * Goal: Goal7
 * Jason Slocum
 * 11.12.13
 */
(function(){
    
    var Person = function(name, row){
            
        this.name = name;
        this.action = Person.action[Math.floor(Math.random() * Person.action.length)];
        this.job = Person.jobs[Math.floor(Math.random() * Person.jobs.length)];
        this.row = row;
            
        var display = document.getElementById("r"+this.row+"c3");
        display.innerHTML = this.action;
    };
    
    window.Person = Person;
    
    Person.jobs = ["Singer", "Roofer", "Plumber", "Biophysicist", "Farmer", "Pilot"];
    Person.action = ["Eating", "Sleeping", "Working", "Digesting", "Crocheting", "Sneezing"];
    
    Person.prototype.update = function(){
        
        if(Math.floor(Math.random() < .01)){                
            this.action = Person.action[Math.floor(Math.random() * Person.action.length)];
                    
            var display = document.getElementById("r"+this.row+"c3");
            display.innerHTML = this.action;
        };      
    };
    
       
})();