plannerHideButtom.addEventListener("click",
function(){
	var hideElem = document.getElementById("canvas-info");
    var stdisp=hideElem.style.display;
    console.log(hideElem ,hideElem.style.display)
    if( stdisp==" "){
        hideElem.style.display="none";
       }
	    else if ( stdisp=="none"){
            hideElem.style.display="block";
        }
        else{
            hideElem.style.display="none";
	   }
}
)