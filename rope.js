class Rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB:pointB,
            stiffness: 0.004,
            length: 10
        }
        this.pointB=pointB;

        this.rope1= Constraint.create(options);
        World.add(world, this.rope1);
    }
    attach(body){
        this.rope1.bodyA = body;
    }
    

fly (){
    this.rope1.bodyA=null;
}


    display(){
        if(this.rope1.bodyA){

        
        var pointA = this.rope1.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}