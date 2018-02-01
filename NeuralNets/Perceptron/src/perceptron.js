function sign(num) {
    return num >= 0? 1: -1;
}

function f(x) {
    return 0.3 *x + 0.2;
}
class Perceptron {
    constructor(length) {
        this.weights = [];
        this.lr = 0.01;
        for (let i = 0; i < length; i++) {
            this.weights[i]  = Math.floor(Math.random() *  2) ?  1 : -1;

        }
        console.log(this.weights);   
    }
    
    train(inputs,target) {
        let guess = this.guess(inputs);
        let error = target - guess;
        // console.log(error);
        
        //tuning all the weights
        for (let i = 0; i < this.weights.length; i++) {
            this.weights[i] += error * inputs[i]  * this.lr;
        }
        

    }
    guess(inputs) {
        let sum = 0;
        for( let i = 0; i < this.weights.length; i ++) {
            sum += inputs[i] * this.weights[i];
        }
        let output = sign(sum);
        return output;
    }

    guessY(x) {
        let w1 = this.weights[1] ;
        let w0 =  this.weights[0 ];
        let w2 = this.weights[2];
        return  -(w2/w1) - (w0/w1) * x;
    }



    
}

class Points {

    constructor(x,y) {
        this.x = x || (Math.random() * 2) -1 ;
        this.y = y || (Math.random() * 2) -1;
        this.bias = 1;
        let lineY = f(this.x);
        if(  this.y > lineY)
            this.label = 1;
        else 
            this.label = -1;
        
    }

    getY() {
        return map(this.y,-1,1,0,width);
    }
    getX() {
        return map(this.x,-1,1,height,0);
    }
    draw() {
        push();
        
        this.label >= 0 ? strokeWeight(1) : strokeWeight(6);

        let x = this.getX(); 
        let y = this.getY();
        ellipse(x,y,16);
        pop();
    }

}
