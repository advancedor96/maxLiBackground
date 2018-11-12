/*
https://maxlivinci.com/

https://github.com/LIYINGZHEN/maxlivinci.com/blob/master/src/app/src/components/sketch.js?fbclid=IwAR3Y5Iezha5JsiRwZCJETYPsowupZK9Be3HSQ6X3pjqxeqDzr7i2Nrd1zm8
*/

let e = [];
let v = 100;
let t = 0;
let randomX = 0;
let randomY =0;
let myFrameRate = 3;
let auto = false;
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

  randomX = windowWidth /2 ;
  randomY = windowHeight / 2;
  for(let x = 0; x < windowWidth ; x+=50) {
    for(let y = 0; y < windowHeight ; y += 50) {
      const a = colors[ Math.floor(random(0, 5)) ]
      e.push( { x, y, dotColour: a })
    }
  }
  
}
document.querySelector('#auto').addEventListener('click', ()=>{
  auto = true;
})
document.querySelector('#mouse').addEventListener('click', ()=>{
  auto = false;
})

function draw() {
  frameRate(myFrameRate);
  clear();
  e.forEach(  ({x, y, dotColour}) => {
    fill(dotColour)
    ellipse(x, y, 4, 4);
    
  })
  let dots = null;
  if( auto ){
    myFrameRate = 3;
    t = random(0, TWO_PI);
    let vx = v * cos(t);
    let vy = v * sin(t);
    randomX = randomX + vx;
    randomY = randomY + vy;
    if( randomX <=0)randomX +=v;
    if( randomX >=windowWidth) randomX -=v;
    if( randomY  < 0) randomY +=v;
    if( randomY >=windowHeight) randomY -=v;

    dots = e.filter(({x, y}) => {
      return x >  randomX -100 &&
      randomX + 100 > x &&
        y > randomY - 100 &&
        randomY + 100 > y &&
        Math.sqrt(  (randomX - x) * (randomX - x) + (randomY - y) * (randomY - y)  ) < 80
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
      line(x, y, randomX, randomY);
      pop();
    })


  } else {
    myFrameRate = 30;
    dots = e.filter(({x, y}) => {
      return x >  mouseX -100 &&
        mouseX + 100 > x &&
        y > mouseY - 100 &&
        mouseY + 100 > y &&
        Math.sqrt(  (mouseX - x) * (mouseX - x) + (mouseY - y) * (mouseY - y)  ) < 80
    } )

    push();
    dots.forEach( ({x, y, dotColour})=>{
      // push();
      // fill(dotColour)
      // ellipse(x, y, 20, 20);
      // strokeWeight(1);
      stroke(dotColour)
      line(x, y, mouseX, mouseY);
      // pop();
    })
    pop();

    
  }



}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}