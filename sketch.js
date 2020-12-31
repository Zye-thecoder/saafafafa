var bgimg,bg

function preload(){

  bgimg=loadImage('my project/images/bg.jpg')
  bggimg=loadImage('my project/images/bgg.jpg')
  lmimg=loadImage('my project/images/lm.jpg')
}
function setup() {
  createCanvas(800,800);
 bg=createSprite(400, 400, 800, 800);
 bg.addImage('background',bgimg)
}

function draw() {
  background(bg);  
  drawSprites();
}
