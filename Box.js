class Box{
    constructor(){
        this.body = Bodies.rectangle(50,20,50,50);
        World.add(world,this.body);
        this.image = loadImage("paper_crumpled_.png");
    }
    display(){
        var pos = this.body.position;
       
   imageMode(CENTER)
      image(this.image,pos.x,pos.y,70,70);

        if(keyWentDown(UP_ARROW)){
            imageMode(CENTER)
            this.image = loadImage("p2.png");
            image(this.image,30,30,70,70); 
        }

    
    }
}
