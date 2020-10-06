class Bob{
    constructor(x,y){
    var options={
        //isStatic:false,
        restitution:1,
        friction:0.5,
        density:1.2
    }
    this.body=Bodies.circle(x,y,15,options);
    this.radius=15;
    World.add(world,this.body);
    }
    display(){
        fill("red");
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
    }
}