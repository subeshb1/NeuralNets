
class HebbianNet {

    constructor() {
        this.weights = [0,0];
        this.biasWeight = 0;
    }

    feed(inputs,bias,target) {
        this.weights.forEach ( (weight,index) => {
            this.weights[index] += inputs[index] * target;
        });
        this.biasWeight += target;
    }
    check(inputs) {
        let sum = inputs.reduce( ( total, current ,index) => total+current*this.weights[index] ,0);
        console.log(this.activationFunction( sum + this.biasWeight)); 
    }

    activationFunction(val) {
        return val >= 0? 1: -1;
        
    }

    

}