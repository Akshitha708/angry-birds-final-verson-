class Ground{
    //constructor,  this.
    constructor(x,y,w,h){        
        var ground_options = {
            isStatic:true
          }
          this.ground = Bodies.rectangle(x,y,w,h, ground_options)
          World.add(myWorld,this.ground)
          this.width = w
          this.height = h
          this.image = loadImage("spritesimg/ground.png")
    }

    display(){
        push()        
        imageMode(CENTER)
        image(this.image, this.ground.position.x, this.ground.position.y, this.width, this.height)
        pop()
    }

}