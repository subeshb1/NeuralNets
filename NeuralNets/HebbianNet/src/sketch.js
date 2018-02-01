//Unsupervised Learning

let hebNet = new HebbianNet;

function setup() {
  createCanvas(200,300);
  //NAND GATE
  hebNet.feed( [1,1] ,1 , -1);
  hebNet.feed( [1,-1] ,1 , 1);
  hebNet.feed( [-1,1] ,1 , 1);
  hebNet.feed( [-1,-1] ,1 , 1);

  //CHECK
  hebNet.check([1,1]);
  hebNet.check([1,-1]);
  hebNet.check([-1,1]);
  hebNet.check([-1,-1]);
  console.log(hebNet);
  noLoop();
}

function draw() {
  // put drawing code here
  background(1,1,1);
}

