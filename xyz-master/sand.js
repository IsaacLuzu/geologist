class sand{
    constructor(x,y,r){
        var options = {
        isStatic: false,
        'density': 1,
        'friction': 5,
        'restitution': 1.3
        
        };
        
        this.x = x;
        this.y = y;
        this.r = r
        this.body=Bodies.circle(this.x, this.y, this.r/2, options)
        World.add(world,this.body);
        }
        

        display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        Mode(CENTER);
        fill(255);
        ellipse(0, 0, this.r, this.r);
        pop();

        }


}