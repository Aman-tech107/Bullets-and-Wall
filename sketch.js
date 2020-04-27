var Bullet_speed = 0;
var Bullet_Weight = 0;
var bullet = 0;
var wall = 0;
var Damage = 0;
var Wall_thickeness = 0;

function setup() {
  createCanvas(1600,400);
  //createSprite(400, 200, 50, 50);
  Bullet_speed = random(223,321);
  Bullet_Weight = random(30,52);
  bullet = createSprite(50,200,50,10);
  bullet.shapeColor = "#fff";
  
  bullet.velocityX = Bullet_speed;
  Wall_thickeness = random(22,83);
  wall = createSprite(1500,200,Wall_thickeness,400);
}

function draw() {
  background(80,80,80);
  
  //bullet(Bullet_speed);
  BounceOff(wall,bullet);
  fill("Green");
  text(Bullet_speed,200,200);
  drawSprites();
  damage(Bullet_Weight,Bullet_speed,Wall_thickeness);
  if(Damage<=10){
    wall.shapeColor = "Green";
  } 
  if(Damage>10){
    wall.shapeColor = "Red";
  }
  textSize(25);
  text("Damage : "+Damage,50,50);
  fill("Red");
  text("(Wall thickness : "+Wall_thickeness,50,80);
  fill("Blue");
  text("Bullet Speed : "+Bullet_speed,50,110);
  fill("Red");
  text("Bullet Weight : "+Bullet_Weight+")",50,150);
  textSize(100);
  fill("#059905");
  text("WMSC",600,250);
}

function bullet(speed){
  
}

function damage(bulletweight,bulletspeed,wall_thickness){
  Damage = 0.5*bulletweight*bulletspeed*bulletspeed/(wall_thickness*wall_thickness*wall_thickness);
}