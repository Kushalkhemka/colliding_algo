var movingrect;
var fixedrect;



function setup() {
  createCanvas(800,400);
  
  movingrect=createSprite(100,100,100,100);
  fixedrect=createSprite(400,100,100,100);

}

function draw() {

  background("white");  
  
  movingrect.x=mouseX
  movingrect.y=mouseY;

  //Algorithms
  if(movingrect.x-fixedrect.x<fixedrect.width/2+movingrect.width/2 
    && movingrect.y-fixedrect.y<fixedrect.height/2+movingrect.height/2
    && fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2
    && fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.height/2 )
  {
    movingrect.shapeColor="green";
    fixedrect.shapeColor="green";
  }
  else 
  {
    movingrect.shapeColor="yellow";
    fixedrect.shapeColor="yellow";
  }

  drawSprites();
}