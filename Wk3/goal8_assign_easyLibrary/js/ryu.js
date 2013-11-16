/*
	PWA1: Goal8:  Simple Library
	
	Jason Slocum
	11.15.13
*/

var Library = function(details){

    return new Library.prototype.init(details);

};

Library.prototype = {

    init: function(details){
                this.elements = details;
        },

    elements: [],
    
    each: function(get){
            for(var i = 0, max = this.elements.length; i < max; i++){
                get.call(this.elements[i]);
                console.log(this.elements[i]);
            }
    }

}; // end prototype

Library.prototype.init.prototype = Library.prototype;