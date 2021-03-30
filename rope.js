class Rope{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:1.2,
            length:250,
        }
        this.rope= Constraint.create(options);
        this.pointB = pointB
        World.add(world,this.rope);

    }

    display(){
        if(this.rope.bodyA){
        var pointA = this.rope.bodyA.position;
        var pointB = this.pointB;
        push();
        strokeWeight(2);
        stroke("yellow");
        line(pointA.x, pointA.y, pointB.x ,pointB.y);
        pop();
        }
    }

}