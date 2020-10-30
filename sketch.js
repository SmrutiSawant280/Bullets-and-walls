var bullet,wall;
var speed,weight,thickness;





function setup() {
  createCanvas(1600,400);
  speed = random(203,250);
  weight = random(30,52);
  thickness = random(22,83);
  bullet = createSprite(50,200,20,20);
  bullet.velocityX = speed;
  bullet.shapeColor = "white";

  wall = createSprite(1500,200,60,height/2);
  wall.shapeColor = "grey";
}

function draw() {
  background(0,0,0); 
  
  if(wall.x - bullet.x < wall.width/2 + bullet.width/2){
    var deformation = 0.5*weight*speed*speed/thickness*thickness*thickness;
    if(deformation > 10){
      bullet.shapeColor = "red";
    }
    
    if(deformation < 10 ){
      bullet.shapeColor = "green";
    }

    }

  drawSprites();
}