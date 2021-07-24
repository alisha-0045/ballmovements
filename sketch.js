var box;

function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,30,30);
  box.shapeColor="lightblue"

}

function draw() 
{
   background("blue");
   if(keyIsDown(UP_ARROW)){
     box.position.y = box.position.y-3;
   }

   if(keyIsDown(RIGHT_ARROW)){
     box.position.x = box.position.x +3;
   }

 

  drawSprites();
}




