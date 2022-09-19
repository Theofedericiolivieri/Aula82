var MouseEvent="empty";
var lastPositionX, lastPositionY;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="black";
widthline=1;
canvas.addEventListener("mousedown", myMousedown);
function myMousedown(e){
    MouseEvent="mousedown";
}
canvas.addEventListener("mousemove", mymousemove);
function mymousemove(e){
    PositionMouseX=e.clientX-offsetLeft;
    PositionMouseY=e.clientY-offsetTop;
    if (MouseEvent=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle= color;
        ctx.lineWidth=widthline;
        ctx.moveTo(lastPositionX,lastPositionY);
        ctx.lineTo(PositionMouseX,PositionMouseY);
        ctx.stroke();
    }
lastPositionX=PositionMouseX;
lastPositionY=PositionMouseY;
}
canvas.addEventListener("mouseup", mymouseup);
function mymouseup(e){
    MouseEvent="";
}
canvas.addEventListener("mouseleave", mymouseleave);
function mymouseleave(e){
    MouseEvent="";
}