
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer1

var stone1

var rubber1

var sand1
var sand2
var sand3
var sand4
var sand5
var sand6
var sand7
var sand8
var sand9
var sand10





var plane1

var iron1

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

hammer1 = new hammer(mouseX,mouseY,50,30)

stone1 = new stone(200,500,60,30)

rubber1 = new rubber(100,300,50)

sand1 = new sand(20,50,10)
sand2 = new sand(50,60,10)
sand3 = new sand(300,70,10)
sand4 = new sand(400,80,10)
sand5 = new sand(310,90,10)
sand6 = new sand(55,20,10)
sand7 = new sand(40,50,10)
sand8 = new sand(88,70,10)
sand9 = new sand(20,200,10)
sand10 = new sand(70,150,10)

plane1 = new plane(400,690,800,40)

iron1 = new iron(90,360,50,50)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
hammer1.display()

stone1.display()

rubber1.display()

sand1.display()
sand2.display()
sand3.display()
sand4.display()
sand5.display()
sand6.display()
sand7.display()
sand8.display()
sand9.display()
sand10.display()


plane1.display()

iron1.display()


  drawSprites();
 
}