class Paper  {

    constructor(x,y,r) {
    
    var options={
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2
    
    
    }
    this.x=x
    this.y=y
    this.radius=r
    this.body=Bodies.circle(this.x, this.y, this.radius , options)
    World.add(world, this.body)
    }
    
    display(){
        var pos=this.body.position
        ellipseMode(RADIUS)
        ellipse(pos.x,pos.y,this.radius,this.radius)
    
    }
}