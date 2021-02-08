class hammer{
constructor(x,y,w,h){
var options = {
isStatic: false,
'density': 2,
'friction': 1.0,
'restitution': 0.5

};

this.x = mouseX;
this.y = mouseY;
this.w = w
this.h = h
this.body=bodies.rectangle(x,y,w,h,options);
World.add(world,this.body);
}
display()
{
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill(255);
    rect(0, 0, this.width, this.height);
    pop();

}




}