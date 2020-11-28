const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload(){
doc = loadImage("images/doctor1.png");
bg = loadImage("images/bg.gif");
boy_img = loadImage("images/boy.png");
}

// corona shape in not coming circle why,have expprimented on the values of raduis also
//why the syringe in not coming on the hand
function setup(){
    engine = Engine.create();
	world = engine.world;
   var canvas = createCanvas(1350,620);
     doctor = createSprite(100,510,40,0);
    doctor.addImage(doc);
    doctor.scale = 0.9;
    boy = createSprite(1100,580,40,0);
    boy.addImage(boy_img);
    boy.scale = 0.6;
    corona1 = new Corona1(900,120,140);
    corona2 = new Corona2(1100,170,140);
    corona3 = new Corona3(1150,70,140);
    corona4 = new Corona4(900,240,140);
    corona5 = new Corona5(1250,250,140);  
    corona6 = new Corona6(1050,60,140);    
    syringe = new Syringe(130,530,70);
     slingshot = new Slingshot(syringe.body,{x:230, y:360});
    Engine.run(engine);
    }

function draw(){
   background(bg);
      slingshot.display();
  syringe.display();
  corona1.display();
  corona2.display();
  corona3.display();
  corona4.display();
  corona5.display();
  corona6.display();
   detectCollision(syringe,corona1);
   detectCollision(syringe,corona2);
   detectCollision(syringe,corona3);
   detectCollision(syringe,corona4);
   detectCollision(syringe,corona5);
   detectCollision(syringe,corona6);
     drawSprites();
    textSize(14);
	fill("white");
	text("'Press Space To Get A Second Chance To Play'",100,50);
}

function mouseDragged(){
	Matter.Body.setPosition(syringe.body, {x: mouseX , y: mouseY});
  }
  
  function mouseReleased(){
	slingshot.fly();
  }
  
  function keyPressed(){
	if (keyCode === 32){
		Matter.Body.setPosition(syringe.body,{x:210,y:530});
		slingshot.attach(syringe.body);
	}
  }

  function detectCollision(lsyringe,lcorona){
    coronaBodyPosition = lcorona.body.position;
    syringeBodyPosition = lsyringe.body.position;
    
    var distance = dist(syringeBodyPosition.x,syringeBodyPosition.y,coronaBodyPosition.x,coronaBodyPosition.y);
    if(distance<=lcorona.r+lsyringe.r){
    Matter.Body.setStatic(lcorona.body,false);
    }
      }
    