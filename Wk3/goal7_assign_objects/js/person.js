/**
 * Created by the JavaScript Development Team
 * Class: PWA
 * Goal: Goal7
 */
(function(){
    
    var Person = function(name, row){
            
            this.name = name;
            this.row = row;
            this.job = Person.jobs[Math.floor(Math.random() * Person.jobs.length)];
            this.action = Person.action[Math.floor(Math.random() * Person.action.length)];
            
            var display = document.getElementById("r"+this.row+"c3").innerHTML = this.action;
        
        
        
    };
    
    window.Person = Person;
    
    Person.jobs = ["Singer", "Roofer", "Plumber", "Biophysicist"];
    Person.action = ["Eating", "Sleeping", "Working"];
    
    
    
    
    
    
    
    
    
    
    
    
    
    
})();