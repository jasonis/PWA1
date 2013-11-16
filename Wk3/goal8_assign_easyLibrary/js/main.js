/*
	PWA1: Goal8: Simple Library App
	
	Jason Slocum
	11.15.13
*/

(function(){
    
        var anchors = document.querySelectorAll('#container a');
    
        var results = Library(anchors);
    
        console.log(results);
    
        Library(anchors).each(function(){
            
                this.style.backgroundColor = "gray";           
                this.onclick = function(e){
                    
                        e.preventDefault();
                        console.log('This is ' + this);
                };        
        });


})();  // end wrapper