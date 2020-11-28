var fixedrect,movingrect;
function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(400, 200, 30, 80);
  fixedrect.shapeColor="yellow";
  fixedrect.debug=true;
  movingrect=createSprite(400,400,80,30);
  movingrect.shapeColor="blue";
  movingrect.debug=true;

  fixedrect.velocityX = -5;
  fixedrect.velocityY = +5;
}

function draw() {
  background('black');  
console.log(fixedrect.x-movingrect.x);
  // movingrect.x=World.mouseX;
  // movingrect.y=World.mouseY;




  


  // if (movingrect.x - fixedrect.x < fixedrect.width/2 + movingrect.width/2
  //   && fixedrect.x -movingrect.x < fixedrect.width/2 + movingrect.width/2
  //   && movingrect.y - fixedrect.y < fixedrect.height/2 + movingrect.height/2
  //     && fixedrect.y - movingrect.y < fixedrect.height/2 + movingrect.height/2)
  // {

  //    movingrect.shapeColor = "red";
   
  // }
  // else{
  //   movingrect.shapeColor = "blue";
  // }
  if (movingrect.x - fixedrect.x < fixedrect.width/2 + movingrect.width/2
    && fixedrect.x - movingrect.x < fixedrect.width/2 + movingrect.width/2) {
 // movingrect.velocityX = movingrect.velocityX * (-1);
  fixedrect.velocityX = fixedrect.velocityX * (-1);
}

if (movingrect.y - fixedrect.y < fixedrect.height/2 + movingrect.height/2
  && fixedrect.y - movingrect.y < fixedrect.height/2 + movingrect.height/2){
 // movingrect.velocityY = movingrect.velocityY * (-1);
  fixedrect.velocityY = fixedrect.velocityY * (-1);
}
  
  drawSprites();
}