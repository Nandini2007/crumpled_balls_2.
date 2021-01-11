class Block{
constructor(x,y,width,height){
    var opts ={
        isStatic : true
    }
  this.body = Bodies.rectangle(x,y,width,height,opts); 
  this.width = width;
  this.height = height;
 // this.image = loadImage("supprt.PNG")
  World.add(world,this.body);
}
display(){
    var pos  = this.body.position;
    fill("red");
    rect(pos.x,pos.y,this.width,this.height);
//image(this.image,pos.x,pos.y,this.width,this.height);
}
}

