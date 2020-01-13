var parallax = document.getElementById("moveFundo");
var centerX = window.innerWidth/(-2);
var centerY = window.innerHeight/(-2);
var vel = 5/100000;

window.onscroll = function(){
    parallax.style.top = window.scrollY*(-1.05) + "px";
}
window.onmousemove = function(){
    parallax.style.transform = "translate("+ ((window.event.pageX*centerX*vel)) + "px,"+ ((window.event.pageY*centerY*vel)) +"px)";
}