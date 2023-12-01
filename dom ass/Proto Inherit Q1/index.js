// Using Object.create

let car = {
    wheel: 'four',
    steering: 'power',
    type: 'vehicle',
    unique: function () {
        console.log('this', this.type, 'has', this.wheel, 'wheels');
    },
};

console.log(car)

let verna = Object.create(car)
verna.luxury = 'suv'
console.log(verna)
verna.unique()
// Using Constructor function
function Cars(model,) {
    this.model = model
    this.wheels = 'four'
}

Cars.prototype.start = function(){
    console.log('This vehicle',this.model,'has started')
}

Cars.prototype.stop = function(){
    console.log('This vehicle',this.model,'has stopped')
}

let newCar = new Cars('verna')
console.log(newCar)
newCar.start()
newCar.stop()

