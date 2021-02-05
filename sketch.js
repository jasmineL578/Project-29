const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var platform1, platform2;
var polygon, polygonImage;
var score = 0;
function preload()
{
polygonImage=loadImage("polygon.png")


}

function setup()
{
    createCanvas(1200, 600);
    engine = Engine.create();
    world = engine.world;
    
    ground = new Ground(600,600,1200,20)
    platform1 = new Ground(390,300,250,10)
    platform2 = new Ground(700,250,250,10)
   
    box1 = new Box(300,275,30,40)
    box2 = new Box(330,275,30,40)
    box3 = new Box(360,275,30,40)
    box4 = new Box(390,275,30,40)
    box5 = new Box(420,275,30,40)
    box6 = new Box(450,275,30,40)
    box7 = new Box(480,275,30,40)
    
    box8 = new Box(330,235,30,40)
    box9 = new Box(360,235,30,40)
    box10 = new Box(390,235,30,40)
    box11 = new Box(420,235,30,40)
    box12 = new Box(450,235,30,40)

    box13 = new Box(360,195,30,40)
    box14 = new Box(390,195,30,40)
    box15 = new Box(420,195,30,40)

    box16 = new Box(390,155,30,40)

    box17 = new Box(790,220,30,40)
    box18 = new Box(760,220,30,40)
    box19 = new Box(730,220,30,40)
    box20 = new Box(700,220,30,40)
    box21 = new Box(670,220,30,40)
    box22 = new Box(640,220,30,40)
    box23 = new Box(610,220,30,40)

    box24 = new Box(760,180,30,40)
    box25 = new Box(730,180,30,40)
    box26 = new Box(700,180,30,40)
    box27 = new Box(670,180,30,40)
    box28 = new Box(640,180,30,40)

    box29 = new Box(730,140,30,40)
    box30 = new Box(700,140,30,40)
    box31 = new Box(670,140,30,40)

    box32 = new Box(700,100,30,40)
   // box17 = new Box(390,155,30,40)
    
    var options = {
        "density":3.0

    }
    polygon= Bodies.circle(100,300,5,options)
    World.add(world, polygon);

    slingshot = new SlingShot(this.polygon,{x:120,y:300})

}

function draw()
{
    background ("black");
    Engine.update(engine);

    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();

    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();

    box13.display();
    box14.display();
    box15.display();

    box16.display();

    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();

    box24.display();
    box25.display();
    box26.display();
    box27.display();
    box28.display();

    box29.display();
    box30.display();
    box31.display();

    box32.display();
    //box17.display();

    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();

    box8.score();
    box9.score();
    box10.score();
    box11.score();
    box12.score();

    box13.score();
    box14.score();
    box15.score();

    box16.score();

    box17.score();
    box18.score();
    box19.score();
    box20.score();
    box21.score();
    box22.score();
    box23.score();

    box24.score();
    box25.score();
    box26.score();
    box27.score();
    box28.score();

    box29.score();
    box30.score();
    box31.score();

    box32.score();
    
    platform1.display();
    platform2.display();
    slingshot.display();

    text("Score  " + score, width-300, 50)

    image(polygonImage,polygon.position.x,polygon.position.y,40,40);
    drawSprites();
}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32)
    slingshot.attach(this.polygon)
    }