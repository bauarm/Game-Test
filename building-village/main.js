arr=[];

var canvas = document.getElementById('scene');
	canvas.width = window.innerWidth;
	canvas.height =window.innerHeight;
var ctx = canvas.getContext('2d');
var grid = 32;
var chank=grid*16;
var mapSize=chank*8;
var backColor = 'rgb(200,200,100 )';