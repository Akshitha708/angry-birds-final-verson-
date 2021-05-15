class slingShot{
    constructor(body,point){
        var  options = {
            bodyA: body,
            pointB: point,
            length: 10,
            stiffness: 0.02
          }
        this.slingShot = Constraint.create(options)
        World.add(myWorld, this.slingShot)
        this.image1 = loadImage("spritesimg/sling1.png")
        this.image2 = loadImage("spritesimg/sling2.png")
        this.image3 = loadImage("spritesimg/sling3.png")
    }
    display(){
        image(this.image1,200,170)
        image(this.image2,170,170)
        
        if(this.slingShot.bodyA !== null){
           
            var pos1 = this.slingShot.bodyA.position
            var pos2 =  this.slingShot.pointB
            image(this.image3, pos1.x-30,pos1.y-10,20,40)
            push()
            strokeWeight(10)
            stroke(48,22,8)
            //line(pos1.x, pos1.y, pos2.x, pos2.y)
            line(pos1.x+5, pos1.y, pos2.x+25, pos2.y+25)
            line(pos1.x, pos1.y, pos2.x-10, pos2.y+25)
            pop()
        }      

    }

    fly(){
        this.slingShot.bodyA = null
    }

    attach(body){
        this.slingShot.bodyA = body //bird body or any thing 
    }
}