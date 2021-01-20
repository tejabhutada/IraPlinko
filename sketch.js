const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var divisions=[],plinkos=[];
var divisionHeight = 300

function setup() {
 createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(600,788,1200,16);

  
 for(var k = 0; k<=width; k=k+80){
    divisions.push(new Division(k ,height-divisionHeight/2 ,10, divisionHeight  ))
    }

    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }
}
  

function draw() {
  stroke("red");
  strokeWeight(4);
  background(0);  
  Engine.update(engine);
  ground.display();
  for(var k = 0;k<divisions.length;k++){
    divisions[k].display();
  }

 
 for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }

}