class Mango1{
    constructor(x,y,radius) {
        var options={
            isStatic: true,
           restitution:0,
             friction:1,     
             
                 
          
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        this.image = loadImage("sprites/mango.png");
        this.visiblity=255; 
        World.add(world, this.body);
    
    }
    display(){
        var pos =this.body.position;
     fill ("red");
     ellipseMode(RADIUS);
     imageMode(CENTER);
     image(this.image,pos.x,pos.y,this.radius,this.radius);
     if(this.body .speed <3){

  
        //box2.display();
        }
      else {
        World . remove (world,this.body);
      push ();
      
      this.visiblity=this.visiblity-5;
      tint (255,this.visiblity);
      image (this.image,this.body.position.x,this.body.position.y,this.radius,this.radius);
      pop ();
      
      }
      
      
      }
      }
    
    

    