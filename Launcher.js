class Launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.05,
            length: 10
        }

        this.pointB = pointB
        // this.sling = Constraint.create(options);
        this.launch = Constraint.create(options);
        World.add(world, this.launch);
    }

    fall(){
        this.launch.bodyA = null;
    }

    display(){
        if(this.launch.bodyA){
        var pointA = this.launch.bodyA.position;
        var pointB = this.pointB
        stroke(225)
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
        
    }
    
}