class Chain {
constructor(bodyE, bodyQ){
var option = {
    bodyA: bodyE,
    bodyB: bodyQ,
    stiffness: 0.03,
    length: 10
};
this.bodyE=bodyE;
this.bodyQ=bodyQ;
this.chain = Constraint.create(option);
World.add(world, this.chain)

};

display(){
line(this.bodyE.position.x, this.bodyE.position.y, this.bodyQ.position.x, this.bodyQ.position.y)
};
}