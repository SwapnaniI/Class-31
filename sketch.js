const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var boy,boyAnimation;
var thunder1,thunder2,thunder3,thunder4;
var num;
var thunder;
var tree1,tree2;
var xPosition1,xPosition2;
var umbrella;
var drops = [];

function preload() {
    boyImg = loadImage("walking_1.png");
    thunder1 = loadImage("1.png");
    thunder2 = loadImage("2.png");
    thunder3 = loadImage("3.png");
    thunder4 = loadImage("4.png");

    boyAnimation = loadAnimation("walking_1.png","walking_2.png","walking_3.png","walking_4.png","walking_5.png","walking_6.png","walking_7.png","walking_8.png")

    tree1 = loadImage("tree1.png");
    tree2 = loadImage("tree2.png");

    
}

function setup(){
    var canvas = createCanvas(500,800);
    engine = Engine.create();
    world = engine.world;

    thunder = createSprite(-10,random(5,20),10,10);

    boy = createSprite(200,685,10,10);
    boy.addAnimation("animation", boyAnimation);
    boy.scale = 0.3

    ground = new Ground(600,height,1200,20);

    umbrella = new Umbrella(205,643)

    xPosition1 = 880;
    xPosition2 = 620;

    
        for(var i = 0; i < 100; i++){           
            drops.push( new Rain (random(20,480), random(-10,300)) )              
            console.log(i)
        }
        
    
    
    
}

function draw(){
    background(0);
    Engine.update(engine);

    ground.display();
   
    for(var i = 0; i < 100; i++){          
                
        drops[i].display();
        drops[i].reset();
        
    }
   

     imageMode(CENTER)
     image(tree2,xPosition2,740,100,100);
     image(tree1,xPosition1,700,150,200);
     

     xPosition1 = xPosition1-4;
     xPosition2 = xPosition2-4;

     if(xPosition1<0){
        xPosition1 = 880;
     }
     if(xPosition2<0){
        xPosition2 = 620;
    }
    
   // console.log(mouseX,mouseY);

    spawnThunder();
    
   //umbrella.display();

   
   
    
    
    drawSprites();
}

function spawnThunder(){
    num = Math.round(random(1,4));
    if(frameCount % 90 === 0){
        thunder.x=random(20,470);
        thunder.y=random(5,20);
        
        switch(num){
            case 1: thunder.addImage(thunder1);
            thunder.scale = 0.7;
            break;
            case 2: thunder.addImage(thunder2);
            thunder.scale = 0.7;
            break;
            case 3: thunder.addImage(thunder3);
            thunder.scale = 0.7;
            break;
            case 4: thunder.addImage(thunder4);
            thunder.scale = 0.7;
            break;

        }
    }
}

