
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bgImg;
function preload()
{
  //sound= loadSound("bgMusic.mp3");
  bgImg = loadImage("bgi.gif");
 // clap = loadImage("clap_r.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.

 // box1.depth = 0;
 box1 = new Box();
  bin = new Bin();
  dBin = new Block(630,height-60,90,10) ;
  dBin1 = new Block(630+50,height-115,10,120) ;
  dBin2 = new Block(630-50,height-115,10,120) ;
//bin.depth = 1;
support = new Block(50,130,70,10)
support1 = new Block(170,200,70,10)
support2 = new Block(500,600,70,10)
support3= new Block(300,400,70,10)
support4 = new Block(400,300,70,10)
corner1 = new Block(0,height/2,10,height);
corner2 = new Block(width,height/2,10,height);
corner3 = new Block(width/2,0,width,10);
corner4 = new Block(width/2,height,width,10);
  ground = new Ground(width/2,height-20);
   
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bgImg);
//  sound.play();
  support1.display();
  support2.display();
  support3.display();
  support4.display();
  box1.display();
  bin.display();
  support.display();
  support1.display(); 
  support2.display();
  support3.display(); 
  support4.display();

  /*dBin.display();
  dBin1.display();
  dBin2.display();*/
  ground.display();

  drawSprites();
  fill("black")
  textSize(30); 
  fill("red") 
 text("press ",width/2-100,60);
 fill("blue")
 text(" the ",width/2-20,60);
 fill("red")
 text(" UP ",width/2+35,60);
 fill("blue")
 text("arrow",width/2+90,60);
 fill("red")
 text(" key",width/2+175,60);
 fill("black")
 text("Make       litter    ",width/2-100,100)
 fill("green")
 text("     the         jump ",width/2-60,100)
 fill("magenta")
 text("And       it     dustbin",width/2-100,140)
 fill("brown")
 text("    put    in",width/2-70,140)
}
function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(box1.body,box1.body.position,{x:0.02,y:-0.10})
  }
}



