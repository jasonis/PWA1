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
    
    function drawBars(){
            ctx.font = '14px Georgia';
            
            for(var i = 0, max = chartData.length; i < max; i++){
                    ctx.beginPath();
                    ctx.fillStyle = 'rgba(100, 200, 200, 0.75)';
                    var height = maxBarHeight*chartData[i]/100;
                    ctx.rect(i*80+90, 270-height, 50, height);
                    ctx.fill();
                    ctx.fillStyle = 'rgb(255, 255, 255)';
                    ctx.fillText(chartData[i], i*85+95, 265-height, 50, height );           
            };
        drawChartText();
    };
    
    function drawChartText(){
            ctx.font = '20px Georgia';
            ctx.fillStyle = 'rgb(255, 255, 255)';
            ctx.fillText('TEST GRADES', 30, 30);
            
            var xAxisData = ['Quiz 1', 'Quiz 2', 'Quiz 3', 'Quiz 4'];
            
            ctx.font = '14px Georgia';
            ctx.fillStyle = 'rgb(0, 0, 0)';
            
            for(var i = 0, max = xAxisData.length; i < max; i++){
                    ctx.fillText(xAxisData[i],i*80+95, 290);
            };
    
    };
    
    
})();