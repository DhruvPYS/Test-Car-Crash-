var car, speed, wall, weight;




function setup() {
  createCanvas(1600,400);

  car = createSprite(50,200,50,50)
  wall = createSprite(1500,200,60,height/2)
  car.shapeColor = "blue"
  wall.shapeColor = "red"

  speed = random(55,90)
  weight = random(400,1500) 
  
  car.velocityX = speed;


}

function draw() {
  background("white")
  background(255,255,255);  
  wall.depth = car.depth + 1
  if(wall.x - car.x < (car.width + wall.width)/2)
  {
  car.velocityX = 0;
  var def = 0.5 * weight * speed * speed/22509;
  }

  if(def>180  )
  {
  car.shapeColor = "green"
  }

  if(def<180 && def>100)
  {
  car.shapeColor = "yellow"
  }
  if(def<100)
  {
  car.shapeColor = "pink"
  }
  drawSprites();

}