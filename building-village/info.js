scene.onmousemove = function(e) {
    var dotX = Math.round(e.clientX - scene.offsetLeft);
    var dotY = Math.round(e.clientY - scene.offsetTop);
    
    //var wdh = scene.width;
    //var hgt = scene.height;
    var xcell = Math.floor(dotX/grid);
    var ycell = Math.floor(dotY/grid);
    //document.getElementById('cell').innerHTML = "cX" + " " + xcell + " " + "cY" + " " + ycell;
    //let chec = arr[xcell][ycell];
    
    crdY.innerHTML=dotX +" ";
    crdX.innerHTML= +" "+ dotY;
    cellY.innerHTML= ycell +" ";
    cellX.innerHTML= +" "+ xcell;
    //arrch.innerHTML = chec;
    
    
    //document.getElementById('cord').innerHTML = arr[xcell][ycell].name;
    
    
    };