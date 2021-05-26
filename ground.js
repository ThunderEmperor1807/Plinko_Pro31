class ground{
  constructor(){
    var options = {
      isStatic: true
  }
    this.body=Bodies.rectangle(400,790,800,20,options)
    this.width=800
    this.height=20

    World.add(world,this.body)

  }

  display(){

    var pos=this.body.position

    push()
    rectMode(CENTER)
    fill(random(0,255),random(0,255),random(0,255))
    rect(pos.x,pos.y,this.width,this.height)
    pop()
  }

}