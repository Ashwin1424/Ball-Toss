const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
var wall1, wall2, wall3, wall4;
var ball, ballOptions;
var button1, button2;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;
  wall1 = new Ground(200, 390, 400, 20);
  wall2 = new Ground(10, 200, 20, 400);
  wall3 = new Ground(200, 10, 400, 20);
  wall4 = new Ground(390, 200, 20, 400);
  ballOptions = {
    restitution:0.95
  };
  ball = Bodies.circle(200, 50, 20, ballOptions);
  World.add(world, ball);
  rectMode(CENTER);
  ellipseMode(RADIUS);
  
  button1  = createImg("right.png");
  button1.position(85, 30);
  button1.mouseClicked(horizontalForce);
  button1.size(40, 40)

  button2 = createImg("up.png");
  button2.position(30, 30);
  button2.mouseClicked(verticalForce);
  button2.size(40, 40)
}

function draw() 
{
  background(51);
  Engine.update(engine);

  wall1.show();
  wall2.show();
  wall3.show();
  wall4.show();
  ellipse(ball.position.x, ball.position.y, 20);
}

function horizontalForce(){
  Matter.Body.applyForce(ball, {x:0, y:0}, {x:0.05, y:0});

}

function verticalForce(){
  Matter.Body.applyForce(ball, {x:0, y:0}, {x:0, y:-0.05});

}