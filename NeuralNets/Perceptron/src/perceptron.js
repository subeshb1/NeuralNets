function sign(num) {
    return num >= 0? 1: -1;
}

class Perceptron {
    constructor() {
        this.weights = [1,2];
        this.lr = 0.1;
        for (let i = 0; i < this.weights.length; i++) {
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



    
}

class Points {

    constructor() {
        this.x = Math.floor(Math.random() * (600 -8)) +8;    
        this.y = Math.floor(Math.random() * (600 -8) ) + 8;    
     
        
        if( this.x > this.y)
            this.label = 1;
        else 
            this.label = -1;
        
    }


    draw() {
        push();
        
        this.label >= 0 ? strokeWeight(0) : strokeWeight(4);
        ellipse(this.x,this.y,16);
        pop();
    }

}
