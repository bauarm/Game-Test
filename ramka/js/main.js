arr=[];


function initialize() {
        var canvas = document.getElementById("canvas");
        if(canvas)
        {
         
                /*canvas.width = (document.documentElement.clientWidth);
    canvas.height =  (document.documentElement.clientHeight);*/
         canvas.width=document.getElementById('wdh').value;
         canvas.height=document.getElementById('hgt').value;
         }
};

function matrixArray(rows,columns){//matrixArray(3,3)
  var repeat = rows*columns;
  var arr = new Array();
  for(var i=0; i<columns; i++){
    arr[i] = new Array();
    for(var j=0; j<rows; j++){
      arr[i][j] = randomInteger(repeat);
    }
  }
  return arr;
}

function init(){
 initialize();setColor();setColorBlock();
	var canva = document.getElementById('canvas');
    var wdh = canva.width;
    var hgt = canva.height;
    var step = Number(document.getElementById('fram_step').value);
	            for(var i=0; i<wdh/step; i++){
                  arr[i] = new Array();
                    for(var j=0; j<hgt/step; j++){
                         arr[i][j] = 0;
                         }}
                arri.innerHTML=arr.length;  //canvas.style.backgroundColor=document.getElementById('color_canva').value;
	var y_pnt_mt =0;
    var x_pnt_mt=0;
    var y_pnt_lt=0;
    var x_pnt_lt =0;
    var x_hor_pnt=0;
  wv.innerHTML=wdh; hv.innerHTML=hgt; fv.innerHTML=step;
 
 if (canvas.getContext){
  for(i=0;i<hgt/step+1;i++){
	var obCanvas = canva.getContext('2d');
     obCanvas.beginPath();
     
     obCanvas.moveTo(y_pnt_mt, x_hor_pnt);
     obCanvas.lineTo( wdh, x_hor_pnt);
     obCanvas.stroke();
      var x_hor_pnt=x_hor_pnt+step;
     
 }
var y_ver_pnt=0;
 for(i=0;i<wdh/step+1;i++){
	var obCanvas = canva.getContext('2d');
    obCanvas.beginPath();
   
    obCanvas.moveTo(y_ver_pnt, x_pnt_lt);
    obCanvas.lineTo(y_ver_pnt,hgt );
    obCanvas.stroke();
 var y_ver_pnt=y_ver_pnt+step;
 }
}
 else {
                alert('net convas')
  }
};

function setColor() {
var itog = document.getElementById("canvas");
var r = document.getElementById("r").value;
var g = document.getElementById("g").value;
var b = document.getElementById("b").value;
var a = document.getElementById("a").value;
rv.innerHTML=r; gv.innerHTML=g; bv.innerHTML=b;av.innerHTML=a;
var getColor = 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
itog.style.backgroundColor = getColor;
return getColor;
}

function setColorBlock() {
var itog = document.getElementById("block1");
var r = document.getElementById("br").value;
var g = document.getElementById("bg").value;
var b = document.getElementById("bb").value;
var a = document.getElementById("ba").value;
brv.innerHTML=r; bgv.innerHTML=g; bbv.innerHTML=b;bav.innerHTML=a;
var getColor = 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
itog.style.backgroundColor = getColor;
return getColor;
}




rgl.oninput =function(){
	init();
}
clmk.oninput =function(){
	init();
}
clrbl.oninput =function(){
	setColorBlock();
}