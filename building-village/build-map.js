var step = 32;
/*var item = new Image();  
        item.src = 'build.png';*/
var item = new Image();   // Создает новое изображение
item.addEventListener("load", function() {
  // здесь выполняет drawImage функцию
}, false);
item.src = 'build.png'; // Устанавливает источник файла


var drawRect= function(i,x,y,w,h,a){//drawRect(64,64,32,32,45)
	   	//i-номер картинки в массиве, a-угол поворота берется из массива с описанием картинок wallArr[n].corner
	   	let dx=x+w/2, dy=y+h/2;
	   	if(a){
	   		a=a*(Math.PI/180)
	   		ctx.save();
	   		ctx.translate(dx,dy); //сдвигает точку вращения
	        ctx.rotate(a); 
	        ctx.translate(-dx,-dy);// возвращает точку центра на прежнее место
	   }	

	   		ctx.drawImage(item, wallArr[i].wiev[0], wallArr[i].wiev[1], w, h ,x, y, step, step);
	   		//1-картинка, 2/3-ее положение на спрайте, 4/5-ширина и высота

	   	if(a){
	   			ctx.restore();
	   	}
  

  };
		
		
		
var wallArr =[


wallLineV ={//Vertical lv
	name:"wallLineV",
	select:false,
	wiev:[64,64],
	corner:0,
	trans: false,
	gather:false,
	lift:false
    },
	wallLineH ={//horizontal lh
	name:"wallLineH",
	select:false,
	wiev:[64,64],
	corner:90,
	trans: false,
	gather:false,
	lift:false
    },
	wallCornerTL ={//top-left ctl
	name:"wallCornerTL",
	select:false,
	wiev:[192,64],
	corner:0,
	trans: false,
	gather:false,
	lift:false
    },
	wallCornerTR ={//top-right tr
	name:"wallCornerTR",
	select:false,
	wiev:[192,64],
	corner:90,
	trans: false,
	gather:false,
	lift:false
    },
	wallCornerDL ={//down-left dl
	name:"wallCornerDL",
	select:false,
	wiev:[192,64],
	corner:270,
	trans: false,
	gather:false,
	lift:false
    },
	wallCornerDR ={//down-right
	name:"wallCornerDR",
	select:false,
	wiev:[192,64],
	corner:180,
	trans: false,
	gather:false,
	lift:false
    },
wallCross ={
	name:"wallCross",
	select:false,
	wiev:[128,64],
	corner:0,
	trans: false,
	gather:false,
	lift:false
    },
wallTT ={//top
	name:"wallTT",
	select:false,
	wiev:[256,64],
	corner:0,
	trans: false,
	gather:false,
	lift:false
    },	
	wallTD ={//down
	name:"wallTD",
	select:false,
	wiev:[256,64],
	corner:180,
	trans: false,
	gather:false,
	lift:false
    },	
	wallTR ={//right
	name:"wallTD",
	select:false,
	wiev:[256,64],
	corner:90,
	trans: false,
	gather:false,
	lift:false
    },	
	wallTL ={//left
	name:"wallTD",
	select:false,
	wiev:[256,64],
	corner:270,
	trans: false,
	gather:false,
	lift:false
    },	
floorBad ={//wooden floor bad
	name:"wallLineV",
	select:false,
	wiev:[160,64],
	corner:0,
	trans: false,
	gather:false,
	lift:false
    }
];

function loder(){
for(i=0;i<wallArr.length;i++){
	var sptX=wallArr[i];
	 drawRect(i,i*step,step*2,step,step, sptX.corner);//64,64,32,32,45
	//sptX.draw(i*step,step,step,step,45)
	//ctx.drawImage(item, sptX.wiev[0], sptX.wiev[1], step, step ,i*step, step, step, step);
console.log(sptX)

	}
console.log("12")
	};

var room =[	["+","-","-","-","+"],
			["|","0","0","0","|"],
			["|","0","0","0","|"],
			["|","0","0","0","|"],
			["|","0","0","0","|"],
			["+","-","-","-","+"]
		];

var roomtest =[	["0","w","0","0","0","0","0"],
			    ["0","w","w","w","w","w","0"],
			    ["0","w","f","w","f","w","0"],
			    ["0","w","w","w","w","w","0"],
			    ["0","w","f","w","f","w","0"],
			    ["0","w","w","w","w","w","0"],
			    ["0","0","0","0","w","w","0"]
		];

