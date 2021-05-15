const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint

var myEngine, myWorld, ground;
var bgImage;

var score = 0;
var gameState = "onSling"
var count = 0;

function preload(){  
  getTime();
}
function setup() {
  createCanvas(1200,600);
  myEngine = Engine.create();
  myWorld = myEngine.world 

  g1 = new Ground(600,580,1200,40)// constructor parameter x ,y w,h
  platform = new Ground(200,470,250,200)
  b1 = new Box(800,500,75,75)
  b2 = new Box(1000,500,75,75)
  p1 = new pig(900,500)
  l1 = new log(900,450,300,PI)

  
  b3 = new Box(800,400,75,75)
  b4 = new Box(1000,400,75,75)
  p2 = new pig(900,400)
  l2 = new log(900,350,300,PI)

  b5 = new Box(900,300,75,75)
  l3 = new log(960,250,150,PI/5)
  l4 = new log(840,200,150,PI/-5)
  
  
  

  // 360 = 2 PI ; PI
  bird = new bird(190,150)

 
 sling = new slingShot(bird.body, {x:190 ,y:170} )
 

  //b3 = new Box(300, 100, 50, 100)
}

function draw() {
  Engine.update(myEngine)
  if(bgImage){
    background(bgImage);
  }else{
    background("lightgreen")
  }
  
  textSize(25)
  text("Score:" + score,1000,50)

  g1.display()
  platform.display()
  b1.display()
  b2.display()
  
  p1.display()
  l1.display()

  bird.display()

  b3.display()
  b4.display()
  p2.display()
  l2.display()

  b5.display()
  l3.display()
  l4.display()

  p1.cal_score()
  p2.cal_score()

  sling.display();

  if(score === 100){
     gameState = "end"
     text("Congratulations for maximum score!!", 400,200)
  }

  if(count === 3){
    gameState = "end"
    text("Game Over!", 550,200)
  }
  
if(gameState === "end"){
  text( "press R to restart", 500, 300)
}


}

function mouseDragged(){
  if(gameState === "onSling")
    Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
  if(gameState === "onSling"){
    //fly the bird
    sling.fly()
    gameState = "release"
    count = count+1
  }

}

function keyPressed(){
  
  if(keyCode === 32 && gameState === "release"){
    // attach the bird back
    Matter.Body.setPosition(bird.body,{x:190,y:150})
    sling.attach(bird.body)

    bird.smokes = []
    gameState = "onSling"
  }
  if(keyCode === 82 && gameState === "end"){
    location.reload()
  }

}

async function getTime(){
  var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json()
  //console.log(responseJSON.datetime.slice(11,13) )
  var time = responseJSON.datetime.slice(11,13) 
  console.log(time)
  if ( time > 18 ){
    //console.log("darkbg")
    bgImage = loadImage("spritesimg/bg2.jpg")
    
  }else{
    //console.log("lightbg")
    bgImage = loadImage("spritesimg/bg.png")
  }
}