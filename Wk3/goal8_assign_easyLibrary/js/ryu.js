/*
	PWA1: Goal8:  Simple Library
	
	Jason Slocum
	11.15.13
*/

//sets up the constructor and its parameter
var Library = function(details){
    return new Library.prototype.init(details);

};

//sets up the prototype
Library.prototype = {
    
    //this init function accepts the parameter from the constructor
    init: function(details){
        this.elements = details;
    },

    elements: [],
    
    //creates a function with a for loop that prints every item in the array to the console 
    each: function(get){
        for(var i = 0, max = this.elements.length; i < max; i++){
            get.call(this.elements[i]);
            console.log(this.elements[i]);
        }
    }

}; // end prototype

Library.prototype.init.prototype = Library.prototype;