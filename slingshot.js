class SlingShot{
    constructor(bodyA,pointB){
        var options = {
            bodyA:bodyA,pointB:pointB,
            length : 10,stiffness:0.04

        }
        this.pointB=pointB;
      this.sling=Constraint.create(options);
      World.add(world,this.sling);  
    }
    fly(){
        this.sling.bodyA=null;
        console.log("check");
    }
    display(){
        if(this.sling.bodyA){

        
        var A=this.sling.bodyA.position;
        var B=this.pointB;
        strokeWeight(4);
        line(A.x,A.y,B.x,B.y);
        }
    }
} 
