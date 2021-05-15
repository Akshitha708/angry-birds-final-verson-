class log extends baseClass {
    constructor(x,y,w,angle){
       super(x,y,w,20)
       Matter.Body.setAngle(this.body, angle)
       this.image = loadImage("spritesimg/wood2.png")       
    }  
   
   
   }