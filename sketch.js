function preload(){
bg=loadImage("background.jpg");
sleep=loadAnimation("sleeping.jpg");
brush=loadAnimation("brushing.jpg");
gym=loadAnimation("gym.jpg");
eat=loadAnimation("eating.jpg");
drink=loadAnimation("drinking.jpg")
move= loadAnimation("moving.jpg")
}
function setup() {
  createCanvas(800,400);
 astronaut= createSprite(300,230);
 astronaut.addAnimation("sleeping",sleep);
 astronaut.scale=0.1;

 if(keyDown("UP_ARROW")){
   astronaut.addAnimation("brushing",brush)
   astronaut.changeAnimation("brushing")
   astronaut.y= 350;
   astronaut.velocityX=0;
   astronaut.velocityY=0;

   if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gymmming",gym)
    astronaut.changeAnimation("gymming")
    astronaut.y= 350;
    astronaut.velocityX=0;
    astronaut.velocityY=0;

    if(keyDown("LEFT_ARROW")){
      astronaut.addAnimation("eating",eat)
      astronaut.changeAnimation("eating")
      astronaut.y= 350;
      astronaut.velocityX=0;
      astronaut.velocityY=0;

      if(keyDown("m")){
        astronaut.addAnimation("moving",move)
        astronaut.changeAnimation("moving")
        astronaut.y= 350;
        astronaut.velocityX=2;
        astronaut.velocityY=2;
   }
 }
}
}
}
function draw() {
  background(255,255,255);  
  drawSprites();
}