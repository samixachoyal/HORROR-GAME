var tower,towerImage;

function preload(){
  
towerImage = loadImage("tower.png");
  
}

function setup(){
  
createCanvas(600,600);  
  
tower = createSprite(300,300,100,100);
tower.addImage("tower",towerImage);
tower.velocityY = 4; 
    
}

function draw(){
  
background("black");

if(tower.y>600){
  
tower.y = 300;
  
}  
    
drawSprites();  
  
}

