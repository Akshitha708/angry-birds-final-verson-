class bird extends baseClass {
    constructor(x,y){
       super(x,y,60,60)
       this.image = loadImage("spritesimg/bird.png")
       
       Matter.Body.setDensity(this.body,2)
       this.smokeImage= loadImage("spritesimg/smoke.png")
       this.smokes=[]
    }

    display(){
        super.display()  
      
         if(this.body.position.x > 190 && gameState === "release" ){
            var pos = [this.body.position.x, this.body.position.y]
            this.smokes.push(pos)
         }
         for(var i = 0; i<this.smokes.length; i = i + 1){
            image(this.smokeImage,this.smokes[i][0], this.smokes[i][1])
        }
    }
}
    