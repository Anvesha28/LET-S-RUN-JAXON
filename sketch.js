 var runner, runner_moving;
 var power, path, energyDrink, coin, bomb;

 function preload(){
  //pre-load images
 runner_moving = loadAnimation("runner-1.png", "runner-2.png");
 backgroundImage = loadImage("path.png");
 itemsImage = loadImage("power.png", "path.png", "energyDrink.png", "coin.png", "bomb.png");

 }

 function setup () {
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200, 200);
  path.addImage(backgroundImage);
  path.velocityY = 4

  runner = createSprite(300, 300);
  runner.addAnimation("runner", runner_moving);
  runner.scale = 0.1;

  border1 = createSprite(375, 200, 40, 399);
  border1.visible = false;
  
  border2 = createSprite(25, 200, 50, 399);
  border2.visible = false;

 }

 function draw() {
  background(0);

 runner.x = mouseX;
 runner.collide(border1);
 runner.collide(border2);
if(path.y >400){ 
  path.y = height/2
}
  drawSprites() 
  
 }

 function spawnItems() {

 if (frameCount % 60 === 0) {
  items = createSprite(200, 200, 20, 20);
  items.addImage(itemsImage);
  items.x = Math.round(random(26, 374));
  items.velocityY = -4
   }
 }