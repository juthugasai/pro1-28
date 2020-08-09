class Chain{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 10
        }

        this.pointB = pointB

       // this.boy.addImage(boy_img);
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }

    attach(body){
        this.chain.bodyA = body;
    }

    fly(){

        this.chain.bodyA=null;    
      }
      

    display(){
      
        image(this.boy,60,10);
      
        if(this.chain.bodyA){ 
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
       
       
      }
    }

    
}