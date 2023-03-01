var isDrawing = false;

function checkclick(e) {
 var clk=e.which

}
document.oncontextmenu = function (e){
 erase(e);
return false;
  
};



canvas.onclick =function(e){
  checkclick(e);
  draw(e)
}
canvas.onmousedown =function(){
  isDrawing = true;
}
canvas.onmouseup =function(){
  isDrawing = false;
}
canvas.onmouseout =function(){
  isDrawing = false;
}
canvas.onmousemove = function(e) {
     var dotx=Math.round(e.clientX);
     var doty=Math.round(e.clientY);
     var wdh = canvas.width;
     var hgt = canvas.height;
     var step = Number(document.getElementById('fram_step').value);
     var xcell = Math.round(dotx/(step));
     var ycell = Math.round(doty/(step));
     
     document.getElementById('cell').innerHTML = "cX"+" "+ xcell +" "+"cY"+" "+ ycell ;
     document.getElementById('cord').innerHTML = "X"+ dotx +":Y"+ doty ;
if (isDrawing == true)
  {
   if(e.which==1){draw(e); }  
    }
   else if(e.which==2){erase(e);  }
  

};
       
   
     
 function draw(e) {
  
  
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    var dotx=Math.round(e.clientX);
     var doty=Math.round(e.clientY);
    var tcolor = setColorBlock();
    var step = Number(document.getElementById('fram_step').value);
    
    var xcell = Math.round(dotx/(step));
     var ycell = Math.round(doty/(step));
    ctx.fillStyle = tcolor;
    ctx.fillRect((xcell-1)*step,(ycell-1)*step,step,step);
    
  }
};
   



function erase(e) {
  

     var canvas = document.getElementById('canvas');
  
    var ctx = canvas.getContext('2d');
    var dotx=Math.round(e.clientX);
     var doty=Math.round(e.clientY);
    var tcolor =setColor();
    var step = Number(document.getElementById('fram_step').value);
    
    var xcell = Math.round(dotx/(step));
     var ycell = Math.round(doty/(step));
    ctx.clearRect((xcell-1)*step,(ycell-1)*step,step,step);
    //ctx.fillStyle = "rgba(0,0,0,0.05)";
    /*ctx.fillStyle = tcolor;*/
    ctx.strokeRect((xcell-1)*step,(ycell-1)*step,step,step);
    
}

