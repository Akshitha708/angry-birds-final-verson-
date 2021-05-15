class baseClass {
    constructor(x,y,w,h){
        var options= {
            isStatic : false,
            friction: 1,
            density: 1
        }
        this.body = Bodies.rectangle(x,y,w,h,options)
        World.add(myWorld,this.body)
        this.width = w
        this.height = h
        this.image = loadImage("spritesimg/base.png")
     }
    display(){
        
       push()
       imageMode(CENTER)
       translate(this.body.position.x, this.body.position.y)
       rotate(this.body.angle)
       image(this.image,0,0, this.width, this.height)
       pop()
   }  
   
   }

