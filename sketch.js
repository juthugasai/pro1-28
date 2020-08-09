
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var boy_img,ground,tree,boy,tree_img;
var stone,mango1,mango2,mango3,mango4,mango5;
var chain

function preload()
{
	
	boy_img=loadImage("boy.png")
	tree_img=loadImage("tree.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground=createSprite(400,680,800,20);


	this.boy=createSprite(200,600,50,30)
	this.boy.addImage(boy_img);
	this.boy.scale = 0.1;
	  
	tree=createSprite(600,490);
	tree.addImage(tree_img);
	tree.scale=0.3;

	stone=new Stone(150,550) 
	
	mango1=new Mango(600,440);
	mango2=new Mango(600,380);
	mango3=new Mango(680,380);
	mango4=new Mango(500,440);
	mango5=new Mango(680,440);


	chain = new Chain(stone.body,{x: 150, y : 535});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  drawSprites()
  //Engine.update(engine);

  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  //chain.display();


 /*detectollition(stone,mango1);
  detectollition(stone,mango2);
  detectollition(stone,mango3);
  detectollition(stone,mango4);
  detectollition(stone,mango5);
*/
}


function keyPressed(){

if (keyCode=== 32){

	Matter.Body.setPosition(stone.body,{x: 150, y : 535})
	chain.attach(stone.body)

}


}

/*function detectollition(Lstone,Lmango){


	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position 

	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body,false);

	}



	//mango1.isStatic=false;
	//mango2.isStatic=false;
	//mango3.isStatic=false;
	//mango4.isStatic=false;
	//mango5.isStatic=false;
 }
*/
 function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
       chain.fly();
}
