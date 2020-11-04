var fixedRect, movingRect;

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  fixedRect = createSprite(200,200,40,50);
  fixedRect.shapeColor = "Green";
  movingRect = createSprite(300,300,40,50);
  movingRect.shapeColor = "Green";
}

function draw() {
  background(255,255,255);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  console.log(movingRect.x-fixedRect.x);

  if(movingRect.x-fixedRect.x < movingRect.width/2 + fixedRect.width/2 &&
    movingRect.x-fixedRect.x < movingRect.width/2 + fixedRect.width/2 &&
    movingRect.x-fixedRect.x < movingRect.height/2 + fixedRect.height/2 &&
    movingRect.x-fixedRect.x < movingRect.height/2 + fixedRect.height/2){

    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";
  }else{
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
  }
  drawSprites();
}