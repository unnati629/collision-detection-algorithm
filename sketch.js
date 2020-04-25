var rect1, rect2;

function setup() {
  createCanvas(800,800);
  rect1 = createSprite(400, 200, 50, 50);
  rect1.shapeColor = "red";

  rect2 = createSprite(200, 600, 50, 50);
  rect2.shapeColor = "red";

  rect1.debug = true;
  rect2.debug = true;
}

function draw() {
  background(0,0,0); 
  
  rect2.x = mouseX;
  rect2.y = mouseY;
  
  if(rect2.x - rect1.x < rect2.width/2 + rect1.width/2
    && rect1.x - rect2.x < rect2.width/2 + rect1.width/2 
    && rect2.y - rect1.y < rect2.height/2 + rect1.height/2
    && rect1.y - rect2.y < rect2.height/2 + rect1.height/2 ){
      
    rect1.shapeColor = "green";
    rect2.shapeColor = "green";
  }
  else{
    rect1.shapeColor = "red";
    rect2.shapeColor = "red";
  }
  drawSprites();
}