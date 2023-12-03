

function Vehicle(brand, model, speed, fuelType){
    this.brand = brand
    this.model = model
    this.speed = speed
    this.fueltype = fuelType
}

Vehicle.prototype.accelerate = function(){
    this.speed+=10
    console.log("This vehicle speed is",this.speed)
}

Vehicle.prototype.brake = function(){
    this.speed-=5
    console.log("This vehicle speed is",this.speed)
}
Vehicle.prototype.refuelling = function(){
   console.log("Vehicle is getting refuel")
}
function Car(brand, model, speed, fuelType, noWheels){
    Vehicle.call(this,brand, model, speed, fuelType)
    // this.brand = brand
    // this.model = model
    // this.speed = speed
    // this.fueltype = fueltype
    this.noWheels = noWheels
}

Object.setPrototypeOf(Car.prototype,Vehicle.prototype)

function Airplane(brand, model, speed, fuelType, noEngines, hasLandingGear, noWheels){
    Vehicle.call(this,brand,model,speed,fuelType)
    this.noEngines = noEngines
    this.hasLandingGear = true
    this.noWheels = noWheels
}

Object.setPrototypeOf(Airplane.prototype,Vehicle.prototype);

Airplane.prototype.takeOff = function(){
    console.log(this.brand,"Takimg Off")
}

let car1 = new Car('maruti', 2022, 0, 'petrol', 4)
let air1 = new Airplane('Indigo', 2021, 0, 'gasoline', 2)

car1.accelerate()
car1.brake()
car1.refuelling()

console.log(car1)
air1.accelerate()
console.log(air1)
air1.takeOff()
console.log(air1)