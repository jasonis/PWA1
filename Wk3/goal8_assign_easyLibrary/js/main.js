/*
	PWA1: Goal8: Simple Library App
*/

(function(){
    
    var anchors = document.querySelectorAll('#container a');
    
    var results = Library(anchors);
    
    console.log('These are the results from the Library: ' + results);


})();  // end wrapper