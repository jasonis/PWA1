/**
 * Created by: Jason Slocum
 * Class: PWA1
 * Goal: Goal9
 */

console.log("start canvas");

(function(){
    
    var canvas = document.createElement('canvas');
    
    canvas.width = 400;
    canvas.height = 300;
    
    document.body.appendChild(canvas);
    
    var ctx = canvas.getContext("2d");   
    var chartData = [24.7, 42, 89.6, 95];   
    var maxBarHeight = 200;
    var img = new Image();
    
    img.src = "images/bg.jpg";
    
    img.addEventListener('load', function(){
                ctx.drawImage(img,0,0,400,300)
                drawBars();
        }, false);
    

})();