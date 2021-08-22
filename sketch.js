
var bg, backgroundImg;

function preload() {
  backgroundImg = loadImage("images/bg.jpg");
  Iron = loadImage("images/iron.png")
}

function setup() {
  createCanvas(1000, 600);
  bg = createSprite(580,300,1000,600);
  bg.addImage(backgroundImg)
  bg.velocityY = 4
  bg.scale = 2 
  Man = createSprite(500,200,40,40)
  Man.addImage(Iron)
  Man.scale = 0.35
  
}

function draw() {
  if (bg.y > 600){
     bg.y = 300
  }
 
  if(keyDown("up")){
    Man.velocityY = -8
  } 
  if(keyDown("left")){
    Man.x -= 6
  }
  if(keyDown("right")){
    Man.x += 6
  }
  Man.velocityY += 0.2 

    drawSprites();
   
}

