class pig extends baseClass{
    constructor(x,y){
        super(x,y,50,50)
        this.image = loadImage("spritesimg/enemy.png")
        this.vis = 255
    }

    display(){
        if(this.body.speed > 5){
            World.remove(myWorld,this.body)
            push()
            tint(255,this.vis)
            image(this.image, this.body.position.x, this.body.position.y, this.width, this.height)
            this.vis = this.vis - 5
            pop()
        }else{        
            super.display()
        }
    }

//51 to reach 0
// this.vis = 250,245,240,235................0
    cal_score(){
        if(this.vis < 255 && this.vis > 0){
            score = score + 1
        }
    }
}

