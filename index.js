/*
https://maxlivinci.com/

https://github.com/LIYINGZHEN/maxlivinci.com/blob/master/src/app/src/components/sketch.js?fbclid=IwAR3Y5Iezha5JsiRwZCJETYPsowupZK9Be3HSQ6X3pjqxeqDzr7i2Nrd1zm8
*/

let e = [];
const colors = [
  'rgba(109, 224, 242,1)',
  'rgba(69, 194, 100, 1)',
  'rgba(249,168,54,1)',
  'rgba(255,114,196,1)',
  'rgba(139,64,169,1)'
];


function setup() {
  createCanvas(windowWidth  , windowHeight);
  noStroke();


  for(let x = 0; x < windowWidth ; x+=50){
    for(let y = 0; y < windowHeight ; y += 50) {
      const a = colors[ Math.floor(random(0, 5)) ]
      e.push( { x, y, dotColour: a })
    }
  }
  
}

function draw() {
  // console.log(Math.floor(random(0, 5)))
  clear();
  e.forEach(  ({x, y, dotColour}) => {
    fill(dotColour)
    ellipse(x, y, 4, 4);
    
  })
  const dots = e.filter(({x, y}) => {
    return x >  mouseX -100 &&
      mouseX + 100 > x &&
      y > mouseY - 100 &&
      mouseY + 100 > y &&
      Math.sqrt(  (mouseX - x) * (mouseX - x) + (mouseY - y) * (mouseY - y)  ) < 80

  } )

  dots.forEach( ({x, y, dotColour})=>{
    push();
    fill(dotColour)
    // ellipse(x, y, 20, 20);
    strokeWeight(1);
    if(mouseIsPressed){
      strokeWeight(4);
    }
    stroke(dotColour)
    line(x, y, mouseX, mouseY);
    pop();
  })
  

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}