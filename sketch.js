
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

 var boyImg,boy;
var rope;



function preload()
{
	boyImg = loadImage("boy.png");
  
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	tree=new TREE(570,512,412,330);
	ground=new Ground(200,690,1200,20);
	stone=new Stone(250, 600, 30,20);
	mango1=new Mango1(420,500, 50)
  mango2=new Mango1(438,480, 50)
  mango3=new Mango1(500,410, 50)
  mango4=new  Mango1(620,400, 50)
  mango5=new  Mango1(720,439,50)
  rope = new Rope(stone.body,{x:95,y:565});
	Engine.run(engine);
  boy=Bodies.rectangle(150,600,20,510);
}


function draw() {
  rectMode(CENTER);
  background(225);

  
  drawSprites();
  tree.display();
  ground.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  rope.display();   


 
 
  imageMode(CENTER);
	image(boyImg,boy.position.x,boy.position.y,200,150);

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
}

function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
  rope.fly();
  
}
function keyPressed(){
  if(keyCode===32){
    Matter.Body.setPosition(stone.body,{x:235,y:420})
    rope.attach(stone.body);

  }
}
function detectCollision(lstone,lmango){
mangoBodyPosition=lmango.body.position
stoneBodyPosition=lstone.body.position

var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
if(distance<=lmango.r+lstone.r)
{
  Matter.Body.setStatic(lmango.body,false);
}


}

