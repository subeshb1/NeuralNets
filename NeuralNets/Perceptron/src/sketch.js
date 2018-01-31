
let p = new Perceptron();
let points = [];
function setup() {
  // put setup code here
  createCanvas(800,800);
  
  
  for(let i = 0; i < 100; i++) {
    points.push(new Points());
  }
  noLoop();
}

function draw() {
  // put drawing code here
  line(0,0,width,height);
  points.forEach( point => point.draw());
  points.forEach(point => { 
    let inputs = [point.x,point.y];
    let target = point.label;
    if(p.guess(inputs) == target) {
      fill(0,255,0)
    } else {
      fill(255,0,0);
    }
    
    ellipse(point.x,point.y,16,16);
  });
}

function mousePressed() {
  points.forEach(point => { 
    let inputs = [point.x,point.y];
    let target = point.label;
    p.train(inputs,target);
  });
  console.log(p.weights);
  redraw();
}