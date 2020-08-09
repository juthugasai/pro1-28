class Stone{


constructor(x,y){


    var options={
        isStatic:false,
        restitution:0,
            friction:1,
            density:1.2
}


        this.body = Bodies.rectangle(x, y,30,30,options)

        this.width =30;
        this.height=30;
        World.add(world, this.body)
        this.stone = loadImage("stone.png");


}




display(){



    push();
    translate(this.body.position.x, this.body.position.y);
    //rotate(angle);
    imageMode(CENTER);
    image(this.stone, 0, 0, this.width, this.height);
    //line(pointA.x, pointA.y, pointB.x, pointB.y);
    pop();











}

















}