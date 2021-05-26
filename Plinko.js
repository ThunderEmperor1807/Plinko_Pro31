class plinko{
    constructor(x,y){
        var options={
            isStatic:true,
            friction:0
        }
        this.r=10
        this.body=Bodies.circle(x,y,this.r,options)
        this.r=10

        World.add(world,this.body)

    }

    display(){

        var pos=this.body.position

        push()
        fill(random(0,255),random(0,255),random(0,255))
        ellipseMode(RADIUS)
        ellipse(pos.x,pos.y,this.r,this.r)
        pop()
        
    }

}