var roomtest2 =[	["0","0","0","0","0","0","0"],
			    	["0","0","0","0","0","0","0"],
			    	["0","0","0","w","0","0","0"],
			    	["0","0","0","w","0","0","0"],
			    	["0","0","0","w","0","0","0"],
			    	["0","0","0","0","0","0","0"],
			    	["0","0","0","0","0","0","0"]
		];

function droomtest(a)//droomtest(roomtest2)
	{
	//var sptX=wallArr[i];
	for(i=0;i<a.length;i++)
		{
		for(j=0;j<a[i].length;j++)
			{
			var pars=a[i][j];
		 	console.log(pars)
			}
		}
	}

function spasetest(a)//spasetest(roomtest2) рассматривает окружение каждой клеточки на местности
	//a-образец помещения, b-массив со спрайтами
	{
	console.log(a.length);
	for(i=1;i<a.length-1;i++)

		{
		console.log(a[i]);
		console.log(i);
		for(j=1;j<a[i].length-1;j++)
			{
			try{
				var center=a[i][j];
				let east=a[i+1][j];
				let west=a[i-1][j];
				let south=a[i][j+1];
				let north=a[i][j-1];
				
				if(center=='w' && east=='w' && south=='w'){//верхний левый угол
					drawRect(2,i*step,j*step,step,step, wallArr[2].corner);
					
				}
				if(center=='w' && west=='w' && south=='w'){//верхний правый угол
					drawRect(3,i*step,j*step,step,step, wallArr[3].corner);
					

				}
				if(center=='w' && east=='w' && north=='w'){//нижний правый угол
					drawRect(4,i*step,j*step,step,step, wallArr[4].corner);
					

				}
				if(center=='w' && west=='w' && north=='w'){//нижний правый угол
					drawRect(5,i*step,j*step,step,step, wallArr[5].corner);
					

				}
				if(center=='w' && north=='w' && south=='w'){//вертикальная стена 
					drawRect(0,i*step,j*step,step,step, wallArr[0].corner);
					

				}
				if(center=='w' && west=='w' && east=='w'){//горизонтальная стена
					drawRect(1,i*step,j*step,step,step, wallArr[1].corner);
					

				}
				
				if(center=='w' && west=='w' && east=='w' && north=='w' && south=='w'){//крест
					drawRect(6,i*step,j*step,step,step, wallArr[6].corner);
					
				}

				if(center=='w' && west=='w' && east=='w' && north=='w' && south!=='w'){//верхняя примыкающая стена
					drawRect(8,i*step,j*step,step,step, wallArr[8].corner);
					
				}
				if(center=='w' && west=='w' && east=='w' && south=='w' && north!=='w'){//нижняя примыкающая стена
					drawRect(7,i*step,j*step,step,step, wallArr[7].corner);
					

				}
		 		if(center=='w' && north=='w' && south=='w' && west=='w' && east!=='w'){//левая примыкающая стена
					drawRect(9,i*step,j*step,step,step, wallArr[9].corner);
					

				}
		 		if(center=='w' && north=='w' && south=='w' && east=='w' && west!=='w'){//правая примыкающая стена
					drawRect(10,i*step,j*step,step,step, wallArr[10].corner);
					//console.log('0',north,'0')
					//console.log(west,center,east)
					//console.log('0',south,'0')

				}
		 		
			}
			catch(e){
				console.log(e);
				continue
			}
			}
		}
	return 'end';
	}





function drawRoom(a){//drawRoom(room)
	//var sptX=wallArr[i];
	for(i=0;i<a.length;i++){
		for(j=0;j<a[i].length;j++){
			var pars=a[i][j];
		 
		 console.log(pars)
		switch (pars) {
			case "+":
				drawRect(6,i*step,j*step,step,step, wallArr[6].corner);
			break;
			case "-":
				drawRect(0,i*step,j*step,step,step, wallArr[0].corner);
			break;
			case "|":
				drawRect(1,i*step,j*step,step,step, wallArr[1].corner);
			break;
			case "0":
				drawRect(11,i*step,j*step,step,step, wallArr[11].corner);
			break;
			default:
				//console.log("end");
		
		
		}
		
		
	}
	
	}
	


/*for(i=0;i<wallArr.length;i++){
	var sptX=wallArr[i];
	 drawRect(i,i*step,step*2,step,step, sptX.corner);//64,64,32,32,45
	//sptX.draw(i*step,step,step,step,45)
	//ctx.drawImage(item, sptX.wiev[0], sptX.wiev[1], step, step ,i*step, step, step, step);
console.log(sptX)

	}
console.log("12")*/
	};
		
		
		
		
		
testfunc.addEventListener("click", loder);