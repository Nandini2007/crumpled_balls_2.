class Clap{
    constructor(){
        var ops ={
            isStatic : true
        }
        this.body = Bodies.rectangle(400,350,800,700,ops);
         World.add(world,this.body);
         this.image = loadImage("clap_r.png");
    }
    display(){
     var pos = this.body.position;
    
     imageMode(CENTER);
     image(this.image,pos.x,pos.y,800,700);  
     
    }
}



