class particle{
    constructor(x,y){
        var options={
            isStatic:false,
            restitution:1
        }

        this.r=8
        this.body=Bodies.circle(x,y,this.r,options)
        this.r=8
        this.color =color(random(0,255),random(0,255),random(0,255))
        World.add(world,this.body)
    }

    display(){
        var pos=this.body.position
        var angle=this.body.angle

        push()
        translate(pos.x,pos.y)
        rotate(angle)
        fill(this.color)
        ellipseMode(RADIUS)
        ellipse(0,0,this.r,this.r)
        pop()

    }
}