var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup       
  

  
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}


function setup() {
  
  //createCanvas()
  
monkey=createSprite(80,315,20,20);
monkey.addAnimation("moving",monkey_running)
monkey.scale=0.1
  
ground  =createSprite(400,350,900,10);
ground.velocityX=-4
ground.x =ground.width/2
  console.log(ground.x)
  
  
FoodGroup = new Group();
obstaclesGroup = new Group(); 
  
invisibleGround = createSprite(400,348,900,10);
  invisibleGround.visible = false;
  
}





function draw() {
background("white");
 

if(ground.x<0) {
    ground.x=ground.width/2;
  }  
  
 if (keyDown("space"))  {
     monkey.velocityY=-13;
  
    }
  monkey.velocityY=monkey.velocityY+0.5
  
   monkey.collide(invisibleGround);
  
    
FoodGroup = new Group();
obstacleGroup = new Group(); 
  
  
  drawSprites()
}  
 function obatacle(){
  if (frameCount%60===0){
  var obstacles = createSpite(600,120,40,10)   
   obstacles .y =math.round(random())  
   obstacles.addImage(obstaclesImage)
    obstacles.scale = 0.5;
    obstacles.velocityX = -3;
   
   obstacles.lifetime = 200;
   
      obstacles.depth = monkey.depth;
    obstacles.depth = monkey.depth + 1;
   
    obstaclesGroup()}
 }
