var Monkey , monkey_running;
var jumgleImage,player;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score ,survivalTime=0;
var invisibleGround;
var back_image;

function preload(){
  
  
  monkey_running =           loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png", "Monkey_10.png");
  
  bananaImage = loadImage("banana.png");
  
  obstacleImage = loadImage("stone.png");
 
  jungleImage = loadImage("jungle.jpg")
  
}



function setup() {
 createCanvas(800,800);
  
  
    back_image = createSprite(400,400,800,800);
  back_image.addImage(jungleImage);
  
  // create sprite for the monkey.
  
  Monkey = createSprite(80,545,20,20);
  Monkey.addAnimation("moving",monkey_running);
  Monkey.scale = 0.1;
  


 invisibleGround = createSprite(400,555,1600,5);
 invisibleGround.visible = false;
  
  score = 0;
  
  FoodGroup = new Group();
  
  obstacleGroup = new Group();
  
}


function draw() {
background("white");
   drawSprites();
  
if(back_image.x < 300){
   back_image.x = 400;
}
  
  back_image.velocityX = -1;
  
  Monkey.collide(invisibleGround);
  
  if(keyDown("space")&& Monkey.y >= 200){
    Monkey.velocityY = -12;
  }
  
  Monkey.velocityY = Monkey.velocityY + 0.8;
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime += Math.round(getFrameRate()/30)
  text("SURVIVAL TIME :"+ survivalTime,500,100);
   text("SCORE = "+ score,500,150)
  
  if(FoodGroup.isTouching(Monkey)){
    FoodGroup.destroyEach();
    score = score+1;
  }
  
  if(obstacleGroup.isTouching(Monkey)){
    fill("black");
    text("Game Over",400,400);
    FoodGroup.setVelocityEach (0);
    monkey.scale = 0.2;
    obstacleGroup.setVelocityEach (0);    
    
  }      
  
  switch (score){
    case 10: player.scale = 0.12;
      break;
    case 20: player.scale = 0.14;
      break;
    case 30: player.scale = 0.16; 
      break;
    case 40: player.scale = 0.18;
      break;
    default: break;  
  }
  //call food and obstacles function.
  
  food();
  
  obstacles();
    
 
  

 
}

function food(){
 if(frameCount % 80 === 0){
 var banana = createSprite(600,530,20,30);
     banana.y = Math.round(random(120,200));
   banana.scale = 0.1;
   banana.velocityX = -4;
   banana.lifetime = 600;
   banana.addImage(bananaImage);
   FoodGroup.add(banana);
}
  
}

function obstacles (){
  if(frameCount % 100 === 0){
 var obstacles = createSprite(400,540,40,40);
     obstacles.lifetime = 600;
     obstacles.scale = 0.1;
     obstacles.velocityX = -4;
     obstacles.addImage(obstacleImage);
     obstacleGroup.add(obstacles);
    
  }
  
  
  
}

