let index = 0;
let p = new Perceptron(3);
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
  background(255);
  let pt1 = new Points(-1, f(-1));
  let pt2 = new Points(1, f(1));
  line(pt1.getX(),pt1.getY(),pt2.getX(),pt2.getY());
  
  
  let g1 = new Points(-1, p.guessY(-1));
  let g2 = new Points(1, p.guessY(1));
  line(g1.getX(),g1.getY(),g2.getX(),g2.getY());



  let inputs = [points[index].x,points[index].y,points[index].bias];
    let target = points[index].label;
    p.train(inputs,target);
    index = (index +1) % points.length;

  points.forEach( point => point.draw());
  points.forEach(point => { 
    let inputs = [point.x,point.y,point.bias];
    let target = point.label;
    if(p.guess(inputs) == target) {
      fill(0,255,0)
    } else {
      fill(255,0,0);
    }
    
     ellipse(point.getX(),point.getY(),16,16);
  });
}

function mousePressed() {
  points.forEach(point => { 
    let inputs = [point.x,point.y,point.bias];
    let target = point.label;
    p.train(inputs,target);
  });
  console.log(p.weights);
  redraw();
}