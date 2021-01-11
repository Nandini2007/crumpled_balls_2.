class Ground{
    constructor(x,y){
        var opts ={
            isStatic : true
        }
        this.body = Bodies.rectangle(x,y,width,50,opts)
   // this.body.position.x = x;
    //    this.body.position.y = y;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        fill("lightGreen") 
        stroke("lightGreen") 
        rect(pos.x,pos.y,width,50);
    }
}