# p5.play-boilerplate
Boiler plate for p5.play

Inheritance- getting the properties from parent class to the child classes
parent class will have all the lines of code and child class can avoid writing them by just using a simple syntax.
PARENT CLASS
class baseClass{
    constructor(){

    }
    func1(){

    }
    func2(){

    }
}

CHILD CLASS
class childClass1 extends baseClass{
    constructor(){
        super();
    }
    func3(){
        super.func2()
    }
}


Using Images:
How do we load image?

we load image in the function preload or in the constructor using loadImage()

to  setbackground
background(variable where image is loaded)

to display the display the image
image(variable, x,y,w,h)

imageMode(CENTER) to make the x and y as center coordinates instead of top left ones.


2d arrays:
var a = [
  [1,2],
  [3,6],
  [7,9]
]
function setup() {
  createCanvas(400, 400);
  console.log(a[1][1]);
}

function draw() {
  background(220);  
}

array.push(value)  to add values at the end of array
array.length gives the length of the array
/
************************************************************************
1. adding levels to the game and make it more complex  as we score 
2. as the level increases the bird image can change
3.