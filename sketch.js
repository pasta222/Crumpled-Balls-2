const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground,paper;
var trashbinImg,trashbin;
var trashbinP1, trashbinP2, trashbinP3;

function preload(){

    trashbinImg = loadImage("Sprite-Images/trashbin.png");

}

function setup(){

    var canvas = createCanvas(1200,600);

    engine = Engine.create();
    world = engine.world;

    ground = new Ground();
    paper = new Paper();

    trashbin = createSprite(964,520,20,20);
    trashbin.addImage(trashbinImg);
    trashbin.scale = 0.45;

    trashbinP1 = new Dustbin(902,505,10,120);
    trashbinP2 = new Dustbin(962,565,130,10);
    trashbinP3 = new Dustbin(1024,505,10,120);
}

function draw(){
    background(0);
    Engine.update(engine);

    ground.display();

    paper.display();

    trashbinP1.display();
    trashbinP2.display();
    trashbinP3.display(); 

    drawSprites();
}

function keyPressed(){

    if(keyCode === UP_ARROW){
        Matter.Body.applyForce(paper.body,paper.body.position,{x:74,y:-75});
    }
}
