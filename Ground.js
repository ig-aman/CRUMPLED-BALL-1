class Ground {
    constructor(x, y, width, height){
       var options = {
 
         isstatic : true,
         'restitution': 0,
        'friction': 0,
        'density':1
      }
         
        this.body = Bodies.rectangle(x, y,width, height, options);
        this.body.width = width;
        this.body.height = height;
       
        World.add(world, this.body);
    }
    display(){
         rectMode(CENTER);

     fill(225);
    
     rect(this.body.position.x, this.body.position.y, this.width, this.height);
    }
 };