/*
	PWA1: Goal8: Simple Library App
	
	Jason Slocum
	11.15.13
*/

(function(){
    
        var anchors = document.querySelectorAll('#container a');
    
        var results = Library(anchors);
    
        console.log('These are the results from the Library: ' + results);
    
        Library(anchors).each(function(){
            
                this.onclick = function(e){
                    
                        e.preventDefault();
                };        
        });


})();  // end wrapper