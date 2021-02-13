class Umbrella{
    constructor(x,y){
        var options = {
            isStatic: true
        }
        this.body = Bodies.circle(x,y,50,options)
        this.x = x;
        this.y = y;
        this.r = this.r;
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position;
        push()        
         noStroke();
         fill(250,250,250)
        circle(pos.x,pos.y,100);
        pop()
    }
}