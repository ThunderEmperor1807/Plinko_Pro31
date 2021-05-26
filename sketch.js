const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var dArray=[]
var pArray=[]
var particleArray=[]

function setup(){

  createCanvas(800,800)

  engine=Engine.create()
  world=engine.world

  ground1=new ground()
  
  for(k=90;k<800;k+=90){
    dArray.push(new division(k,700,5,200))
  }

  for (i=25;i<800;i+=50){
    pArray.push(new plinko(i,100))
  }

  for (i=50;i<800;i+=50){
    pArray.push(new plinko(i,150))
  }

  for (i=25;i<800;i+=50){
    pArray.push(new plinko(i,200))
  }

  for (i=50;i<800;i+=50){
    pArray.push(new plinko(i,250))
  }

  for (i=25;i<800;i+=50){
    pArray.push(new plinko(i,300))
  }

  for (i=50;i<800;i+=50){
    pArray.push(new plinko(i,350))
  }

  for (i=25;i<800;i+=50){
    pArray.push(new plinko(i,400))
  }

  for (i=50;i<800;i+=50){
    pArray.push(new plinko(i,450))
  }

  for (i=25;i<800;i+=50){
    pArray.push(new plinko(i,500))
  }

  for (i=50;i<800;i+=50){
    pArray.push(new plinko(i,550))
  }

  //p1=new particle(200,10)

  b1=new border(0,400,5,800)
  b2=new border(800,400,5,800)
  b3=new border(400,0,800,5)
  b4=new border(400,800,800,5)
}

function draw(){
  background(0)
  Engine.update(engine)

  push()
  fill("white")
  textSize(20)
  text("100",385,770)
  text("50",305,770)
  text("50",485,770)
  text("30",210,770)
  text("30",570,770)
  text("20",130,770)
  text("20",660,770)
  text("10",35,770)
  text("10",750,770)
  text("Press the mouse above the white line to release particles",150,50)

  rect(0,85,800,5)
 
  line(0,100,800,100)
  

  ground1.display()

  for(k=0;k<dArray.length;k++){
    dArray[k].display()
  }

  for(i=0;i<pArray.length;i++){
    pArray[i].display()
  }

  //p1.display()

  for(i=0;i<particleArray.length;i++){
    particleArray[i].display()
    
  }
}

function mousePressed(){
  if (mouseY<100){
    particleArray.push(new particle(mouseX,mouseY))

  }



}