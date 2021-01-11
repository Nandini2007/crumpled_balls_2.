class Bin{
    constructor(){
        var opts ={
            isStatic : true
        }
       // this.body = Bodies.rectangle(650,570,40,40,opts);
        this.image = loadImage("dustbin.png");
      //  World.add(world,this.body);
    }
    display(){
        imageMode(CENTER);
        image(this.image,650,570,200,200); 
    }
}