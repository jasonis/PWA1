/*
	PWA1: Goal8: Simple Library App
	
	Jason Slocum
	11.15.13
*/

(function(){
    //stores the anchor links
    var anchors = document.querySelectorAll('#container a');
        
    //stores the results form the call to the library
    var results = Library(anchors);
    
    //prints the results to the console
    console.log(results);
    
    //call the library and passes the variable that stores the anchor links
    Library(anchors).each(function(){
                
        //changes the anchor background color to gray
        this.style.backgroundColor = "gray";           
                
        //adds an onclick event- whenever one of the links is clicked, it is printed to the console
        this.onclick = function(e){
            e.preventDefault();
            console.log('This is ' + this);
        };        
    });


})();  // end wrapper