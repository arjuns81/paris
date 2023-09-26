function setup(){
    canvas=createCanvas(600,500);
    canvas.position(475,200)
}
var video="";
function preload(){
    video=loadImage("avatar.jpg");
}
function draw(){
    image(video,0,0,600,500);
    fill("red");
    text("eiffel tower",200,50);
    noFill();
    stroke("red");
    rect(190,30,150,400);
}