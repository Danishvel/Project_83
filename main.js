canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

var last_X , last_Y;

color = "Red";
width_line = 10;

var width = screen.width;
var new_width = screen.width - 30;
var new_height = screen.height - 300;

if(width < 992)
{
    document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").height = new_height;
    document.body.style.overflow = "hidden";
}
canvas.addEventListener("touchstart", my_touchstart);

function my_touchstart(e)
{
    color = document.getElementById("color").value;
    width_line = document.getElementById("width_of_the_line").value;
    console.log("touchstart");
}


canvas.addEventListener("touchmove", my_touchmove);

function my_touchmove(e)
{
    color = document.getElementById("color").value;
    width_line = document.getElementById("width_of_the_line").value;
    current_X = e.touches[0].clientX - canvas.offsetLeft;
    current_Y = e.touches[0].clientY - canvas.offsetTop;
    ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_line;
        
        ctx.moveTo(last_X, last_Y);
        ctx.lineTo(current_X,current_Y);
        ctx.stroke(); 

    last_X = current_X;
    last_Y = current_Y;
    console.log("my_touchmove");

    console.log("current_X = " + current_X + "current_Y = " + current_Y);
    console.log("last_X = " + last_X + "last_Y = " + last_Y);
}

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{
    color = document.getElementById("color").value;
    width_line = document.getElementById("width_of_the_line").value;
    mouseevent = "mousedown";
    console.log(mouseevent);
}

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e)
{
    color = document.getElementById("color").value;
    width_line = document.getElementById("width_of_the_line").value;
    mouseevent = "mouseup";
    console.log(mouseevent);
}

canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e)
{
    color = document.getElementById("color").value;
    width_line = document.getElementById("width_of_the_line").value;
    mouseevent = "mouseleave";
    console.log(mouseevent);
}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e)
{
    color = document.getElementById("color").value;
    width_line = document.getElementById("width_of_the_line").value;
    current_X = e.clientX - canvas.offsetLeft;
    current_Y = e.clientY - canvas.offsetTop;

    if (mouseevent == "mousedown"){

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_line;
        
        ctx.moveTo(last_X, last_Y);
        ctx.lineTo(current_X,current_Y);
        ctx.stroke();
    }
    last_X = current_X;
    last_Y = current_Y;
    console.log("current_X = " + current_X + "current_Y = " + current_Y);
    console.log("last_X = " + last_X + "last_Y = " + last_Y);
}

function clearArea(){
    ctx.clearRect(0, 0, ctx.canvas.height, ctx.canvas.width);
}