//Create variables here
var dog,database;
function preload()
{
  
dogImg=loadImage("Dog.png");


}

function setup() {
  database = firebase.database();
  createCanvas(500,500);
 
  dog = createSprite(250,250,10,10);
  dog .addImage(dogImg)
  dog.scale = 0.15;


}


function draw() {  
background(46, 139, 87)
  drawSprites();
  //add styles here
text("I am tom.your virtual dog",150,20)
fill("black")
}



