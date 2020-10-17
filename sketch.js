
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper_ball,ground,dustbinwall1,dustbinwall2,dustbinwall3;


function preload()
{
	
}

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	paper_ball = new Paper(200,435,16
		)
	
	ground = new Ground(400,450,800,50)
	
	dustbinwall1 = new Dustbin(530,445,120,15); 
	dustbinwall2 = new Dustbin(485,395,15,100); 
	dustbinwall3 = new Dustbin(575,395,15,100);

	
	
	
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paper_ball.display();
  ground.display();
  dustbinwall1.display();
  dustbinwall2.display();
  dustbinwall3.display();
 
  drawSprites();
 
}

function  keyPressed() {
	if(keyCode === UP_ARROW) {

		Matter.Body.applyForce(paper_ball.body,paper_ball.body.position,{x:20,y:-55})

	}
}

