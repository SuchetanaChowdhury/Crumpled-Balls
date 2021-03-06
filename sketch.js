const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, dustbin;
var paper, stretch;

function setup() {
  var canvas = createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  ground = new Box(400, 370, 800, 50);
  dustbin3 = new Box(645, 335, 90, 20);
  dustbin1 = new Box(600, 280, 30, 130);
  dustbin2 = new Box(690, 280, 30, 130);
  paper = new Ball(100, 160, 30, 30);
  stretch = new Launcher(paper.body, {x:100, y:160});
}

function draw() {
  background(0);  
  Engine.update(engine);
  ground.display();
  dustbin3.display();
  dustbin1.display();
  dustbin2.display();
  paper.display();
  stretch.display();
}

function mouseDragged(){
  Matter.Body.setPosition(paper.body, {x:mouseX, y:mouseY})
}

function mouseReleased(){
  stretch.fall();
}